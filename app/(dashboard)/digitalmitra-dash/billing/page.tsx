"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Receipt, Trash2, Edit3, X, Calendar, DollarSign, Building2, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface Invoice {
  id: string
  invoice_number: string
  client_id: string
  client_name?: string
  description: string
  amount: number
  status: 'Pending' | 'Paid' | 'Overdue'
  due_date: string
  created_at: string
}

interface Client {
  id: string
  business_name: string
}

export default function BillingPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null)
  const supabase = createClient()

  const [formData, setFormData] = useState({
    invoice_number: "",
    client_id: "",
    description: "",
    amount: 0,
    status: "Pending" as Invoice['status'],
    due_date: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setIsLoading(true)
    const [{ data: clientsData }, { data: invoicesData }] = await Promise.all([
      supabase.from('clients').select('id, business_name').order('business_name'),
      supabase.from('invoices').select('*, clients(business_name)').order('created_at', { ascending: false })
    ])

    if (clientsData) setClients(clientsData)
    if (invoicesData) {
      setInvoices(invoicesData.map((inv: any) => ({
        ...inv,
        client_name: inv.clients?.business_name || 'Direct Client'
      })))
    }
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const payload = { ...formData, amount: Number(formData.amount) }

    if (editingInvoice) {
      const { error } = await supabase.from('invoices').update(payload).eq('id', editingInvoice.id)
      if (error) toast.error("Failed to update invoice")
      else { toast.success("Invoice updated"); setIsModalOpen(false); fetchData() }
    } else {
      const { error } = await supabase.from('invoices').insert([payload])
      if (error) toast.error("Failed to create invoice")
      else { toast.success("Invoice created"); setIsModalOpen(false); fetchData() }
    }
    setIsLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this invoice?")) return
    const { error } = await supabase.from('invoices').delete().eq('id', id)
    if (error) toast.error("Failed to delete")
    else { toast.success("Invoice deleted"); fetchData() }
  }

  const openModal = (invoice?: Invoice) => {
    if (invoice) {
      setEditingInvoice(invoice)
      setFormData({
        invoice_number: invoice.invoice_number,
        client_id: invoice.client_id,
        description: invoice.description,
        amount: invoice.amount,
        status: invoice.status,
        due_date: invoice.due_date
      })
    } else {
      setEditingInvoice(null)
      const num = `INV-${Date.now().toString().slice(-6)}`
      setFormData({
        invoice_number: num,
        client_id: clients[0]?.id || "",
        description: "",
        amount: 0,
        status: "Pending",
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      })
    }
    setIsModalOpen(true)
  }

  const totals = {
    total: invoices.reduce((s, i) => s + i.amount, 0),
    paid: invoices.filter(i => i.status === 'Paid').reduce((s, i) => s + i.amount, 0),
    pending: invoices.filter(i => i.status === 'Pending').reduce((s, i) => s + i.amount, 0),
    overdue: invoices.filter(i => i.status === 'Overdue').reduce((s, i) => s + i.amount, 0),
  }

  const statusConfig = {
    Paid: { class: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20", icon: CheckCircle2 },
    Pending: { class: "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20", icon: Clock },
    Overdue: { class: "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20", icon: AlertCircle },
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Billing & Invoices</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Track payments and manage client invoices</p>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-indigo-500/20"
        >
          <Plus className="w-4 h-4" />
          Create Invoice
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Invoiced", value: totals.total, color: "text-slate-900 dark:text-white" },
          { label: "Paid", value: totals.paid, color: "text-emerald-600 dark:text-emerald-400" },
          { label: "Pending", value: totals.pending, color: "text-amber-600 dark:text-amber-400" },
          { label: "Overdue", value: totals.overdue, color: "text-rose-600 dark:text-rose-400" },
        ].map(stat => (
          <div key={stat.label} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
            <p className={cn("text-2xl font-black mt-1", stat.color)}>
              ₹{stat.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Invoice</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden md:table-cell">Client</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden lg:table-cell">Due Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {isLoading ? (
                [1, 2, 3].map(i => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-28"></div></td>
                    <td className="px-6 py-4 hidden md:table-cell"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-36"></div></td>
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-20"></div></td>
                    <td className="px-6 py-4"><div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-full w-16"></div></td>
                    <td className="px-6 py-4 hidden lg:table-cell"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-20"></div></td>
                    <td className="px-6 py-4"></td>
                  </tr>
                ))
              ) : invoices.map((invoice) => {
                const sc = statusConfig[invoice.status]
                const StatusIcon = sc.icon
                return (
                  <tr key={invoice.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg border border-indigo-100 dark:border-indigo-500/20">
                          <Receipt className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 dark:text-white">{invoice.invoice_number}</p>
                          <p className="text-xs text-slate-400 truncate max-w-[160px]">{invoice.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        {invoice.client_name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">₹{invoice.amount.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border", sc.class)}>
                        <StatusIcon className="w-3 h-3" />
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <div className="flex items-center text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(invoice.due_date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openModal(invoice)} className="p-2 text-slate-400 hover:text-amber-600 transition-colors border border-transparent hover:border-amber-100 dark:hover:border-amber-500/20 rounded-lg">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(invoice.id)} className="p-2 text-slate-400 hover:text-rose-600 transition-colors border border-transparent hover:border-rose-100 dark:hover:border-rose-500/20 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {!isLoading && invoices.length === 0 && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Receipt className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">No invoices yet</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Create your first invoice to track payments.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 className="text-xl font-bold dark:text-white">{editingInvoice ? "Edit Invoice" : "Create Invoice"}</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Invoice #</label>
                    <input
                      required type="text"
                      value={formData.invoice_number}
                      onChange={e => setFormData({ ...formData, invoice_number: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Client</label>
                    <select
                      required value={formData.client_id}
                      onChange={e => setFormData({ ...formData, client_id: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    >
                      <option value="">Select client</option>
                      {clients.map(c => <option key={c.id} value={c.id}>{c.business_name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Description</label>
                  <input
                    required type="text"
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Website development, SEO package..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Amount (₹)</label>
                    <div className="relative">
                      <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required type="number" min="0"
                        value={formData.amount}
                        onChange={e => setFormData({ ...formData, amount: Number(e.target.value) })}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Due Date</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required type="date"
                        value={formData.due_date}
                        onChange={e => setFormData({ ...formData, due_date: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Status:</label>
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    {(["Pending", "Paid", "Overdue"] as const).map(s => (
                      <button
                        key={s} type="button"
                        onClick={() => setFormData({ ...formData, status: s })}
                        className={cn("px-4 py-1 text-xs font-bold rounded-lg transition-all", formData.status === s ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600" : "text-slate-400")}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button" onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit" disabled={isLoading}
                    className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50"
                  >
                    {isLoading ? "Saving..." : editingInvoice ? "Update Invoice" : "Create Invoice"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

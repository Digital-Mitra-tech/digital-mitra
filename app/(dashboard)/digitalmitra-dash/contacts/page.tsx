"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MessageSquare, Calendar, Trash2, Eye, X, Tag, CheckCircle2, Clock, Search } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: 'new' | 'read' | 'replied'
  created_at: string
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "read" | "replied">("all")
  const supabase = createClient()

  useEffect(() => {
    fetchContacts()
  }, [])

  async function fetchContacts() {
    setIsLoading(true)
    const { data } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) setContacts(data)
    setIsLoading(false)
  }

  const filtered = contacts.filter(c => {
    const matchSearch = c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.service?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStatus = statusFilter === "all" || c.status === statusFilter
    return matchSearch && matchStatus
  })

  const handleView = async (contact: Contact) => {
    setSelectedContact(contact)
    if (contact.status === 'new') {
      await supabase.from('contacts').update({ status: 'read' }).eq('id', contact.id)
      setContacts(prev => prev.map(c => c.id === contact.id ? { ...c, status: 'read' } : c))
    }
  }

  const handleMarkReplied = async (id: string) => {
    await supabase.from('contacts').update({ status: 'replied' }).eq('id', id)
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status: 'replied' } : c))
    if (selectedContact?.id === id) setSelectedContact(prev => prev ? { ...prev, status: 'replied' } : null)
    toast.success("Marked as replied")
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return
    const { error } = await supabase.from('contacts').delete().eq('id', id)
    if (error) toast.error("Failed to delete")
    else {
      toast.success("Message deleted")
      setSelectedContact(null)
      fetchContacts()
    }
  }

  const statusConfig = {
    new: { label: "New", class: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400", icon: Clock },
    read: { label: "Read", class: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400", icon: Eye },
    replied: { label: "Replied", class: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400", icon: CheckCircle2 },
  }

  const newCount = contacts.filter(c => c.status === 'new').length

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            Contact Inquiries
            {newCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-600 text-white">{newCount} new</span>
            )}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Messages from your website contact form</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
            {(["all", "new", "read", "replied"] as const).map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold rounded-lg capitalize transition-all",
                  statusFilter === s ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600" : "text-slate-400"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Contact</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden md:table-cell">Service</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden lg:table-cell">Message</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden md:table-cell">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {isLoading ? (
                [1, 2, 3, 4].map(i => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-40"></div></td>
                    <td className="px-6 py-4 hidden md:table-cell"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-28"></div></td>
                    <td className="px-6 py-4 hidden lg:table-cell"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-48"></div></td>
                    <td className="px-6 py-4"><div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-full w-16"></div></td>
                    <td className="px-6 py-4 hidden md:table-cell"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-20"></div></td>
                    <td className="px-6 py-4"></td>
                  </tr>
                ))
              ) : filtered.map((contact) => {
                const sc = statusConfig[contact.status] || statusConfig.new
                const StatusIcon = sc.icon
                return (
                  <tr key={contact.id} className={cn(
                    "hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer",
                    contact.status === 'new' && "bg-indigo-50/30 dark:bg-indigo-500/5"
                  )} onClick={() => handleView(contact)}>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className={cn("text-sm font-bold text-slate-900 dark:text-white", contact.status === 'new' && "font-black")}>{contact.name}</span>
                        <a href={`mailto:${contact.email}`} className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline" onClick={e => e.stopPropagation()}>{contact.email}</a>
                        {contact.phone && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">{contact.phone}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      {contact.service && (
                        <span className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
                          <Tag className="w-3 h-3 mr-1 text-slate-400" />
                          {contact.service}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <p className="text-sm text-slate-500 dark:text-slate-400 truncate max-w-xs">{contact.message}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border", sc.class,
                        contact.status === 'new' ? "border-indigo-200 dark:border-indigo-500/30" :
                        contact.status === 'read' ? "border-amber-200 dark:border-amber-500/30" :
                        "border-emerald-200 dark:border-emerald-500/30"
                      )}>
                        <StatusIcon className="w-3 h-3" />
                        {sc.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="flex items-center text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(contact.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right" onClick={e => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleView(contact)}
                          className="p-2 text-slate-400 hover:text-indigo-600 transition-colors border border-transparent hover:border-indigo-100 dark:hover:border-indigo-500/20 rounded-lg"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="p-2 text-slate-400 hover:text-rose-600 transition-colors border border-transparent hover:border-rose-100 dark:hover:border-rose-500/20 rounded-lg"
                        >
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

        {!isLoading && filtered.length === 0 && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">No messages yet</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Contact form submissions will appear here.</p>
          </div>
        )}
      </div>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedContact && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedContact(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold dark:text-white">{selectedContact.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{new Date(selectedContact.created_at).toLocaleString()}</p>
                </div>
                <button onClick={() => setSelectedContact(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p>
                    <a href={`mailto:${selectedContact.email}`} className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      {selectedContact.email}
                    </a>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
                    <a href={`tel:${selectedContact.phone}`} className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      {selectedContact.phone || "—"}
                    </a>
                  </div>
                </div>

                {selectedContact.service && (
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Interested In</p>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                      <Tag className="w-3.5 h-3.5" />
                      {selectedContact.service}
                    </span>
                  </div>
                )}

                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</p>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedContact.message}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: Your enquiry about ${selectedContact.service || 'our services'}&body=Hi ${selectedContact.name},%0D%0A%0D%0AThank you for reaching out to Digital Mitra!%0D%0A%0D%0A`}
                  className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-center shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Reply via Email
                </a>
                {selectedContact.status !== 'replied' && (
                  <button
                    onClick={() => handleMarkReplied(selectedContact.id)}
                    className="px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Mark Replied
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Briefcase, UserCheck, MessageSquare, ArrowUpRight } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { createClient } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface RecentLead {
  id: string
  client_name: string
  service_requested: string
  status: string
  created_at: string
}

interface MonthlyData {
  name: string
  leads: number
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

export default function DashboardPage() {
  const [stats, setStats] = useState({ leads: 0, projects: 0, clients: 0, contacts: 0 })
  const [recentLeads, setRecentLeads] = useState<RecentLead[]>([])
  const [monthlyLeads, setMonthlyLeads] = useState<MonthlyData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchDashboardData()
  }, [])

  async function fetchDashboardData() {
    setIsLoading(true)

    const [leadsRes, projectsRes, clientsRes, contactsRes, recentLeadsRes] = await Promise.all([
      supabase.from('leads').select('id, created_at', { count: 'exact' }),
      supabase.from('projects').select('id', { count: 'exact' }).neq('status', 'Completed'),
      supabase.from('clients').select('id', { count: 'exact' }).eq('status', 'Active'),
      supabase.from('contacts').select('id', { count: 'exact' }),
      supabase.from('leads').select('id, client_name, service_requested, status, created_at').order('created_at', { ascending: false }).limit(5),
    ])

    setStats({
      leads: leadsRes.count ?? 0,
      projects: projectsRes.count ?? 0,
      clients: clientsRes.count ?? 0,
      contacts: contactsRes.count ?? 0,
    })

    if (recentLeadsRes.data) setRecentLeads(recentLeadsRes.data)

    // Build monthly leads chart from last 6 months
    if (leadsRes.data) {
      const now = new Date()
      const last6: MonthlyData[] = Array.from({ length: 6 }, (_, i) => {
        const d = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1)
        return { name: MONTHS[d.getMonth()], leads: 0 }
      })
      leadsRes.data.forEach((lead: { created_at: string }) => {
        const d = new Date(lead.created_at)
        const idx = last6.findIndex(m => m.name === MONTHS[d.getMonth()])
        if (idx !== -1) last6[idx].leads++
      })
      setMonthlyLeads(last6)
    }

    setIsLoading(false)
  }

  const statCards = [
    { name: 'Total Leads', value: stats.leads, icon: Users, color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400', href: '/digitalmitra-dash/leads' },
    { name: 'Active Projects', value: stats.projects, icon: Briefcase, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400', href: '/digitalmitra-dash/projects' },
    { name: 'Active Clients', value: stats.clients, icon: UserCheck, color: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400', href: '/digitalmitra-dash/clients' },
    { name: 'Contact Messages', value: stats.contacts, icon: MessageSquare, color: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400', href: '/digitalmitra-dash/leads' },
  ]

  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <motion.div key={stat.name} variants={item}>
            <Link href={stat.href} className="block bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("p-2 rounded-xl", stat.color.split(' ').slice(0, 2).join(' '))}>
                  <stat.icon className={cn("w-6 h-6", stat.color.split(' ').slice(2).join(' '))} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
              </div>
              <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.name}</h3>
              <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                {isLoading ? <span className="inline-block w-12 h-8 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" /> : stat.value}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Leads — Last 6 Months</h3>
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyLeads}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} allowDecimals={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }} itemStyle={{ color: '#fff' }} />
                <Area type="monotone" dataKey="leads" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Leads by Month</h3>
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyLeads}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} allowDecimals={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }} />
                <Bar dataKey="leads" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Recent Leads Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Leads</h3>
          <Link href="/digitalmitra-dash/leads" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Client</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {isLoading ? (
                [1, 2, 3].map(i => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-32" /></td>
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-24" /></td>
                    <td className="px-6 py-4"><div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-full w-16" /></td>
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-20" /></td>
                  </tr>
                ))
              ) : recentLeads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-slate-400 text-sm font-medium">No leads yet.</td>
                </tr>
              ) : recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400">
                        {lead.client_name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                      </div>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{lead.client_name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{lead.service_requested}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium",
                      lead.status === 'New' ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" :
                      lead.status === 'Contacted' ? "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" :
                      lead.status === 'Proposal' ? "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400" :
                      lead.status === 'Converted' ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" :
                      "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    )}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                    {new Date(lead.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

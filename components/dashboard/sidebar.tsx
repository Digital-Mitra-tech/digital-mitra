"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  UserSquare2,
  Receipt,
  Settings,
  LogOut,
  FileText,
  Star,
  MessageSquare,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const navigation = [
  { name: "Overview", href: "/digitalmitra-dash", icon: LayoutDashboard },
  { name: "Leads", href: "/digitalmitra-dash/leads", icon: Users },
  { name: "Contacts", href: "/digitalmitra-dash/contacts", icon: MessageSquare },
  { name: "Projects", href: "/digitalmitra-dash/projects", icon: Briefcase },
  { name: "Clients", href: "/digitalmitra-dash/clients", icon: UserSquare2 },
  { name: "Blogs", href: "/digitalmitra-dash/blogs", icon: FileText },
  { name: "Reviews", href: "/digitalmitra-dash/reviews", icon: Star },
  { name: "Billing", href: "/digitalmitra-dash/billing", icon: Receipt },
  { name: "Settings", href: "/digitalmitra-dash/settings", icon: Settings },
]

function NavItems({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex-1 px-4 space-y-1">
      {navigation.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/digitalmitra-dash" && pathname.startsWith(item.href))
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={cn(
              "group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200",
              isActive
                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors",
              isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
            )} />
            {item.name}
            {isActive && (
              <motion.div
                layoutId="active-nav"
                className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

export function DashboardSidebar() {
  const router = useRouter()
  const supabase = createClient()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  const Logo = () => (
    <Link href="/digitalmitra-dash" className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
        <span className="text-white font-bold text-xl">D</span>
      </div>
      <span className="font-bold text-xl tracking-tight dark:text-white">Digital Mitra</span>
    </Link>
  )

  const LogoutBtn = ({ onClose }: { onClose?: () => void }) => (
    <div className="p-4 border-t border-slate-200 dark:border-slate-800">
      <button
        onClick={() => { onClose?.(); handleLogout() }}
        className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 rounded-xl transition-all"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="w-64 hidden md:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 h-screen">
        <div className="p-6">
          <Logo />
        </div>
        <NavItems />
        <LogoutBtn />
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4">
        <Logo />
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-white dark:bg-slate-900 flex flex-col shadow-2xl"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <NavItems onClose={() => setMobileOpen(false)} />
              <LogoutBtn onClose={() => setMobileOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

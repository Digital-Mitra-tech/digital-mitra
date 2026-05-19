"use client"

import { useEffect, useState } from "react"
import { Bell, User } from "lucide-react"
import { usePathname } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

const pageTitles: Record<string, string> = {
  "digitalmitra-dash": "Overview",
  leads: "Leads",
  contacts: "Contact Inquiries",
  projects: "Projects",
  clients: "Clients",
  blogs: "Blogs",
  reviews: "Reviews",
  billing: "Billing",
  settings: "Settings",
}

export function DashboardHeader() {
  const pathname = usePathname()
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const supabase = createClient()

  const segments = pathname.split('/').filter(Boolean)
  const lastSegment = segments[segments.length - 1]
  const pageTitle = pageTitles[lastSegment] || lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data.user?.email ?? null)
    })
  }, [])

  const initials = userEmail
    ? userEmail.slice(0, 2).toUpperCase()
    : null

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-slate-900 dark:text-white hidden md:block">
        {pageTitle}
      </h1>

      <div className="flex items-center gap-4 ml-auto">
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all relative">
          <Bell className="w-5 h-5" />
        </button>

        <div
          title={userEmail ?? ""}
          className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center cursor-pointer"
        >
          {initials
            ? <span className="text-white text-xs font-bold">{initials}</span>
            : <User className="w-4 h-4 text-white" />
          }
        </div>
      </div>
    </header>
  )
}

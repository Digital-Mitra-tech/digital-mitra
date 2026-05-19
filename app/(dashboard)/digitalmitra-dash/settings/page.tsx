"use client"

import { useEffect, useState } from "react"
import { Building2, Mail, Phone, Globe, MapPin, Save, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"

interface Settings {
  agency_name: string
  email: string
  phone: string
  website: string
  address: string
  tagline: string
  instagram: string
  facebook: string
  twitter: string
  linkedin: string
  youtube: string
}

const defaults: Settings = {
  agency_name: "Digital Mitra",
  email: "hello@digitalmitra.co",
  phone: "+91-7907935902",
  website: "https://digitalmitra.co",
  address: "Kerala, India",
  tagline: "Your digital growth partner",
  instagram: "",
  facebook: "",
  twitter: "",
  linkedin: "",
  youtube: ""
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>(defaults)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    loadSettings()
  }, [])

  async function loadSettings() {
    setIsLoading(true)
    const { data } = await supabase
      .from('settings')
      .select('key, value')

    if (data && data.length > 0) {
      const loaded = { ...defaults }
      data.forEach((row: { key: string; value: string }) => {
        if (row.key in loaded) {
          (loaded as any)[row.key] = row.value
        }
      })
      setSettings(loaded)
    }
    setIsLoading(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    const rows = Object.entries(settings).map(([key, value]) => ({ key, value }))

    const { error } = await supabase
      .from('settings')
      .upsert(rows, { onConflict: 'key' })

    if (error) toast.error("Failed to save settings")
    else toast.success("Settings saved successfully")
    setIsSaving(false)
  }

  const field = (
    label: string,
    key: keyof Settings,
    icon: React.ReactNode,
    type = "text",
    placeholder = ""
  ) => (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>
        <input
          type={type}
          value={settings[key]}
          onChange={e => setSettings({ ...settings, [key]: e.target.value })}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm text-slate-900 dark:text-white"
          placeholder={placeholder}
        />
      </div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-48 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" />
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 animate-pulse h-96" />
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Manage your agency profile and configuration</p>
      </div>

      {/* Agency Info */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white">Agency Information</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Used in invoices, emails, and site metadata</p>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {field("Agency Name", "agency_name", <Building2 className="w-4 h-4" />, "text", "Digital Mitra")}
          {field("Tagline", "tagline", <span className="text-xs font-bold">TL</span>, "text", "Your digital growth partner")}
          {field("Email Address", "email", <Mail className="w-4 h-4" />, "email", "hello@digitalmitra.co")}
          {field("Phone Number", "phone", <Phone className="w-4 h-4" />, "tel", "+91-7907935902")}
          {field("Website", "website", <Globe className="w-4 h-4" />, "url", "https://digitalmitra.co")}
          {field("Address", "address", <MapPin className="w-4 h-4" />, "text", "Kerala, India")}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white">Social Media Links</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Your official social profiles</p>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {field("Instagram", "instagram", <Instagram className="w-4 h-4" />, "url", "https://instagram.com/...")}
          {field("Facebook", "facebook", <Facebook className="w-4 h-4" />, "url", "https://facebook.com/...")}
          {field("Twitter / X", "twitter", <Twitter className="w-4 h-4" />, "url", "https://twitter.com/...")}
          {field("LinkedIn", "linkedin", <Linkedin className="w-4 h-4" />, "url", "https://linkedin.com/company/...")}
          {field("YouTube", "youtube", <Youtube className="w-4 h-4" />, "url", "https://youtube.com/...")}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {isSaving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </div>
  )
}

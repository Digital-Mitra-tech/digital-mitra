"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Send, CheckCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === "loading") return

    setStatus("loading")
    const supabase = createClient()
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email }])

    if (error) {
      if (error.code === "23505") {
        // unique constraint — already subscribed, treat as success
        setStatus("success")
      } else {
        setStatus("error")
      }
    } else {
      setStatus("success")
      setEmail("")
    }
  }

  return (
    <div className="relative group max-w-2xl mx-auto">
      <div className="absolute inset-0 bg-black rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />

      <div className="relative bg-[#FFE66D] border-[3px] border-black rounded-3xl p-8 md:p-12 flex flex-col items-center text-center transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
        <div className="inline-flex items-center px-3 py-1 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
          Level Up
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-black mb-4 uppercase tracking-tighter leading-none">
          NEVER MISS AN <span className="text-[#5C82A3]">UPDATE.</span>
        </h3>

        <p className="text-black font-bold text-xs uppercase tracking-tight mb-8 max-w-md">
          Join 500+ Indian businesses getting our exclusive digital growth playbooks every week.
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl border-[3px] border-black">
            <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
            <span className="font-black text-sm uppercase tracking-widest">You&apos;re in! Watch your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 group/input">
              <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-focus-within/input:translate-x-2 group-focus-within/input:translate-y-2 transition-transform opacity-20" />
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR@EMAIL.COM"
                className="relative bg-white border-[3px] border-black text-black h-14 rounded-xl px-6 font-black placeholder:text-gray-400 focus:bg-white transition-all outline-none uppercase text-xs"
              />
            </div>
            <div className="relative group/btn">
              <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform" />
              <button
                type="submit"
                disabled={status === "loading"}
                className="relative h-14 px-8 bg-black text-white hover:bg-black rounded-xl font-black uppercase tracking-widest text-xs border-[3px] border-black transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
              >
                <Send className="w-4 h-4" />
                {status === "loading" ? "Joining..." : "Join Now"}
              </button>
            </div>
            {status === "error" && (
              <p className="w-full text-center text-[10px] font-black uppercase tracking-widest text-red-600 mt-1">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

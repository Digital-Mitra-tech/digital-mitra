"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("dm_cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("dm_cookie_consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("dm_cookie_consent", "declined")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9998]"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5" />
            <div className="relative bg-white border-[3px] border-black rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🍪</span>
                  <h3 className="font-black text-sm uppercase tracking-widest">We use cookies</h3>
                </div>
                <button
                  onClick={decline}
                  className="shrink-0 w-7 h-7 rounded-lg border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
                  aria-label="Dismiss"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              <p className="text-xs text-gray-500 font-bold leading-relaxed mb-5">
                We use cookies to improve your experience and analyse site traffic. By clicking Accept, you agree to our{" "}
                <Link href="/cookie-policy" className="underline text-[#5C82A3] hover:text-black transition-colors">
                  Cookie Policy
                </Link>
                .
              </p>

              <div className="flex gap-3">
                <button
                  onClick={accept}
                  className="flex-1 py-2.5 bg-black text-white rounded-xl border-2 border-black text-[10px] font-black uppercase tracking-widest hover:bg-[#5C82A3] transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={decline}
                  className="flex-1 py-2.5 bg-white text-black rounded-xl border-2 border-black text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

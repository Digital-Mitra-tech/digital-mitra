"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { motion } from "framer-motion"

export function NewsletterSignup() {
  return (
    <div className="relative group max-w-2xl mx-auto">
      <div className="absolute inset-0 bg-black rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
      
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

        <div className="w-full flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 group/input">
            <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-focus-within/input:translate-x-2 group-focus-within/input:translate-y-2 transition-transform opacity-20"></div>
            <Input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="relative bg-white border-[3px] border-black text-black h-14 rounded-xl px-6 font-black placeholder:text-gray-400 focus:bg-white transition-all outline-none uppercase text-xs"
            />
          </div>
          <div className="relative group/btn">
            <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform"></div>
            <Button className="relative h-14 px-8 bg-black text-white hover:bg-black rounded-xl font-black uppercase tracking-widest text-xs border-[3px] border-black transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5">
              <Send className="w-4 h-4 mr-2" />
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { Mail, FolderOpen, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useContact } from "@/context/contact-context"
import Link from "next/link"

export function HeroSection() {
  const { openContactPopup } = useContact()

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#F5F5F5]">
      {/* Background Decor */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5C82A3]/10 rounded-full blur-[100px] pointer-events-none"
      ></motion.div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-3 py-1.5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-black"
              >
                Your Trusted Tech Partner
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                Digital <span className="text-[#5C82A3] relative inline-block">
                  Mitra
                  <svg className="absolute -bottom-1 left-0 w-full h-3 text-black opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span> for <br />
                <span className="bg-black text-white px-3 py-1 inline-block mt-2">Indian businesses</span>
              </h1>

              <p className="text-gray-700 text-lg md:text-xl font-bold leading-tight max-w-xl">
                We empower entrepreneurs with cutting-edge tech, professional branding, and intelligent automation to scale in the digital economy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="relative flex-1 sm:flex-none">
                <button 
                  onClick={openContactPopup}
                  className="block w-full sm:w-auto relative group appearance-none border-none bg-transparent p-0 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                  <div className="relative bg-black text-white border-[3px] border-black py-5 px-10 text-lg font-black rounded-xl transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5" />
                    Start Journey
                  </div>
                </button>
              </div>

              <div className="relative flex-1 sm:flex-none">
                <Link href="/services" className="block w-full sm:w-auto relative group">
                  <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                  <div className="relative bg-white text-black border-[3px] border-black py-5 px-10 text-lg font-black rounded-xl transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 flex items-center justify-center gap-3">
                    <FolderOpen className="w-5 h-5" />
                    Services
                  </div>
                </Link>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-5 pt-4 group"
            >
              <div className="flex -space-x-4">
                {[
                  { color: "bg-[#FF6B6B]", delay: 0.5 },
                  { color: "bg-[#FFE66D]", delay: 0.6 },
                  { color: "bg-[#5C82A3]", delay: 0.7 },
                  { color: "bg-black", text: "500+", delay: 0.8 }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay, duration: 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ y: -8, scale: 1.1, zIndex: 50, rotate: i % 2 === 0 ? 5 : -5 }}
                    className={`w-12 h-12 rounded-full border-[3px] border-black ${item.color} flex items-center justify-center text-xs font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${i === 3 ? "text-white" : "text-black"}`}
                  >
                    {item.text || (i === 0 ? "JD" : i === 1 ? "AR" : "SK")}
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-black uppercase tracking-widest text-black/80">
                  Trusted by <span className="text-black underline decoration-2 decoration-[#FFE66D] underline-offset-2">500+ Indian Entrepreneurs</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFE66D] border-[4px] border-black rounded-3xl -rotate-12 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF6B6B] border-[4px] border-black rounded-full z-0"></div>
            
            <div className="relative z-10 bg-white border-[6px] border-black rounded-[3rem] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[4/3] flex items-center justify-center">
                <iframe 
                  src="https://lottie.host/embed/3f866ecc-c514-44e0-85c4-638ccd468dec/rs1CTbrEfU.lottie"
                  className="w-full h-full scale-150"
                ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


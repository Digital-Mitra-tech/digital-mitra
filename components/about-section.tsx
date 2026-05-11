"use client"

import { User, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useContact } from "@/context/contact-context"
import { motion } from "framer-motion"

export function AboutSection() {
  const { openContactPopup } = useContact()

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Layered Offsets */}
              <div className="absolute inset-0 bg-[#5C82A3] rounded-full translate-x-3 translate-y-3 border-[4px] border-black"></div>
              <div className="absolute inset-0 bg-[#FF6B6B] border-[4px] border-black rounded-full shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <Image 
                  src="/images/about-me.svg" 
                  alt="About me illustration" 
                  fill 
                  className="object-cover p-8"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <div className="inline-flex items-center px-3 py-1.5 bg-[#5C82A3] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-black">
                Who We Are
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
                WHY CHOOSE <br />
                <span className="text-[#5C82A3]">DIGITAL MITRA?</span>
              </h2>
              
              <p className="text-gray-700 text-lg md:text-xl font-bold leading-tight">
                We bridge the gap between traditional Indian business and the digital future. Transparent, fast, and human-first.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "10+ Years Expertise", desc: "Proven track record for Indian startups and SMEs.", color: "#5C82A3" },
                { title: "Long-term Partnership", desc: "We stay with you. Consistent updates, zero abandonment.", color: "#000000" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-[#F5F5F5] border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-black shrink-0 text-white" style={{ backgroundColor: item.color }}>
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg uppercase tracking-tight">{item.title}</h3>
                    <p className="text-gray-600 font-bold text-sm leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative group w-fit">
              <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <button 
                onClick={openContactPopup}
                className="relative bg-black text-white hover:bg-black h-auto py-5 px-10 text-lg font-black rounded-xl border-[3px] border-black transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 flex items-center justify-center appearance-none cursor-pointer"
              >
                <User className="w-5 h-5 mr-3" />
                LEARN MORE ABOUT US
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


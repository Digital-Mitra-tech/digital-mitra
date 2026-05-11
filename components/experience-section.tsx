"use client"

import { FileText, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useContact } from "@/context/contact-context"
import { motion } from "framer-motion"

export function ExperienceSection() {
  const { openContactPopup } = useContact()
  const experiences = [
    {
      period: "2023 - Present",
      title: "500+ Businesses",
      description: "Scaling digital operations across India.",
      color: "#5C82A3"
    },
    {
      period: "2021 - 2023",
      title: "Building Excellence",
      description: "Establishing core tech & branding teams.",
      color: "#FFE66D"
    },
    {
      period: "2020 - 2021",
      title: "Rapid Growth",
      description: "Refining our approach for Indian startups.",
      color: "#FF6B6B"
    },
    {
      period: "2018 - 2020",
      title: "Founding Vision",
      description: "Democratizing tech for Indian entrepreneurs.",
      color: "#4ECDC4"
    },
  ]

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5C82A3]/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center px-3 py-1.5 bg-[#5C82A3] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-[#5C82A3]">
              Our Journey
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
              CHARTING THE <br />
              <span className="text-[#5C82A3]">DIGITAL FUTURE.</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl font-bold leading-tight mb-8">
              From a vision to empower Bharat, to serving over 500 businesses. We build the infrastructure that drives success.
            </p>

            <div className="relative group w-fit">
              <div className="absolute inset-0 bg-white/10 rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <button 
                onClick={openContactPopup}
                className="relative bg-white text-black hover:bg-white h-auto py-5 px-10 text-lg font-black rounded-xl border-[3px] border-white transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 flex items-center justify-center gap-3 appearance-none cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                Download our story
              </button>
            </div>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#5C82A3] rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform opacity-20"></div>
                
                <div className="relative bg-white border-[3px] border-black rounded-2xl p-6 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-black/5">
                    <span className="text-xs font-black uppercase tracking-widest text-[#5C82A3]">{exp.period}</span>
                    <div className="w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center" style={{ backgroundColor: exp.color }}>
                      <Check className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-1 uppercase tracking-tight">{exp.title}</h3>
                  <p className="text-gray-600 font-bold text-sm leading-tight">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


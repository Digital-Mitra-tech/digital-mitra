"use client"

import { motion } from "framer-motion"

export function LogoMarquee() {
  const items = [
    { logo: "/logos/application.svg", alt: "application" },
    { logo: "/logos/business.svg", alt: "business" },
    { logo: "/logos/company.svg", alt: "company" },
    { logo: "/logos/startup.svg", alt: "startup" },
    { logo: "/logos/venture.svg", alt: "venture" },
    { logo: "/logos/agency.svg", alt: "agency" },
  ]

  return (
    <div className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center gap-4">
          <div className="h-px bg-black flex-1 opacity-10"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Trusted by innovators</span>
          <div className="h-px bg-black flex-1 opacity-10"></div>
        </div>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-24 items-center">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group">
              <img 
                src={item.logo || "/placeholder.svg"} 
                alt={item.alt} 
                className="h-8 md:h-10 w-auto transition-transform group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


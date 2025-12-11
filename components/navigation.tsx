
"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 max-w-4xl mx-auto shadow-lg/5">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
          <div className="w-15 h-15 rounded-full flex items-center justify-center flex-shrink-0">
            <Image src="logos/logo.svg" alt="logo" width={24} height={24} />  
          </div>
          <span className="font-bold text-lg hidden sm:block">Digital Mitra</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("packages")}
            className="text-sm font-semibold text-gray-600 hover:text-[#5C82A3] transition-colors"
          >
            Packages
          </button>
          <button
            onClick={() => scrollToSection("support")}
            className="text-sm font-semibold text-gray-600 hover:text-[#5C82A3] transition-colors"
          >
            Support
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-semibold text-gray-600 hover:text-[#5C82A3] transition-colors"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-semibold text-gray-600 hover:text-[#5C82A3] transition-colors"
          >
            FAQ
          </button>
        </div>

        <Button
          className="bg-[#0B0B0B] text-white hover:bg-black/80 rounded-full px-6 h-10 text-sm font-medium transition-all hover:scale-105"
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact Us
        </Button>
      </nav>
    </div>
  )
}


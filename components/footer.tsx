"use client"

import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, Send, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t-[3px] border-black py-20 relative overflow-hidden">
      {/* Background Decor - Subtle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5C82A3]/5 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-24 mb-20">
            {/* Brand Column */}
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-3 group w-fit">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 shrink-0">
                  <Image 
                    src="/logos/logo.svg" 
                    alt="Digital Mitra Logo" 
                    width={32} 
                    height={32} 
                    className="brightness-0 invert"
                  />
                </div>
                <span className="text-2xl font-black uppercase tracking-tighter text-black">Digital Mitra</span>
              </Link>
              
              <p className="text-gray-500 font-bold text-sm uppercase tracking-tight leading-tight max-w-sm">
                Scalable technology solutions built for Bharat's most ambitious businesses. We bridge the gap between tradition and the digital future.
              </p>

              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-white border-2 border-black rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all hover:-translate-y-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-xs uppercase tracking-widest mb-8 text-[#5C82A3]">Platform</h4>
              <ul className="space-y-4 text-black font-black text-[11px] uppercase tracking-tight">
                <li><Link href="/" className="hover:text-[#5C82A3] transition-colors flex items-center gap-1 group">Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><Link href="/services" className="hover:text-[#5C82A3] transition-colors flex items-center gap-1 group">Services <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><Link href="/packages" className="hover:text-[#5C82A3] transition-colors flex items-center gap-1 group">Packages <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><Link href="/about" className="hover:text-[#5C82A3] transition-colors flex items-center gap-1 group">Our Story <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              </ul>
            </div>

            {/* Empty column for spacing or other links */}
            <div></div>

            {/* Contact */}
            <div>
              <h4 className="font-black text-xs uppercase tracking-widest mb-8 text-[#5C82A3]">Connect</h4>
              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email us</span>
                  <a href="mailto:hello@digitalmitra.com" className="text-black font-black text-[11px] uppercase hover:text-[#5C82A3] transition-colors">hello@digitalmitra.com</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call us</span>
                  <a href="tel:+918289835902" className="text-black font-black text-[11px] uppercase hover:text-[#5C82A3] transition-colors">+91 82898 35902</a>
                </div>
                <button 
                  onClick={scrollToTop}
                  className="w-full py-4 border-2 border-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group"
                >
                  Back to Top
                  <ArrowUpRight className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t-2 border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                All systems operational
              </p>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              © 2024 DIGITAL MITRA. BHARAT&apos;S DIGITAL ENGINE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}



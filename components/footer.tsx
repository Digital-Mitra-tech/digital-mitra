"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/digitalmitra",
    svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/digitalmitra",
    svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/digitalmitra",
    svg: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/digitalmitra",
    svg: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
]

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
                {socialLinks.map(({ href, label, svg }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border-2 border-black rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all hover:-translate-y-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d={svg} />
                    </svg>
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
                <li><Link href="/portfolio" className="hover:text-[#5C82A3] transition-colors flex items-center gap-1 group">Portfolio <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><Link href="/blog" className="hover:text-[#5C82A3] transition-colors flex items-center gap-1 group">Blog <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
                <li><Link href="/about" className="hover:text-[#5C82A3] transition-colors flex items-center gap-1 group">Our Story <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              </ul>
            </div>

            {/* Empty column */}
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
              © 2026 DIGITAL MITRA. BHARAT&apos;S DIGITAL ENGINE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}



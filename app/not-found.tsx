"use client"

import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <div className="flex-1 flex items-center justify-center pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">

            {/* Big 404 */}
            <div className="relative inline-block mb-8">
              <div className="text-[180px] md:text-[240px] font-black leading-none tracking-tighter text-black select-none">
                404
              </div>
              <div className="absolute inset-0 text-[180px] md:text-[240px] font-black leading-none tracking-tighter text-[#5C82A3] select-none translate-x-2 translate-y-2 -z-10">
                404
              </div>
            </div>

            {/* Label */}
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest mb-8 border-2 border-black">
              Page Not Found
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
              THIS PAGE TOOK A WRONG TURN.
            </h1>

            <p className="text-gray-500 font-bold text-base max-w-md mx-auto mb-12 leading-snug">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl border-[3px] border-black font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(92,130,163,1)] hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl border-[3px] border-black font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Search className="w-4 h-4" />
                View Services
              </Link>
            </div>

            {/* Quick links */}
            <div className="mt-16 pt-10 border-t-2 border-black/10">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
                Or jump to
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Packages", href: "/packages" },
                  { label: "Blog", href: "/blog" },
                  { label: "About", href: "/about" },
                  { label: "Support", href: "/support" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="px-5 py-2 bg-white border-2 border-black rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

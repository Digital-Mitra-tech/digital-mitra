"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Loader2 } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { useContact } from "@/context/contact-context"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { PortfolioProject } from "@/lib/portfolio-data"

interface Props {
  project: PortfolioProject
}

const serviceColors: Record<string, string> = {
  "Business Website": "#5C82A3",
  "Brand Identity": "#FF6B6B",
  "SEO": "#FFE66D",
  "Digital Marketing": "#FF9F43",
  "Business Automation": "#4ECDC4",
  "NFC Business Cards": "#A29BFE",
}

export function PortfolioDetailClient({ project }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { openContactPopup } = useContact()

  const thumbnailUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=1200`

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 pb-24">

          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-7xl mx-auto mb-12"
          >
            <Breadcrumbs items={[
              { label: "Portfolio", href: "/portfolio" },
              { label: project.title },
            ]} />
          </motion.div>

          <div className="max-w-7xl mx-auto">

            {/* Hero */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 border-2 border-black">
                  {project.category}
                </div>

                <h1 className="text-4xl md:text-6xl font-black mb-4 leading-[0.9] tracking-tighter">
                  {project.title.split(" ").map((word, i) => (
                    <span key={i} className={i % 2 !== 0 ? "text-[#5C82A3]" : ""}>{word} </span>
                  ))}
                </h1>

                <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">
                  {project.location}
                </p>

                <p className="text-lg text-gray-700 font-bold mb-10 leading-snug max-w-lg">
                  {project.about}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest border-2 border-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                      style={{ backgroundColor: serviceColors[service] || "#5C82A3" }}
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl border-[3px] border-black font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(92,130,163,1)] hover:translate-y-1 hover:shadow-none transition-all"
                >
                  Visit Live Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Screenshot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
                <div className="relative bg-white border-[3px] border-black rounded-[2rem] overflow-hidden aspect-[4/3]">
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                      <Loader2 className="w-8 h-8 animate-spin text-slate-300" />
                    </div>
                  )}
                  <img
                    src={thumbnailUrl}
                    alt={`${project.title} website screenshot`}
                    onLoad={() => setImageLoaded(true)}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">
                WHAT WE <span className="bg-[#5C82A3] text-white px-3">DID</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.services.map((service, idx) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-black rounded-2xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                    <div className="relative bg-white border-[3px] border-black rounded-2xl p-6">
                      <div
                        className="w-3 h-3 rounded-full mb-4 border-2 border-black"
                        style={{ backgroundColor: serviceColors[service] || "#5C82A3" }}
                      />
                      <h3 className="text-lg font-black tracking-tight">{service}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-black rounded-[3rem] translate-x-2 translate-y-2" />
              <div className="relative bg-[#5C82A3] rounded-[3rem] p-10 md:p-16 text-center text-white border-[5px] border-black group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
                <h2 className="text-3xl md:text-5xl font-black mb-4 leading-none tracking-tighter">
                  WANT RESULTS <br />LIKE THESE?
                </h2>
                <p className="text-base md:text-lg text-white font-bold mb-10 max-w-md mx-auto opacity-90">
                  Let us build something great for your business too.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openContactPopup}
                    className="bg-white text-black hover:bg-[#F5F5F5] py-4 px-10 text-lg font-black rounded-[1.2rem] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
                  >
                    START YOUR PROJECT
                  </button>
                  <Link
                    href="/portfolio"
                    className="bg-transparent text-white hover:bg-white/10 py-4 px-10 text-lg font-black rounded-[1.2rem] border-[3px] border-white transition-all inline-flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    View All Work
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

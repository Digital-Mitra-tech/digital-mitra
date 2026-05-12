"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Loader2 } from "lucide-react"
import Link from "next/link"
import { portfolioProjects } from "@/lib/portfolio-data"

const categories = [
  "All",
  "Healthcare",
  "Wellness",
  "Travel",
  "Hospitality",
  "Events",
  "Education",
  "Finance",
  "eCommerce",
  "Real Estate",
  "Export",
  "Creative",
  "Industrial",
  "Tech",
  "Construction",
]

export function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const filteredProjects = selectedCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter(p =>
        p.category === selectedCategory ||
        (selectedCategory === "Creative" && p.category === "Conglomerate")
      )

  const getThumbnailUrl = (url: string) =>
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      {/* Hero Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-[#FFE66D] text-black text-[10px] font-black uppercase tracking-widest rounded-full border-2 border-black"
        >
          Our Masterpieces
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase"
        >
          REAL PROJECTS. <br />
          <span className="text-[#5C82A3]">REAL IMPACT.</span>
        </motion.h1>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat, idx) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest border-2 border-black transition-all ${
              selectedCategory === cat
                ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                : "bg-white text-black hover:bg-slate-50"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform" />

              <div className="relative h-full flex flex-col bg-white border-[3px] border-black rounded-[2rem] overflow-hidden group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 border-b-[3px] border-black">
                  {!loadedImages.has(project.slug) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                      <Loader2 className="w-6 h-6 animate-spin text-slate-300" />
                    </div>
                  )}
                  <img
                    src={getThumbnailUrl(project.url)}
                    alt={project.title}
                    loading="lazy"
                    onLoad={() => setLoadedImages(prev => new Set(prev).add(project.slug))}
                    className="relative z-10 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-[#5C82A3] text-white text-[10px] font-black uppercase tracking-widest rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-black mb-2 uppercase tracking-tight line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-sm text-slate-600 font-bold leading-tight mb-4 flex-1 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.services.slice(0, 2).map((s) => (
                      <span key={s} className="px-2 py-1 bg-slate-100 border border-black/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-600">
                        {s}
                      </span>
                    ))}
                    {project.services.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 border border-black/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-400">
                        +{project.services.length - 2}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="mt-auto inline-flex items-center justify-between w-full p-4 bg-slate-50 hover:bg-black hover:text-white rounded-xl border-2 border-black transition-all group/btn"
                  >
                    <span className="text-xs font-black uppercase tracking-widest">View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

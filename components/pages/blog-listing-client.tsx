"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Tag, ArrowRight, Search, Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  featured_image: string
  category: string
  published_at: string
}

export function BlogListingClient({ initialPosts }: { initialPosts: Post[] }) {
  useSmoothScroll()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = initialPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const categories = Array.from(new Set(initialPosts.map(p => p.category)))

  return (
    <main className="min-h-screen bg-[#F5F5F5] selection:bg-[#5C82A3] selection:text-white pt-32">
      {/* Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[9999] bg-noise"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border-2 border-black"
          >
            <Sparkles className="w-3 h-3 text-[#FFE66D]" />
            Knowledge Base
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9] uppercase"
          >
            Insights for the <br />
            <span className="text-[#5C82A3] relative">
              Digital Engine
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-black opacity-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-bold text-lg uppercase tracking-tight max-w-2xl mx-auto"
          >
            Deep dives into technology, strategy, and innovation built for Bharat.
          </motion.p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5 transition-transform group-focus-within:translate-x-2 group-focus-within:translate-y-2"></div>
            <div className="relative bg-white border-[3px] border-black rounded-2xl p-4 flex items-center gap-4">
              <Search className="w-6 h-6 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by title or category..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-lg font-bold placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-32">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Shadow Offset */}
                <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                
                <div className="relative h-full bg-white border-[4px] border-black rounded-[2rem] overflow-hidden flex flex-col transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  {/* Featured Image */}
                  <div className="relative aspect-video overflow-hidden border-b-[4px] border-black">
                    <Image 
                      src={post.featured_image || "/images/placeholder.svg"} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#FFE66D] border-2 border-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        {post.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tighter leading-[0.95] line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-sm text-gray-500 font-bold leading-tight uppercase tracking-tight mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto">
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] group/link">
                        Read Story
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <h2 className="text-2xl font-black uppercase">No insights found.</h2>
              <p className="text-gray-500 font-bold uppercase tracking-tight mt-2">Try a different search query.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}

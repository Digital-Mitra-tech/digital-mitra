"use client"

import { useEffect, useState } from "react"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ArrowRight, Loader2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { createClient } from "@/lib/supabase/client"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  featured_image: string
  category: string
  published_at: string
}

export function ArticlesSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(3)

      if (data && data.length > 0) {
        setPosts(data)
      } else {
        // Fallback mock data
        setPosts([
          { 
            id: '1', 
            title: 'The Future of Digital Infrastructure in Bharat', 
            slug: 'future-digital-infrastructure',
            excerpt: 'How decentralized technology and local branding are reshaping the way Indian small businesses compete globally.',
            featured_image: '/images/article-blog-header.png',
            category: 'Tech Trends',
            published_at: new Date().toISOString()
          },
          { 
            id: '2', 
            title: '10 SEO strategies to boost visibility in 2024', 
            slug: 'seo-strategies-2024',
            excerpt: 'Mastering the latest algorithm updates and local SEO techniques.',
            featured_image: '/images/article-font-sizes.png',
            category: 'SEO Tips',
            published_at: new Date().toISOString()
          },
          { 
            id: '3', 
            title: 'How a traditional retail business scaled online', 
            slug: 'retail-scale-online',
            excerpt: 'A case study on digital transformation for local vendors.',
            featured_image: '/images/article-exercises.png',
            category: 'Case Study',
            published_at: new Date().toISOString()
          }
        ])
      }
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return (
      <div className="py-24 bg-[#F5F5F5] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-black" />
      </div>
    )
  }

  const mainPost = posts[0]
  const sidePosts = posts.slice(1)

  return (
    <section id="articles" className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1.5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-black"
          >
            Knowledge Base
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9]"
          >
            LATEST FROM <br />
            <span className="text-[#5C82A3]">OUR BLOG.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-24">
          {/* Main Article */}
          {mainPost && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-black rounded-[2.5rem] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
              <div className="relative bg-white border-[3px] border-black rounded-[2.5rem] overflow-hidden flex flex-col h-full transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                <div className="relative aspect-video bg-gray-100 border-b-[3px] border-black overflow-hidden">
                  <Image
                    src={mainPost.featured_image || "/images/article-blog-header.png"}
                    alt={mainPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFE66D] border-2 border-black text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {mainPost.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight">
                    {mainPost.title}
                  </h3>
                  <p className="text-gray-600 font-bold text-sm mb-8 leading-tight">
                    {mainPost.excerpt}
                  </p>
                  <div className="mt-auto">
                    <a href={`/blog/${mainPost.slug}`} className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#5C82A3] hover:gap-3 transition-all">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Sidebar Articles */}
          <div className="flex flex-col gap-8">
            {sidePosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex-1"
              >
                <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform"></div>
                <div className="relative bg-white border-[3px] border-black rounded-2xl overflow-hidden flex h-full transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <div className="w-1/3 relative bg-gray-100 border-r-[3px] border-black overflow-hidden">
                    <Image
                      src={post.featured_image || "/images/article-font-sizes.png"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-2/3 p-6 flex flex-col justify-center">
                    <div className="bg-[#4ECDC4] border-2 border-black text-black px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-md w-fit mb-3">
                      {post.category}
                    </div>
                    <h4 className="text-lg font-black mb-3 leading-tight uppercase tracking-tight">
                      {post.title}
                    </h4>
                    <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 font-black text-[10px] uppercase tracking-widest text-[#5C82A3] hover:gap-2 transition-all">
                      Details <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <NewsletterSignup />
        </motion.div>
      </div>
    </section>
  )
}

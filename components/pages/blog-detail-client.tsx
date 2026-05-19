"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowLeft, Share2, User, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

interface Post {
  id: string
  title: string
  content: string
  featured_image: string
  category: string
  published_at: string
  author?: {
    full_name: string
    avatar_url: string
  }
}

interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  featured_image: string
  category: string
  published_at: string
}

export function BlogDetailClient({ post, relatedPosts = [] }: { post: Post; relatedPosts?: RelatedPost[] }) {

  return (
    <main className="min-h-screen bg-[#F5F5F5] selection:bg-[#5C82A3] selection:text-white pt-32">
      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] group"
          >
            <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center group-hover:bg-[#FFE66D] transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto pb-32">
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#FFE66D] border-2 border-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {post.category}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <Calendar className="w-3 h-3" />
                {new Date(post.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-8 border-y-4 border-black">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5C82A3] border-2 border-black rounded-full overflow-hidden relative">
                  {post.author?.avatar_url ? (
                    <Image src={post.author.avatar_url} alt={post.author.full_name} fill className="object-cover" />
                  ) : (
                    <User className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Written By</div>
                  <div className="text-lg font-black uppercase tracking-tight">{post.author?.full_name || "Digital Mitra Team"}</div>
                </div>
              </div>
              
              <button className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video mb-20 group">
            <div className="absolute inset-0 bg-black rounded-[3rem] translate-x-3 translate-y-3"></div>
            <div className="relative h-full border-[6px] border-black rounded-[3rem] overflow-hidden">
              <Image 
                src={post.featured_image || "/images/placeholder.svg"} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg md:prose-xl prose-slate max-w-none 
                prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:leading-[0.9]
                prose-p:text-gray-700 prose-p:font-bold prose-p:leading-relaxed prose-p:text-lg md:prose-p:text-xl
                prose-li:font-bold prose-li:text-gray-700
                prose-strong:font-black prose-strong:text-black prose-strong:bg-[#FFE66D]/30
                prose-blockquote:border-l-[6px] prose-blockquote:border-black prose-blockquote:bg-white prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:font-black prose-blockquote:uppercase prose-blockquote:tracking-tight"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Footer Card */}
            <div className="mt-32 relative">
              <div className="absolute inset-0 bg-black rounded-[2.5rem] translate-x-2 translate-y-2"></div>
              <div className="relative bg-[#F8F8F8] border-[4px] border-black p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10">
                <div className="w-24 h-24 bg-[#5C82A3] border-4 border-black rounded-full overflow-hidden shrink-0 relative">
                  {post.author?.avatar_url ? (
                    <Image src={post.author.avatar_url} alt={post.author.full_name} fill className="object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-black uppercase mb-3">About the author</h3>
                  <p className="text-gray-600 font-bold leading-tight uppercase text-sm mb-6">
                    {post.author?.full_name || "Digital Mitra Team"} is dedicated to empowering Indian entrepreneurs through cutting-edge technology and strategic insights.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-[#FFE66D] transition-colors cursor-pointer">
                      <User className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white border-t-[3px] border-black py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">
                  MORE FROM <span className="text-[#5C82A3]">{post.category}</span>
                </h2>
                <Link
                  href="/blog"
                  className="hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-[#5C82A3] transition-colors"
                >
                  View All Posts <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((related, idx) => (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform" />
                    <Link
                      href={`/blog/${related.slug}`}
                      className="relative flex flex-col bg-[#F5F5F5] border-[3px] border-black rounded-[2rem] overflow-hidden group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform h-full"
                    >
                      <div className="relative aspect-video overflow-hidden border-b-[3px] border-black">
                        <Image
                          src={related.featured_image || "/images/placeholder.svg"}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-4 left-4 px-3 py-1 bg-[#FFE66D] text-black text-[10px] font-black uppercase tracking-widest rounded-full border-2 border-black">
                          {related.category}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                          {new Date(related.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                        <h3 className="text-lg font-black uppercase tracking-tight leading-tight mb-3 line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-bold leading-snug line-clamp-2 flex-1">
                          {related.excerpt}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#5C82A3]">
                          Read More <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

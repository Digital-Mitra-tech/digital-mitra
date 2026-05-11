import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { BlogDetailClient } from "@/components/pages/blog-detail-client"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase
    .from('posts')
    .select('title, excerpt')
    .eq('slug', slug)
    .single()

  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()
  
  // Fetch post first
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!post) {
    notFound()
  }

  // Fetch author profile separately to avoid join issues with auth schema
  let author = null
  if (post.author_id) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name, avatar_url')
      .eq('id', post.author_id)
      .single()
    author = profile
  }

  return <BlogDetailClient post={{ ...post, author }} />
}

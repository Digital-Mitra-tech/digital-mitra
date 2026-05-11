import { createClient } from "@/lib/supabase/server"
import { BlogListingClient } from "@/components/pages/blog-listing-client"

export const metadata = {
  title: "Blog",
  description: "Insights, guides, and trends in the digital world for Indian entrepreneurs.",
}

export default async function BlogPage() {
  const supabase = await createClient()
  
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  return <BlogListingClient initialPosts={posts || []} />
}

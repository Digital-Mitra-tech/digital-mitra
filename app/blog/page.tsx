import { createClient } from "@/lib/supabase/server"
import { BlogListingClient } from "@/components/pages/blog-listing-client"

export const metadata = {
  title: "Blog | Digital Marketing, SEO & Web Development Tips for Kerala Businesses",
  description: "Expert articles, guides, and tips on digital marketing, SEO, web development, AI automation, and business growth — specifically for entrepreneurs and businesses in Kerala and India.",
  keywords: [
    "digital marketing blog Kerala",
    "SEO tips Kerala",
    "web development blog India",
    "business growth tips Kerala",
    "entrepreneur blog Kerala",
    "AI automation business India",
    "digital business tips Kerala",
  ],
  openGraph: {
    title: "Blog | Digital Marketing & SEO Tips for Kerala Businesses",
    description: "Expert articles on digital marketing, SEO, web development, and business growth for Kerala entrepreneurs.",
    url: "https://digitalmitra.co/blog",
  },
  alternates: { canonical: "https://digitalmitra.co/blog" },
}

export default async function BlogPage() {
  const supabase = await createClient()
  
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) console.error('[blog/page] Supabase error:', error)

  return <BlogListingClient initialPosts={posts || []} />
}

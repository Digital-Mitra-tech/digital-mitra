"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import { 
  ArrowLeft,
  Save,
  Eye,
  Type,
  Link as LinkIcon,
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  X
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { BlogEditor } from "@/components/dashboard/blog-editor"
import Link from "next/link"

interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  category: string
  status: 'published' | 'draft'
  published_at: string | null
  featured_image: string | null
}

export default function BlogEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const isNew = id === 'new'
  const router = useRouter()
  const supabase = createClient()
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(!isNew)

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    category: "Tech Trends",
    status: "draft" as 'published' | 'draft',
    featured_image: ""
  })

  useEffect(() => {
    if (!isNew) {
      fetchPost()
    }
  }, [id])

  async function fetchPost() {
    setIsFetching(true)
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    if (data) {
      setFormData({
        title: data.title,
        slug: data.slug,
        content: data.content || "",
        excerpt: data.excerpt || "",
        category: data.category || "Tech Trends",
        status: data.status || "draft",
        featured_image: data.featured_image || ""
      })
    } else {
      toast.error("Post not found")
      router.push('/digitalmitra-dash/blogs')
    }
    setIsFetching(false)
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  const handleSubmit = async () => {
    if (!formData.title) {
      toast.error("Please enter a title")
      return
    }

    setIsLoading(true)
    const submissionData = {
      ...formData,
      published_at: formData.status === 'published' ? new Date().toISOString() : null
    }

    if (!isNew) {
      const { error } = await supabase
        .from('posts')
        .update(submissionData)
        .eq('id', id)

      if (error) toast.error("Failed to update post")
      else {
        toast.success("Post updated successfully")
        router.push('/digitalmitra-dash/blogs')
      }
    } else {
      const { error } = await supabase
        .from('posts')
        .insert([submissionData])

      if (error) toast.error("Failed to create post")
      else {
        toast.success("Post created successfully")
        router.push('/digitalmitra-dash/blogs')
      }
    }
    setIsLoading(false)
  }

  if (isFetching) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs animate-pulse">Loading Article Data...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <Link 
            href="/digitalmitra-dash/blogs"
            className="p-2 hover:bg-white dark:hover:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isNew ? "Create New Article" : "Edit Article"}
            </h1>
            <p className="text-slate-500 text-xs font-medium mt-1">
              {isNew ? "Draft a new piece for your audience" : `Editing: ${formData.title}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push('/digitalmitra-dash/blogs')}
            className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/20 transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {isLoading ? <Clock className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isLoading ? "Saving..." : isNew ? "Publish Now" : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500">Post Title</label>
            <input 
              required
              type="text" 
              value={formData.title}
              onChange={e => handleTitleChange(e.target.value)}
              className="w-full px-4 py-3 text-xl font-bold rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Article Headline..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500">Article Content</label>
            <BlogEditor 
              value={formData.content}
              onChange={(content) => setFormData({...formData, content})}
              placeholder="Start writing something legendary..."
            />
          </div>
        </div>

        {/* Sidebar Settings Area */}
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-sm font-bold border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">Post Settings</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">Category</label>
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 outline-none text-sm"
              >
                <option value="Tech Trends">Tech Trends</option>
                <option value="Business Strategy">Business Strategy</option>
                <option value="AI & Automation">AI & Automation</option>
                <option value="Digital Infrastructure">Digital Infrastructure</option>
                <option value="Case Study">Case Study</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">Status</label>
              <select 
                value={formData.status}
                onChange={e => setFormData({...formData, status: e.target.value as 'published' | 'draft'})}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 outline-none text-sm"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">URL Slug</label>
              <div className="relative">
                <LinkIcon className="w-3 h-3 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  required
                  type="text" 
                  value={formData.slug}
                  onChange={e => setFormData({...formData, slug: e.target.value})}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 outline-none font-mono text-[11px]"
                  placeholder="url-friendly-slug"
                />
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">Metadata</h3>
            
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">Featured Image URL</label>
              <div className="relative">
                <ImageIcon className="w-3 h-3 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  value={formData.featured_image}
                  onChange={e => setFormData({...formData, featured_image: e.target.value})}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 outline-none text-xs"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">Short Excerpt</label>
              <textarea 
                value={formData.excerpt}
                onChange={e => setFormData({...formData, excerpt: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 outline-none resize-none text-xs"
                placeholder="Brief summary..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

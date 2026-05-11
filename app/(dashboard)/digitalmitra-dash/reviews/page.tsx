"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Plus, 
  Search, 
  Star, 
  Edit3, 
  Trash2,
  Calendar,
  User,
  Quote,
  X,
  Check
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface Review {
  id: string
  client_name: string
  client_role: string
  content: string
  rating: number
  avatar_url: string | null
  status: 'published' | 'draft'
  created_at: string
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingReview, setEditingReview] = useState<Review | null>(null)
  const supabase = createClient()

  const [formData, setFormData] = useState({
    client_name: "",
    client_role: "",
    content: "",
    rating: 5,
    status: "published" as "published" | "draft"
  })

  useEffect(() => {
    fetchReviews()
  }, [])

  async function fetchReviews() {
    setIsLoading(true)
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setReviews(data)
    }
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (editingReview) {
      const { error } = await supabase
        .from('reviews')
        .update(formData)
        .eq('id', editingReview.id)

      if (error) toast.error("Failed to update review")
      else {
        toast.success("Review updated successfully")
        setIsModalOpen(false)
        fetchReviews()
      }
    } else {
      const { error } = await supabase
        .from('reviews')
        .insert([formData])

      if (error) toast.error("Failed to create review")
      else {
        toast.success("Review created successfully")
        setIsModalOpen(false)
        fetchReviews()
      }
    }
    setIsLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this review?")) return
    
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id)

    if (error) toast.error("Failed to delete review")
    else {
      toast.success("Review deleted")
      fetchReviews()
    }
  }

  const openModal = (review?: Review) => {
    if (review) {
      setEditingReview(review)
      setFormData({
        client_name: review.client_name,
        client_role: review.client_role || "",
        content: review.content,
        rating: review.rating,
        status: review.status
      })
    } else {
      setEditingReview(null)
      setFormData({
        client_name: "",
        client_role: "",
        content: "",
        rating: 5,
        status: "published"
      })
    }
    setIsModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Reviews Management</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Manage client testimonials and feedback</p>
        </div>
        <button 
          onClick={() => openModal()}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-indigo-500/20"
        >
          <Plus className="w-4 h-4" />
          Add Review
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 animate-pulse h-48"></div>
          ))
        ) : reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white line-clamp-1">{review.client_name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{review.client_role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-3 h-3", i < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 dark:text-slate-700")} />
                ))}
              </div>
            </div>

            <div className="relative">
              <Quote className="w-8 h-8 text-indigo-500/10 absolute -top-2 -left-2" />
              <p className="text-sm text-slate-600 dark:text-slate-300 italic line-clamp-3 relative z-10 pl-4">
                "{review.content}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <span className={cn(
                "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                review.status === 'published' ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              )}>
                {review.status}
              </span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => openModal(review)} className="p-2 text-slate-400 hover:text-amber-600 transition-colors">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(review.id)} className="p-2 text-slate-400 hover:text-rose-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 className="text-xl font-bold dark:text-white">{editingReview ? "Edit Review" : "Add New Review"}</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Client Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.client_name}
                      onChange={e => setFormData({...formData, client_name: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Role / Company</label>
                    <input 
                      type="text" 
                      value={formData.client_role}
                      onChange={e => setFormData({...formData, client_role: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="CEO, TechCorp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button 
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className={cn(
                          "p-2 rounded-lg border transition-all",
                          formData.rating >= star 
                            ? "bg-amber-50 border-amber-200 text-amber-500" 
                            : "bg-slate-50 border-slate-200 text-slate-300"
                        )}
                      >
                        <Star className={cn("w-5 h-5", formData.rating >= star && "fill-amber-500")} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Review Content</label>
                  <textarea 
                    required
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Write the testimonial here..."
                  />
                </div>

                <div className="flex items-center gap-4 py-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Status:</label>
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, status: 'published'})}
                      className={cn("px-4 py-1 text-xs font-bold rounded-lg transition-all", formData.status === 'published' ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600" : "text-slate-400")}
                    >
                      Published
                    </button>
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, status: 'draft'})}
                      className={cn("px-4 py-1 text-xs font-bold rounded-lg transition-all", formData.status === 'draft' ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600" : "text-slate-400")}
                    >
                      Draft
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50"
                  >
                    {isLoading ? "Saving..." : editingReview ? "Update Review" : "Create Review"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

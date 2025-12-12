"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Mail, User, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactPopupProps {
    isOpen: boolean
    onClose: () => void
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))

        console.log("Form submitted:", formData)
        setIsSubmitting(false)

        // Reset form and close
        setFormData({ name: "", email: "", message: "" })
        onClose()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
                    >
                        <div className="bg-white rounded-2xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
                                <p className="text-gray-600 font-medium mb-4">
                                    Have a question? We'd love to hear from you.
                                </p>

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <div className="w-8 h-8 rounded-lg bg-[#5C82A3]/10 flex items-center justify-center text-[#5C82A3]">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <a href="mailto:hello@digitalmitra.com" className="hover:text-[#5C82A3] transition-colors">
                                            hello@digitalmitra.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <div className="w-8 h-8 rounded-lg bg-[#5C82A3]/10 flex items-center justify-center text-[#5C82A3]">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <a href="tel:+919000057810" className="hover:text-[#5C82A3] transition-colors">
                                            +91-9000057810
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700">
                                        Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-black rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#5C82A3] transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-black rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#5C82A3] transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full pl-11 pr-4 py-3 border-2 border-black rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#5C82A3] transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-black text-white hover:bg-gray-800 py-6 text-lg font-bold border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

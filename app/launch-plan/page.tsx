"use client"

import { Outfit } from "next/font/google"
import { ArrowRight, CheckCircle2, Shield, Clock, Zap, Target, Layout, Smartphone, MessageCircle, MapPin, Search } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Footer } from "@/components/footer"
import { useContact } from "@/context/contact-context"

const outfit = Outfit({ subsets: ["latin"] })

const includedFeatures = [
    {
        icon: Layout,
        title: "High-Converting Website",
        detail: "Mobile-first, lightning fast, with integrated Click-to-WhatsApp and basic SEO foundation.",
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        icon: MapPin,
        title: "Google Profile Domination",
        detail: "Complete setup, verification, and local SEO optimization so you rank on Google Maps.",
        color: "text-green-500",
        bg: "bg-green-50"
    },
    {
        icon: MessageCircle,
        title: "Automated WhatsApp Machine",
        detail: "Professional setup with auto-replies, away messages, and a digital product catalogue.",
        color: "text-emerald-500",
        bg: "bg-emerald-50"
    },
    {
        icon: Smartphone,
        title: "Optimized Social Media",
        detail: "Fully branded Facebook & Instagram profile setup with optimized bios and contact buttons.",
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
    {
        icon: Target,
        title: "Brand Identity & Logo",
        detail: "A custom logo (with 2 revision rounds) and cohesive branding across all platforms.",
        color: "text-rose-500",
        bg: "bg-rose-50"
    },
    {
        icon: Search,
        title: "Launch-Ready Content Pack",
        detail: "5 professionally designed social media posts with engaging captions ready to publish.",
        color: "text-orange-500",
        bg: "bg-orange-50"
    }
]

export default function LaunchPlanPage() {
    const { openContactPopup } = useContact()
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    return (
        <main ref={containerRef} className={`min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500 selection:text-white overflow-hidden ${outfit.className}`}>
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen" />
                <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen" />
                <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-600/10 blur-[120px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="relative pt-32 pb-24 z-10">
                {/* Hero Section */}
                <section className="mb-32">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-blue-400 mb-8 backdrop-blur-md"
                            >
                                <Zap className="w-4 h-4" />
                                The 7-Day Launch Plan
                            </motion.div>
                            
                            <motion.h1 
                                style={{ y: titleY, opacity }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1.1]"
                            >
                                Take Your Business <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">Online in 7 Days.</span>
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                            >
                                Stop losing customers to your competitors. A complete, "done-for-you" digital presence package designed to build instant trust and drive real enquiries.
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                            >
                                <button 
                                    onClick={openContactPopup}
                                    className="relative group w-full sm:w-auto"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                                    <div className="relative bg-white text-black py-4 px-10 text-lg font-bold rounded-2xl flex items-center justify-center transition-transform hover:scale-[1.02]">
                                        Book Your Launch Slot
                                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>
                                
                                <div className="flex flex-col items-start gap-2 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-emerald-400" />
                                        <span>No Hidden Fees</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-blue-400" />
                                        <span>7 Days Delivery Guarantee</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* What's Included Grid */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Arsenal.</span></h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to look like an industry leader from day one, packaged into a single, affordable solution.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {includedFeatures.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all duration-300"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative z-10">
                                            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                                                <Icon className={`w-7 h-7 ${feature.color}`} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{feature.detail}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Pricing Block */}
                <section className="py-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[2.5rem] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-10 md:p-16 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <Zap className="w-32 h-32 text-blue-500" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing.</h3>
                                    <p className="text-gray-400 text-lg">A fraction of the cost of hiring separate designers, developers, and social media managers.</p>
                                    <ul className="space-y-4">
                                        {["Premium Domain included (.com/.in)", "No ongoing maintenance fees", "Fully delivered in 7 days"].map((text, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center min-w-[300px]">
                                    <div className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">One-Time Investment</div>
                                    <div className="text-5xl font-black mb-6 text-white">₹12,999</div>
                                    <button 
                                        onClick={openContactPopup}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                                    >
                                        Claim Your Spot
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}

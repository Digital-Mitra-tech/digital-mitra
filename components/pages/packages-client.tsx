"use client"

import { packageDetails } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Check, Zap, Clock, Shield } from "lucide-react"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export function PackagesClient() {
    return (
        <>
            <main className="min-h-screen bg-[#F5F5F5] pt-32 relative overflow-hidden selection:bg-[#5C82A3] selection:text-white">
                {/* Noise & Texture Overlay */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[9999] bg-noise"></div>
                
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5C82A3]/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFE66D]/5 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border-2 border-black"
                    >
                        <Zap className="w-3 h-3 text-[#FFE66D]" />
                        Infrastructure Excellence
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.85] uppercase"
                    >
                        CHOOSE YOUR <br />
                        <span className="text-[#5C82A3] relative">
                            DIGITAL ENGINE
                            <svg className="absolute -bottom-2 left-0 w-full h-4 text-black opacity-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" />
                            </svg>
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 font-bold text-base md:text-lg uppercase tracking-tight max-w-2xl mx-auto leading-tight"
                    >
                        Scalable technology solutions built specifically for Bharat&apos;s most ambitious entrepreneurs.
                    </motion.p>
                </div>

                {/* Vertical List / Rows */}
                <div className="max-w-6xl mx-auto space-y-16 mb-24">
                    {packageDetails.map((pkg, index) => (
                        <motion.div 
                            key={pkg.slug}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Shadow Offset */}
                            <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                            
                            <div className="relative bg-white border-[4px] border-black rounded-[2rem] overflow-hidden transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                                {/* Type Badge */}
                                <div className="absolute top-0 left-0 bg-black text-white text-[9px] font-black px-6 py-2.5 border-r-[4px] border-b-[4px] border-black z-20 rounded-br-2xl uppercase tracking-[0.2em]">
                                    {pkg.isRecurring ? "Ongoing Partnership" : `${pkg.timeline.totalDays} Days Delivery`}
                                </div>

                                <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr_1.2fr_0.8fr] divide-y-[4px] lg:divide-y-0 lg:divide-x-[4px] divide-black">
                                    {/* Column 1: Identity */}
                                    <div className="pt-16 pb-8 px-8 flex flex-col justify-center bg-white">
                                        <h2 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tighter leading-none">{pkg.title}</h2>
                                        <p className="text-[10px] md:text-[11px] text-gray-500 font-bold leading-tight uppercase tracking-wide">
                                            {pkg.shortDescription}
                                        </p>
                                    </div>

                                    {/* Column 2: Investment */}
                                    <div className="p-8 flex flex-col justify-center bg-[#F8F8F8]">
                                        <div className="text-3xl font-black text-[#5C82A3] tracking-tighter mb-2">{pkg.price}</div>
                                        {pkg.mrp && <div className="text-[10px] text-gray-400 line-through font-bold mb-2">{pkg.mrp}</div>}
                                        <div className="text-[9px] font-black text-black uppercase tracking-widest bg-[#FFE66D] border-2 border-black px-3 py-1 rounded-full w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            {pkg.isRecurring ? "Subscription" : "One-time"}
                                        </div>
                                    </div>

                                    {/* Column 3: High-level Features */}
                                    <div className="p-8 flex flex-col justify-center bg-white">
                                        <div className="space-y-2">
                                            {pkg.whatsIncluded.slice(0, 3).map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-3 group/item">
                                                    <div className="w-4 h-4 rounded-md bg-black text-white flex items-center justify-center shrink-0 border-2 border-black transition-transform group-hover/item:scale-110">
                                                        <Check className="w-2.5 h-2.5" />
                                                    </div>
                                                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-tight">{item.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 4: Final Action */}
                                    <div className="p-8 flex items-center justify-center bg-[#F8F8F8]">
                                        <Link href={`/packages/${pkg.slug}`} className="w-full">
                                            <div className="relative group/btn">
                                                <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5 group-hover/btn:translate-x-3 group-hover/btn:translate-y-3 transition-transform"></div>
                                                <button className="relative w-full bg-white text-black hover:bg-white rounded-2xl py-4 text-[10px] font-black uppercase tracking-widest border-[3px] border-black transition-transform group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1 flex items-center justify-center gap-3 appearance-none cursor-pointer">
                                                    EXPLORE
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {[
                        { icon: Shield, text: "Enterprise Security" },
                        { icon: Clock, text: "7-21 Day Launch" },
                        { icon: Zap, text: "Scale Performance" },
                        { icon: Shield, text: "24/7 Monitoring" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 justify-center md:justify-start grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <item.icon className="w-5 h-5" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
    </>
    )
}

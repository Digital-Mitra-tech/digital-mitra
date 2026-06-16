"use client"

import { CheckCircle2, ArrowRight, ArrowLeft, Shield, Clock, Zap, Target, Check, Lock, HeadphonesIcon, Rocket, Users, Star, Layout, PenTool, Smartphone, Globe, Banknote } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useContact } from "@/context/contact-context"
import { Space_Grotesk } from "next/font/google"
import Image from "next/image"

// Space Grotesk perfectly blends "premium" with a "retro/neo-brutalist" vibe
const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

interface PackageDetailClientProps {
    pkg: any 
}

export function PackageDetailClient({ pkg }: PackageDetailClientProps) {
    const { openContactPopup } = useContact()

    return (
        <main className={`min-h-screen bg-[#0F0F0F] text-[#F4F4F0] font-sans selection:bg-[#FFE66D] selection:text-black ${space.className}`}>
            
            {/* Retro Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('/noise.png')] mix-blend-overlay"></div>

            {/* HERO SECTION (Dark Premium Retro) */}
            <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 border-b-4 border-black bg-[#111111] overflow-hidden">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <Link href="/packages" className="inline-flex items-center text-[#F4F4F0] hover:text-[#FFE66D] mb-8 md:mb-12 transition-colors text-xs md:text-sm font-bold uppercase tracking-widest bg-black px-4 py-2 border-2 border-white/10 hover:border-[#FFE66D]">
                        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        Back to Plans
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFE66D] text-black rounded-none text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)]">
                                <Zap className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                {pkg.title}
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-[1.05] uppercase">
                                {pkg.hero.headline}
                            </h1>
                            
                            <p className="text-base md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl mb-8 md:mb-10">
                                {pkg.hero.subHeadline}
                            </p>

                            {/* 3 Trust points */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 text-xs md:text-sm">
                                <div className="flex flex-col gap-1 md:gap-1.5 p-3 border-l-4 border-[#FFE66D] bg-white/5">
                                    <div className="flex items-center gap-1.5 md:gap-2 text-[#FFE66D]">
                                        <Clock className="w-4 h-4 md:w-5 md:h-5" />
                                        <span className="font-bold text-white uppercase tracking-wider">Fast Delivery</span>
                                    </div>
                                    <span className="text-gray-400 text-[10px] md:text-xs">In {pkg.timeline.totalDays} Days</span>
                                </div>
                                <div className="flex flex-col gap-1 md:gap-1.5 p-3 border-l-4 border-[#FFE66D] bg-white/5">
                                    <div className="flex items-center gap-1.5 md:gap-2 text-[#FFE66D]">
                                        <Users className="w-4 h-4 md:w-5 md:h-5" />
                                        <span className="font-bold text-white uppercase tracking-wider">Expert Team</span>
                                    </div>
                                    <span className="text-gray-400 text-[10px] md:text-xs">Trusted Pros</span>
                                </div>
                                <div className="flex flex-col gap-1 md:gap-1.5 p-3 border-l-4 border-[#FFE66D] bg-white/5">
                                    <div className="flex items-center gap-1.5 md:gap-2 text-[#FFE66D]">
                                        <Target className="w-4 h-4 md:w-5 md:h-5" />
                                        <span className="font-bold text-white uppercase tracking-wider">Growth Focus</span>
                                    </div>
                                    <span className="text-gray-400 text-[10px] md:text-xs">Built for Results</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center">
                                <button 
                                    onClick={openContactPopup}
                                    className="w-full sm:w-auto bg-[#FFE66D] text-black py-3.5 md:py-4 px-6 md:px-8 text-sm md:text-base font-bold rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center uppercase tracking-widest"
                                >
                                    Reserve This Plan
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                                </button>
                                <div className="hidden sm:flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3.5 md:py-4 rounded-none border-2 border-white/20 text-xs md:text-sm font-bold uppercase tracking-widest bg-white/5">
                                    <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#FFE66D]" />
                                    {pkg.timeline.totalDays} Days Launch
                                </div>
                            </div>
                        </div>

                        {/* Right Invoice Card (Retro Style) */}
                        <div className="relative">
                            <div className="bg-[#F4F4F0] text-black border-4 border-black rounded-none overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,230,109,1)] md:shadow-[12px_12px_0px_0px_rgba(255,230,109,1)]">
                                {/* Dark Header */}
                                <div className="bg-black p-5 md:p-8 flex justify-between items-start border-b-4 border-black">
                                    <div>
                                        <h3 className="text-[#F4F4F0] font-bold text-base md:text-xl tracking-widest uppercase">Official Invoice</h3>
                                        <p className="text-[#FFE66D] text-[10px] md:text-xs mt-1 uppercase tracking-widest font-bold">Transparent Billing</p>
                                    </div>
                                    <div className="w-8 h-8 bg-[#FFE66D] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]">
                                        <Banknote className="w-4 h-4 text-black" />
                                    </div>
                                </div>

                                {/* Light Body */}
                                <div className="p-5 md:p-8">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-dashed border-black pb-5 md:pb-6 mb-5 md:mb-6 gap-4">
                                        <div>
                                            <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Package Selected</p>
                                            <h4 className="text-xl md:text-3xl font-black uppercase tracking-tight">{pkg.title}</h4>
                                        </div>
                                        <div className="text-left md:text-right">
                                            <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Due</p>
                                            <div className="text-3xl md:text-5xl font-black tracking-tighter bg-[#FFE66D] px-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">{pkg.price}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                        {pkg.pricingBreakdown.lumpsum.map((item: any, idx: number) => (
                                            <div key={idx} className="flex justify-between items-center text-xs md:text-sm">
                                                <span className="font-bold text-gray-800 uppercase tracking-wide">{item.label}</span>
                                                <span className="font-black text-lg">{item.amount}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-white border-2 border-black p-4 md:p-5 mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 text-xs md:text-sm">
                                            <div className="w-4 h-4 md:w-5 md:h-5 bg-[#FFE66D] border border-black flex items-center justify-center text-black shrink-0">
                                                <Check className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                            </div>
                                            <span className="text-black font-bold uppercase tracking-wider leading-tight">No hidden charges</span>
                                        </div>
                                        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                                            <div className="w-4 h-4 md:w-5 md:h-5 bg-[#FFE66D] border border-black flex items-center justify-center text-black shrink-0">
                                                <Check className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                            </div>
                                            <span className="text-black font-bold uppercase tracking-wider leading-tight">100% transparent</span>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={openContactPopup}
                                        className="w-full bg-[#FFE66D] text-black py-3 md:py-4 rounded-none border-2 border-black font-black text-xs md:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center justify-center"
                                    >
                                        Proceed to Onboarding
                                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED SECTION (Warm Off-White Retro) */}
            <section className="bg-[#F4F4F0] text-black py-16 md:py-24 px-4 border-b-4 border-black">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-10 md:mb-16">
                        <div className="inline-block px-3 py-1 bg-black text-[#FFE66D] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,230,109,1)]">
                            What's Included
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-3 md:mb-4 uppercase leading-none">
                            Everything You Get.
                        </h2>
                        <p className="text-gray-600 font-medium text-sm md:text-lg border-l-4 border-[#FFE66D] pl-4">
                            No fluff. A complete digital foundation to launch, grow and dominate.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {pkg.whatsIncluded.map((item: any, idx: number) => (
                            <div key={idx} className="bg-white rounded-none p-6 md:p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFE66D] border-2 border-black rounded-none flex items-center justify-center mb-4 md:mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    <Target className="w-5 h-5 md:w-6 md:h-6 text-black" />
                                </div>
                                <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Add-ons */}
                    {pkg.pricingBreakdown.optionalAddons.length > 0 && (
                        <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t-4 border-black border-dashed">
                            <h3 className="font-black text-xl md:text-2xl mb-4 md:mb-6 uppercase">Optional Add-ons</h3>
                            <div className="flex flex-wrap gap-3 md:gap-4">
                                {pkg.pricingBreakdown.optionalAddons.map((addon: any, idx: number) => (
                                    <div key={idx} className="bg-white border-2 border-black rounded-none px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 md:gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full sm:w-auto">
                                        <span className="font-bold text-xs md:text-sm uppercase tracking-wide">{addon.title}</span>
                                        <span className="bg-[#FFE66D] border border-black text-black text-[10px] md:text-xs font-black px-2 py-1 rounded-none ml-auto sm:ml-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{addon.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* TIMELINE SECTION (Dark Retro) */}
            <section className="bg-[#111111] text-[#F4F4F0] py-16 md:py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-12 md:mb-20">
                        <div className="inline-block px-3 py-1 bg-[#FFE66D] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4">
                            Our Process
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-3 md:mb-4 uppercase">
                            Launch Pipeline.
                        </h2>
                        <p className="text-gray-400 font-medium text-sm md:text-lg border-l-4 border-white/20 pl-4">
                            A clear {pkg.timeline.totalDays}-day roadmap from discovery to launch.
                        </p>
                    </div>

                    {/* Horizontal Timeline (Scrollable on mobile) */}
                    <div className="relative mb-16 md:mb-24 overflow-x-auto pb-6 md:pb-8 hide-scrollbar">
                        <div className="min-w-[800px] relative">
                            {/* Connecting Dashed Line */}
                            <div className="absolute top-[13px] md:top-[15px] left-0 right-0 h-[2px] border-t-2 border-dashed border-white/20 z-0"></div>
                            
                            <div className="grid" style={{ gridTemplateColumns: `repeat(${pkg.timeline.steps.length}, minmax(0, 1fr))` }}>
                                {pkg.timeline.steps.map((step: any, idx: number) => (
                                    <div key={idx} className="relative z-10 px-2 md:px-4 flex flex-col">
                                        {/* Circle Indicator */}
                                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-none bg-[#FFE66D] border-2 border-black text-black font-black flex items-center justify-center text-xs md:text-sm mb-4 md:mb-6 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] shrink-0">
                                            {idx + 1}
                                        </div>
                                        
                                        {/* Content Card */}
                                        <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-none p-4 md:p-6 h-full hover:border-[#FFE66D] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            <div className="text-[#FFE66D] bg-white/5 inline-block px-2 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 border border-white/10">
                                                {step.dayRange}
                                            </div>
                                            <h4 className="text-[#F4F4F0] font-black text-sm md:text-xl leading-tight mb-2 md:mb-3 uppercase">
                                                {step.activity.split(':')[0]}
                                            </h4>
                                            <p className="text-gray-400 font-medium text-xs md:text-sm leading-relaxed">
                                                {step.activity.split(':')[1] || step.activity}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Final CTA Box (Retro Ticket Style) */}
                    <div className="bg-[#FFE66D] rounded-none border-4 border-black p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)] md:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.8)] mt-12">
                        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-8">
                            <div className="w-14 h-14 md:w-20 md:h-20 rounded-none border-2 border-black bg-white flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Rocket className="w-7 h-7 md:w-10 md:h-10 text-black" />
                            </div>
                            <div>
                                <div className="inline-block px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-2 border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                    Limited Slots
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black mb-1.5 md:mb-2 uppercase tracking-tight">Ready to Launch in {pkg.timeline.totalDays} Days?</h3>
                                <p className="text-gray-800 font-medium text-xs md:text-base">Let's build your digital success story.</p>
                            </div>
                        </div>
                        <button 
                            onClick={openContactPopup}
                            className="w-full md:w-auto bg-black text-[#FFE66D] py-3.5 md:py-5 px-6 md:px-10 rounded-none border-2 border-black font-black text-sm md:text-lg uppercase tracking-widest hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                        >
                            Reserve Your Spot
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    )
}

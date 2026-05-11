"use client"

import { CheckCircle2, Check, ArrowRight, Banknote, ArrowLeft, Mail, Zap, Shield, Clock, MousePointer2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useContact } from "@/context/contact-context"
import { useRef } from "react"

interface PackageDetailClientProps {
    pkg: any 
}

export function PackageDetailClient({ pkg }: PackageDetailClientProps) {
    const { openContactPopup } = useContact()
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    return (
        <main ref={containerRef} className="min-h-screen bg-[#F8F8F8] text-[#0D0D0D] font-sans selection:bg-[#5C82A3] selection:text-white">
            {/* Noise & Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-noise"></div>
            
            <div className="relative pt-32 pb-24">
                {/* Floating Navigation Background */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#5C82A3]/10 to-transparent pointer-events-none"></div>

                {/* Back Link */}
                <div className="container mx-auto px-4 mb-12 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link href="/packages" className="inline-flex items-center group">
                            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center mr-3 transition-transform group-hover:-translate-x-1 shadow-[4px_4px_0px_0px_rgba(92,130,163,0.3)]">
                                <ArrowLeft className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">Back to all plans</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Section */}
                <section className="mb-32 relative">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border-2 border-black"
                            >
                                <Zap className="w-3 h-3 text-[#FFE66D]" />
                                {pkg.title}
                            </motion.div>
                            
                            <motion.h1 
                                style={{ y: titleY, opacity }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.85] uppercase"
                            >
                                {pkg.hero.headline.split(' ').map((word: string, i: number) => (
                                    <span key={i} className={i % 3 === 2 ? "text-[#5C82A3] block md:inline" : ""}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-base md:text-lg text-gray-500 font-bold leading-tight max-w-2xl mx-auto mb-10 uppercase tracking-tight"
                            >
                                {pkg.hero.subHeadline}
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                            >
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform"></div>
                                    <button 
                                        onClick={openContactPopup}
                                        className="relative bg-black text-white py-4 px-10 text-lg font-black rounded-2xl border-[3px] border-black transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 flex items-center justify-center appearance-none cursor-pointer"
                                    >
                                        RESERVE THIS PLAN
                                        <ArrowRight className="w-5 h-5 ml-4" />
                                    </button>
                                </div>
                                
                                <div className="flex flex-col items-start gap-1">
                                    <div className="flex items-center gap-2 text-[#5C82A3]">
                                        <Shield className="w-5 h-5" />
                                        <span className="text-xs font-black uppercase tracking-widest">Enterprise Security</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Clock className="w-5 h-5" />
                                        <span className="text-xs font-black uppercase tracking-widest">{pkg.timeline.totalDays} Days Launch</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* The "Manifesto" / Core Values of the Plan */}
                <section className="py-16 bg-white border-y-[4px] border-black overflow-hidden mb-20">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-center">
                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-4xl font-black leading-[0.9] uppercase tracking-tighter">
                                    Engineered <br />for <span className="text-[#5C82A3]">Scale.</span>
                                </h2>
                                <p className="text-gray-500 font-bold text-sm uppercase leading-tight">
                                    We don&apos;t just build websites. We build digital engines that drive growth, automate operations, and dominate the local market.
                                </p>
                                <div className="pt-4 flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#FFE66D] border-2 border-black flex items-center justify-center -rotate-6">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-[#FF6B6B] border-2 border-black flex items-center justify-center rotate-6">
                                        <MousePointer2 className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {pkg.whatsIncluded.slice(0, 4).map((item: any, idx: number) => (
                                    <div key={idx} className="group relative">
                                        <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                                        <div className="relative bg-[#F5F5F5] border-[3px] border-black p-6 rounded-2xl h-full transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                                            <div className="w-10 h-10 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                                <CheckCircle2 className="w-5 h-5 text-[#5C82A3]" />
                                            </div>
                                            <h3 className="font-black text-lg mb-2 uppercase tracking-tight">{item.title}</h3>
                                            <p className="text-gray-500 font-bold text-[11px] leading-tight uppercase">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing "Receipt" Section */}
                <section className="py-16 mb-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Transparent <span className="text-[#5C82A3]">Billing.</span></h2>
                            <p className="text-gray-500 font-bold text-sm uppercase">Zero Hidden Fees. Professional Invoice. Clear Milestones.</p>
                        </div>

                        <div className="max-w-3xl mx-auto relative">
                            {/* Receipt Style Card */}
                            <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-3 translate-y-3"></div>
                            <div className="relative bg-white border-[4px] border-black rounded-[2rem] overflow-hidden">
                                {/* Receipt Top Jagged Edge */}
                                <div className="h-6 bg-black flex justify-between px-8 gap-1 overflow-hidden">
                                    {[...Array(30)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 bg-white rounded-full -mt-1 shrink-0"></div>
                                    ))}
                                </div>

                                <div className="p-8 md:p-16">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-[4px] border-black/5 pb-12 mb-12 gap-6">
                                        <div>
                                            <div className="text-[10px] font-black text-[#5C82A3] uppercase tracking-[0.2em] mb-2">Selected Package</div>
                                            <h3 className="text-3xl font-black uppercase tracking-tight">{pkg.title}</h3>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Total Amount</div>
                                            <div className="text-4xl font-black tracking-tighter text-black">{pkg.price}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-8 mb-16">
                                        {pkg.pricingBreakdown.lumpsum.map((item: any, idx: number) => (
                                            <div key={idx} className="flex justify-between items-center group">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform"></div>
                                                    <span className="font-black text-xs uppercase tracking-tight text-gray-500 group-hover:text-black transition-colors">{item.label}</span>
                                                </div>
                                                <div className="flex-1 border-b-2 border-dotted border-gray-200 mx-4"></div>
                                                <span className="font-black text-sm text-black">{item.amount}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-[#F5F5F5] border-[3px] border-black rounded-2xl p-8 mb-12 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                                            <Banknote className="w-16 h-16 text-black" />
                                        </div>
                                        <h4 className="font-black text-xs uppercase tracking-widest mb-4">Add-on Infrastructure</h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {pkg.pricingBreakdown.optionalAddons.slice(0, 2).map((addon: any, idx: number) => (
                                                <div key={idx} className="bg-white border-2 border-black p-4 rounded-xl">
                                                    <div className="text-[10px] font-black text-gray-400 uppercase mb-1">{addon.title}</div>
                                                    <div className="font-black text-sm">{addon.price}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button 
                                        onClick={openContactPopup}
                                        className="w-full py-6 bg-[#FFE66D] text-black border-[4px] border-black rounded-2xl font-black text-lg uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4 group appearance-none cursor-pointer"
                                    >
                                        PROCEED TO ONBOARDING
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>

                                {/* Receipt Bottom Jagged Edge */}
                                <div className="h-6 bg-gray-100 flex justify-between px-8 gap-1 overflow-hidden">
                                    {[...Array(30)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 bg-white rounded-full mt-5 shrink-0"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Pipeline */}
                <section className="py-16 bg-black text-white relative overflow-hidden mb-20">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Launch <span className="text-[#5C82A3]">Pipeline.</span></h2>
                            <p className="text-gray-400 font-bold text-sm uppercase">The journey from Kickoff to the World in {pkg.timeline.totalDays} days.</p>
                        </div>

                        <div className="max-w-5xl mx-auto relative">
                            {/* Central Line */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5C82A3] via-white/20 to-transparent hidden md:block"></div>

                            <div className="space-y-24">
                                {pkg.timeline.steps.map((step: any, idx: number) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={`relative flex items-center justify-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    >
                                        {/* Content Card */}
                                        <div className="w-full md:w-[42%] group">
                                            <div className="absolute inset-0 bg-[#5C82A3] rounded-2xl translate-x-1.5 translate-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="relative bg-[#1A1A1A] border-[3px] border-white/10 p-6 rounded-2xl transition-all group-hover:border-[#5C82A3]">
                                                <div className="text-[10px] font-black text-[#5C82A3] uppercase tracking-widest mb-2">{step.dayRange}</div>
                                                <h4 className="text-xl font-black uppercase tracking-tight mb-4">{step.activity}</h4>
                                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-[#5C82A3]" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Center Indicator */}
                                        <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-black border-[3px] border-[#5C82A3] rounded-full z-20 hidden md:flex items-center justify-center text-[#5C82A3] font-black shadow-[0px_0px_20px_rgba(92,130,163,0.5)]">
                                            {idx + 1}
                                        </div>

                                        {/* Empty space for grid alignment */}
                                        <div className="hidden md:block w-[42%]"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Grid */}
                <section className="py-24 bg-[#F5F5F5]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Plan <span className="text-[#5C82A3]">Nuances.</span></h2>
                            <p className="text-gray-500 font-bold text-sm uppercase">Common questions specifically for the {pkg.title}.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {pkg.faqs.map((faq: any, idx: number) => (
                                <div key={idx} className="bg-white border-[3px] border-black rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
                                    <h3 className="font-black text-base text-black mb-3 uppercase tracking-tight leading-tight">{faq.q}</h3>
                                    <p className="text-gray-500 font-bold text-[10px] uppercase leading-snug">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom Final CTA */}
                <section className="container mx-auto px-4 pt-12 pb-20">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-black rounded-[3rem] translate-x-3 translate-y-3"></div>
                        <div className="relative bg-[#0D0D0D] border-[6px] border-black rounded-[3rem] p-10 md:p-16 overflow-hidden">
                            {/* Visual Decor */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#5C82A3]/20 rounded-full blur-[100px]"></div>
                            
                            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                                <div className="inline-flex items-center px-4 py-2 bg-[#FFE66D] text-black rounded-full text-xs font-black uppercase tracking-widest border-2 border-black">
                                    Limited Slots Monthly
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                                    Start building your <span className="text-[#5C82A3]">legacy</span> today.
                                </h2>
                                <p className="text-gray-400 text-base md:text-lg font-bold uppercase tracking-tight">
                                    Scale faster. Automate smarter. Dominate harder.
                                </p>
                                <button 
                                    onClick={openContactPopup}
                                    className="bg-white text-black hover:bg-white text-2xl px-12 py-6 rounded-2xl border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all h-auto font-black flex items-center justify-center gap-6 group mx-auto appearance-none cursor-pointer"
                                >
                                    GET STARTED NOW
                                    <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}

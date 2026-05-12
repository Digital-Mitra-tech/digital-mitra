"use client"

import Image from "next/image"
import { User, CheckCircle, Target, Heart, Zap, Shield, Search, Lightbulb, Code2, Rocket, ArrowRight, Sparkles, Globe, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useContact } from "@/context/contact-context"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

function Counter({ value, duration = 2 }: { value: number, duration?: number }) {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    
    useEffect(() => {
        let start = 0
        const end = value
        const totalDuration = duration * 1000
        const startTime = performance.now()
        
        const updateCount = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / totalDuration, 1)
            const easeOutQuad = (t: number) => t * (2 - t)
            
            const currentCount = Math.floor(easeOutQuad(progress) * end)
            setCount(currentCount)
            
            if (progress < 1) {
                requestAnimationFrame(updateCount)
            }
        }
        
        requestAnimationFrame(updateCount)
    }, [value, duration])
    
    return <span ref={countRef}>{count}</span>
}

export function AboutClient() {
    const { openContactPopup } = useContact()
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const titleRotate = useTransform(scrollYProgress, [0, 0.2], [0, -5])
    const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

    return (
        <main ref={containerRef} className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] selection:bg-[#5C82A3] selection:text-white overflow-x-hidden">
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] bg-noise"></div>

            {/* Floating Decor */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#5C82A3]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#FFE66D]/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
                {/* HERO SECTION - Refined Editorial Style */}
                <section className="pt-24 pb-16 md:pt-36 md:pb-24 px-4">
                    <div className="container mx-auto">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-8 border-2 border-black"
                            >
                                <Sparkles className="w-2.5 h-2.5 text-[#FFE66D]" />
                                The Mitra Odyssey
                            </motion.div>
                            
                            <motion.div style={{ rotate: titleRotate, scale: titleScale }}>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                                    Engineering <br />
                                    <span className="text-white bg-black px-3 py-1 inline-block my-1 border-[4px] border-black shadow-[8px_8px_0px_0px_#5C82A3]">Bridges</span> <br />
                                    to the Future.
                                </h1>
                            </motion.div>

                            <div className="grid lg:grid-cols-[1fr_350px] gap-10 items-end">
                                <motion.p 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg md:text-2xl text-gray-700 font-bold leading-tight max-w-2xl"
                                >
                                    We are architecting the digital infrastructure for Bharat&apos;s most ambitious entrepreneurs. No fluff. Just high-performance systems.
                                </motion.p>
                                
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                    className="bg-[#FFE66D] border-[3px] border-black p-6 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3 hidden lg:block"
                                >
                                    <div className="text-3xl font-black mb-1">500+</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-black/60">Success Stories across India</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE MANIFESTO */}
                <section className="py-20 md:py-32 px-4 bg-white border-y-[3px] border-black overflow-hidden">
                    <div className="container mx-auto">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 border-[5px] border-black rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-gray-100 group"
                                >
                                    <Image src="/images/about-me.svg" alt="Digital Mitra Workspace" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-[#5C82A3]/20 mix-blend-multiply"></div>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ x: 30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -right-6 top-16 bg-black text-white p-4 rounded-2xl border-[3px] border-[#FFE66D] z-20 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] rotate-12"
                                >
                                    <Target className="w-6 h-6 mb-1" />
                                    <div className="font-black text-sm uppercase">MISSION-DRIVEN</div>
                                </motion.div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
                                        OUR <span className="text-[#5C82A3]">MANIFESTO</span>
                                    </h2>
                                    <div className="w-16 h-1.5 bg-black"></div>
                                </div>
                                
                                <p className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                                    Bharat isn&apos;t just a market; it&apos;s an engine of innovation. We believe every entrepreneur deserves <span className="bg-[#FFE66D] px-2 border-b-[3px] border-black">Tier-1 technology</span> without the Tier-1 complexity.
                                </p>
                                
                                <p className="text-base text-gray-600 font-bold leading-relaxed">
                                    Too many small businesses get left behind because digital transformation feels like a black box. Our goal is to make it transparent, accessible, and lethally effective.
                                </p>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    {[
                                        { label: "Transparent Pricing", color: "bg-black text-white" },
                                        { label: "High-Speed Launch", color: "bg-[#FFE66D]" },
                                        { label: "India-Centric UX", color: "bg-[#5C82A3]" }
                                    ].map((tag, i) => (
                                        <div key={i} className={`${tag.color} border-[2px] border-black px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                                            {tag.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CORE VALUES - Bento Grid Style */}
                <section className="py-20 md:py-32 px-4">
                    <div className="container mx-auto">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-16">
                                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-3">Core Values</h2>
                                <p className="text-lg text-gray-500 font-bold uppercase tracking-widest">The DNA of Digital Mitra</p>
                            </div>

                            <div className="grid md:grid-cols-12 gap-6">
                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="md:col-span-8 bg-black text-white p-10 rounded-[2.5rem] border-[3px] border-black shadow-[10px_10px_0px_0px_#5C82A3] relative overflow-hidden group"
                                >
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-[#FFE66D] rounded-xl flex items-center justify-center border-[3px] border-black mb-6 group-hover:rotate-12 transition-transform">
                                            <Shield className="w-7 h-7 text-black" />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase">Uncompromising Trust</h3>
                                        <p className="text-lg text-gray-400 font-bold max-w-xl leading-relaxed">
                                            We operate with radical transparency. No hidden fees, no technical jargon, and no false promises. Your growth is our only metric.
                                        </p>
                                    </div>
                                    <div className="absolute bottom-[-5%] right-[-2%] text-[150px] font-black text-white/5 select-none pointer-events-none">01</div>
                                </motion.div>

                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="md:col-span-4 bg-white p-8 rounded-[2.5rem] border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
                                >
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border-[3px] border-black mb-6">
                                        <Zap className="w-7 h-7 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black mb-3 uppercase">Velocity</h3>
                                        <p className="text-[11px] font-black uppercase tracking-tight text-black/70">
                                            We launch in days, not months. Because business doesn&apos;t wait for slow code.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="md:col-span-5 bg-[#5C82A3] p-8 rounded-[2.5rem] border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-white"
                                >
                                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border-[3px] border-white mb-6">
                                        <Cpu className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 uppercase">Tech Sovereignty</h3>
                                    <p className="text-[11px] font-bold opacity-80 uppercase tracking-tight">
                                        Empowering businesses to own their digital destiny with scalable infrastructure.
                                    </p>
                                </motion.div>

                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="md:col-span-7 bg-white p-10 rounded-[2.5rem] border-[3px] border-black shadow-[10px_10px_0px_0px_#5C82A3] flex items-center gap-6"
                                >
                                    <div className="hidden sm:flex w-20 h-20 bg-[#F5F5F5] rounded-full border-[3px] border-black items-center justify-center shrink-0">
                                        <Heart className="w-8 h-8 text-[#5C82A3] fill-[#5C82A3]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black mb-2 uppercase">Empathy-Led Design</h3>
                                        <p className="text-gray-600 font-bold leading-tight text-sm">
                                            We build for the end-user—the shop owner, the customer, the entrepreneur. Simple is hard, but we do hard things.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE PROCESS - Vertical Editorial Timeline */}
                <section className="py-20 md:py-32 px-4 bg-[#0D0D0D] text-white">
                    <div className="container mx-auto">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-20">
                                <div className="lg:sticky lg:top-40 h-fit">
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFE66D] text-black rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-8 border-2 border-white"
                                    >
                                        <Rocket className="w-2.5 h-2.5" />
                                        The Workflow
                                    </motion.div>
                                    <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-6">
                                        HOW WE <br />
                                        <span className="text-[#5C82A3]">IGNITE</span> <br />
                                        GROWTH.
                                    </h2>
                                    <p className="text-lg text-gray-400 font-bold max-w-sm">
                                        A streamlined path from initial spark to market domination.
                                    </p>
                                </div>

                                <div className="space-y-24">
                                    {[
                                        { step: "01", title: "Discovery", icon: Lightbulb, desc: "We dissect your business model and identify high-leverage digital opportunities.", color: "border-white" },
                                        { step: "02", title: "Architecture", icon: Target, desc: "A blueprint for scalability. We design systems that handle tomorrow&apos;s traffic today.", color: "border-[#FFE66D]" },
                                        { step: "03", title: "Synthesis", icon: Code2, desc: "Our engineers craft high-performance code with meticulous attention to detail.", color: "border-[#5C82A3]" },
                                        { step: "04", title: "Launchpad", icon: Rocket, desc: "We deploy and provide 24/7 strategic support to ensure continuous scaling.", color: "border-white" }
                                    ].map((process, i) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            className={`relative pl-16 border-l-[3px] ${process.color} pb-10`}
                                        >
                                            <div className={`absolute top-0 left-[-22px] w-10 h-10 bg-black border-[3px] ${process.color} rounded-full flex items-center justify-center z-10`}>
                                                <process.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="absolute left-[-80px] top-4 text-2xl font-black opacity-20 rotate-[-90deg] origin-right uppercase">
                                                {process.step}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter">{process.title}</h3>
                                            <p className="text-lg text-gray-400 font-bold leading-relaxed max-w-lg">
                                                {process.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE FINAL CALL - Powerhouse Revamp */}
              
            </div>
            <Footer />
        </main>
    )
}

"use client"

import { ArrowLeft, Check, Globe, Rocket, Code, Palette, Megaphone, Cpu, Smartphone, Building2, PenTool, Search, Zap, CreditCard, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { useContact } from "@/context/contact-context"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ServiceItem } from "@/lib/services-data"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { motion } from "framer-motion"

interface ServiceDetailClientProps {
    service: ServiceItem
}

const iconMap: { [key: string]: any } = {
    Rocket, Code, Palette, Megaphone, Cpu, Smartphone, Building2, Globe, PenTool, Search, Zap, CreditCard
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
    const { openContactPopup } = useContact()
    const Icon = iconMap[service.icon] || Globe

    return (
        <SmoothScrollProvider>
            <main className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
                {/* Noise Texture */}
                {/* Subtle Grain Overlay */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[9999] bg-noise"></div>

                <div className="pt-24 md:pt-32 relative z-10">
                    <div className="container mx-auto px-4 pb-24">
                        {/* Breadcrumbs */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-7xl mx-auto mb-12"
                        >
                            <Breadcrumbs items={[
                                { label: "Services", href: "/services" },
                                { label: service.title }
                            ]} />
                        </motion.div>

                        <div className="max-w-7xl mx-auto">
                            {/* Hero Grid */}
                            <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 border-2 border-black">
                                        {service.category}
                                    </div>
                                    
                                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[0.9] tracking-tighter">
                                        {service.title.split(' ').map((word, i) => (
                                            <span key={i} className={i % 2 !== 0 ? "text-[#5C82A3]" : ""}>{word} </span>
                                        ))}
                                    </h1>
                                    
                                    <p className="text-lg md:text-xl text-gray-700 font-bold mb-8 leading-snug">
                                        {service.description}
                                    </p>
                                    
                                    <Button 
                                        onClick={openContactPopup}
                                        className="bg-black text-white hover:bg-gray-900 py-6 px-10 text-xl font-black rounded-xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(92,130,163,1)] hover:translate-y-1 hover:shadow-none transition-all h-auto"
                                    >
                                        GET STARTED
                                        <ArrowRight className="w-6 h-6 ml-3" />
                                    </Button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative"
                                >
                                    {/* Abstract geometric shapes for neobrutalist vibe */}
                                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FFE66D] border-[3px] border-black rounded-2xl -rotate-12 z-0"></div>
                                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FF6B6B] border-[3px] border-black rounded-full z-0"></div>
                                    
                                    <div className="relative z-10 bg-white border-[5px] border-black rounded-[2.5rem] p-12 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center aspect-square overflow-hidden">
                                        <div className="absolute inset-0 bg-[#5C82A3]/5 opacity-50"></div>
                                        <Icon className="w-24 h-24 md:w-32 md:h-32 text-black relative z-10" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Features Section */}
                            <div className="mb-24">
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl md:text-5xl font-black mb-10 tracking-tight text-center md:text-left"
                                >
                                    WHAT WE <span className="bg-[#5C82A3] text-white px-3">DELIVER</span>
                                </motion.h2>
                                
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {service.features.map((feature: string, idx: number) => (
                                        <motion.div 
                                            key={idx} 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group relative"
                                        >
                                            <div className="absolute inset-0 bg-black rounded-2xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                                            <div className="relative bg-white border-[3px] border-black rounded-2xl p-6 flex flex-col gap-4 h-full transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                                                <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center border-[2px] border-black text-black group-hover:bg-[#FFE66D] transition-colors">
                                                    <Check className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-black leading-tight tracking-tight">{feature}</h3>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-black rounded-[3rem] translate-x-2 translate-y-2"></div>
                                <div className="relative bg-[#5C82A3] rounded-[3rem] p-10 md:p-16 text-center text-white border-[5px] border-black overflow-hidden group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
                                    {/* Animated background pulse */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] animate-pulse"></div>
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none tracking-tighter">
                                            LET&apos;S SCALE <br />
                                            TOGETHER.
                                        </h2>
                                        <p className="text-lg md:text-xl text-white font-bold mb-10 max-w-xl mx-auto opacity-90">
                                            Trusted by 500+ Indian businesses for high-end digital transformation.
                                        </p>
                                        <Button 
                                            onClick={openContactPopup}
                                            className="bg-white text-black hover:bg-[#F5F5F5] py-6 px-12 text-2xl font-black rounded-[1.5rem] border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all h-auto"
                                        >
                                            REACH OUT
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </SmoothScrollProvider>
    )
}

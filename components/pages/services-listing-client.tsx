"use client"

import { servicesData, serviceCategories, ServiceCategory, ServiceItem } from "@/lib/services-data"
import Link from "next/link"
import { ArrowRight, Rocket, Code, Palette, Megaphone, Cpu, Smartphone, Building2, Globe, PenTool, Search, Zap, CreditCard, ChevronRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { motion } from "framer-motion"
import { useContact } from "@/context/contact-context"

const iconMap: { [key: string]: any } = {
    Rocket, Code, Palette, Megaphone, Cpu, Smartphone, Building2, Globe, PenTool, Search, Zap, CreditCard
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
} as const

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    }
} as const

export function ServicesListingClient() {
    const { openContactPopup } = useContact()
    return (
        <main className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
            <div className="pt-24 md:pt-32 relative z-10">
                <div className="container mx-auto px-4 pb-24">
                    {/* Breadcrumbs */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-7xl mx-auto mb-12 text-left"
                    >
                        <Breadcrumbs items={[{ label: "Services" }]} />
                    </motion.div>

                    {/* Hero Section */}
                    <div className="max-w-7xl mx-auto mb-24 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute -top-20 -left-20 w-64 h-64 bg-[#5C82A3]/20 rounded-full blur-[100px] pointer-events-none"
                        ></motion.div>
                        
                        <div className="text-left md:text-center max-w-4xl mx-auto">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 border-2 border-black"
                            >
                                The Complete Ecosystem
                            </motion.div>
                            
                            <motion.h1 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter"
                            >
                                OUR BUSINESS <br />
                                <span className="text-[#5C82A3] relative">
                                    SOLUTIONS
                                    <svg className="absolute -bottom-2 left-0 w-full h-4 text-black opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                                    </svg>
                                </span>
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-gray-700 font-bold max-w-2xl mx-auto leading-tight"
                            >
                                Empowering Indian entrepreneurs with world-class technology, branding, and automation.
                            </motion.p>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                    >
                        {serviceCategories.map((category: ServiceCategory) => {
                            const Icon = iconMap[category.icon] || Globe
                            return (
                                <motion.div 
                                    key={category.slug} 
                                    variants={itemVariants}
                                    className="group relative"
                                >
                                    {/* Offset Background Card */}
                                    <div 
                                        className="absolute inset-0 bg-black rounded-[2rem] translate-x-1.5 translate-y-1.5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"
                                    ></div>
                                    
                                    <div className="relative bg-white border-[3px] border-black rounded-[2rem] p-8 h-full flex flex-col transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                                        <div 
                                            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 border-[3px] border-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                            style={{ backgroundColor: category.color }}
                                        >
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        
                                        <h2 className="text-2xl font-black mb-3 tracking-tight">{category.title}</h2>
                                        <p className="text-gray-600 font-bold text-sm mb-8 leading-snug">
                                            {category.description}
                                        </p>
                                        
                                        <div className="space-y-2 mt-auto">
                                            {servicesData.filter(s => s.category === category.title).map((service: ServiceItem) => (
                                                <Link 
                                                    key={service.slug} 
                                                    href={`/services/${service.slug}`}
                                                    className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-xl border-[2px] border-transparent hover:border-black hover:bg-white transition-all group/item shadow-sm hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                                                >
                                                    <span className="font-black text-xs text-gray-900">{service.title}</span>
                                                    <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center group-hover/item:bg-[#5C82A3] transition-colors">
                                                        <ChevronRight className="w-4 h-4 group-hover/item:translate-x-0.5 transition-transform" />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* Special Solutions Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="bg-[#FFE66D] border-[4px] border-black rounded-[2.5rem] p-10 md:p-16 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-8 right-8 w-24 h-24 border-[8px] border-black/10 rounded-full"></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                                <div className="text-center lg:text-left max-w-xl">
                                    <h2 className="text-3xl md:text-5xl font-black mb-4 leading-none tracking-tighter">
                                        NEED A CUSTOM <br />
                                        <span className="bg-black text-[#FFE66D] px-3 py-1 inline-block">SOLUTION?</span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-black font-bold opacity-80 mb-0">
                                        We specialize in high-end digital infrastructure tailored specifically for the Indian market.
                                    </p>
                                </div>
                                
                                <div className="flex flex-col gap-3 shrink-0">
                                    <button 
                                        onClick={openContactPopup}
                                        className="bg-black text-white hover:bg-black rounded-[1.2rem] px-10 py-8 text-xl font-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:translate-y-1 hover:shadow-none transition-all h-auto w-full md:w-auto border-[3px] border-black flex items-center justify-center appearance-none cursor-pointer"
                                    >
                                        <Mail className="w-6 h-6 mr-3" />
                                        LET&apos;S TALK
                                    </button>
                                    <p className="text-center font-black text-[10px] uppercase tracking-widest opacity-50">Response in &lt; 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
                            {servicesData.map((service: ServiceItem, idx) => (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <Link 
                                        href={`/services/${service.slug}`}
                                        className="p-4 bg-white border-[2px] border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[4px_4px_0px_0px_rgba(92,130,163,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex flex-col gap-3 group h-full"
                                    >
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 border-[2px] border-black group-hover:bg-[#5C82A3] group-hover:text-white transition-all">
                                            {(() => {
                                                const Icon = iconMap[service.icon] || Globe
                                                return <Icon className="w-5 h-5" />
                                            })()}
                                        </div>
                                        <span className="font-black text-[11px] leading-tight text-gray-900 uppercase tracking-tight">{service.title}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

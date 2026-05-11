"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supportPlans } from "@/lib/data"
import { useContact } from "@/context/contact-context"
import { motion } from "framer-motion"

export function SupportSection() {
    const { openContactPopup } = useContact()

    return (
        <section id="support" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-3 py-1.5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-black"
                        >
                            Continuous Growth
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9]"
                        >
                            SUPPORT & <br />
                            <span className="text-[#5C82A3]">MAINTENANCE.</span>
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-black rounded-2xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                                
                                <div className={`relative h-full bg-white border-[3px] border-black rounded-2xl flex flex-col overflow-hidden transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ${plan.highlight ? "ring-4 ring-[#5C82A3]/30" : ""}`}>
                                    {plan.highlight && (
                                        <div className="bg-[#5C82A3] text-white text-[10px] font-black text-center py-1.5 uppercase tracking-widest border-b-[3px] border-black">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-lg font-black text-gray-900 mb-1 uppercase tracking-tight">{plan.title}</h3>
                                        <div className="flex items-baseline mb-4">
                                            <span className="text-2xl font-black text-[#5C82A3] tracking-tighter">{plan.price}</span>
                                            <span className="text-gray-500 ml-1 text-[10px] font-black uppercase">{plan.period}</span>
                                        </div>

                                        <p className="text-gray-600 font-bold text-xs mb-6 min-h-[40px] leading-tight">{plan.description}</p>

                                        <div className="space-y-2 mb-8 flex-1">
                                            {plan.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="w-4 h-4 rounded-md bg-[#F5F5F5] border-2 border-black flex items-center justify-center shrink-0 mt-0.5">
                                                        <Check className="w-2.5 h-2.5 text-black" />
                                                    </div>
                                                    <span className="text-[10px] text-gray-700 font-black uppercase tracking-tight leading-tight">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="relative group/btn mt-auto">
                                            <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform"></div>
                                            <button
                                                onClick={openContactPopup}
                                                className={`relative w-full py-5 text-sm font-black rounded-xl border-[3px] border-black transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 appearance-none cursor-pointer ${plan.highlight ? "bg-black text-white hover:bg-black" : "bg-white text-black hover:bg-white"}`}
                                            >
                                                Choose Plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


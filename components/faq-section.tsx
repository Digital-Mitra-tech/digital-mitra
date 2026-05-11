
"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FaqSection() {
    const faqs = [
        {
            question: "How long does project delivery take?",
            answer: "We generally deliver projects within 5 to 14 days depending on the selected plan.",
        },
        {
            question: "How do domain and hosting renewals work?",
            answer: "Domain, hosting, and support are renewed annually.",
        },
        {
            question: "Can I upgrade my plan later?",
            answer: "Yes, you can upgrade your plan anytime as your business grows.",
        },
        {
            question: "Are social media and automation services available?",
            answer: "Yes, social media management and custom automations are available as add-ons.",
        },
        {
            question: "Do you provide training for the tools?",
            answer: "Full training is provided for CRM, billing software, and website management.",
        },
        {
            question: "Is priority support available?",
            answer: "Priority support is available through the Care+ and Pro plans for businesses needing faster responses.",
        }
    ]

    return (
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-3 py-1.5 bg-[#5C82A3] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-black"
                        >
                            Got Questions?
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9]"
                        >
                            FREQUENTLY ASKED <br />
                            <span className="text-[#5C82A3]">QUESTIONS.</span>
                        </motion.h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <AccordionItem 
                                    value={`item-${index}`} 
                                    className="border-[3px] border-black rounded-2xl bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all overflow-hidden"
                                >
                                    <AccordionTrigger className="text-lg font-black text-[#0B0B0B] hover:no-underline px-6 py-6 uppercase tracking-tight text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 font-bold text-sm px-6 pb-6 leading-tight">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}


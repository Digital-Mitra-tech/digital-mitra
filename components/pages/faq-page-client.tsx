"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { useContact } from "@/context/contact-context"

interface Faq {
  question: string
  answer: string
}

export function FaqPageClient({ faqs }: { faqs: Faq[] }) {
  const { openContactPopup } = useContact()

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 pb-24">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <Breadcrumbs items={[{ label: "FAQ" }]} />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 border-2 border-black">
                Got Questions?
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 uppercase">
                FREQUENTLY <br />
                <span className="text-[#5C82A3]">ASKED.</span>
              </h1>
              <p className="text-gray-500 font-bold text-base max-w-xl mx-auto leading-snug">
                Everything you need to know about working with Digital Mitra. Can&apos;t find your answer?{" "}
                <button
                  onClick={openContactPopup}
                  className="text-[#5C82A3] underline underline-offset-2 hover:text-black transition-colors font-black"
                >
                  Just ask us.
                </button>
              </p>
            </motion.div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-[3px] border-black rounded-2xl bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all overflow-hidden"
                  >
                    <AccordionTrigger className="text-base md:text-lg font-black text-black hover:no-underline px-6 py-6 uppercase tracking-tight text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 font-bold text-sm md:text-base px-6 pb-6 leading-relaxed border-t-2 border-black/5 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 relative group"
            >
              <div className="absolute inset-0 bg-black rounded-[2.5rem] translate-x-2 translate-y-2" />
              <div className="relative bg-[#FFE66D] border-[4px] border-black rounded-[2.5rem] p-10 md:p-14 text-center group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase">
                  Still have questions?
                </h2>
                <p className="text-gray-700 font-bold mb-8 max-w-md mx-auto text-sm leading-snug">
                  Our team is happy to walk you through anything. Get in touch and we will respond within 24 hours.
                </p>
                <button
                  onClick={openContactPopup}
                  className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-xl border-[3px] border-black font-black text-sm uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-1 hover:shadow-none transition-all"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

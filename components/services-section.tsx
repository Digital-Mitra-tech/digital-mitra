"use client"

import { Mail, ArrowRight, CheckCircle2, Zap, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useContact } from "@/context/contact-context"
import { packages } from "@/lib/data"
import { motion } from "framer-motion"

export function ServicesSection() {
  const { openContactPopup } = useContact()

  return (
    <section id="packages" className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1.5 bg-[#5C82A3] text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-black"
            >
              Pricing Plans
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9]"
            >
              OUR <span className="bg-black text-white px-3 py-1 inline-block">PACKAGES.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {packages.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                {/* Offset Background */}
                <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                
                <div className={`relative h-full bg-white border-[3px] border-black rounded-[2rem] flex flex-col overflow-hidden transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ${service.popular ? "ring-4 ring-[#5C82A3]/30" : ""}`}>
                  {service.popular && (
                    <div className="bg-black text-white text-center py-2 text-[10px] font-black tracking-widest uppercase border-b-[3px] border-black">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-black mb-1 uppercase tracking-tight">{service.title}</h3>
                    <div className="text-3xl font-black text-[#5C82A3] mb-4 tracking-tighter">{service.price}</div>
                    <p className="text-gray-600 font-bold text-xs mb-8 leading-tight">{service.description}</p>

                    <div className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-md bg-[#F5F5F5] border-2 border-black flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-black" />
                          </div>
                          <span className="text-[11px] text-gray-700 font-black uppercase tracking-tight leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/packages" className="relative group/btn mt-auto block">
                      <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform"></div>
                      <button
                        className={`relative w-full py-6 text-lg font-black rounded-xl border-[3px] border-black transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 flex items-center justify-center appearance-none cursor-pointer ${service.popular ? "bg-[#5C82A3] text-white hover:bg-[#5C82A3]" : "bg-white text-black hover:bg-white"}`}
                      >
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 relative group"
          >
            <div className="absolute inset-0 bg-black rounded-[3rem] translate-x-3 translate-y-3"></div>
            <div className="relative bg-[#5C82A3] rounded-[3rem] p-12 md:p-16 text-center text-white border-[5px] border-black overflow-hidden group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none p-10">
                <Image src="/images/get-in-touch.png" width={200} height={200} alt="Background pattern" className="scale-150 rotate-12" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tighter">READY TO <br />SCALE UP?</h3>
                  <p className="text-white text-lg md:text-xl font-bold leading-tight opacity-90">
                    Have questions about our services? Our expert team is ready to discuss the perfect solution for your business needs.
                  </p>
                </div>
                
                <div className="relative group/btn shrink-0">
                  <div className="absolute inset-0 bg-black/20 rounded-2xl translate-x-1.5 translate-y-1.5 group-hover/btn:translate-x-3 group-hover/btn:translate-y-3 transition-transform"></div>
                  <button 
                    onClick={openContactPopup}
                    className="relative bg-white text-black hover:bg-white h-auto py-6 px-10 text-xl font-black rounded-2xl border-[4px] border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 flex items-center justify-center appearance-none cursor-pointer"
                  >
                    <Mail className="w-6 h-6 mr-3" />
                    CONTACT US TODAY
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


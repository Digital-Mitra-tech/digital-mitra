"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useContact } from "@/context/contact-context"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Transformation",
      description:
        "Helped a Delhi brand build a complete e-commerce platform, resulting in 3x sales growth in 6 months.",
      tag: "E-Commerce",
      logo: "/images/studio-logo.svg",
      bgColor: "#5C82A3",
      illustration: "/images/studio-workspace.svg",
    },
    {
      title: "Digital Marketing Success",
      description:
        "Implemented SEO strategy for a Mumbai business, increasing leads by 250% in 4 months.",
      tag: "Digital Marketing",
      logo: "/images/venture-logo.svg",
      bgColor: "#000000",
      illustration: "/images/venture-workspace.svg",
    },
  ]

  const { openContactPopup } = useContact()

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1.5 bg-[#FFE66D] text-black rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-black"
            >
              Success Stories
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9]"
            >
              CHECK OUT OUR <br />
              <span className="text-[#5C82A3]">TRACK RECORD.</span>
            </motion.h2>
          </div>

          <div className="space-y-12 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-black rounded-[2.5rem] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                
                <div className="relative grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[2.5rem] overflow-hidden transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        width={100}
                        height={24}
                        className="h-6 w-auto grayscale"
                      />
                    </div>

                    <span className="inline-block bg-[#5C82A3] text-white text-[10px] font-black px-3 py-1 rounded-full mb-6 w-fit uppercase tracking-wider border-2 border-black">
                      {project.tag}
                    </span>

                    <h3 className="text-xl md:text-2xl font-black mb-4 leading-tight uppercase tracking-tight text-[#0B0B0B]">
                      {project.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 mb-8 leading-tight font-bold">
                      {project.description}
                    </p>

                    <button
                      onClick={openContactPopup}
                      className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#0B0B0B] hover:gap-3 transition-all appearance-none cursor-pointer"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="relative overflow-hidden min-h-[300px]" style={{ backgroundColor: project.bgColor }}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <Image
                      src={project.illustration || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-black rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <button 
                onClick={openContactPopup}
                className="relative bg-black text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs border-[3px] border-black transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 flex items-center gap-3 appearance-none cursor-pointer"
              >
                Browse Full Portfolio
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Digital Mitra transformed our entire online presence. Within 6 months, our e-commerce sales tripled!",
    name: "Priya Sharma",
    position: "Founder, EthnicBazaar",
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
    rating: 5
  },
  {
    id: 2,
    quote: "The team understood our unique challenges as a traditional Indian business. Customer engagement increased by 250%!",
    name: "Rajesh Kumar",
    position: "CEO, Kumar Textiles",
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
    rating: 5
  },
  {
    id: 3,
    quote: "Working with Digital Mitra was a game-changer for our startup. Beautiful platform delivered ahead of schedule!",
    name: "Ananya Patel",
    position: "Co-founder, HealthFirst",
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
    rating: 5
  },
  {
    id: 4,
    quote: "Digital transformation made seamless. Their automation reduced operational costs by 40% while improving quality!",
    name: "Vikram Singh",
    position: "MD, Singh Logistics",
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
    rating: 5
  },
  {
    id: 5,
    quote: "Outstanding support and expertise. Our online revenue has doubled in just 4 months. Highly recommended!",
    name: "Meera Kapoor",
    position: "Owner, Kapoor Jewellers",
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
    rating: 5
  },
  {
    id: 6,
    quote: "The best decision we made for our business. Professional, reliable, and results-driven team!",
    name: "Arjun Reddy",
    position: "CEO, Reddy Enterprises",
    image: "/images/633b277fc2e3697bb14c6a4f-frances.png",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], position: i })
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()

  const cardVariants = {
    enter: { x: 300, opacity: 0, scale: 0.8 },
    center: { x: 0, opacity: 1, scale: 1 },
    exit: { x: -300, opacity: 0, scale: 0.8 }
  }

  return (
    <section className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1.5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-black"
            >
              Success Stories
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9]"
            >
              TRUSTED BY <br />
              <span className="text-[#5C82A3]">INDIAN HEROES.</span>
            </motion.h2>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence initial={false} mode="popLayout">
                {visibleTestimonials.map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.id}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.3 } }}
                    className={`group relative ${idx > 0 ? "hidden md:block" : ""} ${idx > 1 ? "hidden lg:block" : ""}`}
                  >
                    <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-1.5 translate-y-1.5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                    
                    <div className="relative h-full bg-white border-[3px] border-black rounded-[2rem] p-8 flex flex-col transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <div className="w-10 h-10 bg-[#FFE66D] border-2 border-black rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-black">&ldquo;</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-black text-black" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-700 font-bold text-sm leading-tight mb-8 flex-grow">
                        {testimonial.quote}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t-2 border-black/5">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-black shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-black text-xs uppercase tracking-tight">{testimonial.name}</div>
                          <div className="text-gray-500 font-bold text-[10px] uppercase">{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white border-[3px] border-black rounded-xl flex items-center justify-center hover:bg-[#FFE66D] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full border-2 border-black ${index === currentIndex ? "w-8 h-3 bg-black" : "w-3 h-3 bg-white"}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white border-[3px] border-black rounded-xl flex items-center justify-center hover:bg-[#FFE66D] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Star } from "lucide-react"

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

  // Auto-play carousel
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

  // Get visible testimonials based on screen size
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
    enter: {
      x: 300,
      opacity: 0,
      scale: 0.8
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 0.8
    }
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      nextSlide()
    } else if (swipe > swipeConfidenceThreshold) {
      prevSlide()
    }
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            What our clients say
            <br />
            about <span className="bg-[#5C82A3] text-white px-3 py-1 inline-block border-3 border-black">Digital Mitra</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            Real feedback from Indian business owners who've transformed their operations with our solutions.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.3 }
                  }}
                  className={`hover:shadow-[10px_10px_0px] transition-shadow duration-300 hover:-translate-y-2 bg-white border-4 border-black rounded-2xl p-6 flex flex-col ${idx > 0 ? "hidden md:flex" : ""
                    } ${idx > 1 ? "hidden lg:flex" : ""}`}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Image
                      src="/images/633b1c81e34cfb82b85454eb-quote-s.png"
                      alt="Quote"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-black flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-base">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>






          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={prevSlide}
              className="mr-7 bg-white border-3 border-black rounded-full p-2 md:p-2 hover:bg-[#5C82A3] hover:text-white transition-colors duration-200 z-10 shadow-lg"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${index === currentIndex
                  ? "w-10 h-3 bg-[#5C82A3]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  } rounded-full`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
            <button
              onClick={nextSlide}
              className="ml-7 bg-white border-3 border-black rounded-full p-2 md:p-2 hover:bg-[#5C82A3] hover:text-white transition-colors duration-200 z-10 shadow-lg"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

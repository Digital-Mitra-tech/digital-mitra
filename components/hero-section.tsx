"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            Digital <span className="bg-[#5C82A3] text-white px-3 py-1 inline-block">Mitra</span>, your trusted tech
            partner for <span className="bg-[#0D0D0D] text-white px-3 py-1 inline-block">Indian businesses</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            We empower Indian entrepreneurs and businesses with cutting-edge technology solutions, expert guidance, and
            dedicated support to help you thrive in the digital economy.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <Mail className="w-5 h-5" />
              Start your journey
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <FolderOpen className="w-5 h-5" />
              See our services
            </Button>
          </div>
        </div>

        <motion.div className='hidden md:block' animate={{ scale: 5, x: 900 }}>

          <iframe src="https://lottie.host/embed/3f866ecc-c514-44e0-85c4-638ccd468dec/rs1CTbrEfU.lottie"></iframe>
        </motion.div>

      </div>
    </section>
  )
}

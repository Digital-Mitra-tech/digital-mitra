import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About me illustration" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why choose <span className="bg-[#5C82A3] text-white my-3 px-3 py-2 inline-block border-3 border-black">Digital Mitra?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We offer fixed transparent pricing, fast delivery, friendly human support, and all essential digital tools
              under one roof. Our solutions are built specifically for Indian businesses, eliminating expensive setups
              and complicated software.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#5C82A3] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">10+ years of tech expertise</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Proven track record delivering innovative solutions for Indian startups and established businesses
                  alike.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#0D0D0D] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Long-term Partnership</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We don’t disappear after delivering your website — we stay with you and help your business grow month
                  after month with consistent updates.
                </p>
              </div>
            </div>
          </div>

          <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
            <User className="w-5 h-5" />
            Learn more about us
          </Button>
        </div>
      </div>
    </section>
  )
}

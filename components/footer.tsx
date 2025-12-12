import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Newsletter"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              <div className="w-full flex-1 bg-gradient-to-br from-[#5C82A3] via-[#4a6b8a] to-[#3d5770] border-4 border-black rounded-3xl py-6 px-6 md:py-8 md:px-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Stay updated with Digital Mitra! 🚀</h3>
                  <p className="text-white/90 text-sm md:text-base font-medium">Get the latest updates, tips & exclusive offers</p>
                </div>

                <div className="relative w-full md:w-auto md:min-w-[400px] lg:min-w-[480px]">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="border-3 border-white bg-white/95 rounded-xl px-4 md:px-6 h-14 md:h-16 pr-32 md:pr-44 text-base md:text-lg placeholder:text-gray-500 font-medium focus:bg-white transition-colors"
                  />
                  <Button className="absolute right-2 top-2 bottom-2 bg-black text-white hover:bg-gray-900 rounded-[10px] px-6 md:px-10 text-sm md:text-base font-bold whitespace-nowrap h-auto shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-y-0.5 transition-all">
                    Subscribe ✨
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#5C82A3] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">DM</span>
                </div>
                <span className="text-lg md:text-xl font-bold">Digital Mitra</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Your trusted technology partner for digital transformation. We help Indian businesses succeed in the
                digital economy.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#5C82A3] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#5C82A3] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#5C82A3] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#5C82A3] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#5C82A3] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/packages" className="hover:text-white transition-colors">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-white transition-colors">
                    Support Plans
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@digitalmitra.com" className="hover:text-white transition-colors">
                    hello@digitalmitra.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+91-9000057810" className="hover:text-white transition-colors">
                    +91-9000057810
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Digital Mitra - Transforming Indian Businesses Through Technology</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

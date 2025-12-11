import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { packages } from "@/lib/data"

export function ServicesSection() {
  return (
    <section id="packages" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#5C82A3]">Packages</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
              Choose the perfect plan to grow your business online. Transparent pricing, no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 flex flex-col ${service.popular
                  ? "shadow-2xl ring-2 ring-[#5C82A3] scale-105 z-10"
                  : "shadow-lg hover:shadow-xl hover:-translate-y-2 border border-gray-100"
                  }`}
              >
                {service.popular && (
                  <div className="bg-[#5C82A3] text-white text-center py-2 text-sm font-bold tracking-wide uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 relative h-48 w-full rounded-2xl bg-gray-50 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-[#5C82A3] mb-4">{service.price}</div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#5C82A3] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/packages/${service.slug}`} className="w-full">
                    <Button
                      className={`w-full h-12 text-lg font-medium rounded-xl transition-all ${service.popular
                        ? "bg-[#5C82A3] hover:bg-[#4a6b8a] text-white shadow-lg shadow-[#5C82A3]/20"
                        : "bg-gray-900 hover:bg-black text-white"
                        }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#5C82A3] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Image src="/images/get-in-touch.svg" width={300} height={300} alt="Background pattern" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to scale up?</h3>
                <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
                  Have questions about our services? Our expert team is ready to discuss the perfect solution for your business needs.
                </p>
              </div>
              <Button className="bg-white text-[#5C82A3] hover:bg-gray-50 hover:scale-105 rounded-xl px-10 py-6 text-lg font-bold shadow-lg transition-all shrink-0">
                <Mail className="w-5 h-5 mr-2" />
                Contact us today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { packageDetails } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "All Packages | Digital Mitra",
    description: "Explore our digital growth packages for Indian businesses.",
}

export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">
            <Navigation />

            <div className="pt-24 md:pt-32 pb-16 md:pb-24">
                {/* Header */}
                <div className="container mx-auto px-4 mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Digital Packages</h1>
                    <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                        Everything you need to launch and grow your business online.
                    </p>
                </div>

                {/* Vertical List / Rows */}
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-6">
                        {packageDetails.map((pkg) => (
                            <div key={pkg.slug} className="group relative bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 rounded-[2rem] overflow-hidden">

                                {/* Timeline Badge */}
                                <div className="absolute top-0 right-0 bg-[#0D0D0D] text-white text-[10px] font-bold px-3 py-1 border-l-[3px] border-b-[3px] border-white z-10 rounded-bl-xl">
                                    {pkg.timeline.totalDays} Days Delivery
                                </div>

                                <div className="flex flex-col lg:flex-row lg:items-center">

                                    {/* Column 1: Info (Title & Desc) */}
                                    <div className="p-8 lg:w-[35%] lg:border-r-[3px] lg:border-dashed lg:border-gray-300">
                                        <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
                                        <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                            {pkg.shortDescription}
                                        </p>
                                    </div>

                                    {/* Column 2: Price */}
                                    <div className="p-8 lg:w-[20%] lg:border-r-[3px] lg:border-dashed lg:border-gray-300 flex items-center lg:justify-center bg-gray-50/50">
                                        <div>
                                            <div className="text-3xl font-black text-gray-900 mb-1">{pkg.price}</div>
                                            {pkg.mrp && <div className="text-sm text-gray-400 line-through font-bold">{pkg.mrp}</div>}
                                            <div className="text-[10px] font-bold text-[#5C82A3] mt-2 bg-[#5C82A3]/10 px-2 py-1 rounded inline-block">
                                                One-time Fee
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 3: Features */}
                                    <div className="p-8 lg:w-[25%] lg:border-r-[3px] lg:border-dashed lg:border-gray-300">
                                        <div className="space-y-2">
                                            {pkg.whatsIncluded.slice(0, 3).map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className="w-4 h-4 rounded-full bg-[#5C82A3] flex items-center justify-center shrink-0">
                                                        <Check className="w-3 h-3 text-white stroke-[3px]" />
                                                    </div>
                                                    <span className="text-xs font-bold text-gray-700">{item.title}</span>
                                                </div>
                                            ))}
                                            {pkg.whatsIncluded.length > 3 && (
                                                <div className="pl-6 text-xs font-bold text-gray-400">
                                                    + {pkg.whatsIncluded.length - 3} more
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Column 4: Action */}
                                    <div className="p-8 lg:w-[20%] flex items-center justify-center">
                                        <Link href={`/packages/${pkg.slug}`} className="w-full">
                                            <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl py-6 text-lg font-bold border-2 border-black transition-all">
                                                View
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    )
}

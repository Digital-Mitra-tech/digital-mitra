"use client";
import { supportPlanDetails } from "@/lib/data"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function SupportListingPage() {
    useSmoothScroll();
    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">

            <div className="pt-24 md:pt-32 pb-16 md:pb-24">
                {/* Header */}
                <div className="container mx-auto px-4 mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Support & Maintenance</h1>
                    <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                        Choose the right level of care for your digital business.
                    </p>
                </div>

                {/* Vertical List / Rows */}
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-6">
                        {supportPlanDetails.map((plan) => (
                            <div key={plan.slug} className="group relative bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 rounded-xl overflow-hidden">

                                {/* Popular Badge specific logic per layout */}
                                {plan.title === "Mitra Care+" && (
                                    <div className="absolute top-0 right-0 bg-[#5C82A3] text-white text-[10px] font-bold px-3 py-1 border-l-[3px] border-b-[3px] border-black uppercase tracking-widest z-10">
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex flex-col lg:flex-row lg:items-center">

                                    {/* Column 1: Info (Title & Desc) */}
                                    <div className="p-6 lg:w-[30%] lg:border-r-[3px] lg:border-dashed lg:border-gray-300">
                                        <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                                        <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                            {plan.shortDescription}
                                        </p>
                                    </div>

                                    {/* Column 2: Price */}
                                    <div className="p-6 lg:w-[20%] lg:border-r-[3px] lg:border-dashed lg:border-gray-300 flex items-center lg:justify-center bg-gray-50/50">
                                        <div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-3xl font-black text-[#5C82A3]">{plan.price}</span>
                                                <span className="text-sm font-bold text-gray-500">/{plan.period}</span>
                                            </div>
                                            <div className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wide">
                                                Billed Monthly
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 3: Features */}
                                    <div className="p-6 lg:w-[30%] lg:border-r-[3px] lg:border-dashed lg:border-gray-300">
                                        <div className="space-y-2">
                                            {plan.includedServices.slice(0, 3).map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center shrink-0">
                                                        <Check className="w-3 h-3 text-white stroke-[3px]" />
                                                    </div>
                                                    <span className="text-xs font-bold text-gray-700">{item.title}</span>
                                                </div>
                                            ))}
                                            {plan.includedServices.length > 3 && (
                                                <div className="pl-6 text-xs font-bold text-gray-400">
                                                    + {plan.includedServices.length - 3} more
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Column 4: Action */}
                                    <div className="p-6 lg:w-[20%] flex items-center justify-center">
                                        <Link href={`/support/${plan.slug}`} className="w-full">
                                            <Button className={`w-full rounded-lg py-6 text-sm font-bold border-[3px] border-black transition-all ${plan.title === "Mitra Care+"
                                                ? "bg-[#5C82A3] text-white hover:bg-[#4a6b8a]"
                                                : "bg-white text-black hover:bg-gray-50"
                                                }`}>
                                                View Details
                                                <ArrowRight className="w-4 h-4 ml-2" />
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

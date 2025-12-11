"use client"

import { Check, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { supportPlans } from "@/lib/data"

export function SupportSection() {
    return (
        <section id="support" className="bg-gray-50 py-16 md:py-24 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Support & <span className="text-[#5C82A3]">Maintenance</span> Plans
                        </h2>
                        <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
                            Ensure your business keeps running smoothly with our dedicated support plans.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 ${plan.highlight
                                    ? "shadow-xl ring-2 ring-[#5C82A3] scale-105 z-10"
                                    : "shadow-md hover:shadow-lg hover:-translate-y-1 border border-gray-100"
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="bg-[#5C82A3] text-white text-xs font-bold text-center py-1.5 uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-3xl font-bold text-[#5C82A3]">{plan.price}</span>
                                        <span className="text-gray-500 ml-1 font-medium">{plan.period}</span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                                    <div className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2.5">
                                                <Check className="w-4 h-4 text-[#5C82A3] shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/support/${plan.slug}`} className="w-full mt-auto">
                                        <Button
                                            variant={plan.highlight ? "default" : "outline"}
                                            className={`w-full rounded-xl font-semibold ${plan.highlight
                                                ? "bg-[#5C82A3] hover:bg-[#4a6b8a]"
                                                : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-black"
                                                }`}
                                        >
                                            Choose Plan
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

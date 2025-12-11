
import { supportPlanDetails } from "@/lib/data"
import { notFound } from "next/navigation"
import { Check, Mail, ArrowLeft, ShieldCheck, Clock, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export async function generateStaticParams() {
    return supportPlanDetails.map((plan) => ({
        slug: plan.slug,
    }))
}

export default async function SupportPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const plan = supportPlanDetails.find((p) => p.slug === slug)

    if (!plan) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="container mx-auto px-4 pt-28">
                <Link href="/#support" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#5C82A3] transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Plans
                </Link>
            </div>

            {/* Hero Section */}
            <section className="pb-16 pt-8 bg-gradient-to-b from-white to-gray-50/80">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#5C82A3]/10 text-[#5C82A3] font-bold text-sm mb-6 uppercase tracking-wider">
                            Support Plan
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">{plan.title}</h1>
                        <div className="flex items-baseline justify-center gap-2 mb-8">
                            <p className="text-4xl md:text-6xl text-[#5C82A3] font-bold">{plan.price}</p>
                            <span className="text-gray-500 text-xl font-medium">/{plan.period}</span>
                        </div>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            {plan.shortDescription}
                        </p>

                        <div className="mt-10 flex justify-center">
                            <Button className="bg-[#5C82A3] hover:bg-[#4a6b8a] text-white rounded-xl px-10 py-6 text-lg h-auto shadow-lg shadow-[#5C82A3]/20 transition-all hover:scale-105">
                                Choose {plan.title}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    <Check className="w-6 h-6" />
                                </div>
                                What's Included
                            </h3>
                            <div className="space-y-6">
                                {plan.includedServices.map((service, idx) => (
                                    <div key={idx} className="flex flex-col gap-1">
                                        <div className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="font-bold text-gray-900">{service.title}</span>
                                        </div>
                                        <p className="text-gray-500 text-sm pl-8">{service.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-dashed border-gray-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-gray-400">What's Not Included</h3>
                            <ul className="space-y-4">
                                {plan.exclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                                <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Need more?</h4>
                                <p className="text-gray-600 text-sm mb-4">Check out higher tiers for more features or bespoke development.</p>
                                {plan.upgradePath.length > 0 && (
                                    <Link href={`/support/${plan.upgradePath[0]}`} className="text-[#5C82A3] font-bold text-sm hover:underline">
                                        View Upgrade Options &rarr;
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLA & Support Specs */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Service Level Agreement (SLA)</h2>
                        <p className="text-gray-400">Our commitment to your peace of mind.</p>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#5C82A3]/50 transition-colors">
                            <Clock className="w-10 h-10 text-[#5C82A3] mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Response Time</h3>
                            <p className="text-gray-300">{plan.sla.responseTime}</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#5C82A3]/50 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-[#5C82A3] mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Critical Issues</h3>
                            <p className="text-gray-300">{plan.sla.criticalIssueHandling}</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#5C82A3]/50 transition-colors">
                            <Headphones className="w-10 h-10 text-[#5C82A3] mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Support Hours</h3>
                            <p className="text-gray-300">{plan.sla.supportHours}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Onboarding */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Simple Onboarding Process</h2>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            {plan.onboarding.map((step, idx) => (
                                <div key={idx} className="flex-1 bg-white shadow-sm border border-gray-100 p-6 rounded-2xl">
                                    <span className="block w-8 h-8 rounded-full bg-[#5C82A3] text-white font-bold flex items-center justify-center mx-auto mb-4">{idx + 1}</span>
                                    <p className="font-medium text-gray-800">{step}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 mt-8 text-sm">Cancellation Policy: {plan.cancellation}</p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
                    <div className="space-y-4">
                        {plan.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

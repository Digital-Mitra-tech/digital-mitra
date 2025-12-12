import { supportPlanDetails } from "@/lib/data"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2, Clock, AlertCircle, Phone, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export async function generateStaticParams() {
    return supportPlanDetails.map((plan) => ({
        slug: plan.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const plan = supportPlanDetails.find((p) => p.slug === slug)
    if (!plan) return {}

    return {
        title: plan.seoMeta.title,
        description: plan.seoMeta.description,
    }
}

export default async function SupportPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const plan = supportPlanDetails.find((p) => p.slug === slug)

    if (!plan) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">
            <Navigation />

            <div className="pt-24 md:pt-32">
                {/* Back Button */}
                <div className="container mx-auto px-4 mb-8">
                    <Link href="/#support" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#5C82A3] transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Support Plans
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="pb-16 md:pb-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-block px-4 py-1.5 bg-[#5C82A3] border-2 border-black text-white rounded-lg text-sm font-bold tracking-wide uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                                    {plan.title}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                    {plan.shortDescription}
                                </h1>

                                <div className="flex justify-center items-baseline gap-2 mb-8">
                                    <span className="text-5xl md:text-7xl font-black text-gray-900">{plan.price}</span>
                                    <span className="text-xl md:text-2xl text-gray-500 font-bold">/{plan.period}</span>
                                </div>

                                <div className="flex justify-center">
                                    <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-6 px-12 text-xl font-bold border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all h-auto">
                                        Susbscribe Now
                                        <ArrowRight className="w-6 h-6 ml-2" />
                                    </Button>
                                </div>
                            </div>

                            {/* SLA Cards */}
                            <div className="grid md:grid-cols-3 gap-6 mb-16">
                                <div className="bg-white p-6 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
                                    <Clock className="w-8 h-8 mx-auto mb-3 text-[#5C82A3] stroke-[2.5px]" />
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Response Time</div>
                                    <div className="text-xl font-bold">{plan.sla.responseTime}</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
                                    <AlertCircle className="w-8 h-8 mx-auto mb-3 text-[#5C82A3] stroke-[2.5px]" />
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Critical Issues</div>
                                    <div className="text-lg font-bold leading-tight">{plan.sla.criticalIssueHandling}</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
                                    <Phone className="w-8 h-8 mx-auto mb-3 text-[#5C82A3] stroke-[2.5px]" />
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Support Hours</div>
                                    <div className="text-lg font-bold leading-tight">{plan.sla.supportHours}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Included Services */}
                <section className="py-20 bg-white border-y-[3px] border-black">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">What&apos;s Included</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {plan.includedServices.map((service, idx) => (
                                    <div key={idx} className="bg-[#F5F5F5] p-8 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                                        <div className="mb-4 text-[#5C82A3]">
                                            <ShieldCheck className="w-10 h-10 stroke-[2px]" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                        <p className="text-gray-700 font-medium">{service.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Exclusions & Onboarding */}
                <section className="py-20 bg-[#F5F5F5]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                            {/* Exclusions */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-lg font-black">!</span>
                                    What&apos;s Excluded
                                </h3>
                                <ul className="space-y-4">
                                    {plan.exclusions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 font-medium text-gray-700">
                                            <span className="w-2 h-2 mt-2 bg-gray-400 rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-300">
                                    <p className="text-sm font-medium text-gray-500">
                                        <span className="font-bold text-black">Cancellation Policy:</span> {plan.cancellation}
                                    </p>
                                </div>
                            </div>

                            {/* Onboarding */}
                            <div className="bg-[#5C82A3] p-8 md:p-10 rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <CheckCircle2 className="w-8 h-8" />
                                    Getting Started
                                </h3>
                                <p className="font-medium opacity-90 mb-6">Once you subscribe, here is what happens next:</p>

                                <div className="space-y-6">
                                    {plan.onboarding.map((step, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-black text-white border-2 border-white flex items-center justify-center font-bold shrink-0">
                                                {idx + 1}
                                            </div>
                                            <span className="font-bold text-lg">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white border-t-[3px] border-black">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                            <HelpCircle className="w-8 h-8" />
                            Common Questions
                        </h2>
                        <div className="space-y-6">
                            {plan.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-[#F5F5F5] border-[3px] border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.q}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    )
}

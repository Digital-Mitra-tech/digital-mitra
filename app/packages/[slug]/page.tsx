
import { packageDetails } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { CheckCircle2, Check, ArrowRight, Layout, Phone, Banknote, Globe, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export async function generateStaticParams() {
    return packageDetails.map((pkg) => ({
        slug: pkg.slug,
    }))
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const pkg = packageDetails.find((p) => p.slug === slug)

    if (!pkg) {
        notFound()
    }

    // Helper icons for checklist - cycling through a few for variety if needed, 
    // but keeping it simple with CheckCircle2 for now.

    return (
        <main className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="container mx-auto px-4 pt-28">
                <Link href="/#packages" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#5C82A3] transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Packages
                </Link>
            </div>

            {/* Hero Section */}
            <section className="pb-16 pt-8 md:pt-12 bg-gradient-to-b from-white to-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-[#5C82A3]/10 text-[#5C82A3] rounded-full text-sm font-bold tracking-wide uppercase">
                                {pkg.title}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {pkg.hero.headline}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                                {pkg.hero.subHeadline}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button className="bg-[#0B0B0B] hover:bg-black/90 text-white rounded-xl px-8 py-6 text-lg h-auto shadow-lg shadow-black/5 hover:-translate-y-1 transition-all">
                                    {pkg.hero.ctaPrimary}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button variant="outline" className="border-gray-200 hover:border-[#5C82A3] text-gray-700 hover:text-[#5C82A3] rounded-xl px-8 py-6 text-lg h-auto hover:bg-gray-50 transition-all">
                                    {pkg.hero.ctaSecondary}
                                </Button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                                <span className="flex items-center"><Check className="w-4 h-4 mr-1 text-green-500" /> No hidden fees</span>
                                <span className="flex items-center"><Check className="w-4 h-4 mr-1 text-green-500" /> {pkg.timeline.totalDays} days delivery</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#5C82A3]/5 to-transparent rounded-[40px] transform rotate-3 scale-105"></div>
                            <div className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 p-8 min-h-[400px] flex flex-col justify-center items-center">
                                {/* Placeholder for actual product screenshot/mockup */}
                                <div className="relative w-full h-[300px]">
                                    <Image
                                        src={`/images/${pkg.slug}.svg`}
                                        alt={pkg.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                {/* Fallback specific logic could go here if image isn't found, but we trust the data structure for now. */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
                        <p className="text-gray-600 text-lg">Comprehensive tools and services included in your plan.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pkg.whatsIncluded.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100 group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#5C82A3] group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-[#0B0B0B] text-white">
                <div className="container mx-auto px-4">
                    <div className="mb-16 md:text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Timeline</h2>
                        <p className="text-gray-400 text-lg">From kickoff to launch in {pkg.timeline.totalDays} days.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#5C82A3] before:to-transparent">
                            {pkg.timeline.steps.map((step, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#5C82A3] bg-[#0B0B0B] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-[#5C82A3] font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#5C82A3]/50 transition-colors">
                                        <div className="text-[#5C82A3] font-bold text-sm mb-1 uppercase tracking-wider">{step.dayRange}</div>
                                        <div className="font-medium text-lg text-gray-100">{step.activity}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Breakdown & Addons */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Transparent Pricing</h2>
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="p-8 border-b border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-lg font-medium text-gray-600">Total Package Cost</span>
                                        <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm">One-time payment. No monthly subscription for the website build.</p>
                                </div>
                                <div className="p-8 bg-gray-50/50">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Banknote className="w-5 h-5 text-[#5C82A3]" /> Cost Breakdown</h4>
                                    <div className="space-y-3">
                                        {pkg.pricingBreakdown.lumpsum.map((item, idx) => (
                                            <div key={idx} className="flex justify-between text-gray-700 bg-white p-4 rounded-xl border border-gray-100">
                                                <span>{item.label}</span>
                                                <span className="font-bold">{item.amount}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h4 className="font-bold text-gray-900 mb-4">Start with:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {pkg.paymentOptions.map((opt, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">{opt}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Optional Add-ons</h3>
                            <div className="space-y-4">
                                {pkg.pricingBreakdown.optionalAddons.map((addon, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#5C82A3] transition-colors cursor-pointer group">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-gray-900 group-hover:text-[#5C82A3] transition-colors">{addon.title}</h4>
                                            <CheckCircle2 className="w-5 h-5 text-gray-300 group-hover:text-[#5C82A3]" />
                                        </div>
                                        <p className="text-[#5C82A3] font-bold">{addon.price}</p>
                                    </div>
                                ))}
                                <div className="bg-[#5C82A3]/5 p-6 rounded-2xl border border-[#5C82A3]/20">
                                    <p className="text-gray-700 text-sm">Need something properly custom? We can quote for specific requirements.</p>
                                    <Link href="/#contact" className="text-[#5C82A3] font-bold text-sm mt-2 block hover:underline">Contact Sales &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Onboarding Checklist */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-[#F8FAFC] rounded-[32px] p-8 md:p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5C82A3]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">To get started, you'll need:</h2>
                            <p className="text-gray-500">Have these ready to speed up the process.</p>
                        </div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-x-12 gap-y-4">
                            {pkg.onboardingChecklist.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#5C82A3] shadow-sm">
                                        <span className="text-xs font-bold">{idx + 1}</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {pkg.faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 pb-6 last:border-0">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#5C82A3] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to launch?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Get your business online with the {pkg.title} today. Fast, professional, and affordable.</p>
                    <Button className="bg-white text-[#5C82A3] hover:bg-gray-100 hover:scale-105 transition-all text-xl px-10 py-8 rounded-2xl shadow-2xl h-auto font-bold">
                        Get Started Now
                        <ArrowRight className="w-6 h-6 ml-2" />
                    </Button>
                </div>
            </section>
        </main>
    )
}

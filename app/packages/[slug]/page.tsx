import { packageDetails } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { CheckCircle2, Check, ArrowRight, Banknote, ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"


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

    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">
            <Navigation />

            <div className="pt-24 md:pt-32">
                {/* Back Button */}
                <div className="container mx-auto px-4 mb-8">
                    <Link href="/#packages" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#5C82A3] transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Packages
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="pb-16 md:pb-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-1.5 bg-[#5C82A3] border-2 border-black text-white rounded-lg text-sm font-bold tracking-wide uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    {pkg.title}
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    {pkg.hero.headline}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg font-medium">
                                    {pkg.hero.subHeadline}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-6 px-8 text-lg font-bold border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all h-auto">
                                        {pkg.hero.ctaPrimary}
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                    <Button variant="outline" className="bg-white text-black hover:bg-gray-50 rounded-lg py-6 px-8 text-lg font-bold border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all h-auto">
                                        {pkg.hero.ctaSecondary}
                                    </Button>
                                </div>

                                <div className="flex items-center gap-6 text-sm font-bold text-gray-600 pt-2">
                                    <span className="flex items-center"><Check className="w-5 h-5 mr-2 text-[#5C82A3] stroke-[3px]" /> No hidden fees</span>
                                    <span className="flex items-center"><Check className="w-5 h-5 mr-2 text-[#5C82A3] stroke-[3px]" /> {pkg.timeline.totalDays} days delivery</span>
                                </div>
                            </div>

                            <div className="relative">
                                {/* Retro Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5C82A3] rounded-full border-[3px] border-black -z-10"></div>
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-200 rounded-full border-[3px] border-black -z-10"></div>

                                <div className="relative bg-white rounded-[2rem] border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden p-8 min-h-[400px] flex flex-col justify-center items-center">
                                    <div className="relative w-full h-[300px]">
                                        <Image
                                            src={`/images/${pkg.slug}.svg`}
                                            alt={pkg.title}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What's Included Grid */}
                <section className="py-20 bg-white border-y-[3px] border-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything You Need</h2>
                            <p className="text-gray-600 text-xl font-medium">Comprehensive tools and services included in your plan.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pkg.whatsIncluded.map((item, idx) => (
                                <div key={idx} className="bg-[#F5F5F5] rounded-xl p-8 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all duration-200 group">
                                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-200 border-2 border-black">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-20 bg-[#0B0B0B] text-white">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 md:text-center">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Project Timeline</h2>
                            <p className="text-gray-400 text-xl">From kickoff to launch in {pkg.timeline.totalDays} days.</p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-[#5C82A3]">
                                {pkg.timeline.steps.map((step, idx) => (
                                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-[3px] border-[#5C82A3] bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-[#5C82A3] font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1a1a1a] p-6 rounded-xl border-[3px] border-gray-800 hover:border-[#5C82A3] transition-colors shadow-[4px_4px_0px_0px_rgba(92,130,163,0.3)]">
                                            <div className="text-[#5C82A3] font-bold text-sm mb-2 uppercase tracking-wider">{step.dayRange}</div>
                                            <div className="font-bold text-lg text-white">{step.activity}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Breakdown & Addons */}
                <section className="py-20 bg-[#F5F5F5]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Transparent Pricing</h2>
                                <div className="bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                                    <div className="p-8 border-b-[3px] border-black">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                                            <span className="text-xl font-bold text-gray-600">Total Package Cost</span>
                                            <span className="text-4xl font-black text-gray-900">{pkg.price}</span>
                                        </div>
                                        <p className="text-gray-500 font-medium">One-time payment. No monthly subscription for the website build.</p>
                                    </div>
                                    <div className="p-8 bg-gray-50">
                                        <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg"><Banknote className="w-6 h-6 text-[#5C82A3]" /> Cost Breakdown</h4>
                                        <div className="space-y-4">
                                            {pkg.pricingBreakdown.lumpsum.map((item, idx) => (
                                                <div key={idx} className="flex justify-between text-gray-800 bg-white p-4 rounded-xl border-2 border-gray-200">
                                                    <span className="font-medium">{item.label}</span>
                                                    <span className="font-bold">{item.amount}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-8 border-t-[3px] border-black">
                                        <h4 className="font-bold text-gray-900 mb-4">Payment Options:</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {pkg.paymentOptions.map((opt, idx) => (
                                                <span key={idx} className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold border-2 border-black">{opt}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Optional Add-ons</h3>
                                <div className="space-y-4">
                                    {pkg.pricingBreakdown.optionalAddons.map((addon, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all cursor-pointer group">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-gray-900 group-hover:text-[#5C82A3] transition-colors">{addon.title}</h4>
                                                <CheckCircle2 className="w-5 h-5 text-gray-300 group-hover:text-[#5C82A3]" />
                                            </div>
                                            <p className="text-[#5C82A3] font-bold text-lg">{addon.price}</p>
                                        </div>
                                    ))}
                                    <div className="bg-[#5C82A3] p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white">
                                        <p className="font-bold text-lg mb-2">Need something else?</p>
                                        <p className="text-white/90 text-sm mb-4">We can quote for specific requirements that aren&apos;t listed here.</p>
                                        <Link href="/#contact" className="inline-block bg-white text-black font-bold px-4 py-2 rounded-lg border-2 border-black hover:bg-gray-100 transition-colors text-sm">Contact Sales &rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Onboarding Checklist */}
                <section className="py-20 bg-white border-y-[3px] border-black relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto bg-[#F5F5F5] rounded-3xl border-[3px] border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">To get started, you&apos;ll need:</h2>
                                <p className="text-gray-600 font-medium">Have these ready to speed up the process.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                {pkg.onboardingChecklist.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-white border-[2px] border-black flex items-center justify-center shrink-0 mt-0.5 text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            <span className="text-sm">{idx + 1}</span>
                                        </div>
                                        <span className="text-gray-800 font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-[#F5F5F5]">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {pkg.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white border-[3px] border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.q}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-[#5C82A3] relative overflow-hidden border-t-[3px] border-black">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-block px-6 py-2 bg-black text-white rounded-full font-bold uppercase tracking-widest mb-6 border-2 border-white">
                            Ready to Launch?
                        </div>
                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Get your business online with<br /> the <span className="underline decoration-4 underline-offset-4">{pkg.title}</span> today.
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                            Fast, professional, and affordable. Join hundreds of Indian businesses growing with Digital Mitra.
                        </p>
                        <Button className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all text-xl px-12 py-8 rounded-xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-auto font-bold">
                            Get Started Now
                            <ArrowRight className="w-6 h-6 ml-2" />
                        </Button>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}

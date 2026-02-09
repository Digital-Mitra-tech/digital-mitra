"use client"

import Image from "next/image"
import { User, CheckCircle, Target, Heart, Zap, Shield, Search, Lightbulb, Code2, Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import Link from "next/link"

export function AboutClient() {
    useSmoothScroll()

    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">
            <div className="pt-24 md:pt-32 pb-0">
                {/* Header */}
                <div className="container mx-auto px-4 mb-20 text-center">
                    <div className="inline-block bg-[#E0E7FF] text-[#3730A3] px-4 py-1.5 rounded-full font-bold text-sm mb-6 border-2 border-[#3730A3]">
                        Our Story
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                        Building the digital future <br className="hidden md:block" /> of <span className="relative inline-block">
                            Indian Businesses
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FF6B6B]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 90.0003 1.00002 198.001 3.50002" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        We are a team of passionate developers, designers, and strategists committed to democratizing technology for every business, big or small.
                    </p>
                </div>

                {/* Mission Section */}
                <section className="bg-white border-y-[3px] border-black py-20 px-4">
                    <div className="container mx-auto">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-5xl font-bold">Our Mission</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        At Digital Mitra, we believe that <span className="text-[#0D0D0D] font-bold bg-[#FFEB3B] px-1">technology should be an enabler, not a barrier.</span> Too many small businesses get left behind because digital transformation feels too complex or too expensive.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        Our goal is simple: to provide accessible, high-quality, and transparent digital solutions that help Indian entrepreneurs scale their dreams and compete on a global stage.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-[#E0F2F1] rounded-xl flex items-center justify-center border-2 border-[#00695C]">
                                                <Target className="w-6 h-6 text-[#00695C]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Goal Oriented</h4>
                                                <p className="text-sm text-gray-500">Results that matter</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-[#FCE4EC] rounded-xl flex items-center justify-center border-2 border-[#880E4F]">
                                                <Heart className="w-6 h-6 text-[#880E4F]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Client First</h4>
                                                <p className="text-sm text-gray-500">Built with love</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#5C82A3] rounded-[2rem] translate-x-3 translate-y-3 border-[3px] border-black"></div>
                                    <div className="relative bg-white rounded-[2rem] overflow-hidden border-[3px] border-black aspect-video flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <span className="text-6xl md:text-8xl font-black text-[#0D0D0D]">500+</span>
                                            <p className="text-xl md:text-2xl font-bold text-gray-500 mt-2">Businesses Transformed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Existing "Why Choose Us" Content - Refined */}
                <section className="container mx-auto px-4 py-20 md:py-32">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="flex justify-center order-2 md:order-1">
                            <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
                                <Image src="/images/about-me.svg" alt="About me illustration" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="space-y-8 order-1 md:order-2">
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                    Why choose <span className="bg-[#5C82A3] text-white my-3 px-3 py-2 inline-block border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Digital Mitra?</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    We don't just build websites; we build business assets. We offer fixed transparent pricing, fast delivery, and human support.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-[#5C82A3] border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">10+ Years Expertise</h3>
                                            <p className="text-gray-600 text-sm">
                                                Proven track record delivering innovative solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-[#0D0D0D] border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Long-term Partnership</h3>
                                            <p className="text-gray-600 text-sm">
                                                We stay with you and help your business grow.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="bg-[#0D0D0D] text-white py-24 px-4 overflow-hidden relative">
                    <div className="container mx-auto relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
                            <p className="text-gray-400 text-lg">The principles that guide every decision we make.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {[
                                { title: "Transparency", icon: Search, desc: "No hidden fees, no jargon. We keep everything clear and honest from day one.", color: "bg-[#FF6B6B]" },
                                { title: "Speed", icon: Zap, desc: "Business moves fast, and so do we. We deliver high-quality work without the wait.", color: "bg-[#FFD93D]" },
                                { title: "Quality", icon: Shield, desc: "We don't cut corners. Every line of code is written with performance and security in mind.", color: "bg-[#4D96FF]" }
                            ].map((value, i) => (
                                <div key={i} className="bg-[#1A1A1A] p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition-colors group">
                                    <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center border-[3px] border-black mb-6 group-hover:scale-110 transition-transform`}>
                                        <value.icon className="w-7 h-7 text-black stroke-[2.5px]" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24 px-4">
                    <div className="container mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
                            <p className="text-gray-600 text-lg font-medium">From idea to launch in 4 simple steps.</p>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-4 gap-8">
                                {[
                                    { step: "01", title: "Discovery", icon: Lightbulb, desc: "We learn about your business goals and requirements." },
                                    { step: "02", title: "Strategy", icon: Target, desc: "We plan the roadmap and design the perfect solution." },
                                    { step: "03", title: "Build", icon: Code2, desc: "Our expert team develops your project with precision." },
                                    { step: "04", title: "Launch", icon: Rocket, desc: "We go live and support your growth journey." }
                                ].map((process, i) => (
                                    <div key={i} className="relative">
                                        {/* Connector Line (Desktop) */}
                                        {i < 3 && (
                                            <div className="hidden md:block absolute top-10 left-1/2 w-full h-[3px] bg-gray-200 -z-10"></div>
                                        )}

                                        <div className="bg-white p-6 rounded-[2rem] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                                            <div className="w-20 h-20 bg-white rounded-full border-[3px] border-black flex items-center justify-center mb-6 relative">
                                                <div className="absolute -top-3 -right-3 bg-[#5C82A3] text-white text-xs font-bold px-2 py-1 rounded-md border-2 border-black border-dashed">
                                                    Step {process.step}
                                                </div>
                                                <process.icon className="w-8 h-8 text-black" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                                            <p className="text-sm text-gray-600">{process.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 pb-24">
                    <div className="bg-[#5C82A3] rounded-[2.5rem] p-8 md:p-16 text-center border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your business?</h2>
                            <p className="text-white/90 text-lg md:text-xl mb-10 font-medium">
                                Join 500+ businesses that trust Digital Mitra for their technology needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/packages">
                                    <Button className="bg-white text-black hover:bg-gray-100 rounded-xl py-6 px-8 text-lg font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all w-full sm:w-auto">
                                        View Packages
                                    </Button>
                                </Link>
                                <Link href="/support">
                                    <Button className="bg-black text-white hover:bg-gray-900 rounded-xl py-6 px-8 text-lg font-bold border-2 border-white/20 hover:border-black transition-all w-full sm:w-auto">
                                        Contact Sales
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    )
}

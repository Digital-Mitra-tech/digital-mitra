"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { Footer } from "@/components/footer"
import { ArrowRight, Users, Target, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
    useSmoothScroll()

    const scrollTextRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: scrollTextRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

    return (
        <main className="min-h-screen bg-[#F5F5F5]">
            {/* Hero/Landing Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5C82A3] via-[#4a6b8a] to-[#3d5770] text-white pt-24 pb-16">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full mb-8"
                        >
                            <span className="font-bold text-sm tracking-wider uppercase">About Digital Mitra</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        >
                            Your Trusted Partner in
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                Digital Transformation
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium leading-relaxed"
                        >
                            We empower Indian businesses to thrive in the digital age with cutting-edge technology solutions,
                            personalized support, and a commitment to your success.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button className="bg-white text-[#5C82A3] hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
                                Get Started
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold rounded-xl transition-all">
                                Our Work
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Scroll-Driven Text Section */}
            <section ref={scrollTextRef} className="min-h-screen flex items-center justify-center py-32 bg-white">
                <motion.div
                    style={{ opacity, scale }}
                    className="container mx-auto px-4"
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-gray-900 mb-8">
                            We believe in the{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5C82A3] to-[#3d5770]">
                                power of technology
                            </span>{" "}
                            to transform businesses
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                            Our mission is to make digital transformation accessible, affordable, and effective for every Indian business,
                            regardless of size or industry.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Bento Grid Section */}
            <section className="py-24 bg-[#F5F5F5]">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">Why Choose Digital Mitra?</h2>
                            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                                We combine expertise, innovation, and dedication to deliver exceptional results
                            </p>
                        </div>

                        {/* Bento Grid - Complex Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[200px]">

                            {/* Left Column - Tall Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="md:col-span-2 md:row-span-2 bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-14 h-14 bg-[#FF9447] rounded-2xl flex items-center justify-center mb-6">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Zapier Integration</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        Unlock effortless automation. Your gateway to effortless automation connect your favourite apps, streamline workflows, and supercharge productivity with ease.
                                    </p>
                                </div>
                                <button className="flex items-center gap-2 text-[#FF9447] font-bold hover:gap-3 transition-all mt-4">
                                    <span>Configure</span>
                                    <div className="w-3 h-3 bg-[#FF9447] rounded-full"></div>
                                </button>
                            </motion.div>

                            {/* Top Middle - Small Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="md:col-span-2 md:row-span-1 bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex items-center justify-between"
                            >
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Trackers Connected</h3>
                                    <p className="text-sm text-gray-500">03 Active Integrations</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                                    <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
                                    <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
                                </div>
                            </motion.div>

                            {/* Top Right - Large Number Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="md:col-span-2 md:row-span-1 bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex items-center justify-center"
                            >
                                <h2 className="text-7xl md:text-8xl font-black">10X</h2>
                            </motion.div>

                            {/* Bottom Middle - Large Percentage Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="md:col-span-2 md:row-span-1 bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h3 className="text-sm font-bold mb-1">Focusing</h3>
                                        <p className="text-xs text-gray-500">Productivity Analytics</p>
                                    </div>
                                    <span className="text-xs font-bold text-orange-500 bg-orange-100 px-3 py-1 rounded-full">Range Ratio</span>
                                </div>
                                <h2 className="text-6xl font-black mb-2">42%</h2>
                                <div className="flex justify-between text-xs text-gray-500 font-medium">
                                    <span>Maximum of focus</span>
                                    <span>Monthly Focus</span>
                                </div>
                            </motion.div>

                            {/* Bottom Right - Team's Productivity Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="md:col-span-2 md:row-span-1 bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
                            >
                                <h3 className="text-xl font-bold mb-3">Team's Productivity</h3>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                    Boost your team's efficiency with our next-gen productivity solutions.
                                </p>
                            </motion.div>

                            {/* Full Width Bottom - Shortcut Keys Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="md:col-span-6 md:row-span-1 bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shrink-0">
                                        <span className="text-white font-bold text-xl">⌘</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Shortcut Keys</h3>
                                        <p className="text-sm text-gray-500">Faster easier way to access the features..</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-3">
                                    <kbd className="px-3 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg font-mono text-sm font-bold">⌘</kbd>
                                    <span className="text-2xl font-bold">+</span>
                                    <kbd className="px-3 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg font-mono text-sm font-bold">⌃</kbd>
                                    <span className="text-2xl font-bold">+</span>
                                    <kbd className="px-3 py-2 bg-gray-100 border-2 border-gray-300 rounded-lg font-mono text-sm font-bold text-red-500">M</kbd>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

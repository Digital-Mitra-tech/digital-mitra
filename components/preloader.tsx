"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time or wait for window load
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F5F5F5]"
                >
                    <div className="relative flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-[4px] border-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src="/logos/logo.svg"
                                    alt="Digital Mitra Logo"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-8 text-2xl font-bold tracking-wider"
                        >
                            DIGITAL MITRA
                        </motion.h1>

                        {/* Loading Bar */}
                        <div className="mt-8 w-48 h-2 bg-gray-200 rounded-full overflow-hidden border-2 border-black">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                                className="h-full bg-[#5C82A3]"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

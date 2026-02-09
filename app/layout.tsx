import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: {
    default: "Digital Mitra - Building the Digital Future",
    template: "%s | Digital Mitra",
  },
  description: "Transforming Indian businesses with accessible technology solutions. We provide high-quality, transparent, and fast digital services.",
  keywords: ["Digital Mitra", "Web Development", "SEO", "Digital Marketing", "Indian Businesses", "Small Business Tech"],
  authors: [{ name: "Digital Mitra Team" }],
  creator: "Digital Mitra",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitalmitra.co", // Keeping it generic as requested or based on project name inference
    title: "Digital Mitra - Building the Digital Future",
    description: "Transforming Indian businesses with accessible technology solutions.",
    siteName: "Digital Mitra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Mitra - Building the Digital Future",
    description: "Transforming Indian businesses with accessible technology solutions.",
    creator: "@digitalmitra", // Placeholder
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

import { RetroChatBot } from "@/components/retro-chat-bot"
import { Navigation } from "@/components/navigation"

import { Preloader } from "@/components/preloader"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>
        <Preloader />
        <Navigation />
        {children}
        <RetroChatBot />
      </body>
    </html>
  )
}

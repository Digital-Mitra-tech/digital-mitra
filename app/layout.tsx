import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest } from "next/font/google"

const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: {
    default: "Digital Mitra — Kerala's #1 Digital Agency for Businesses",
    template: "%s | Digital Mitra",
  },
  description: "Digital Mitra is Kerala's leading digital agency. We provide web development, SEO, digital marketing, AI automation, NFC business cards, and brand identity for businesses in Kochi, Trivandrum, Calicut, Thrissur, and across India.",
  keywords: [
    "Digital Mitra",
    "digital agency Kerala",
    "web development Kerala",
    "web development company Kochi",
    "SEO services Kerala",
    "digital marketing Kerala",
    "digital marketing agency Kochi",
    "website design Kerala",
    "AI automation Kerala",
    "NFC business cards Kerala",
    "brand identity Kerala",
    "company registration Kerala",
    "business website Kerala",
    "SEO Trivandrum",
    "web development Calicut",
    "digital marketing Thrissur",
    "Indian businesses",
    "small business tech India",
  ],
  authors: [{ name: "Digital Mitra Team" }],
  creator: "Digital Mitra",
  metadataBase: new URL("https://digitalmitra.co"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitalmitra.co",
    title: "Digital Mitra — Kerala's #1 Digital Agency",
    description: "Kerala's leading digital agency. Web development, SEO, digital marketing, AI automation & more for businesses in Kochi, Trivandrum, Calicut, Thrissur, and across India.",
    siteName: "Digital Mitra",
    images: [{ url: "/logos/logo.svg", width: 1200, height: 630, alt: "Digital Mitra - Kerala's Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Mitra — Kerala's #1 Digital Agency",
    description: "Kerala's leading digital agency. Web development, SEO, digital marketing, AI automation & more.",
    creator: "@digitalmitra",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "mask-icon", url: "/icon.svg" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

import { RetroChatBot } from "@/components/retro-chat-bot"
import { Navigation } from "@/components/navigation"
import { Preloader } from "@/components/preloader"
import { ContactProvider } from "@/context/contact-context"
import { SmoothScroll } from "@/components/ui/smooth-scroll"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://digitalmitra.co/#organization",
      "name": "Digital Mitra",
      "description": "Kerala's leading digital agency providing web development, SEO, digital marketing, AI automation, NFC business cards, and brand identity for businesses across India.",
      "url": "https://digitalmitra.co",
      "logo": { "@type": "ImageObject", "url": "https://digitalmitra.co/logos/logo.svg" },
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
      "telephone": "+91-8289835902",
      "email": "hello@digitalmitra.com",
      "openingHours": "Mo-Sa 09:00-18:00",
      "sameAs": [
        "https://www.instagram.com/digitalmitra",
        "https://www.facebook.com/digitalmitra",
        "https://www.linkedin.com/company/digitalmitra",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "IN",
      },
      "areaServed": [
        { "@type": "State", "name": "Kerala" },
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Thiruvananthapuram" },
        { "@type": "City", "name": "Kozhikode" },
        { "@type": "City", "name": "Thrissur" },
        { "@type": "City", "name": "Kollam" },
        { "@type": "City", "name": "Kannur" },
        { "@type": "Country", "name": "India" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services for Kerala Businesses",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "url": "https://digitalmitra.co/services/business-websites" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing", "url": "https://digitalmitra.co/services/seo-local-search" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services", "url": "https://digitalmitra.co/services/seo-local-search" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation", "url": "https://digitalmitra.co/services/business-automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NFC Business Cards", "url": "https://digitalmitra.co/services/nfc-business-cards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity Design", "url": "https://digitalmitra.co/services/brand-identity" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Registration", "url": "https://digitalmitra.co/services/company-registration" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://digitalmitra.co/#website",
      "url": "https://digitalmitra.co",
      "name": "Digital Mitra",
      "description": "Kerala's most trusted digital agency",
      "publisher": { "@id": "https://digitalmitra.co/#organization" },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${onest.className} antialiased overflow-x-hidden bg-[#F5F5F5] selection:bg-[#5C82A3] selection:text-white`}>
        <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[9999] bg-noise"></div>

        <ContactProvider>
          <Preloader />
          <Navigation />
          <SmoothScroll>
            <div className="relative z-10">
              {children}
            </div>
          </SmoothScroll>
          <RetroChatBot />
        </ContactProvider>
      </body>
    </html>
  )
}

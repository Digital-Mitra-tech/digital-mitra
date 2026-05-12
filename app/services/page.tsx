import { Metadata } from "next"
import { ServicesListingClient } from "@/components/pages/services-listing-client"

export const metadata: Metadata = {
    title: "Digital Services in Kerala | Web Development, SEO, Marketing, Automation | Digital Mitra",
    description: "Explore Digital Mitra's complete ecosystem of digital services for Kerala businesses — web development, SEO, digital marketing, AI automation, NFC business cards, branding, and company registration. Serving Kochi, Trivandrum, Calicut, Thrissur, and all of Kerala.",
    keywords: [
        "digital services Kerala",
        "web development Kerala",
        "SEO services Kerala",
        "digital marketing Kerala",
        "business automation Kerala",
        "NFC business cards Kerala",
        "brand identity Kerala",
        "company registration Kerala",
        "IT services Kerala",
        "tech services Kochi",
    ],
    openGraph: {
        title: "Digital Services in Kerala | Digital Mitra",
        description: "Complete ecosystem of digital services for Kerala businesses — web development, SEO, marketing, AI automation & more.",
        url: "https://digitalmitra.co/services",
    },
    alternates: { canonical: "https://digitalmitra.co/services" },
}

export default function ServicesPage() {
    return <ServicesListingClient />
}

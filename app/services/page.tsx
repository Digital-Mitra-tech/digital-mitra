import { Metadata } from "next"
import { ServicesListingClient } from "@/components/pages/services-listing-client"
import { servicesData } from "@/lib/services-data"

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
    twitter: {
        card: "summary_large_image",
        title: "Digital Services in Kerala | Digital Mitra",
        description: "Complete ecosystem of digital services for Kerala businesses — web development, SEO, marketing, AI automation & more.",
    },
}

const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Digital Services by Digital Mitra",
    "description": "Complete ecosystem of digital services for Kerala businesses",
    "url": "https://digitalmitra.co/services",
    "itemListElement": servicesData.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.title,
        "description": service.description,
        "url": `https://digitalmitra.co/services/${service.slug}`,
    })),
}

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />
            <ServicesListingClient />
        </>
    )
}

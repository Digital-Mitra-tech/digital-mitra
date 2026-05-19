import { Metadata } from "next"
import { ServicesListingClient } from "@/components/pages/services-listing-client"
import { servicesData } from "@/lib/services-data"

export const metadata: Metadata = {
    title: "Website Development Services in Kerala | Digital Mitra",
    description: "Expert website development services, e-commerce web design, SEO, and business automation in Kerala. Scale your business online in Kochi, Trivandrum, Calicut, and Thrissur with Digital Mitra's premium services.",
    keywords: [
        "website development services in Kerala",
        "e commerce website development services in kerala",
        "web development company Kerala",
        "best website development services in Kerala",
        "digital services Kerala",
        "web development Kerala",
        "SEO services Kerala",
        "digital marketing Kerala",
        "business automation Kerala",
        "brand identity Kerala",
    ],
    openGraph: {
        title: "Website Development Services in Kerala | Digital Mitra",
        description: "Scale your business online with Kerala's best website development, e-commerce systems, SEO, and automation services.",
        url: "https://digitalmitra.co/services",
    },
    alternates: { canonical: "https://digitalmitra.co/services" },
    twitter: {
        card: "summary_large_image",
        title: "Website Development Services in Kerala | Digital Mitra",
        description: "Expert website development, e-commerce setups, and SEO services in Kerala by Digital Mitra.",
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

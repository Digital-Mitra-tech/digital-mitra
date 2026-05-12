import { Metadata } from "next"
import { notFound } from "next/navigation"
import { servicesData } from "@/lib/services-data"
import { ServiceDetailClient } from "@/components/pages/service-detail-client"

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const service = servicesData.find((s) => s.slug === slug)
    if (!service) return {}

    const url = `https://digitalmitra.co/services/${slug}`
    const title = service.seoMeta?.title || `${service.title} | Digital Mitra`
    const description = service.seoMeta?.description || service.description
    return {
        title,
        description,
        keywords: service.seoMeta?.keywords || [service.title, service.category, "Digital Mitra", "Kerala"],
        alternates: { canonical: url },
        openGraph: { title, description, url },
        twitter: { card: "summary_large_image" as const, title, description },
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = servicesData.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.seoMeta?.description || service.description,
        "url": `https://digitalmitra.co/services/${slug}`,
        "provider": {
            "@type": "LocalBusiness",
            "@id": "https://digitalmitra.co/#organization",
            "name": "Digital Mitra",
        },
        "areaServed": [
            { "@type": "State", "name": "Kerala" },
            { "@type": "Country", "name": "India" },
        ],
        "serviceType": service.category,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${service.title} Features`,
            "itemListElement": service.features.map((feature, i) => ({
                "@type": "Offer",
                "position": i + 1,
                "itemOffered": { "@type": "Service", "name": feature },
            })),
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <ServiceDetailClient service={service} />
        </>
    )
}

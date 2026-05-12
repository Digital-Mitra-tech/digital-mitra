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
    return {
        title: service.seoMeta?.title || `${service.title} | Digital Mitra`,
        description: service.seoMeta?.description || service.description,
        keywords: service.seoMeta?.keywords || [service.title, service.category, "Digital Mitra", "Kerala"],
        alternates: { canonical: url },
        openGraph: {
            title: service.seoMeta?.title || `${service.title} | Digital Mitra`,
            description: service.seoMeta?.description || service.description,
            url,
        },
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = servicesData.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    return <ServiceDetailClient service={service} />
}

import { packageDetails } from "@/lib/data"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { PackageDetailClient } from "@/components/pages/package-detail-client"

export async function generateStaticParams() {
    return packageDetails.map((pkg) => ({
        slug: pkg.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const pkg = packageDetails.find((p) => p.slug === slug)
    if (!pkg) return {}

    const url = `https://digitalmitra.co/packages/${slug}`
    const title = pkg.seoMeta?.title || pkg.title
    const description = pkg.seoMeta?.description || pkg.shortDescription
    return {
        title,
        description,
        keywords: pkg.seoMeta?.keywords,
        alternates: { canonical: url },
        openGraph: {
            title: pkg.socialShare?.title || title,
            description: pkg.socialShare?.description || description,
            url,
            images: pkg.socialShare?.image ? [{ url: pkg.socialShare.image }] : undefined,
        },
        twitter: {
            card: "summary_large_image" as const,
            title,
            description,
        },
    }
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const pkg = packageDetails.find((p) => p.slug === slug)

    if (!pkg) {
        notFound()
    }

    const packageJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": pkg.title,
        "description": pkg.seoMeta?.description || pkg.shortDescription,
        "url": `https://digitalmitra.co/packages/${slug}`,
        "brand": {
            "@type": "Brand",
            "name": "Digital Mitra",
        },
        "offers": {
            "@type": "Offer",
            "price": pkg.price.replace(/[₹,]/g, "").trim(),
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "@id": "https://digitalmitra.co/#organization",
            },
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(packageJsonLd) }}
            />
            <PackageDetailClient pkg={pkg} />
        </>
    )
}

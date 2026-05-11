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

    return {
        title: pkg.seoMeta?.title || pkg.title,
        description: pkg.seoMeta?.description || pkg.shortDescription,
        keywords: pkg.seoMeta?.keywords,
        openGraph: {
            title: pkg.socialShare?.title || pkg.title,
            description: pkg.socialShare?.description || pkg.shortDescription,
            images: pkg.socialShare?.image ? [{ url: pkg.socialShare.image }] : undefined
        }
    }
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const pkg = packageDetails.find((p) => p.slug === slug)

    if (!pkg) {
        notFound()
    }

    return <PackageDetailClient pkg={pkg} />
}

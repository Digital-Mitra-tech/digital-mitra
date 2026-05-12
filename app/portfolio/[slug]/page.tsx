import { portfolioProjects } from "@/lib/portfolio-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PortfolioDetailClient } from "@/components/pages/portfolio-detail-client"

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)
  if (!project) return {}

  const url = `https://digitalmitra.co/portfolio/${slug}`
  return {
    title: project.seoMeta.title,
    description: project.seoMeta.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.seoMeta.title,
      description: project.seoMeta.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoMeta.title,
      description: project.seoMeta.description,
    },
  }
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.about,
    "url": `https://digitalmitra.co/portfolio/${slug}`,
    "creator": {
      "@type": "Organization",
      "@id": "https://digitalmitra.co/#organization",
      "name": "Digital Mitra",
    },
    "about": {
      "@type": "Thing",
      "name": project.category,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <PortfolioDetailClient project={project} />
    </>
  )
}

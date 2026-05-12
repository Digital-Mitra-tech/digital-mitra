import { PortfolioClient } from "@/components/pages/portfolio-client"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Portfolio | Kerala Digital Agency Projects | Digital Mitra",
  description: "Explore Digital Mitra's portfolio of successful digital projects for businesses across Kerala and India — websites, e-commerce stores, branding, and digital marketing campaigns.",
  keywords: [
    "digital agency portfolio Kerala",
    "web development portfolio Kochi",
    "digital marketing case studies Kerala",
    "website design portfolio Kerala",
    "branding portfolio Kerala",
    "Digital Mitra portfolio",
  ],
  openGraph: {
    title: "Portfolio | Digital Mitra — Kerala Digital Agency Projects",
    description: "Web development, branding, and digital marketing projects for businesses across Kerala and India.",
    url: "https://digitalmitra.co/portfolio",
  },
  alternates: { canonical: "https://digitalmitra.co/portfolio" },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24">
        <PortfolioClient />
      </div>
      <Footer />
    </main>
  )
}

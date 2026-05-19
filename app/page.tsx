import { HomeClient } from "@/components/pages/home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Mitra — Website Development Services in Kerala | #1 Digital Agency",
  description: "Digital Mitra is Kerala's leading agency providing world-class website development services, e-commerce development, SEO, and marketing in Kochi, Trivandrum, Calicut, and Thrissur. Scalable tech solutions starting from ₹12,999.",
  keywords: [
    "website development services in Kerala",
    "e commerce website development services in kerala",
    "web development company Kerala",
    "digital agency Kerala",
    "web development Kerala",
    "SEO services Kerala",
    "digital marketing Kochi",
    "website design Kerala",
    "AI automation Kerala",
    "brand identity Kerala",
    "best digital agency Kerala",
  ],
  openGraph: {
    title: "Digital Mitra — Website Development Services in Kerala",
    description: "Kerala's leading digital agency. Premium website development services, e-commerce development, SEO, and automation starting from ₹12,999.",
    url: "https://digitalmitra.co",
  },
  alternates: { canonical: "https://digitalmitra.co" },
};

export default function Home() {
  return <HomeClient />;
}

import { HomeClient } from "@/components/pages/home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Mitra — Kerala's #1 Digital Agency | Web Development, SEO & Marketing",
  description: "Digital Mitra is Kerala's leading digital agency. We build high-performance websites, run data-driven marketing campaigns, automate businesses with AI, and create powerful brands. Serving businesses in Kochi, Trivandrum, Calicut, Thrissur, and across India. Starting from ₹12,999.",
  keywords: [
    "digital agency Kerala",
    "web development Kerala",
    "SEO services Kerala",
    "digital marketing Kochi",
    "website design Kerala",
    "AI automation Kerala",
    "brand identity Kerala",
    "NFC business cards Kerala",
    "company registration Kerala",
    "best digital agency Kerala",
  ],
  openGraph: {
    title: "Digital Mitra — Kerala's #1 Digital Agency",
    description: "Kerala's leading digital agency. Web development, SEO, digital marketing, AI automation & more for businesses across India.",
    url: "https://digitalmitra.co",
  },
  alternates: { canonical: "https://digitalmitra.co" },
};

export default function Home() {
  return <HomeClient />;
}

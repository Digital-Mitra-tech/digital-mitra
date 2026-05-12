import { AboutClient } from "@/components/pages/about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Digital Mitra | Kerala's Leading Digital Agency",
    description: "Learn about Digital Mitra — Kerala's most trusted digital agency. We are a team of passionate developers, marketers, and strategists helping businesses in Kochi, Trivandrum, Calicut, Thrissur, and across India grow online.",
    keywords: [
        "about Digital Mitra",
        "digital agency Kerala",
        "who is Digital Mitra",
        "digital agency Kochi",
        "IT company Kerala",
        "web development company Kerala",
        "tech startup Kerala",
    ],
    openGraph: {
        title: "About Digital Mitra | Kerala's Digital Agency",
        description: "Kerala's most trusted digital agency. Team of developers, marketers, and strategists helping Indian businesses grow online.",
        url: "https://digitalmitra.co/about",
    },
    alternates: { canonical: "https://digitalmitra.co/about" },
    twitter: {
        card: "summary_large_image",
        title: "About Digital Mitra | Kerala's Digital Agency",
        description: "Kerala's most trusted digital agency. Team of developers, marketers, and strategists helping Indian businesses grow online.",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}

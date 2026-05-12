import { PackagesClient } from "@/components/pages/packages-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Service Packages for Kerala Businesses | Starting ₹12,999 | Digital Mitra",
    description: "Affordable digital service packages for businesses in Kerala. Launch your business online starting from ₹12,999. Web development, digital marketing, and automation packages for Kochi, Trivandrum, Calicut, Thrissur, and all of Kerala.",
    keywords: [
        "digital packages Kerala",
        "affordable website packages Kerala",
        "business packages Kochi",
        "web development packages Kerala",
        "digital marketing packages Kerala",
        "cheap website Kerala",
        "startup packages Kerala",
        "business automation package Kerala",
    ],
    openGraph: {
        title: "Digital Service Packages for Kerala Businesses | Digital Mitra",
        description: "Affordable digital packages for Kerala businesses. Launch plan from ₹12,999, growth plan from ₹14,999/month.",
        url: "https://digitalmitra.co/packages",
    },
    alternates: { canonical: "https://digitalmitra.co/packages" },
};

export default function PackagesPage() {
    return <PackagesClient />;
}

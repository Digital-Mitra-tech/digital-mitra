import { SupportClient } from "@/components/pages/support-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website Support & Maintenance Plans Kerala | Mitra Care | Digital Mitra",
    description: "Get dedicated website support and maintenance for your Kerala business. Choose from Digital Mitra's Mitra Care plans — fast response times, security updates, and expert help when you need it.",
    keywords: ["website maintenance Kerala", "website support Kerala", "web maintenance Kochi", "digital support plan Kerala", "Mitra Care"],
    alternates: { canonical: "https://digitalmitra.co/support" },
    openGraph: {
        title: "Website Support & Maintenance Plans | Digital Mitra",
        description: "Dedicated website support and maintenance plans for Kerala businesses. Fast response, security updates, and expert care.",
        url: "https://digitalmitra.co/support",
    },
};

export default function SupportPage() {
    return <SupportClient />;
}

import { TermsClient } from "@/components/pages/terms-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Digital Mitra",
    description: "Read Digital Mitra's Terms of Service. Understand your rights and responsibilities when using our digital agency services across Kerala and India.",
    alternates: { canonical: "https://digitalmitra.co/terms-of-service" },
};

export default function TermsOfServicePage() {
    return <TermsClient />;
}

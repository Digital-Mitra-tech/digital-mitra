import { TermsClient } from "@/components/pages/terms-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the Terms of Service for Digital Mitra. Understand your rights and responsibilities when using our website and services.",
};

export default function TermsOfServicePage() {
    return <TermsClient />;
}

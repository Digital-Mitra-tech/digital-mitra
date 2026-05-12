import { PrivacyPolicyClient } from "@/components/pages/privacy-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Digital Mitra",
    description: "Learn how Digital Mitra collects, uses, and protects your personal information. We are committed to safeguarding the privacy of all clients and website visitors across Kerala and India.",
    alternates: { canonical: "https://digitalmitra.co/privacy-policy" },
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}

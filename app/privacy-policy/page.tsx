import { PrivacyPolicyClient } from "@/components/pages/privacy-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how Digital Mitra collects, uses, and safeguards your personal information.",
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}

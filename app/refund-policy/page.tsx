import { RefundPolicyClient } from "@/components/pages/refund-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy | Digital Mitra",
    description: "Read Digital Mitra's refund and cancellation policy for web development, SEO, digital marketing, and other digital services provided to businesses in Kerala and India.",
    alternates: { canonical: "https://digitalmitra.co/refund-policy" },
};

export default function RefundPolicyPage() {
    return <RefundPolicyClient />;
}

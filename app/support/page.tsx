import { SupportClient } from "@/components/pages/support-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Support & Maintenance",
    description: "Get dedicated support and maintenance for your digital assets. Choose from our flexible Mitra Care plans.",
};

export default function SupportPage() {
    return <SupportClient />;
}

import { RefundPolicyClient } from "@/components/pages/refund-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy",
    description: "Read about our cancellation and refund policies for digital services.",
};

export default function RefundPolicyPage() {
    return <RefundPolicyClient />;
}

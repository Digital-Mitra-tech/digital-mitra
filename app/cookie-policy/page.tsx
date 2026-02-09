import { CookiePolicyClient } from "@/components/pages/cookie-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Understand how Digital Mitra uses cookies and similar technologies to improve your experience.",
};

export default function CookiePolicyPage() {
    return <CookiePolicyClient />;
}

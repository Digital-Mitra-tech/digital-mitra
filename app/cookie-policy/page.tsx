import { CookiePolicyClient } from "@/components/pages/cookie-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Digital Mitra",
    description: "Understand how Digital Mitra uses cookies and similar tracking technologies to improve your browsing experience on our Kerala digital agency website.",
    alternates: { canonical: "https://digitalmitra.co/cookie-policy" },
};

export default function CookiePolicyPage() {
    return <CookiePolicyClient />;
}

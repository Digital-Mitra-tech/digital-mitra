import { PackagesClient } from "@/components/pages/packages-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Packages",
    description: "Explore our digital solution packages tailored for your business needs. Transparent pricing for website development and digital services.",
};

export default function PackagesPage() {
    return <PackagesClient />;
}

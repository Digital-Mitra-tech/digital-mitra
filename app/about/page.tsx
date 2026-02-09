import { AboutClient } from "@/components/pages/about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Digital Mitra's mission to democratize technology for businesses. We are a team of passionate developers and strategists.",
};

export default function AboutPage() {
    return <AboutClient />;
}

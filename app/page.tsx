import { HomeClient } from "@/components/pages/home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Digital Mitra - Your partner in digital transformation. We build accessible, high-quality websites and digital assets for Indian businesses.",
};

export default function Home() {
  return <HomeClient />;
}

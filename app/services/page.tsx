import { Metadata } from "next"
import { ServicesListingClient } from "@/components/pages/services-listing-client"

export const metadata: Metadata = {
    title: "Our Services | Digital Mitra",
    description: "Explore our complete ecosystem of business services, from company registration to AI automation and custom web development.",
}

export default function ServicesPage() {
    return <ServicesListingClient />
}

import { MetadataRoute } from "next";
import { packageDetails, supportPlanDetails } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://digitalmitra.co";

    // Static routes
    const staticRoutes = [
        "",
        "/about",
        "/packages",
        "/terms-of-service",
        "/privacy-policy",
        "/refund-policy",
        "/cookie-policy",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic routes from packageDetails
    const packageRoutes = packageDetails.map((pkg) => ({
        url: `${baseUrl}/packages/${pkg.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...packageRoutes];
}

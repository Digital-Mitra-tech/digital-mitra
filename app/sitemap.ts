import { MetadataRoute } from "next";
import { packageDetails } from "@/lib/data";
import { servicesData } from "@/lib/services-data";
import { portfolioProjects } from "@/lib/portfolio-data";
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://digitalmitra.co";

  const staticRoutes = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/packages", priority: 0.9, freq: "weekly" },
    { path: "/blog", priority: 0.85, freq: "daily" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/portfolio", priority: 0.75, freq: "monthly" },
    { path: "/support", priority: 0.75, freq: "monthly" },
    { path: "/terms-of-service", priority: 0.3, freq: "yearly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/refund-policy", priority: 0.3, freq: "yearly" },
    { path: "/cookie-policy", priority: 0.3, freq: "yearly" },
  ].map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const packageRoutes = packageDetails.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Blog posts from Supabase
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const supabase = await createClient();
    const { data: posts } = await supabase
      .from("posts")
      .select("slug, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (posts) {
      blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.published_at),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch {
    // Sitemap generation continues without blog posts if Supabase is unavailable
  }

  const portfolioRoutes = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...packageRoutes, ...portfolioRoutes, ...blogRoutes];
}

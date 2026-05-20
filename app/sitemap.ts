import type { MetadataRoute } from "next";
import { navItems, posts, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navItems.map((item) => ({
    url: `${site.domain}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8
  }));

  const articlePages = posts.map((post) => ({
    url: `${site.domain}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...pages, ...articlePages];
}

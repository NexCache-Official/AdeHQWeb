import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { absoluteUrl, staticRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const posts = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...posts];
}

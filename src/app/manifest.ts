import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2F6FED",
    icons: [
      {
        src: "/adehq_icon_light.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

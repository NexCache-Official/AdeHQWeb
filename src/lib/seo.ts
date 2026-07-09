import type { Metadata } from "next";

export const siteUrl = "https://adehq.com";

export const siteConfig = {
  name: "AdeHQ",
  legalName: "NexCache Limited",
  tagline: "Your AI Workforce Workspace",
  description:
    "AdeHQ is an AI workforce platform where teams hire persistent AI employees with roles, memory, and orchestration. Unlimited human members and unlimited AI employees on every plan — pay for AI work, not per-seat pricing.",
  shortDescription:
    "Hire an AI workforce. Invite your whole team. Unlimited humans and unlimited AI employees — pay for work, not seats.",
  email: "hello@adehq.com",
  supportEmail: "support@adehq.com",
  twitterHandle: "@adehq",
  locale: "en_GB",
  country: "GB",
} as const;

export const targetKeywords = [
  "AI workforce platform",
  "hire AI employees",
  "AI employee management",
  "AI agents for business",
  "AI workspace for teams",
  "persistent AI employees",
  "AI orchestration platform",
  "AI work hours",
  "no per-seat AI pricing",
  "AI agents for startups",
  "AI agents for agencies",
  "AI team collaboration",
  "alternative to ChatGPT for teams",
  "AI research assistant for business",
  "AI sales assistant software",
] as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = ""): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  type = "website",
  publishedTime,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const mergedKeywords = Array.from(new Set([...targetKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: absoluteUrl("/AdeHQ_text_logo.svg"),
          width: 1352,
          height: 494,
          alt: "AdeHQ — AI workforce platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/AdeHQ_text_logo.svg")],
    },
  };
}

export const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/product", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/pricing", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/use-cases", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/careers", priority: 0.65, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/security", priority: 0.55, changeFrequency: "yearly" as const },
  { path: "/subprocessors", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/data-processing", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/refund-policy", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/ai-terms", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/acceptable-use", priority: 0.35, changeFrequency: "yearly" as const },
];

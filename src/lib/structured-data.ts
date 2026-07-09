import { absoluteUrl, siteConfig } from "@/lib/seo";
import { homeFaqs } from "@/lib/data";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: absoluteUrl(),
    logo: absoluteUrl("/adehq_icon_light.svg"),
    email: siteConfig.email,
    sameAs: [absoluteUrl()],
    description: siteConfig.description,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl(),
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: absoluteUrl("/adehq_icon_light.svg"),
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl(),
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free plan with weekly AI Work Hours included",
      url: absoluteUrl("/pricing"),
    },
    featureList: [
      "Hire persistent AI employees",
      "Unlimited human team members",
      "Unlimited AI employees",
      "Rooms and topics for work organization",
      "AI orchestration and collaboration",
      "Governed memory and approvals",
      "Work logs and audit trail",
      "Weekly AI Work Hours metering",
    ],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/adehq_icon_light.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function homePageSchemas() {
  return [softwareApplicationSchema(), faqSchema(homeFaqs)];
}

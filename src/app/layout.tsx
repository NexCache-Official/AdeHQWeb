import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { absoluteUrl, siteConfig, targetKeywords } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: `${siteConfig.name} — AI Workforce Platform | Hire AI Employees`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...targetKeywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: absoluteUrl("/about") }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  icons: {
    icon: [{ url: "/adehq_icon_light.svg", type: "image/svg+xml" }],
    apple: [{ url: "/adehq_icon_light.svg", type: "image/svg+xml" }],
    shortcut: ["/adehq_icon_light.svg"],
  },
  alternates: {
    types: {
      "application/llms.txt": absoluteUrl("/llms.txt"),
    },
  },
  robots: {
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
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl(),
    siteName: siteConfig.name,
    title: `${siteConfig.name} — AI Workforce Platform`,
    description: siteConfig.description,
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
    title: `${siteConfig.name} — AI Workforce Platform`,
    description: siteConfig.shortDescription,
    images: [absoluteUrl("/AdeHQ_text_logo.svg")],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2F6FED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white font-sans text-ink antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

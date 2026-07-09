import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { ContactPageContent } from "./contact-form";

export const metadata: Metadata = createPageMetadata({
  title: "Contact AdeHQ — Sales, Support, Demos & Partnerships",
  description:
    "Talk to the AdeHQ team about product demos, pricing, support, careers, and partnerships. Email hello@adehq.com or support@adehq.com.",
  path: "/contact",
  keywords: ["contact AdeHQ", "AdeHQ demo", "AdeHQ support", "AdeHQ sales"],
});

export default function ContactPage() {
  return <ContactPageContent />;
}

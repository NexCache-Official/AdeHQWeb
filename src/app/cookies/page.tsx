import type { Metadata } from "next";
import { LegalBlockRenderer } from "@/components/layout/legal-block-renderer";
import { LegalPageLayout } from "@/components/layout/legal-page-layout";
import { blocks } from "@/lib/legal/content/cookies";
import { legalCompany } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How AdeHQ uses cookies and similar technologies on our website and services.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      effectiveDate={legalCompany.effectiveDate}
      intro="This policy explains how we use cookies and similar technologies on adehq.com, nexcache.com, and our services."
      lastReviewed="6 July 2026"
    >
      <LegalBlockRenderer blocks={blocks} />
    </LegalPageLayout>
  );
}

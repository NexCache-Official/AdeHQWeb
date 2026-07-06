import type { Metadata } from "next";
import { LegalBlockRenderer } from "@/components/layout/legal-block-renderer";
import { LegalPageLayout } from "@/components/layout/legal-page-layout";
import { blocks } from "@/lib/legal/content/security";
import { legalCompany } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Security & Trust",
  description:
    "How AdeHQ protects workspace data, permissions, approvals, work logs, and AI provider routing.",
};

export default function SecurityPage() {
  return (
    <LegalPageLayout
      title="Security & Trust"
      intro="AdeHQ is built for work. Trust, isolation, permissions, auditability, and human approval matter from day one."
      lastReviewed="6 July 2026"
    >
      <LegalBlockRenderer blocks={blocks} />
    </LegalPageLayout>
  );
}

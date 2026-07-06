import type { Metadata } from "next";
import { LegalBlockRenderer } from "@/components/layout/legal-block-renderer";
import { LegalPageLayout } from "@/components/layout/legal-page-layout";
import { blocks } from "@/lib/legal/content/privacy";
import { legalCompany } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NexCache Limited (AdeHQ) collects, uses, and protects personal data for AI workforce workspaces.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      effectiveDate={legalCompany.effectiveDate}
      intro={`AdeHQ is operated by ${legalCompany.legalName}. This policy explains how we handle personal data when you use our websites and AI workforce workspace — including human teammates, AI employees, workspace content, AI Work Hours, approvals, and tool usage.`}
      lastReviewed="6 July 2026"
    >
      <LegalBlockRenderer blocks={blocks} />
    </LegalPageLayout>
  );
}

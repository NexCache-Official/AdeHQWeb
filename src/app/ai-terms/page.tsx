import type { Metadata } from "next";
import { LegalBlockRenderer } from "@/components/layout/legal-block-renderer";
import { LegalPageLayout } from "@/components/layout/legal-page-layout";
import { blocks } from "@/lib/legal/content/ai-terms";
import { legalCompany } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "AI Terms & Output Policy",
  description:
    "Rules for AI employees, generated outputs, approvals, AI Work Hours, and provider routing on AdeHQ.",
};

export default function AiTermsPage() {
  return (
    <LegalPageLayout
      title="AI Terms and Output Policy"
      effectiveDate={legalCompany.effectiveDate}
      intro="AdeHQ uses artificial intelligence to help users research, plan, write, organise, and operate. This policy explains important rules for AI features, outputs, and human approval."
      lastReviewed="6 July 2026"
    >
      <LegalBlockRenderer blocks={blocks} />
    </LegalPageLayout>
  );
}

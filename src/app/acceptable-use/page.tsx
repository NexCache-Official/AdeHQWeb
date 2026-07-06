import type { Metadata } from "next";
import { LegalBlockRenderer } from "@/components/layout/legal-block-renderer";
import { LegalPageLayout } from "@/components/layout/legal-page-layout";
import { blocks } from "@/lib/legal/content/acceptable-use";
import { legalCompany } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Rules for using AdeHQ workspaces, AI employees, integrations, and automation features.",
};

export default function AcceptableUsePage() {
  return (
    <LegalPageLayout
      title="Acceptable Use Policy"
      effectiveDate={legalCompany.effectiveDate}
      intro="This policy applies to all users, workspaces, AI employees, prompts, outputs, tools, and browser/search features on AdeHQ."
      lastReviewed="6 July 2026"
    >
      <LegalBlockRenderer blocks={blocks} />
    </LegalPageLayout>
  );
}

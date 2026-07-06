import type { Metadata } from "next";
import { LegalBlockRenderer } from "@/components/layout/legal-block-renderer";
import { LegalPageLayout } from "@/components/layout/legal-page-layout";
import { blocks } from "@/lib/legal/content/subprocessors";
import { legalCompany } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Subprocessors",
  description:
    "Third-party service providers that may process data on behalf of AdeHQ customers.",
};

export default function SubprocessorsPage() {
  return (
    <LegalPageLayout
      title="Subprocessors"
      effectiveDate={legalCompany.effectiveDate}
      intro="AdeHQ uses third-party providers to operate, secure, support, and improve the service. These providers may process personal data as subprocessors where we act as a processor for customer workspace content."
      lastReviewed="6 July 2026"
    >
      <LegalBlockRenderer blocks={blocks} />
    </LegalPageLayout>
  );
}

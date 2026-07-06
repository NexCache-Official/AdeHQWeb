import type { Metadata } from "next";
import { LegalBlockRenderer } from "@/components/layout/legal-block-renderer";
import { LegalPageLayout } from "@/components/layout/legal-page-layout";
import { blocks } from "@/lib/legal/content/refund-policy";
import { legalCompany } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "How cancellations and refunds work for AdeHQ paid plans, top-ups, and AI Work Hours.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund and Cancellation Policy"
      effectiveDate={legalCompany.effectiveDate}
      intro={`This policy explains how cancellations and refunds work for AdeHQ paid plans processed through providers such as ${legalCompany.paymentProvider}.`}
      lastReviewed="6 July 2026"
    >
      <LegalBlockRenderer blocks={blocks} />
    </LegalPageLayout>
  );
}

import type { Metadata } from "next";
import { LegalBlockRenderer } from "@/components/layout/legal-block-renderer";
import { LegalPageLayout } from "@/components/layout/legal-page-layout";
import { blocks } from "@/lib/legal/content/data-processing";
import { legalCompany } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Data Processing",
  description:
    "Overview of AdeHQ data processing roles and how to request a Data Processing Addendum.",
};

export default function DataProcessingPage() {
  return (
    <LegalPageLayout
      title="Data Processing"
      intro="Where AdeHQ processes customer workspace content on behalf of a customer, we may act as a processor under applicable data protection law. Customers on eligible plans may request a Data Processing Addendum (DPA)."
      lastReviewed="6 July 2026"
    >
      <LegalBlockRenderer blocks={blocks} />
    </LegalPageLayout>
  );
}

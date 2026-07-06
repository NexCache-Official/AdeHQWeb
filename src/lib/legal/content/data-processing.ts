import type { LegalBlock } from "@/lib/legal/types";

export const blocks: LegalBlock[] = [
  { type: "p", text: `AdeHQ supports businesses using AI employees inside workspaces. Where AdeHQ processes customer workspace content on behalf of a customer, we may act as a processor under applicable data protection law.` },
  { type: "p", text: `Customers on eligible plans may request a Data Processing Addendum by contacting privacy@[domain].` },
  { type: "p", text: `Our DPA is intended to cover:` },
  { type: "ul", items: [
      `processing roles`,
      `subject matter and duration`,
      `categories of data subjects`,
      `categories of personal data`,
      `processor obligations`,
      `confidentiality`,
      `security measures`,
      `subprocessors`,
      `international transfers`,
      `assistance with data subject requests`,
      `deletion or return of data`,
      `audit and information rights`,
    ] },
  { type: "p", text: `For questions, contact privacy@[domain].` },
];

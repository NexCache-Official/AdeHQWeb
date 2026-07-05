import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Security",
  description: "How AdeHQ protects your workspace and data.",
};

const sections = [
  {
    title: "Our commitment",
    body: "AdeHQ is built for operators who need to trust their AI workforce. Security is foundational — from workspace isolation to approval gates on external actions.",
  },
  {
    title: "Infrastructure",
    body: "We use industry-standard cloud infrastructure with encryption in transit (TLS) and at rest. Production systems are monitored for availability and anomalous activity.",
  },
  {
    title: "Workspace isolation",
    body: "Each workspace is logically isolated. Data does not bleed between workspaces. Memory, rooms, and employee context are scoped according to your configuration.",
  },
  {
    title: "Approvals & audit trail",
    body: "Sensitive external actions require human approval before execution. Meaningful AI work is logged with duration, cost, and rationale — giving you a trustworthy audit trail.",
  },
  {
    title: "Access controls",
    body: "Human collaborators are invited explicitly to workspaces. Role-based access controls are on our roadmap for Team and Business plans.",
  },
  {
    title: "Vulnerability disclosure",
    body: "If you discover a security issue, please report it responsibly to security@adehq.com. We appreciate coordinated disclosure and will respond promptly.",
  },
  {
    title: "Compliance roadmap",
    body: "SOC 2 and GDPR-aligned practices are on our roadmap for Business customers. Contact us for current status and enterprise requirements.",
  },
];

export default function SecurityPage() {
  return (
    <LegalLayout title="Security" updated="June 30, 2026" sections={sections} />
  );
}

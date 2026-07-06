import type { LegalBlock } from "@/lib/legal/types";

export const blocks: LegalBlock[] = [
  { type: "p", text: `AdeHQ is built for work. That means trust, isolation, permissions, auditability, and human approval matter from day one.` },
  { type: "h2", text: `Workspace data isolation` },
  { type: "p", text: `Each workspace is treated as a separate tenant. Workspace data is scoped by workspace membership and server-side authorisation checks.` },
  { type: "h2", text: `Authentication` },
  { type: "p", text: `AdeHQ uses secure authentication through trusted infrastructure providers. Users are responsible for protecting account credentials and using strong passwords.` },
  { type: "h2", text: `Role-based access` },
  { type: "p", text: `Workspace owners and administrators can manage users, AI employees, roles, permissions, billing, and workspace settings.` },
  { type: "h2", text: `AI employee permissions` },
  { type: "p", text: `AI employees are designed to operate with controlled access. Tools and integrations should be granted deliberately, with read/write/admin levels where supported.` },
  { type: "h2", text: `Approval gates` },
  { type: "p", text: `Sensitive AI actions should require human approval. This includes sending external communications, publishing content, making purchases, deleting data, or changing production systems.` },
  { type: "h2", text: `Work logs and auditability` },
  { type: "p", text: `AdeHQ records meaningful AI work through work logs, usage records, approvals, memory, artifacts, and runtime metadata. This helps users understand what happened, who did it, and what context was used.` },
  { type: "h2", text: `AI provider routing` },
  { type: "p", text: `AdeHQ may use multiple AI providers and gateways. Requests are routed based on reliability, capability, cost, and configuration. Provider details may change over time.` },
  { type: "h2", text: `Data retention` },
  { type: "p", text: `Workspace content is retained while needed to provide the service unless deleted or subject to legal, backup, or operational requirements. See our Privacy Policy for more detail.` },
  { type: "h2", text: `Responsible disclosure` },
  { type: "p", text: `If you believe you have found a security issue, contact security@[domain]. Please include enough detail for us to reproduce and investigate the issue.` },
];

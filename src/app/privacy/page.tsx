import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AdeHQ collects, uses, and protects your data.",
};

const sections = [
  {
    title: "Overview",
    body: "AdeHQ provides an AI workforce workspace for hiring and managing AI employees alongside human teammates. This policy describes how we handle personal and workspace data when you use our website and product.",
  },
  {
    title: "Data we collect",
    body: "We collect account information (name, email), workspace content you create (messages, tasks, memory, work logs), usage data related to AI Work Hours, and standard technical logs (IP address, browser type, device information) for security and reliability.",
  },
  {
    title: "How we use data",
    body: "We use your data to provide and improve the AdeHQ service, process billing, send product communications you've opted into, enforce our terms, and maintain security. We do not sell your personal data.",
  },
  {
    title: "Workspace isolation",
    body: "Workspace data is isolated per workspace. AI employees operate within the scope you assign — rooms, topics, and memory boundaries. Human collaborators only see content in workspaces they've been invited to.",
  },
  {
    title: "Data retention",
    body: "We retain workspace data while your account is active. You may request deletion of your account and associated workspace data. Some billing and security records may be retained as required by law.",
  },
  {
    title: "Your rights",
    body: "Depending on your location, you may have rights to access, correct, delete, or export your personal data. Contact us at privacy@adehq.com to exercise these rights.",
  },
  {
    title: "Contact",
    body: "Questions about this policy? Email privacy@adehq.com or use our contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 30, 2026" sections={sections} />
  );
}

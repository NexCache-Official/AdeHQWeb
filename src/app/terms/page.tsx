import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of AdeHQ.",
};

const sections = [
  {
    title: "Agreement",
    body: "By accessing or using AdeHQ, you agree to these Terms of Service. If you are using AdeHQ on behalf of an organization, you represent that you have authority to bind that organization.",
  },
  {
    title: "The service",
    body: "AdeHQ provides a workspace for hiring and managing AI employees, collaborating with human teammates, and governing AI work through approvals, memory, and work logs. Features and limits depend on your plan.",
  },
  {
    title: "Accounts",
    body: "You are responsible for maintaining the security of your account credentials and for all activity under your account. Notify us promptly of any unauthorized access.",
  },
  {
    title: "Acceptable use",
    body: "You may not use AdeHQ for illegal activity, to generate harmful content, to violate third-party rights, to attempt unauthorized access to our systems, or to resell the service without authorization.",
  },
  {
    title: "AI output & responsibility",
    body: "AI employees produce drafts and recommendations. You remain responsible for reviewing outputs and approving external actions. AdeHQ provides governance tools; you make final decisions.",
  },
  {
    title: "Billing",
    body: "Paid plans renew according to the billing cycle you select. AI Work Hours and top-ups are governed by our pricing page. Refunds are handled according to our refund policy at the time of purchase.",
  },
  {
    title: "Limitation of liability",
    body: "AdeHQ is provided as-is to the maximum extent permitted by law. Our liability is limited to the amount you paid us in the twelve months preceding the claim.",
  },
  {
    title: "Contact",
    body: "Legal inquiries: legal@adehq.com",
  },
];

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 30, 2026" sections={sections} />
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { legalCompany } from "@/lib/legal/company";

const relatedLegal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/acceptable-use", label: "Acceptable Use" },
  { href: "/ai-terms", label: "AI Terms" },
  { href: "/security", label: "Security" },
  { href: "/subprocessors", label: "Subprocessors" },
  { href: "/refund-policy", label: "Refunds" },
  { href: "/data-processing", label: "Data Processing" },
];

export function LegalPageLayout({
  title,
  effectiveDate,
  intro,
  lastReviewed,
  children,
}: {
  title: string;
  effectiveDate?: string;
  intro?: string;
  lastReviewed?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="container-wide max-w-[800px] py-14">
          <FadeIn>
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-[13px] font-semibold text-ink-muted no-underline transition-colors hover:text-accent"
            >
              <ArrowLeft size={15} />
              Back to home
            </Link>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
              Legal · {legalCompany.tradingName}
            </p>
            <h1 className="mt-3 text-[34px] font-bold tracking-[-0.025em] text-ink md:text-[40px]">
              {title}
            </h1>
            {effectiveDate && (
              <p className="mt-3 text-sm text-ink-subtle">
                Effective date: {effectiveDate}
              </p>
            )}
            {intro && (
              <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
                {intro}
              </p>
            )}
            <p className="mt-4 text-[13px] text-ink-subtle">
              Operated by {legalCompany.legalName} (company no.{" "}
              {legalCompany.companyNumber}) · VAT {legalCompany.vatNumber}
            </p>
          </FadeIn>
        </div>
      </section>
      <article className="container-wide max-w-[800px] py-12 pb-20">
        <FadeIn>{children}</FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
            Related policies
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedLegal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-white px-3 py-1.5 text-[12.5px] font-medium text-ink-muted no-underline transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {lastReviewed && (
          <p className="mt-8 text-[13px] text-ink-subtle">
            Last reviewed: {lastReviewed}
          </p>
        )}
      </article>
    </>
  );
}

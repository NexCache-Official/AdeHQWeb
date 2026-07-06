import type { Metadata } from "next";
import Link from "next/link";
import { DarkCta } from "@/components/sections/shared";
import { FadeIn } from "@/components/ui/motion";
import { careers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join AdeHQ and help build the operating system for AI employees.",
};

const perks = [
  "Remote-first · UK/EU friendly time zones",
  "Competitive salary + meaningful equity",
  "Work on hard product problems with a small, senior team",
  "AI-native tooling — we use what we build",
];

export default function CareersPage() {
  return (
    <>
      <section className="container-content pt-16 text-center">
        <FadeIn>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
            Careers
          </span>
          <h1 className="mt-3.5 text-[34px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[42px]">
            Help build the AI-native workplace
          </h1>
          <p className="mx-auto mt-4 max-w-[580px] text-[17px] leading-relaxed text-ink-muted">
            We&apos;re a small team building infrastructure for how founders and
            operators work with AI employees. If that excites you, we&apos;d
            love to hear from you.
          </p>
        </FadeIn>
      </section>

      <section className="container-content pt-12">
        <FadeIn>
          <div className="rounded-[20px] border border-border bg-white p-6 shadow-[0_1px_3px_rgba(40,30,15,0.06)]">
            <h2 className="text-lg font-bold text-ink">Why AdeHQ</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {perks.map((perk) => (
                <li key={perk} className="flex gap-2 text-sm text-ink-muted">
                  <span className="text-green">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <section className="container-content pt-12 pb-4">
        <h2 className="mb-6 text-center text-xl font-bold text-ink">
          Open roles
        </h2>
        <div className="flex flex-col gap-3">
          {careers.map((role, i) => (
            <FadeIn key={role.title} delay={i * 0.04}>
              <Link
                href="/contact"
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-white px-6 py-5 no-underline transition-all hover:-translate-y-0.5 hover:border-[#cbd0da] hover:shadow-[0_12px_30px_-16px_rgba(40,34,24,0.22)]"
              >
                <div>
                  <h3 className="font-bold text-ink">{role.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    {role.team} · {role.location}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-canvas px-3 py-1 text-xs font-semibold text-ink-muted">
                  {role.type}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-muted">
          Don&apos;t see a fit?{" "}
          <Link href="/contact" className="font-semibold text-accent hover:underline">
            Send us a note
          </Link>{" "}
          anyway — we&apos;re always interested in exceptional people.
        </p>
      </section>

      <DarkCta
        title="Build with us"
        description="Reach out through our contact page — tell us what you'd love to work on."
        primaryHref="/contact"
        primaryLabel="Get in touch"
      />
    </>
  );
}

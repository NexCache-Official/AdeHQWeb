import type { Metadata } from "next";
import { Infinity, Users, Bot } from "lucide-react";
import {
  DarkCta,
  NoSeatBanner,
  PageHero,
  PricingCards,
} from "@/components/sections/shared";
import { PricingComparisonTable } from "@/components/sections/pricing-table";
import { FaqAccordion } from "@/components/ui/faq";
import { FadeIn, SectionHeader } from "@/components/ui/motion";
import { pricingFaqs, pricingPositioning } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Unlimited human members and unlimited AI employees on every plan. Pay for AI work capacity, not seats.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        dark
        split
        eyebrow="Pricing"
        title={pricingPositioning.heroHeadline}
        description={pricingPositioning.subheadline}
      >
        <div className="mt-8 flex flex-wrap gap-2.5">
          {[
            { icon: Users, label: "Unlimited humans" },
            { icon: Bot, label: "Unlimited AI employees" },
            { icon: Infinity, label: "Pay for work, not seats" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink shadow-sm"
            >
              <Icon size={14} className="text-accent" />
              {label}
            </span>
          ))}
        </div>
      </PageHero>

      <section id="plans" className="container-wide scroll-mt-[90px] pt-12">
        <PricingCards />
        <p className="mx-auto mt-6 max-w-[720px] text-center text-[14px] leading-relaxed text-ink-muted">
          {pricingPositioning.noSeatLine}
        </p>
      </section>

      <section className="container-wide pt-16">
        <SectionHeader
          eyebrow="Compare plans"
          title="Everything included. Only AI Work Hours change."
        />
        <PricingComparisonTable />
      </section>

      <section className="container-wide pt-16">
        <NoSeatBanner />
      </section>

      <section className="mt-20 border-y border-border bg-muted py-24">
        <div className="container-wide">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
                AI Work Hours
              </span>
              <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.02em] text-ink">
                Weekly capacity, not token math
              </h2>
              <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-muted">
                AI Work Hours are AdeHQ&apos;s simple way to measure AI workload.
                Instead of showing tokens, credits, or model costs, every
                workspace gets a weekly pool. Simple messages use very little.
                Web research, browser sessions, large files, coding, and
                long-context analysis use more.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                {[
                  ["Free", "10 / week", "text-ink-subtle"],
                  ["Pro", "125 / week", "text-accent"],
                  ["Team", "250 / week", "text-accent"],
                  ["Business", "650 / week", "text-accent"],
                ].map(([plan, hours, color]) => (
                  <div
                    key={plan}
                    className="flex items-center justify-between border-b border-border-subtle pb-2.5 last:border-0"
                  >
                    <span className="text-sm font-semibold text-ink">{plan}</span>
                    <span className={`font-mono text-[13px] font-semibold ${color}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-muted">
                When Work Hours run out, AI employees pause until the next weekly
                reset. Human messaging never stops.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-[20px] bg-rail p-7 text-white shadow-[0_20px_50px_-24px_rgba(40,30,15,0.5)]">
                <div className="pointer-events-none absolute -top-[60px] -right-[30px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.4),transparent_65%)]" />
                <div className="relative">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/70">
                    This week · Pro plan
                  </span>
                  <div className="my-2.5 flex items-baseline gap-2">
                    <span className="font-mono text-[46px] font-semibold tracking-[-0.02em]">
                      42.8
                    </span>
                    <span className="text-sm text-white/72">
                      / 125 AI Work Hours
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full w-[34%] animate-gradflow rounded-full bg-gradient-to-r from-accent via-[#5B93F6] to-accent bg-[length:200%_100%]" />
                  </div>
                  <div className="mt-5 space-y-2 text-[13px]">
                    <div className="flex justify-between text-white/75">
                      <span>Human members</span>
                      <span className="font-mono text-green">Unlimited · free</span>
                    </div>
                    <div className="flex justify-between text-white/75">
                      <span>AI employees</span>
                      <span className="font-mono text-green">Unlimited</span>
                    </div>
                    <div className="flex justify-between text-white/75">
                      <span>Per-seat fees</span>
                      <span className="font-mono text-green">$0</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="container-wide pt-24">
        <div className="container-prose mx-auto">
          <SectionHeader eyebrow="FAQ" title="Pricing questions" />
          <FadeIn className="mt-8">
            <FaqAccordion items={pricingFaqs} />
          </FadeIn>
        </div>
      </section>

      <DarkCta
        title="Start free. Bring your whole team."
        description="Unlimited humans. Unlimited AI employees. Hire your first AI employee in minutes."
        secondaryHref="/product"
        secondaryLabel="Explore the product"
      />
    </>
  );
}

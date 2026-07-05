import type { Metadata } from "next";
import { Users } from "lucide-react";
import { DarkCta, PageHero, PricingCards } from "@/components/sections/shared";
import { FaqAccordion } from "@/components/ui/faq";
import { FadeIn, SectionHeader } from "@/components/ui/motion";
import { pricingFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple plans for your AI workforce. Unlimited human seats on every plan. AI Work Hours you can understand.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple plans for your AI workforce"
        description="Generous workspace collaboration. Hosted AI governed by AI Work Hours — capacity you can understand. And human seats are always unlimited and free."
      >
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-[0_1px_3px_rgba(40,30,15,0.06)]">
          <Users size={15} className="text-green" />
          <span className="text-[13px] font-semibold text-ink">
            Unlimited human seats on every plan
          </span>
        </div>
      </PageHero>

      <section id="plans" className="mx-auto max-w-[1180px] scroll-mt-[74px] px-7 pt-11">
        <PricingCards />
        <p className="mx-auto mt-5 max-w-[640px] text-center text-[13px] leading-relaxed text-ink-subtle">
          Every plan includes unlimited human collaborators. Hosted AI usage is
          governed by AI Work Hours — no token math. BYOK coming for technical
          users.
        </p>
      </section>

      <section className="mt-20 border-y border-border-subtle bg-white py-[84px]">
        <div className="mx-auto max-w-[1080px] px-7">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
                AI Work Hours
              </span>
              <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.02em] text-ink">
                Weekly capacity, not token math
              </h2>
              <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-muted">
                AI Work Hours estimate how much AI work your plan supports each
                week. They&apos;re a business-friendly measure of capacity based
                on model cost, context size, reasoning depth, and tool usage.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                {[
                  ["Efficient", "Low · support, quick replies", "text-green"],
                  ["Balanced", "Standard · sales, marketing", "text-amber"],
                  ["Strong / Long / Coding", "Higher · research, eng", "text-accent"],
                ].map(([label, meta, color]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-border-subtle pb-2.5 last:border-0"
                  >
                    <span className="text-sm font-semibold text-ink">{label}</span>
                    <span className={`font-mono text-[13px] ${color}`}>{meta}</span>
                  </div>
                ))}
              </div>
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
                      14.2
                    </span>
                    <span className="text-sm text-white/72">
                      / 150 AI Work Hours
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full w-[38%] animate-gradflow rounded-full bg-gradient-to-r from-accent via-[#5B93F6] to-accent bg-[length:200%_100%]" />
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-white/80">
                    Your workforce used 14.2 AI Work Hours this week. Humans on
                    the workspace? Always free, never counted.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-7 pt-[84px]">
        <div className="grid gap-4 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-[20px] border border-border bg-white p-7 shadow-[0_1px_3px_rgba(40,30,15,0.06)]">
              <h2 className="text-[22px] font-bold tracking-[-0.01em] text-ink">
                Need more capacity?
              </h2>
              <p className="mt-2 text-sm leading-snug text-ink-muted">
                Prepaid top-ups — no surprise overage billing.
              </p>
              <div className="mt-4 flex gap-2.5">
                {["$5", "$10", "$25"].map((amount) => (
                  <span
                    key={amount}
                    className="flex-1 rounded-[13px] border border-border bg-canvas py-4 text-center font-mono text-xl font-semibold text-ink"
                  >
                    {amount}
                  </span>
                ))}
              </div>
              <p className="mt-3.5 text-[12.5px] text-ink-subtle">
                Each top-up adds AI Work Hours instantly.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="h-full rounded-[20px] border border-border bg-white p-7 shadow-[0_1px_3px_rgba(40,30,15,0.06)]">
              <div className="flex items-center gap-2.5">
                <h2 className="text-[22px] font-bold tracking-[-0.01em] text-ink">
                  Bring your own key
                </h2>
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-ink-subtle">
                  Coming
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Connect your own model provider API key. AdeHQ still provides the
                workspace, employee identity, memory, orchestration, and
                governance — the value that lives above the tokens.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            { name: "Team", desc: "Small teams & SMBs · shared AI budget", price: "$20–25 / user" },
            { name: "Business", desc: "Organizations · SSO, compliance", price: "$99+ / mo" },
          ].map((plan) => (
            <div
              key={plan.name}
              className="flex items-center justify-between gap-4 rounded-[18px] border border-dashed border-[#D8D2C6] bg-muted px-6 py-5"
            >
              <div>
                <span className="font-bold text-ink">{plan.name}</span>
                <span className="mt-0.5 block text-[13px] text-ink-muted">
                  {plan.desc}
                </span>
              </div>
              <span className="whitespace-nowrap font-mono text-sm text-ink-subtle">
                {plan.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[760px] px-7 pt-[84px]">
        <SectionHeader eyebrow="FAQ" title="Pricing questions" />
        <FadeIn className="mt-8">
          <FaqAccordion items={pricingFaqs} />
        </FadeIn>
      </section>

      <DarkCta
        title="Start free. Bring your team."
        description="Hire your first AI employee in minutes — and invite every human teammate for free."
        secondaryHref="/product"
        secondaryLabel="Explore the product"
      />
    </>
  );
}

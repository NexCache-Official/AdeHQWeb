import Link from "next/link";
import { plans, pricingPositioning, type Plan } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

function PlanCard({
  plan,
  compact = false,
}: {
  plan: Plan;
  compact?: boolean;
}) {
  const isCustom = plan.price === "Custom";

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[22px] bg-white p-6 md:p-7",
        plan.featured
          ? "ring-2 ring-accent shadow-[0_24px_60px_-24px_rgba(37,99,235,0.35)]"
          : "border border-border shadow-[0_2px_8px_rgba(16,19,26,0.04)]",
      )}
    >
      {plan.featured && (
        <>
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-[#5B93F6] to-accent" />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
            Most popular
          </span>
        </>
      )}
      <div className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.07em] text-ink-subtle">
        {plan.bestFor}
      </div>
      <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
      {!compact && (
        <p className="mt-1.5 text-[13px] leading-snug text-ink-muted">
          {plan.tagline}
        </p>
      )}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-mono text-[34px] font-semibold tracking-[-0.02em] text-ink md:text-[38px]">
          {plan.price}
        </span>
        {!isCustom && <span className="text-[13px] text-ink-subtle">/mo</span>}
      </div>
      {plan.annualPrice && plan.annualPrice !== "Custom" && (
        <p className="mt-1 font-mono text-[12px] text-ink-subtle">
          {plan.annualPrice} billed annually
        </p>
      )}
      <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1">
        <span className="font-mono text-[11px] font-semibold text-accent-d">
          {plan.workHours}
        </span>
        <span className="text-[11px] font-medium text-ink-muted">AI Work Hours</span>
      </div>
      <Button
        href={isCustom ? "/contact" : "/pricing"}
        variant={plan.featured ? "primary" : "outline"}
        className="mt-5 w-full"
      >
        {plan.cta}
      </Button>
      <div className="my-5 h-px bg-border-subtle" />
      <ul className="flex flex-1 flex-col gap-2">
        {(compact ? plan.features.slice(0, 5) : plan.features).map((f) => (
          <li
            key={f}
            className="flex gap-2 text-[13px] leading-snug text-ink-muted"
          >
            <span className="shrink-0 font-bold text-green">✓</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PricingCards({
  compact = false,
  limit,
}: {
  compact?: boolean;
  limit?: number;
}) {
  const visible = limit ? plans.slice(0, limit) : plans;

  return (
    <div
      className={cn(
        "grid gap-5",
        compact
          ? "mt-10 md:grid-cols-2 xl:grid-cols-4"
          : "mt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5",
      )}
    >
      {visible.map((plan, i) => (
        <FadeIn key={plan.id} delay={i * 0.05}>
          <PlanCard plan={plan} compact={compact} />
        </FadeIn>
      ))}
    </div>
  );
}

export function NoSeatBanner() {
  return (
    <FadeIn className="relative mt-10 overflow-hidden rounded-[24px] border border-accent/20 bg-gradient-to-r from-accent-soft via-white to-accent-soft p-8 text-center md:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <h3 className="relative text-[24px] font-bold tracking-[-0.02em] text-ink md:text-[28px]">
        No per-seat tax
      </h3>
      <p className="relative mx-auto mt-3 max-w-[640px] text-[16px] leading-relaxed text-ink-muted">
        Your humans are unlimited on every plan. Your AI employees are unlimited
        too. As long as your workspace has AI Work Hours available, your AI
        employees can keep working. When the weekly pool runs out, they pause
        until the next reset.
      </p>
      <p className="relative mx-auto mt-4 max-w-[680px] text-[15px] font-semibold text-accent-d">
        {pricingPositioning.slackEdge}
      </p>
    </FadeIn>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  dark = false,
  split = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  dark?: boolean;
  split?: boolean;
}) {
  if (dark || split) {
    return (
      <section className="container-wide pt-8">
        <div className="relative overflow-hidden rounded-[28px] border border-[#1a2030] bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] shadow-[0_40px_100px_-40px_rgba(12,14,19,0.5)]">
          <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-30" />
          <div className="pointer-events-none absolute -top-[120px] right-0 h-[400px] w-[400px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.35),transparent_65%)] blur-[24px]" />
          <div className={cn(
            "relative px-6 py-16 md:px-12 md:py-20",
            split ? "grid items-center gap-12 lg:grid-cols-2 lg:text-left" : "text-center",
          )}>
            <FadeIn className={split ? "" : "container-prose mx-auto"}>
              {eyebrow && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#93C5FD]">
                  {eyebrow}
                </span>
              )}
              <h1 className={cn(
                "font-bold leading-[1.06] tracking-[-0.03em] text-white text-balance",
                split ? "mt-5 text-[36px] md:text-[48px]" : "mt-4 text-[34px] md:text-[52px]",
              )}>
                {title}
              </h1>
              {description && (
                <p className={cn(
                  "mt-5 text-[17px] leading-relaxed text-white/85",
                  split ? "max-w-[min(92vw,560px)]" : "mx-auto max-w-[min(92vw,680px)]",
                )}>
                  {description}
                </p>
              )}
              {children}
            </FadeIn>
            {split && (
              <FadeIn delay={0.1} className="hidden lg:block">
                <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="space-y-3 font-mono text-[12px] text-white/70">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Human members</span>
                      <span className="text-green">Unlimited</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>AI employees</span>
                      <span className="text-green">Unlimited</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Per-seat fees</span>
                      <span className="text-green">$0</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>AI Work Hours</span>
                      <span className="text-[#93C5FD]">Weekly pool</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container-content pt-14 pb-4">
      <FadeIn>
        {eyebrow && (
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-ink text-balance md:text-[48px] lg:text-[52px]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-[min(92vw,720px)] text-[18px] leading-relaxed text-ink-muted lg:text-[19px]">
            {description}
          </p>
        )}
        {children}
      </FadeIn>
    </section>
  );
}

export function DarkCta({
  title,
  description,
  primaryHref = "/pricing",
  primaryLabel = "Start free",
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="container-wide pt-20 pb-4">
      <div className="relative overflow-hidden rounded-[28px] border border-[#1a2030] bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] px-6 py-16 text-center shadow-[0_40px_100px_-40px_rgba(12,14,19,0.5)] md:px-12">
        <div className="pointer-events-none absolute -top-[100px] left-1/2 h-[300px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.38),transparent_64%)] blur-[20px]" />
        <FadeIn className="relative">
          <h2 className="text-[30px] font-bold tracking-[-0.025em] text-white md:text-[38px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-relaxed text-white/85">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} variant="onDark" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

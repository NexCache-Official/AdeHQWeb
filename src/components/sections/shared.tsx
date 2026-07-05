import { plans } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function PricingCards({ compact = false }: { compact?: boolean }) {
  const planList = [plans.free, plans.pro, plans.plus];

  return (
    <div className={cn("grid gap-4 md:grid-cols-3", compact ? "mt-10" : "mt-10")}>
      {planList.map((plan, i) => (
        <FadeIn key={plan.name} delay={i * 0.06}>
          <div
            className={cn(
              "relative rounded-[20px] bg-white p-7 shadow-[0_1px_3px_rgba(40,30,15,0.06)]",
              plan.featured
                ? "border-2 border-accent shadow-[0_18px_44px_-22px_rgba(37,99,235,0.4)]"
                : "border border-border",
            )}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
            {!compact && (
              <p className="mt-1 text-[13px] text-ink-subtle">{plan.tagline}</p>
            )}
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-mono text-[36px] font-semibold tracking-[-0.02em] text-ink md:text-[40px]">
                {plan.price}
              </span>
              <span className="text-[13px] text-ink-subtle">/mo</span>
            </div>
            <Button
              href="/pricing"
              variant={plan.featured ? "primary" : "outline"}
              className="mt-4 w-full"
            >
              {plan.cta}
            </Button>
            <div className="my-5 h-px bg-border-subtle" />
            <ul className="flex flex-col gap-2.5">
              {plan.features.slice(0, compact ? 4 : undefined).map((f) => (
                <li key={f} className="flex gap-2 text-[13.5px] leading-snug text-ink-muted">
                  <span className="shrink-0 text-green">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <section className="mx-auto max-w-[1180px] px-7 pt-[26px]">
        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] px-6 py-16 text-center shadow-[0_30px_70px_-34px_rgba(40,30,15,0.6)] md:px-10 md:py-[72px]">
          <div className="pointer-events-none absolute -top-[110px] left-1/2 h-[340px] w-[520px] -translate-x-1/2 animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.36),transparent_64%)] blur-[22px]" />
          <FadeIn className="relative mx-auto max-w-[760px]">
            {eyebrow && (
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5B93F6]">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-3.5 text-[34px] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance md:text-[48px]">
              {title}
            </h1>
            {description && (
              <p className="mx-auto mt-4 max-w-[600px] text-[17px] leading-relaxed text-white/80">
                {description}
              </p>
            )}
            {children}
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[820px] px-7 pt-16 text-center">
      <FadeIn>
        {eyebrow && (
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3.5 text-[34px] font-bold leading-tight tracking-[-0.025em] text-ink text-balance md:text-[42px]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-[580px] text-[17px] leading-relaxed text-ink-muted">
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
    <section className="mx-auto max-w-[1180px] px-7 pt-20 pb-4">
      <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] px-6 py-14 text-center shadow-[0_30px_70px_-34px_rgba(40,30,15,0.6)] md:px-10">
        <div className="pointer-events-none absolute -top-[100px] left-1/2 h-[300px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.38),transparent_64%)] blur-[20px]" />
        <FadeIn className="relative">
          <h2 className="text-[30px] font-bold tracking-[-0.025em] text-white md:text-[34px]">
            {title}
          </h2>
          <p className="mx-auto mt-3.5 max-w-[480px] text-base text-white/80">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} variant="secondary" size="lg" className="border-white/25 bg-white/[0.12] text-white hover:bg-white/20">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

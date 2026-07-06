import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export function SectionDivider({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-subtle">
        {label}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function EditorialRow({
  eyebrow,
  title,
  description,
  children,
  reverse = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <FadeIn
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse && "[&>div:first-child]:lg:order-2 [&>div:last-child]:lg:order-1",
        className,
      )}
    >
      <div>
        {eyebrow && (
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
            {eyebrow}
          </span>
        )}
        <h3 className="mt-3 text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink md:text-[34px]">
          {title}
        </h3>
        {description && (
          <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
            {description}
          </p>
        )}
      </div>
      <div>{children}</div>
    </FadeIn>
  );
}

export function ProcessRail({
  steps,
}: {
  steps: { n: string; title: string; body: string }[];
}) {
  return (
      <div className="relative mt-10 sm:mt-12">
      <div className="absolute top-[22px] right-[8%] left-[8%] hidden h-px bg-border md:block" />
      <div className="grid gap-8 md:grid-cols-3 md:gap-6">
        {steps.map((step, i) => (
          <FadeIn key={step.n} delay={i * 0.06}>
            <div className="relative text-center md:text-left">
              <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent bg-white font-mono text-[13px] font-bold text-accent shadow-[0_0_0_6px_white]">
                {step.n}
              </span>
              <h3 className="mt-5 text-[18px] font-bold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export function PainList({
  items,
}: {
  items: { icon: React.ReactNode; title: string; body: string }[];
}) {
  return (
    <div className="mt-12 divide-y divide-border rounded-[24px] border border-border bg-white">
      {items.map((item, i) => (
        <FadeIn key={item.title} delay={i * 0.04}>
          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:gap-6 sm:p-6 md:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FEF2F2] text-danger">
              {item.icon}
            </span>
            <div className="flex-1">
              <h3 className="text-[18px] font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 max-w-[640px] text-[15px] leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </div>
            <span className="hidden font-mono text-[48px] font-bold leading-none text-border sm:block">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export function BentoPanel({
  className,
  children,
  href,
  dark = false,
}: {
  className?: string;
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
}) {
  const inner = (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-[22px] border p-6 transition-all duration-300 md:p-8",
        dark
          ? "border-white/10 bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] text-white"
          : "border-border bg-white hover:border-accent/30 hover:shadow-[0_20px_50px_-24px_rgba(37,99,235,0.15)]",
        href && "hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full no-underline">
        {inner}
      </Link>
    );
  }
  return inner;
}

export function InlineCta({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-[14px] font-semibold text-accent transition-colors hover:text-accent-d",
        className,
      )}
    >
      {label}
      <ArrowRight size={15} />
    </Link>
  );
}

import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Lock, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

const resources = [
  {
    icon: BookOpen,
    href: "/blog/ai-work-hours-explained",
    title: "AI Work Hours explained",
    desc: "How weekly capacity works and what counts as active AI work.",
    cta: "Read guide",
  },
  {
    icon: FileText,
    href: "/blog/hire-ai-employees-not-models",
    title: "Hire employees, not models",
    desc: "Why identity, memory, and orchestration matter more than raw model access.",
    cta: "Read article",
  },
  {
    icon: MessageCircle,
    href: "/contact",
    title: "Talk to our team",
    desc: "Book a walkthrough for agencies, startups, or enterprise deployments.",
    cta: "Book demo",
  },
  {
    icon: Lock,
    href: "/security",
    title: "Security & compliance",
    desc: "How AdeHQ protects workspace data, approvals, and audit trails.",
    cta: "View security",
  },
];

export function ResourcesStrip() {
  return (
    <section className="container-wide pt-20">
      <FadeIn>
        <div className="overflow-hidden rounded-[24px] border border-border bg-gradient-to-br from-white via-white to-accent-soft/30">
          <div className="grid md:grid-cols-[1fr_1.6fr]">
            <div className="border-b border-border p-5 sm:p-8 md:border-r md:border-b-0 lg:p-10">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                Resources
              </div>
              <h2 className="mt-3 text-[1.375rem] font-bold tracking-[-0.02em] text-ink sm:text-[28px] md:text-[32px]">
                Learn, evaluate, and deploy with confidence
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                Guides, security docs, and direct access to our team — everything
                you need before and after you hire your first AI employee.
              </p>
              <Link
                href="/blog"
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-accent hover:underline"
              >
                Browse all resources
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2">
              {resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col border-b border-border p-6 no-underline transition-colors last:border-b-0 even:border-l-0 sm:even:border-l sm:[&:nth-child(2)]:border-b-0 sm:[&:nth-child(3)]:border-b-0 hover:bg-muted/50 sm:p-7"
                >
                  <item.icon
                    size={20}
                    className="text-accent"
                    strokeWidth={1.8}
                  />
                  <h3 className="mt-4 text-[15px] font-bold text-ink group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-ink-muted">
                    {item.desc}
                  </p>
                  <span className="mt-4 text-[12.5px] font-semibold text-accent">
                    {item.cta} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

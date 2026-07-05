import type { Metadata } from "next";
import {
  Brain,
  Globe,
  Mail,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { DarkCta, PageHero } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import { FadeIn, Eyebrow, SectionHeader } from "@/components/ui/motion";
import { intelligenceModes, orchestrationModes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Product",
  description:
    "The operating system for AI employees — hiring, orchestration, memory, approvals, and work logs.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Product"
        title={
          <>
            The operating system for{" "}
            <span className="animate-gradflow bg-gradient-to-r from-[#5B93F6] via-[#2563EB] to-[#5B93F6] bg-[length:200%_100%] bg-clip-text text-transparent">
              AI employees
            </span>
          </>
        }
        description="Hire, direct, monitor, and trust AI workers — alongside your human team — in one workspace built for how small businesses actually operate."
      >
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/pricing" size="lg">
            Start free
          </Button>
          <Button href="/product#orchestration" variant="secondary" size="lg" className="border-white/25 bg-white/[0.12] text-white hover:bg-white/20">
            Watch it coordinate
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[1180px] px-7 pt-20">
        <SectionHeader
          eyebrow="The system"
          title="Everything an AI worker needs to be a real teammate"
        />
        <div className="mt-9 grid auto-rows-fr gap-4 md:grid-cols-3">
          <FadeIn className="relative overflow-hidden rounded-[20px] bg-rail p-7 text-white md:col-span-2">
            <div className="pointer-events-none absolute -top-[50px] -right-[30px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.4),transparent_64%)]" />
            <div className="relative">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.07em] text-white/70">
                Hiring
              </span>
              <h3 className="mt-2.5 text-[22px] font-bold tracking-[-0.01em]">
                Hire employees, not models
              </h3>
              <p className="mt-2 max-w-[440px] text-[14.5px] leading-relaxed text-white/80">
                Describe the job. Ade Recruiter interviews you, drafts a job
                brief, and generates 3–5 candidate employees — each with
                strengths, personality, and an intelligence mode.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Pr Product", "Mk Marketing", "Sa Sales", "Fi Finance"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.08] px-2.5 py-1 font-mono text-[11px] text-white"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </FadeIn>
          {[
            {
              icon: MessageSquare,
              bg: "bg-info-soft",
              color: "text-info",
              title: "Rooms & topics",
              body: "Major work areas and focused workstreams — not endless threads.",
            },
            {
              icon: Brain,
              bg: "bg-violet-soft",
              color: "text-violet",
              title: "Governed memory",
              body: "Source-linked, scoped, with draft → approved → pinned states.",
            },
            {
              icon: ShieldCheck,
              bg: "bg-green-soft",
              color: "text-green",
              title: "Approvals & work logs",
              body: "Sensitive actions wait for sign-off. Meaningful work is logged.",
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.05}>
              <div className="h-full rounded-[20px] border border-border bg-white p-6 shadow-[0_1px_3px_rgba(40,30,15,0.06)]">
                <span
                  className={`mb-3.5 inline-flex h-[38px] w-[38px] items-center justify-center rounded-[11px] ${card.bg} ${card.color}`}
                >
                  <card.icon size={19} strokeWidth={1.8} />
                </span>
                <h3 className="text-[17px] font-bold text-ink">{card.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-snug text-ink-muted">
                  {card.body}
                </p>
              </div>
            </FadeIn>
          ))}
          <FadeIn className="relative overflow-hidden rounded-[20px] border border-[#CBDCFB] bg-accent-soft p-7 md:col-span-2">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.07em] text-accent-d">
              Work graph
            </span>
            <h3 className="mt-2.5 text-[22px] font-bold tracking-[-0.01em] text-ink">
              Every action becomes a system of record
            </h3>
            <p className="mt-2 max-w-[460px] text-[14.5px] leading-relaxed text-ink-muted">
              Messages, tasks, memory, approvals, work logs, and agent runs
              connect — so your workspace learns what happened, what was
              trusted, and what matters for each topic.
            </p>
          </FadeIn>
        </div>
      </section>

      <section
        id="orchestration"
        className="mt-20 scroll-mt-[62px] border-y border-border-subtle bg-white py-[90px]"
      >
        <div className="mx-auto max-w-[1080px] px-7">
          <SectionHeader
            eyebrow="Conversation orchestration"
            title="Coordinated replies, not noisy bots"
            description="AdeHQ reads intent and decides who leads, who collaborates, and who stays quiet."
          />
          <div className="mt-10 flex flex-col gap-3">
            {orchestrationModes.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.04}>
                <div className="grid items-center gap-5 rounded-2xl border border-border bg-canvas px-5 py-4 transition-colors hover:border-[#cbd0da] md:grid-cols-[170px_1fr]">
                  <span className="text-[15px] font-bold text-ink">{m.name}</span>
                  <span className="flex min-w-0 flex-wrap items-center gap-3">
                    <code className="whitespace-nowrap rounded-md bg-accent-soft px-2.5 py-1 font-mono text-[12.5px] text-accent-d">
                      {m.cmd}
                    </code>
                    <span className="text-sm leading-snug text-ink-muted">
                      {m.desc}
                    </span>
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-[1180px] px-7 py-[90px]">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <Eyebrow>Model intelligence</Eyebrow>
            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.02em] text-ink">
              Intelligence levels, not model names
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-muted">
              You pick how an employee should think — not which provider to route
              to. And identity survives the switch: upgrade Eleanor from
              Balanced to Strong without losing her memory, role, or history.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-3">
            {intelligenceModes.map((mode, i) => (
              <FadeIn key={mode.name} delay={i * 0.04}>
                <div className="rounded-[14px] border border-border bg-white p-4 shadow-[0_1px_3px_rgba(40,30,15,0.06)] transition-colors hover:border-[#cbd0da]">
                  <span
                    className="mb-2.5 block h-2 w-2 rounded-full"
                    style={{ background: mode.dot }}
                  />
                  <span className="block text-sm font-bold text-ink">
                    {mode.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-subtle">
                    {mode.use}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-7 pb-8">
        <div className="mb-9 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-ink-subtle">
            Coming on roadmap
          </span>
          <h2 className="mt-4 text-[34px] font-bold tracking-[-0.02em] text-ink">
            Beyond chat — visible AI work
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Globe, title: "Browser Agent", body: "Research with screenshots and source capture you can review." },
            { icon: Brain, title: "IDE Agent", body: "A code sandbox with diff review and approval before merge." },
            { icon: Mail, title: "Email Inbox", body: "An employee email identity with send approvals built in." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="rounded-[18px] bg-rail p-6 text-white">
                <span className="mb-3.5 inline-flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-white/[0.08] text-[#5B93F6]">
                  <item.icon size={19} strokeWidth={1.8} />
                </span>
                <h3 className="text-[17px] font-bold">{item.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-snug text-white/75">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <DarkCta
        title="See it in action"
        description="Start free, bring your team, and hire your first AI employee in minutes."
        secondaryHref="/"
        secondaryLabel="Back to home"
      />
    </>
  );
}

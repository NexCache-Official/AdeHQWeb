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
import { FadeIn, SectionHeader } from "@/components/ui/motion";
import {
  BentoPanel,
  EditorialRow,
  InlineCta,
  SectionDivider,
} from "@/components/ui/showcase";
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
        split
        eyebrow="Product"
        title={
          <>
            The operating system for{" "}
            <span className="animate-gradflow bg-gradient-to-r from-[#5B93F6] via-[#93C5FD] to-[#5B93F6] bg-[length:200%_100%] bg-clip-text text-transparent">
              AI employees
            </span>
          </>
        }
        description="Hire, direct, monitor, and trust AI workers — alongside your human team — in one workspace built for how small businesses actually operate."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/pricing" size="lg">
            Start free
          </Button>
          <Button href="/product#orchestration" variant="onDark" size="lg">
            Watch it coordinate
          </Button>
        </div>
      </PageHero>

      <section className="container-wide pt-20">
        <SectionDivider label="Platform capabilities" />
        <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-6">
          <BentoPanel dark className="md:col-span-4 md:row-span-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
              Hiring
            </span>
            <h3 className="mt-3 text-[28px] font-bold leading-tight">
              Hire employees, not models
            </h3>
            <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-white/80">
              Describe the job. Ade Recruiter interviews you, drafts a job brief,
              and generates 3–5 candidate employees — each with strengths,
              personality, and an intelligence mode.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Product", "Marketing", "Sales", "Finance"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white/10 px-3 py-1.5 font-mono text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BentoPanel>
          {[
            {
              icon: MessageSquare,
              title: "Rooms & topics",
              body: "Major work areas and focused workstreams — not endless threads.",
            },
            {
              icon: Brain,
              title: "Governed memory",
              body: "Source-linked, scoped, with draft → approved → pinned states.",
            },
            {
              icon: ShieldCheck,
              title: "Approvals & work logs",
              body: "Sensitive actions wait for sign-off. Meaningful work is logged.",
            },
          ].map((item) => (
            <BentoPanel key={item.title} className="md:col-span-2">
              <item.icon size={22} className="text-accent" strokeWidth={1.8} />
              <h3 className="mt-4 text-[17px] font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </BentoPanel>
          ))}
          <BentoPanel className="md:col-span-6 border-accent/25 bg-gradient-to-r from-accent-soft/50 to-white">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Work graph
                </span>
                <h3 className="mt-2 text-[24px] font-bold text-ink">
                  Every action becomes a system of record
                </h3>
                <p className="mt-2 max-w-[560px] text-[15px] text-ink-muted">
                  Messages, tasks, memory, approvals, work logs, and agent runs
                  connect — so your workspace learns what happened, what was
                  trusted, and what matters for each topic.
                </p>
              </div>
              <InlineCta href="/pricing" label="See AI Work Hours" />
            </div>
          </BentoPanel>
        </div>
      </section>

      <section
        id="orchestration"
        className="mt-24 scroll-mt-[90px] border-y border-border bg-muted py-24"
      >
        <div className="container-wide">
          <SectionHeader
            align="left"
            eyebrow="Conversation orchestration"
            title="Coordinated replies, not noisy bots"
            description="AdeHQ reads intent and decides who leads, who collaborates, and who stays quiet."
          />
          <div className="mt-12 space-y-0 divide-y divide-border rounded-[24px] border border-border bg-white overflow-hidden">
            {orchestrationModes.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.03}>
                <div className="grid items-start gap-3 px-4 py-4 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-4 sm:px-6 sm:py-5 md:grid-cols-[minmax(0,140px)_minmax(0,120px)_1fr] md:gap-8 md:px-8">
                  <span className="text-[15px] font-bold text-ink sm:text-[16px]">{m.name}</span>
                  <code className="w-fit rounded-lg bg-accent-soft px-3 py-1.5 font-mono text-[11px] font-semibold text-accent-d sm:text-[12px]">
                    {m.cmd}
                  </code>
                  <span className="text-[13.5px] leading-relaxed text-ink-muted sm:text-[14px] md:col-span-1">
                    {m.desc}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container-wide py-24">
        <EditorialRow
          eyebrow="Model intelligence"
          title="Intelligence levels, not model names"
          description="You pick how an employee should think — not which provider to route to. Identity survives the switch: upgrade Eleanor from Balanced to Strong without losing her memory, role, or history."
        >
          <div className="grid grid-cols-2 gap-3">
            {intelligenceModes.map((mode, i) => (
              <FadeIn key={mode.name} delay={i * 0.04}>
                <div className="group rounded-2xl border border-border bg-white p-4 transition-colors hover:border-accent/30">
                  <span
                    className="mb-3 block h-2 w-8 rounded-full transition-all group-hover:w-12"
                    style={{ background: mode.dot }}
                  />
                  <span className="block text-sm font-bold text-ink">{mode.name}</span>
                  <span className="mt-0.5 block text-xs text-ink-subtle">{mode.use}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </EditorialRow>
      </section>

      <section className="container-wide pb-8">
        <SectionDivider label="Roadmap preview" className="mb-10" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Globe, title: "Browser Agent", body: "Research with screenshots and source capture you can review." },
            { icon: Brain, title: "IDE Agent", body: "A code sandbox with diff review and approval before merge." },
            { icon: Mail, title: "Email Inbox", body: "An employee email identity with send approvals built in." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="relative overflow-hidden rounded-[22px] bg-rail p-7 text-white">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
                <item.icon size={22} className="relative text-[#93C5FD]" strokeWidth={1.8} />
                <h3 className="relative mt-4 text-[18px] font-bold">{item.title}</h3>
                <p className="relative mt-2 text-[14px] leading-relaxed text-white/75">
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

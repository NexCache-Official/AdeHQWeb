import type { Metadata } from "next";
import Link from "next/link";
import { DarkCta } from "@/components/sections/shared";
import { FadeIn, SectionHeader } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "AdeHQ is building the operating system for AI employees — for solo founders, freelancers, and AI-native teams.",
};

const values = [
  {
    title: "Transparency by default",
    body: "Every meaningful action is logged with a reason. External actions require approval. You always know what happened, why, and what it cost.",
  },
  {
    title: "Humans stay in charge",
    body: "AI employees are teammates, not autopilot. You hire them, assign work, and sign off on sensitive actions — unlimited human seats, always free.",
  },
  {
    title: "Built for operators",
    body: "No enterprise bloat. AdeHQ is designed for solo founders, freelancers, agencies, and small teams who need research, sales, marketing, and ops — today.",
  },
];

const team = [
  { initials: "JP", name: "Jon Park", role: "Founder & CEO" },
  { initials: "AL", name: "Ada Lin", role: "Head of Product" },
  { initials: "MR", name: "Marcus Reed", role: "Engineering Lead" },
  { initials: "EP", name: "Eleanor Price", role: "Design & Brand" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[820px] px-7 pt-16 text-center">
        <FadeIn>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
            About
          </span>
          <h1 className="mt-3.5 text-[34px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[42px]">
            The operating system for how small teams work with AI
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-[17px] leading-relaxed text-ink-muted">
            AdeHQ exists because AI is powerful but fragmented. We&apos;re
            building one workspace where you hire AI employees the way you&apos;d
            hire humans — with roles, memory, accountability, and team
            coordination.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-[1080px] px-7 pt-20">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-[20px] border border-border bg-white p-6 shadow-[0_1px_3px_rgba(40,30,15,0.06)]">
                <h3 className="text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {v.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-7 pt-20">
        <SectionHeader eyebrow="Team" title="Built by operators, for operators" />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, i) => (
            <FadeIn key={member.initials} delay={i * 0.04}>
              <div className="rounded-2xl border border-border bg-canvas p-5 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#5B93F6] text-lg font-bold text-white">
                  {member.initials}
                </span>
                <h3 className="mt-3 font-bold text-ink">{member.name}</h3>
                <p className="text-sm text-ink-muted">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-7 pt-20">
        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] px-6 py-14 shadow-[0_30px_70px_-34px_rgba(40,30,15,0.6)] md:px-12">
          <div className="pointer-events-none absolute -top-[90px] -right-[40px] h-[340px] w-[340px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.3),transparent_64%)] blur-[20px]" />
          <FadeIn className="relative max-w-[640px]">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5B93F6]">
              Our story
            </span>
            <h2 className="mt-3.5 text-[30px] font-bold leading-tight tracking-[-0.02em] text-white">
              We started AdeHQ because AI felt like a pile of tabs, not a team.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Founders and small teams were stitching together five chatbots,
              re-explaining their business every session, and never really
              knowing what the AI did or what it cost. We wanted something that
              felt like hiring — real roles, real memory, and real
              accountability.
            </p>
            <p className="mt-3.5 text-[16px] leading-relaxed text-white/80">
              So we built one workspace where AI employees and your human
              teammates work side by side. That&apos;s AdeHQ: a calm, premium
              operator console for running an AI workforce you can actually
              trust.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[760px] px-7 pt-20 pb-4 text-center">
        <FadeIn>
          <p className="text-[15px] leading-relaxed text-ink-muted">
            Want to help shape the AI-native workplace?{" "}
            <Link href="/careers" className="font-semibold text-accent hover:underline">
              See open roles
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              get in touch
            </Link>
            .
          </p>
        </FadeIn>
      </section>

      <DarkCta
        title="Your AI workforce is ready to hire."
        description="Join founders and small teams using AdeHQ to research, sell, plan, and operate."
      />
    </>
  );
}

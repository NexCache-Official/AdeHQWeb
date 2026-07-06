import type { Metadata } from "next";
import Link from "next/link";
import { DarkCta, PageHero } from "@/components/sections/shared";
import { FadeIn, SectionHeader } from "@/components/ui/motion";
import { BentoPanel, EditorialRow } from "@/components/ui/showcase";

export const metadata: Metadata = {
  title: "About",
  description:
    "AdeHQ is building the operating system for AI employees — for solo founders, freelancers, and AI-native teams.",
};

const values = [
  {
    title: "Transparency by default",
    body: "Every meaningful action is logged with a reason. External actions require approval. You always know what happened, why, and what it cost.",
    accent: "01",
  },
  {
    title: "Humans stay in charge",
    body: "AI employees are teammates, not autopilot. You hire them, assign work, and sign off on sensitive actions — unlimited human members and unlimited AI employees on every plan.",
    accent: "02",
  },
  {
    title: "Built for operators",
    body: "No enterprise bloat. AdeHQ is designed for solo founders, freelancers, agencies, and small teams who need research, sales, marketing, and ops — today.",
    accent: "03",
  },
];

const team = [
  { initials: "JP", name: "Jon Park", role: "Founder & CEO" },
  { initials: "AL", name: "Ada Lin", role: "Head of Product" },
  { initials: "MR", name: "Marcus Reed", role: "Engineering Lead" },
  { initials: "EP", name: "Eleanor Price", role: "Design & Brand" },
];

const milestones = [
  { year: "2024", event: "Founded with one question: why does AI feel like tabs, not a team?" },
  { year: "2025", event: "Launched hiring, orchestration, and AI Work Hours metering." },
  { year: "2026", event: "Unlimited humans and unlimited AI employees on every plan." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Company"
        title="The operating system for how small teams work with AI"
        description="AdeHQ exists because AI is powerful but fragmented. We're building one workspace where you hire AI employees the way you'd hire humans — with roles, memory, accountability, and team coordination."
      />

      <section className="container-wide py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.05}>
              <div className="border-l-4 border-accent pl-6">
                <span className="font-mono text-[11px] font-bold text-accent">
                  {v.accent}
                </span>
                <h3 className="mt-2 text-[22px] font-bold text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {v.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted py-24">
        <div className="container-wide">
          <SectionHeader eyebrow="Team" title="Built by operators, for operators" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <FadeIn key={member.initials} delay={i * 0.04}>
                <div className="text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-[#5B93F6] text-xl font-bold text-white shadow-[0_12px_30px_-12px_rgba(37,99,235,0.5)]">
                    {member.initials}
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold text-ink">{member.name}</h3>
                  <p className="text-[14px] text-ink-muted">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-24">
        <EditorialRow
          eyebrow="Our story"
          title="We started AdeHQ because AI felt like a pile of tabs, not a team."
          description="Founders and small teams were stitching together five chatbots, re-explaining their business every session, and never really knowing what the AI did or what it cost. We wanted something that felt like hiring — real roles, real memory, and real accountability."
        >
          <BentoPanel dark>
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-5 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <span className="font-mono text-[13px] font-bold text-[#93C5FD]">
                    {m.year}
                  </span>
                  <p className="text-[14px] leading-relaxed text-white/80">{m.event}</p>
                </div>
              ))}
            </div>
          </BentoPanel>
        </EditorialRow>
      </section>

      <section className="container-wide pb-4 text-center">
        <FadeIn>
          <p className="text-[16px] leading-relaxed text-ink-muted">
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

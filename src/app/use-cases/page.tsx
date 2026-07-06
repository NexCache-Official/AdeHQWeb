import type { Metadata } from "next";
import Link from "next/link";
import { DarkCta, PageHero } from "@/components/sections/shared";
import { FadeIn } from "@/components/ui/motion";
import { SectionDivider } from "@/components/ui/showcase";
import { useCases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "What teams build with AdeHQ — product launches, market research, sales outreach, client delivery, and more.",
};

const expandedUseCases = [
  {
    id: "launch",
    code: "La",
    title: "Launch a product",
    body: "Spin up a launch room with research, product, design, engineering, sales, and marketing employees. Coordinate positioning, copy, outreach, and launch tasks from one work graph.",
    steps: [
      "Create a #launch room with focused topics: positioning, copy, outreach",
      "Hire Research and Sales employees with scoped memory",
      "Review approvals before any external send",
      "Track every action in the work log",
    ],
  },
  {
    id: "research",
    code: "Mr",
    title: "Research a market",
    body: "A long-context research employee compiles competitor landscapes, pricing tables, and trend summaries — saving findings to governed, source-linked memory.",
    steps: [
      "Assign a Long Context research employee",
      "Ask for competitor pricing, feature matrices, or trend reports",
      "Review and pin approved findings to memory",
      "Share insights with Sales and Marketing in the same room",
    ],
  },
  {
    id: "sales",
    code: "So",
    title: "Sales outreach",
    body: "Your Sales employee drafts personalized outreach, requests approval before sending, and logs completed work with cost and duration.",
    steps: [
      "Hire a Balanced-intelligence Sales employee",
      "Draft sequences and one-off emails in a #sales room",
      "Approve external sends from your inbox",
      "Track pipeline tasks alongside conversations",
    ],
  },
  {
    id: "client",
    code: "Cl",
    title: "Client delivery",
    body: "Freelancers and agencies assign AI employees per client room with scoped memory — no context bleed between projects.",
    steps: [
      "One room per client with isolated memory",
      "Assign dedicated AI employees per engagement",
      "Invite human clients as collaborators for free",
      "Deliver drafts, research, and updates with full audit trail",
    ],
  },
  {
    id: "ops",
    code: "Op",
    title: "Operations & tasks",
    body: "Turn messy ideas into structured tasks. Track follow-ups across topics and rooms without losing context.",
    steps: [
      "Create topics for each workstream inside a room",
      "Let AI employees propose and update tasks",
      "Humans and AI share the same task board",
      "Connect tasks to work logs and memory",
    ],
  },
  {
    id: "agency",
    code: "Ag",
    title: "Agency workflows",
    body: "Manage multiple AI workers across client projects from one workspace — scale delivery without scaling headcount.",
    steps: [
      "Multiple workspaces on Business",
      "Parallel AI employees for concurrent client work",
      "Standardized hiring templates per role type",
      "Usage dashboard to understand AI Work Hours per client",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Solutions"
        title="What teams build with AdeHQ"
        description="From solo founders to AI-native agencies — one workspace for research, sales, marketing, operations, and client delivery."
      />

      <section className="container-wide pt-12">
        <div className="flex flex-wrap gap-2">
          {expandedUseCases.map((uc) => (
            <Link
              key={uc.id}
              href={`#${uc.id}`}
              className="rounded-full border border-border bg-white px-4 py-2 text-[13px] font-semibold text-ink-muted no-underline transition-colors hover:border-accent hover:text-accent"
            >
              {uc.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wide pt-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u, i) => (
            <FadeIn key={u.code} delay={i * 0.03}>
              <a
                href={`#${expandedUseCases[i]?.id}`}
                className="group block rounded-[20px] border border-border bg-white p-6 no-underline transition-all hover:shadow-[0_16px_40px_-20px_rgba(37,99,235,0.12)]"
              >
                <span className="font-mono text-[32px] font-bold leading-none text-border transition-colors group-hover:text-accent/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[17px] font-bold text-ink group-hover:text-accent">
                  {u.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                  {u.body}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionDivider label="Deep dives" />
        <div className="mt-16 flex flex-col gap-24">
          {expandedUseCases.map((uc, i) => (
            <FadeIn key={uc.id} delay={0.02}>
              <article
                id={uc.id}
                className="scroll-mt-28 grid gap-10 border-t border-border pt-16 lg:grid-cols-[280px_1fr]"
              >
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rail font-mono text-sm font-bold text-white">
                    {uc.code}
                  </span>
                  <h2 className="mt-4 text-[28px] font-bold tracking-[-0.02em] text-ink md:text-[32px]">
                    {uc.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                    {uc.body}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                    Workflow
                  </span>
                  <ol className="mt-4 space-y-0 divide-y divide-border rounded-[20px] border border-border bg-white">
                    {uc.steps.map((step, j) => (
                      <li
                        key={step}
                        className="flex gap-5 px-6 py-5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-[11px] font-bold text-accent">
                          {j + 1}
                        </span>
                        <span className="pt-1 text-[15px] leading-relaxed text-ink-muted">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                  {i % 2 === 0 && (
                    <div className="mt-6 rounded-2xl bg-gradient-to-r from-accent-soft to-white p-6">
                      <p className="text-[14px] font-medium text-ink">
                        <span className="font-bold text-accent">Tip:</span> Start
                        with one room and one AI employee — scale to a full
                        workforce as your weekly AI Work Hours grow.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <DarkCta
        title="Start with one use case. Scale to your whole business."
        description="Unlimited humans. Unlimited AI employees. Hire your first AI employee in minutes."
      />
    </>
  );
}

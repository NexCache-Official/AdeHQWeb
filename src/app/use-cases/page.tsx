import type { Metadata } from "next";
import { DarkCta } from "@/components/sections/shared";
import { FadeIn } from "@/components/ui/motion";
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
      "Multiple workspaces on Pro Plus",
      "Parallel AI employees for concurrent client work",
      "Standardized hiring templates per role type",
      "Usage dashboard to understand AI Work Hours per client",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="mx-auto max-w-[820px] px-7 pt-16 text-center">
        <FadeIn>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
            Use cases
          </span>
          <h1 className="mt-3.5 text-[34px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[42px]">
            What teams build with AdeHQ
          </h1>
          <p className="mx-auto mt-4 max-w-[580px] text-[17px] leading-relaxed text-ink-muted">
            From solo founders to AI-native agencies — one workspace for
            research, sales, marketing, operations, and client delivery.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-[1180px] px-7 pt-12">
        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((u, i) => (
            <FadeIn key={u.code} delay={i * 0.03}>
              <a
                href={`#${expandedUseCases[i]?.id}`}
                className="block rounded-2xl border border-border bg-white p-5 no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-16px_rgba(40,34,24,0.22)]"
              >
                <span className="mb-3 inline-flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-rail font-mono text-[13px] font-semibold text-white">
                  {u.code}
                </span>
                <h3 className="font-bold text-ink">{u.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-muted">
                  {u.body}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-7 pt-20 pb-4">
        <div className="flex flex-col gap-16">
          {expandedUseCases.map((uc, i) => (
            <FadeIn key={uc.id} delay={i * 0.02}>
              <div id={uc.id} className="scroll-mt-24">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
                  {uc.code}
                </span>
                <h2 className="mt-2 text-[28px] font-bold tracking-[-0.02em] text-ink">
                  {uc.title}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">
                  {uc.body}
                </p>
                <ol className="mt-5 flex flex-col gap-2.5">
                  {uc.steps.map((step, j) => (
                    <li
                      key={step}
                      className="flex gap-3 rounded-xl border border-border bg-canvas px-4 py-3 text-sm text-ink-muted"
                    >
                      <span className="font-mono text-xs font-semibold text-accent">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <DarkCta
        title="Start with one use case. Scale to your whole business."
        description="Hire your first AI employee in minutes — unlimited human seats included."
      />
    </>
  );
}

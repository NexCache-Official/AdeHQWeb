import Link from "next/link";
import {
  AlertTriangle,
  ArrowRightLeft,
  Brain,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq";
import { FadeIn, Eyebrow, SectionHeader } from "@/components/ui/motion";
import {
  BentoPanel,
  InlineCta,
  PainList,
  ProcessRail,
} from "@/components/ui/showcase";
import {
  compareColor,
  comparison,
  homeFaqs,
  stats,
  useCases,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const problemCards = [
  {
    icon: RefreshCw,
    bg: "bg-danger-soft",
    color: "text-danger",
    title: "Session-based AI",
    body: "Every chat starts from zero. No persistent employee, role, or work history.",
  },
  {
    icon: AlertTriangle,
    bg: "bg-amber-soft",
    color: "text-amber",
    title: "Impossible to manage",
    body: "You can't see what AI did, why, what it cost, or what needs approval.",
  },
  {
    icon: ArrowRightLeft,
    bg: "bg-info-soft",
    color: "text-info",
    title: "Tools don't talk",
    body: "Research, sales, and engineering happen in silos. Context gets lost.",
  },
];

const solutionCards = [
  {
    icon: Users,
    bg: "bg-accent-soft",
    color: "text-accent",
    title: "Hire, don't configure",
    body: 'Describe the role. Meet candidates. Hire Eleanor Price, Finance PR Manager — not "DeepSeek-V4-Flash."',
  },
  {
    icon: MessageSquare,
    bg: "bg-info-soft",
    color: "text-info",
    title: "Rooms & topics",
    body: "Organize work by room (Sales, Research, Launch) and focused topics — not endless chat threads.",
  },
  {
    icon: Brain,
    bg: "bg-violet-soft",
    color: "text-violet",
    title: "Memory that lasts",
    body: "Governed, source-linked memory scoped to workspace, room, topic, or employee.",
  },
  {
    icon: ShieldCheck,
    bg: "bg-green-soft",
    color: "text-green",
    title: "Approvals & work logs",
    body: "Sensitive actions wait for sign-off. Meaningful work is logged.",
  },
];

export function TrustStrip() {
  const tags = [
    "Solo founders",
    "Freelancers",
    "AI-native agencies",
    "Creators & builders",
    "Startup teams",
  ];
  return (
    <section className="container-wide pt-9 pb-2 text-center">
      <p className="text-[15px] leading-relaxed text-ink-muted text-balance">
        For solo founders, freelancers, agencies, and AI-native teams who need{" "}
        <strong className="font-semibold text-ink">
          research, sales, marketing, and operations
        </strong>{" "}
        — without hiring a full human team.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-white px-3.5 py-1.5 font-mono text-[11px] text-ink-subtle"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="container-wide pt-20">
      <SectionHeader
        align="left"
        eyebrow="The problem"
        title="AI is powerful. Your workflow is fragmented."
        description="Most founders use ChatGPT for writing, Claude for planning, Cursor for code, Perplexity for research, Slack for chat, Notion for docs, and Linear for tasks. Nothing remembers your business. Nothing coordinates. Nothing is accountable."
      />
      <PainList
        items={problemCards.map((card) => ({
          icon: <card.icon size={22} strokeWidth={1.8} />,
          title: card.title,
          body: card.body,
        }))}
      />
    </section>
  );
}

export function SolutionSection() {
  return (
    <section id="product" className="container-wide scroll-mt-[90px] pt-24">
      <SectionHeader
        eyebrow="The solution"
        title="One workspace. A full AI workforce."
        description="In AdeHQ you don't pick a model — you hire an employee. Each AI worker has a name, role, personality, memory, tools, and weekly capacity."
        action={<InlineCta href="/product" label="Platform tour" />}
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:mt-12">
        <BentoPanel dark className="min-h-[320px]" href="/product">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
            Core idea
          </span>
          <h3 className="mt-3 text-[26px] font-bold leading-tight md:text-[32px]">
            Hire employees, not models
          </h3>
          <p className="mt-3 max-w-[480px] text-[15px] leading-relaxed text-white/80">
            Describe the role. Meet candidates. Hire Eleanor Price, Finance PR
            Manager — with memory, personality, and accountability built in.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Research", "Sales", "Marketing", "Ops"].map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-white/10 px-3 py-1.5 font-mono text-[11px] text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </BentoPanel>
        <div className="flex flex-col gap-4">
          {solutionCards.slice(1).map((card) => (
            <BentoPanel key={card.title} className="flex-1" href="/product">
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    card.bg,
                    card.color,
                  )}
                >
                  <card.icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-ink">{card.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                    {card.body}
                  </p>
                </div>
              </div>
            </BentoPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HumanAiSection() {
  const team = [
    { initials: "JP", name: "Jon Park", role: "Founder", human: true },
    { initials: "SK", name: "Sara Kim", role: "Designer", human: true },
    { initials: "AL", name: "Ada Lin", role: "Research · working", ai: true, gradient: "green" as const, status: "working" as const },
    { initials: "MR", name: "Marcus Reed", role: "Sales", ai: true, gradient: "indigo" as const },
  ];
  const checks = [
    "Unlimited human members on every plan — invite your whole team.",
    "Unlimited AI employees — hire as many roles as you need.",
    "You only pay for AI Work Hours — the actual work your workforce performs.",
  ];

  return (
    <section className="container-wide pt-24">
      <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0C0E13] to-[#141A24] shadow-[0_30px_70px_-34px_rgba(40,30,15,0.55)]">
        <div className="pointer-events-none absolute -top-[90px] -left-10 h-[340px] w-[340px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.3),transparent_64%)] blur-[20px]" />
        <div className="relative grid items-center gap-8 p-5 sm:gap-11 sm:p-[34px_22px] md:grid-cols-[1.05fr_0.95fr] md:p-[52px_50px]">
          <FadeIn>
            <Eyebrow className="text-[#5B93F6]">Human + AI</Eyebrow>
            <h2 className="mt-3.5 text-[1.625rem] font-bold leading-[1.14] tracking-[-0.02em] text-white text-balance sm:text-[34px]">
              Bring your whole team. Put AI to work beside them.
            </h2>
            <p className="mt-4 max-w-[480px] text-[16.5px] leading-relaxed text-white/80">
              AdeHQ isn&apos;t AI-only. Invite your existing colleagues,
              co-founders, and clients —{" "}
              <strong className="font-semibold text-white">
                unlimited human members, always free
              </strong>{" "}
              — and hire{" "}
              <strong className="font-semibold text-white">
                unlimited AI employees
              </strong>{" "}
              to work right alongside them.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {checks.map((c) => (
                <div key={c} className="flex gap-2.5">
                  <span className="font-bold text-[#7FD6AE]">✓</span>
                  <span className="text-[14.5px] leading-snug text-white/80">
                    {c}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-3 rounded-[14px] border border-white/12 bg-white/[0.06] px-4 py-3">
              <span className="font-mono text-[30px] font-semibold leading-none text-white">
                ∞
              </span>
              <span>
                <span className="block text-[13px] font-semibold text-white">
                  Unlimited human members
                </span>
                <span className="block text-[11.5px] text-white/72">
                  Included on every plan — even Free
                </span>
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3.5 flex items-center justify-between">
                <span className="text-[13px] font-bold text-white">
                  #launch · AeroCut X1
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#7FD6AE]">
                  <span className="h-1.5 w-1.5 animate-glowpulse rounded-full bg-green" />
                  collaborating
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {team.map((m) => (
                  <div
                    key={m.initials}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl border px-3 py-2.5",
                      m.ai
                        ? "border-accent/20 bg-accent/[0.08]"
                        : "border-white/8 bg-white/[0.05]",
                    )}
                  >
                    <Avatar
                      initials={m.initials}
                      gradient={m.gradient ?? "slate"}
                      size={32}
                      ai={m.ai}
                      status={m.status}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[12.5px] font-semibold text-white">
                        {m.name}
                      </span>
                      <span className="block text-[10.5px] text-white/70">
                        {m.role}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "rounded-md px-1.5 py-0.5 text-[10px] font-semibold",
                        m.ai
                          ? "bg-accent/18 font-bold text-[#5B93F6]"
                          : "bg-white/9 text-white/80",
                      )}
                    >
                      {m.ai ? "AI" : "Human"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="container-wide pt-16">
      <div className="relative grid overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_1px_3px_rgba(40,30,15,0.06)] md:grid-cols-4">
        <div className="absolute top-0 right-0 left-0 h-[3px] animate-gradflow bg-gradient-to-r from-accent via-[#5B93F6] to-accent bg-[length:200%_100%]" />
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "px-5 py-7 text-center",
              i < stats.length - 1 && "md:border-r md:border-border-subtle",
            )}
          >
            <div className="bg-gradient-to-br from-accent to-[#5B93F6] bg-clip-text font-mono text-[40px] font-semibold leading-none tracking-[-0.02em] text-transparent">
              {stat.value}
            </div>
            <div className="mt-2 text-[13px] text-ink-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      n: "01",
      title: "Describe the role",
      body: 'Tell Ade Recruiter what you need — "PR Manager for a finance startup" or "researcher for competitor analysis."',
    },
    {
      n: "02",
      title: "Meet your candidates",
      body: "Review 3–5 applicants with different strengths, personalities, and intelligence levels. Compare. Interview.",
    },
    {
      n: "03",
      title: "Put them to work",
      body: "Your new employee joins with a profile, memory seed, and assigned room. Message them. Assign topics. Review their work log.",
    },
  ];

  return (
    <section id="how" className="container-wide scroll-mt-[90px] pt-24">
      <SectionHeader
        eyebrow="How it works"
        title="From job description to working teammate in minutes."
      />
      <ProcessRail steps={steps} />
      <div className="mt-10">
        <Button href="/pricing" size="lg">
          Try the hiring experience
        </Button>
      </div>
    </section>
  );
}

export function ProductHighlightsSection() {
  return (
    <section className="container-wide pt-24">
      <FadeIn className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>Orchestration</Eyebrow>
          <h3 className="mt-3 text-[26px] font-bold leading-tight tracking-[-0.02em] text-ink">
            AI employees that behave like a team
          </h3>
          <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-muted">
            AdeHQ doesn&apos;t blast every employee at once. It understands
            intent — who should lead, who should collaborate, who should wait.
          </p>
        </div>
        <ChatMockup />
      </FadeIn>

      <FadeIn className="mt-[72px] grid items-center gap-12 md:grid-cols-2">
        <WorkGraphMockup className="md:order-1" />
        <div className="md:order-2">
          <Eyebrow>Work graph</Eyebrow>
          <h3 className="mt-3 text-[26px] font-bold leading-tight tracking-[-0.02em] text-ink">
            Every action becomes part of your work graph
          </h3>
          <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-muted">
            Messages, tasks, memory, approvals, work logs, and agent runs
            connect into a system of record.
          </p>
        </div>
      </FadeIn>

      <FadeIn className="mt-[72px] grid items-center gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>AI Work Hours</Eyebrow>
          <h3 className="mt-3 text-[26px] font-bold leading-tight tracking-[-0.02em] text-ink">
            Capacity you can actually understand
          </h3>
          <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink-muted">
            No token math. AI Work Hours estimate weekly workforce capacity.
          </p>
        </div>
        <WorkHoursMockup />
      </FadeIn>
    </section>
  );
}

function ChatMockup() {
  return (
    <div className="rounded-[18px] border border-border bg-white p-4 shadow-[0_1px_3px_rgba(40,30,15,0.06)]">
      <div className="mb-3 font-mono text-[11px] text-ink-subtle">
        #launch · pricing-strategy
      </div>
      <div className="mb-3 flex justify-end">
        <span className="max-w-[80%] rounded-[13px_13px_4px_13px] bg-rail px-3 py-2 text-[12.5px] text-white">
          @Research work with @Sales on positioning
        </span>
      </div>
      <div className="mb-2.5 flex items-start gap-2">
        <Avatar initials="AL" gradient="green" size={28} ai />
        <span className="max-w-[78%] rounded-[13px_13px_13px_4px] bg-muted px-3 py-2 text-[12.5px] text-ink">
          On it — compiling the competitor landscape now.
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Avatar initials="MR" gradient="indigo" size={28} ai />
        <span className="inline-flex items-center gap-1 rounded-[13px] bg-muted px-3 py-2.5">
          {[0, 0.15, 0.3].map((delay) => (
            <span
              key={delay}
              className="h-1.5 w-1.5 rounded-full bg-ink-subtle"
              style={{ animation: `bdot 1.2s infinite ${delay}s` }}
            />
          ))}
        </span>
        <span className="text-[11px] text-ink-subtle">Sales waiting</span>
      </div>
    </div>
  );
}

function WorkGraphMockup({ className }: { className?: string }) {
  const items = [
    { icon: "✓", bg: "bg-green-soft", color: "text-green", title: "Drafted client pitch email", meta: "Balanced · 7.0s · £0.001" },
    { icon: "≡", bg: "bg-info-soft", color: "text-info", title: "Created 4 launch tasks", meta: "Why · You asked for a launch plan" },
    { icon: "★", bg: "bg-violet-soft", color: "text-violet", title: "Saved competitor pricing to memory", meta: "pinned · source-linked" },
  ];
  return (
    <div className={cn("flex flex-col gap-2 rounded-[18px] border border-border bg-white p-4 shadow-[0_1px_3px_rgba(40,30,15,0.06)]", className)}>
      {items.map((item) => (
        <div key={item.title} className="flex items-center gap-2.5 rounded-xl border border-border-subtle px-3 py-2.5">
          <span className={cn("flex h-[26px] w-[26px] items-center justify-center rounded-lg text-[13px] font-bold", item.bg, item.color)}>
            {item.icon}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-semibold text-ink">{item.title}</span>
            <span className="block font-mono text-[10.5px] text-ink-subtle">{item.meta}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function WorkHoursMockup() {
  return (
    <div className="relative overflow-hidden rounded-[18px] bg-rail p-6 text-white shadow-[0_20px_50px_-24px_rgba(40,30,15,0.5)]">
      <div className="pointer-events-none absolute -top-[60px] -right-[30px] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.4),transparent_65%)]" />
      <div className="relative">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/70">
          Weekly AI Work Hours
        </span>
        <div className="my-2 flex items-baseline gap-2">
          <span className="font-mono text-[42px] font-semibold tracking-[-0.02em]">14.2</span>
          <span className="text-sm text-white/72">/ 150 hrs used</span>
        </div>
        <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-[38%] rounded-full bg-gradient-to-r from-accent to-[#5B93F6]" />
        </div>
        <div className="flex flex-col gap-2 text-[12.5px]">
          <span className="flex justify-between"><span className="text-white/70">Efficient · support</span><span className="font-mono text-green">Low</span></span>
          <span className="flex justify-between"><span className="text-white/70">Balanced · sales</span><span className="font-mono text-amber">Standard</span></span>
          <span className="flex justify-between"><span className="text-white/70">Strong · research</span><span className="font-mono text-accent">Higher</span></span>
        </div>
      </div>
    </div>
  );
}

export function UseCasesSection() {
  const [featured, ...rest] = useCases;

  return (
    <section id="usecases" className="mt-24 scroll-mt-[90px] border-y border-border bg-muted py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Use cases"
          title="What teams build with AdeHQ"
          action={<InlineCta href="/use-cases" label="All use cases" />}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <Link
              href="/use-cases#launch"
              className="group flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0C0E13] to-[#1e3a5f] p-6 no-underline sm:min-h-[280px] sm:rounded-[24px] sm:p-8"
            >
              <span className="mb-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 font-mono text-sm font-bold text-white">
                {featured.code}
              </span>
              <h3 className="text-[26px] font-bold text-white">{featured.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/75">
                {featured.body}
              </p>
              <span className="mt-4 text-[13px] font-semibold text-[#93C5FD] group-hover:underline">
                Read workflow →
              </span>
            </Link>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {rest.map((u, i) => (
              <FadeIn key={u.code} delay={i * 0.04}>
                <Link
                  href={`/use-cases#${["research", "sales", "client", "ops", "agency"][i] ?? "launch"}`}
                  className="group flex h-full flex-col border-l-2 border-accent/0 py-2 pl-0 no-underline transition-all hover:border-accent hover:pl-4"
                >
                  <span className="font-mono text-[11px] font-semibold text-accent">
                    {u.code}
                  </span>
                  <h3 className="mt-1 text-[17px] font-bold text-ink group-hover:text-accent">
                    {u.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                    {u.body}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  return (
    <section className="container-wide pt-24">
      <SectionHeader
        eyebrow="Why AdeHQ"
        title="Not another chatbot. Pay for work, not seats."
      />
      <FadeIn className="mt-8 overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_1px_3px_rgba(40,30,15,0.06)] sm:mt-9">
        <p className="table-scroll-hint px-4 pt-3">Swipe to compare →</p>
        <div className="table-scroll">
          <table className="w-full min-w-[640px] border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-4 text-left text-[12.5px] font-semibold text-ink-muted">Capability</th>
                <th className="px-2.5 py-4 text-center text-xs font-medium text-ink-subtle">ChatGPT / Claude</th>
                <th className="px-2.5 py-4 text-center text-xs font-medium text-ink-subtle">Slack + bots</th>
                <th className="px-2.5 py-4 text-center text-xs font-medium text-ink-subtle">Agent builders</th>
                <th className="px-3 py-4 text-center text-[12.5px] font-bold text-accent">AdeHQ</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.cap} className="border-t border-border-subtle">
                  <td className="px-4 py-3 font-medium text-ink">{row.cap}</td>
                  {[row.a, row.b, row.c].map((val, i) => (
                    <td key={i} className="px-2.5 py-3 text-center font-semibold" style={{ color: compareColor(val) }}>
                      {val}
                    </td>
                  ))}
                  <td className="bg-[#EAF1FE] px-3 py-3 text-center font-bold text-green">✓</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="container-wide pt-24">
      <div className="container-prose mx-auto">
        <SectionHeader eyebrow="FAQ" title="Questions, answered." />
        <FadeIn className="mt-9">
          <FaqAccordion items={homeFaqs} />
        </FadeIn>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="finalcta" className="container-wide scroll-mt-[90px] pt-24">
      <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] px-6 py-16 text-center shadow-[0_30px_70px_-34px_rgba(40,30,15,0.6)] md:px-10">
        <div className="pointer-events-none absolute -top-[100px] left-1/2 h-[300px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.38),transparent_64%)] blur-[20px]" />
        <FadeIn className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.07] px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-glowpulse rounded-full bg-green" />
            <span className="text-xs text-white/70">Workforce ready</span>
          </div>
          <h2 className="text-[30px] font-bold leading-tight tracking-[-0.025em] text-white text-balance md:text-[40px]">
            Unlimited teammates. Unlimited AI employees. Start free.
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[16.5px] leading-relaxed text-white/80">
            Slack charges as teams grow. AdeHQ lets your team grow freely — you
            only pay for AI work capacity.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/pricing" size="lg">Start free</Button>
            <Button href="/contact" variant="onDark" size="lg">
              Talk to us
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

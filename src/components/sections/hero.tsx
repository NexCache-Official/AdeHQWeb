import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-7 pt-[26px]">
      <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] shadow-[0_30px_70px_-34px_rgba(40,30,15,0.6)]">
        <div className="pointer-events-none absolute -top-[120px] -right-[60px] h-[420px] w-[420px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.42),transparent_62%)] blur-[20px]" />
        <div className="pointer-events-none absolute -bottom-[140px] right-[140px] h-[360px] w-[360px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_64%)] blur-[24px] [animation-direction:reverse]" />

        <div className="relative grid items-center gap-9 p-[34px_22px] md:grid-cols-[1.05fr_0.95fr] md:p-[58px_56px]">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.07] px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 animate-glowpulse rounded-full bg-green" />
              <span className="text-[12.5px] font-medium text-white/82">
                Your AI + human workforce, in one workspace
              </span>
            </div>
            <h1 className="text-[36px] font-bold leading-[1.06] tracking-[-0.025em] text-white text-balance md:text-[52px]">
              Hire an{" "}
              <span className="animate-gradflow bg-gradient-to-r from-[#5B93F6] via-[#2563EB] to-[#5B93F6] bg-[length:200%_100%] bg-clip-text text-transparent">
                AI workforce
              </span>
              .
              <br />
              Bring your humans. Run it all from one workspace.
            </h1>
            <p className="mt-5 max-w-[520px] text-[17.5px] leading-relaxed text-white/80">
              AdeHQ turns AI into managed employees — with roles, rooms, memory,
              tasks, approvals, and work logs. Invite your whole human team for
              free and let AI work right alongside them.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/13 bg-white/[0.06] px-3 py-1.5 text-xs text-white/82">
                <Users size={13} className="text-[#7FD6AE]" />
                Unlimited human seats — free
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/13 bg-white/[0.06] px-3 py-1.5 text-xs text-white/82">
                <span className="rounded bg-accent/18 px-1 py-0.5 text-[9px] font-bold tracking-wide text-[#5B93F6]">
                  AI
                </span>
                Employees from $0
              </span>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/pricing" size="lg">
                Start free
              </Button>
              <Link
                href="#how"
                className="inline-flex items-center gap-2 rounded-[14px] border border-white/25 bg-white/[0.12] px-[18px] py-[11px] text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                See how hiring works
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/pricing"
                className="px-2 py-2 text-sm font-semibold text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                View pricing
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative min-w-0">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-canvas shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)]">
              <div className="flex items-center gap-2 border-b border-border bg-white px-3.5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border-subtle" />
                <span className="h-2 w-2 rounded-full bg-border-subtle" />
                <span className="ml-2 rounded-md border border-border px-2 py-0.5 font-mono text-[10.5px] text-ink-subtle">
                  ⌘K Search workspace
                </span>
              </div>
              <div className="grid min-h-[268px] grid-cols-[64px_1fr]">
                <div className="flex flex-col items-center gap-2.5 bg-rail py-3.5">
                  <LogoMini />
                  {[0.85, 1, 0.6, 0.6].map((opacity, i) => (
                    <span
                      key={i}
                      className="h-[30px] w-[30px] rounded-[9px]"
                      style={{
                        background:
                          i === 1
                            ? "rgba(37,99,235,0.85)"
                            : `rgba(255,255,255,${opacity === 1 ? 0.1 : 0.06})`,
                      }}
                    />
                  ))}
                </div>
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[13.5px] font-bold text-ink">
                      Your workforce
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-soft px-2.5 py-0.5 text-[11px] font-semibold text-green">
                      <span className="h-1.5 w-1.5 animate-glowpulse rounded-full bg-green" />
                      3 AI · 1 you
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { initials: "EP", gradient: "coral" as const, name: "Eleanor Price", role: "Finance PR", ai: true, status: "working" as const },
                      { initials: "MR", gradient: "indigo" as const, name: "Marcus Reed", role: "Sales Lead", ai: true, status: "available" as const },
                      { initials: "AL", gradient: "green" as const, name: "Ada Lin", role: "Research", ai: true, status: "working" as const },
                      { initials: "JP", gradient: "slate" as const, name: "Jon Park", role: "Founder · human", ai: false },
                    ].map((emp) => (
                      <div
                        key={emp.initials}
                        className="flex items-center gap-2 rounded-xl border border-border bg-white p-2.5"
                      >
                        <Avatar
                          initials={emp.initials}
                          gradient={emp.gradient}
                          size={34}
                          ai={emp.ai}
                          status={emp.status}
                        />
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold text-ink">
                            {emp.name}
                          </span>
                          <span className="block text-[10.5px] text-ink-subtle">
                            {emp.role}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-[18px] -left-[22px] flex animate-floaty items-center gap-2.5 rounded-[13px] border border-border bg-white px-3 py-2.5 shadow-[0_16px_34px_-16px_rgba(40,30,15,0.4)]">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-amber-soft font-extrabold text-amber">
                !
              </span>
              <span>
                <span className="block text-xs font-semibold text-ink">
                  Approval requested
                </span>
                <span className="block text-[10.5px] text-ink-subtle">
                  Send outreach email · Marcus
                </span>
              </span>
            </div>
            <div className="absolute -top-4 -right-3.5 flex animate-floaty items-center gap-2 rounded-[11px] border border-border bg-white px-2.5 py-2 shadow-[0_14px_30px_-16px_rgba(40,30,15,0.4)] [animation-delay:0.6s]">
              <span className="font-mono text-[11px] font-semibold text-green">
                ✓ Work logged
              </span>
              <span className="font-mono text-[11px] text-ink-subtle">
                £0.046
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function LogoMini() {
  return (
    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#5B93F6] text-sm font-extrabold text-white">
      A
    </span>
  );
}

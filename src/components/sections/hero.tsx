"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, Sparkles, Users, Zap } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { heroRotatingWords, quickLinks } from "@/lib/data";

const stats = [
  { label: "Human members", value: "Unlimited" },
  { label: "AI employees", value: "Unlimited" },
  { label: "Free AI Work Hours", value: "10 / wk" },
];

export function HeroSection() {
  const reduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroRotatingWords.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section className="relative overflow-hidden pt-6 pb-4">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.12),transparent_65%)]" />

      <div className="container-wide relative">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] shadow-[0_40px_100px_-40px_rgba(12,14,19,0.75)]">
          <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40" />
          <div className="pointer-events-none absolute -top-[140px] -right-[80px] h-[480px] w-[480px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.45),transparent_62%)] blur-[24px]" />
          <div className="pointer-events-none absolute -bottom-[160px] left-[10%] h-[400px] w-[400px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_64%)] blur-[28px] [animation-direction:reverse]" />

          <div className="relative grid items-center gap-12 px-6 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-20 xl:gap-16">
            <div>
              <FadeIn>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.07] px-4 py-2 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                  </span>
                  <span className="text-[13px] font-medium text-white/85">
                    The operating system for AI employees
                  </span>
                </div>

                <h1 className="text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-white text-balance sm:text-[48px] xl:text-[58px]">
                  Run{" "}
                  <span className="inline-block min-w-[8ch] align-bottom">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={heroRotatingWords[wordIndex]}
                        initial={reduced ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35 }}
                        className="animate-gradflow bg-gradient-to-r from-[#5B93F6] via-[#2563EB] to-[#93C5FD] bg-[length:200%_100%] bg-clip-text text-transparent"
                      >
                        {heroRotatingWords[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <br />
                  with an AI workforce — and your whole team.
                </h1>

                <p className="mt-6 max-w-[560px] text-[18px] leading-relaxed text-white/78">
                  Invite unlimited humans. Hire unlimited AI employees. AdeHQ meters
                  only active AI work through weekly AI Work Hours — not seats, not
                  tokens.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {[
                    { icon: Users, text: "Unlimited humans" },
                    { icon: Sparkles, text: "Unlimited AI employees" },
                    { icon: Zap, text: "Pay for work, not seats" },
                  ].map(({ icon: Icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-2 text-[12.5px] font-medium text-white/82 backdrop-blur-sm"
                    >
                      <Icon size={14} className="text-[#7FD6AE]" />
                      {text}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button href="/pricing" size="lg">
                    Start free
                  </Button>
                  <Link
                    href="#how"
                    className="inline-flex items-center gap-2 rounded-[14px] bg-white px-5 py-3 text-sm font-semibold text-ink shadow-md transition-all hover:bg-white/95"
                  >
                    See how hiring works
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/pricing"
                    className="px-2 py-2 text-sm font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    View pricing
                  </Link>
                </div>

                <div className="mt-10 grid max-w-[480px] grid-cols-3 gap-3 border-t border-white/10 pt-8">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-[20px] font-bold tracking-tight text-white">
                        {s.value}
                      </div>
                      <div className="mt-0.5 text-[11.5px] text-white/55">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.12} className="relative min-w-0">
              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white shadow-[0_32px_80px_-28px_rgba(0,0,0,0.7)]">
                <div className="flex items-center gap-2 border-b border-border bg-white px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2 flex-1 rounded-lg border border-border bg-muted px-3 py-1 font-mono text-[11px] text-ink-subtle">
                    ⌘K · Search workspace, employees, rooms…
                  </span>
                </div>
                <div className="grid min-h-[300px] grid-cols-[72px_1fr]">
                  <div className="flex flex-col items-center gap-3 bg-rail py-4">
                    <LogoMini />
                    {[true, false, false, false, false].map((active, i) => (
                      <span
                        key={i}
                        className="h-9 w-9 rounded-[10px]"
                        style={{
                          background: active
                            ? "rgba(37,99,235,0.9)"
                            : "rgba(255,255,255,0.07)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[14px] font-bold text-ink">Workforce</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-soft px-2.5 py-1 text-[11px] font-semibold text-green">
                        <Clock size={11} />
                        3 AI active · 1 human
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { initials: "EP", gradient: "coral" as const, name: "Eleanor Price", role: "Finance PR", ai: true, status: "working" as const },
                        { initials: "MR", gradient: "indigo" as const, name: "Marcus Reed", role: "Sales Lead", ai: true, status: "available" as const },
                        { initials: "AL", gradient: "green" as const, name: "Ada Lin", role: "Research", ai: true, status: "working" as const },
                        { initials: "JP", gradient: "slate" as const, name: "Jon Park", role: "Founder", ai: false },
                      ].map((emp) => (
                        <div
                          key={emp.initials}
                          className="flex items-center gap-2.5 rounded-xl border border-border bg-white p-3 transition-shadow hover:shadow-md"
                        >
                          <Avatar
                            initials={emp.initials}
                            gradient={emp.gradient}
                            size={36}
                            ai={emp.ai}
                            status={emp.status}
                          />
                          <span className="min-w-0">
                            <span className="block truncate text-xs font-semibold text-ink">
                              {emp.name}
                            </span>
                            <span className="block truncate text-[10.5px] text-ink-subtle">
                              {emp.role}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-xl border border-accent/20 bg-accent-soft/60 px-3 py-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-accent">AI Work Hours</span>
                        <span className="font-mono text-ink-muted">8.2 / 125 this week</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
                        <div className="h-full w-[66%] rounded-full bg-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-6 flex animate-floaty items-center gap-3 rounded-[14px] border border-border bg-white px-4 py-3 shadow-[0_20px_40px_-16px_rgba(40,30,15,0.35)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-soft text-lg font-extrabold text-amber">
                  !
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-ink">
                    Approval requested
                  </span>
                  <span className="block text-[11px] text-ink-subtle">
                    Send outreach · Marcus Reed
                  </span>
                </span>
              </div>
              <div className="absolute -top-5 -right-4 flex animate-floaty items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-[0_16px_36px_-14px_rgba(40,30,15,0.35)] [animation-delay:0.7s]">
                <span className="font-mono text-[11px] font-semibold text-green">✓ Logged</span>
                <span className="font-mono text-[11px] text-ink-subtle">0.046 hrs</span>
              </div>
            </FadeIn>
          </div>

          <div className="relative border-t border-white/15 bg-black/20 px-6 py-5 lg:px-14">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="mr-1 text-[11px] font-bold uppercase tracking-wider text-white">
                Explore
              </span>
              {quickLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="rounded-full bg-white px-4 py-2 text-[12.5px] font-semibold text-ink no-underline shadow-sm transition-all hover:bg-accent hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoMini() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#5B93F6] text-sm font-extrabold text-white">
      A
    </span>
  );
}

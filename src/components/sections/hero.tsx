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
    <section className="relative overflow-hidden pt-3 pb-3 sm:pt-6 sm:pb-4">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.12),transparent_65%)]" />

      <div className="container-wide relative">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0C0E13] via-[#141A24] to-[#102A4D] shadow-[0_40px_100px_-40px_rgba(12,14,19,0.75)] sm:rounded-[28px]">
          <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40" />
          <div className="pointer-events-none absolute -top-[140px] -right-[80px] h-[480px] w-[480px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.45),transparent_62%)] blur-[24px]" />
          <div className="pointer-events-none absolute -bottom-[160px] left-[10%] h-[400px] w-[400px] animate-orbdrift rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_64%)] blur-[28px] [animation-direction:reverse]" />

          <div className="relative grid items-center gap-8 px-4 py-10 sm:gap-12 sm:px-6 sm:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-20 xl:gap-16">
            <div>
              <FadeIn>
                <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/14 bg-white/[0.07] px-3 py-1.5 backdrop-blur-sm sm:mb-7 sm:px-4 sm:py-2">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                  </span>
                  <span className="text-[12px] font-medium text-white/85 sm:text-[13px]">
                    The operating system for AI employees
                  </span>
                </div>

                <h1 className="text-[1.75rem] font-bold leading-[1.08] tracking-[-0.03em] text-white text-balance sm:text-[38px] md:text-[48px] xl:text-[58px]">
                  Run{" "}
                  <span className="inline-block sm:min-w-[8ch] sm:align-bottom">
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

                <p className="mt-4 text-[16px] leading-relaxed text-white/78 sm:mt-6 sm:text-[18px] lg:text-[19px]">
                  Invite unlimited humans. Hire unlimited AI employees. AdeHQ meters
                  only active AI work through weekly AI Work Hours — not seats, not
                  tokens.
                </p>

                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap">
                  {[
                    { icon: Users, text: "Unlimited humans" },
                    { icon: Sparkles, text: "Unlimited AI employees" },
                    { icon: Zap, text: "Pay for work, not seats" },
                  ].map(({ icon: Icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11.5px] font-medium text-white/82 backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-[12.5px]"
                    >
                      <Icon size={14} className="text-[#7FD6AE]" />
                      {text}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                  <Button href="https://app.adehq.com/signup" size="lg" className="w-full sm:w-auto">
                    Start free
                  </Button>
                  <Link
                    href="#how"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-white px-5 py-3 text-sm font-semibold text-ink shadow-md transition-all hover:bg-white/95 sm:w-auto"
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

                <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:max-w-[480px] sm:grid-cols-3 sm:gap-3 sm:pt-8">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-2 sm:block">
                      <div className="text-[18px] font-bold tracking-tight text-white sm:text-[20px]">
                        {s.value}
                      </div>
                      <div className="mt-0.5 text-[11.5px] text-white/55">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.12} className="relative min-w-0 lg:mt-0">
              <div className="overflow-hidden rounded-[16px] border border-white/10 bg-white shadow-[0_32px_80px_-28px_rgba(0,0,0,0.7)] sm:rounded-[20px]">
                <div className="flex items-center gap-2 border-b border-border bg-white px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-1 min-w-0 flex-1 truncate rounded-lg border border-border bg-muted px-2 py-1 font-mono text-[10px] text-ink-subtle sm:ml-2 sm:px-3 sm:text-[11px]">
                    <span className="hidden sm:inline">⌘K · Search workspace, employees, rooms…</span>
                    <span className="sm:hidden">⌘K Search</span>
                  </span>
                </div>
                <div className="grid min-h-[240px] grid-cols-[56px_1fr] sm:min-h-[300px] sm:grid-cols-[72px_1fr]">
                  <div className="flex flex-col items-center gap-2 bg-rail py-3 sm:gap-3 sm:py-4">
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
                  <div className="p-3 sm:p-5">
                    <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-[13px] font-bold text-ink sm:text-[14px]">Workforce</span>
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-green-soft px-2 py-0.5 text-[10px] font-semibold text-green sm:px-2.5 sm:py-1 sm:text-[11px]">
                        <Clock size={11} />
                        3 AI · 1 human
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
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

              <div className="mt-4 flex items-center gap-3 rounded-[14px] border border-border bg-white px-3 py-2.5 shadow-md sm:absolute sm:-bottom-5 sm:-left-6 sm:mt-0 sm:animate-floaty sm:px-4 sm:py-3 sm:shadow-[0_20px_40px_-16px_rgba(40,30,15,0.35)]">
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
              <div className="mt-2 flex w-fit items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 shadow-md sm:absolute sm:mt-0 sm:-top-5 sm:-right-4 sm:animate-floaty sm:py-2.5 sm:shadow-[0_16px_36px_-14px_rgba(40,30,15,0.35)] sm:[animation-delay:0.7s]">
                <span className="font-mono text-[11px] font-semibold text-green">✓ Logged</span>
                <span className="font-mono text-[11px] text-ink-subtle">0.046 hrs</span>
              </div>
            </FadeIn>
          </div>

          <div className="relative border-t border-white/15 bg-black/20 px-4 py-4 sm:px-6 sm:py-5 lg:px-14">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mb-1 w-full text-[10px] font-bold uppercase tracking-wider text-white sm:mb-0 sm:mr-1 sm:w-auto sm:text-[11px]">
                Explore
              </span>
              {quickLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="rounded-full bg-white px-3 py-1.5 text-[11.5px] font-semibold text-ink no-underline shadow-sm transition-all hover:bg-accent hover:text-white sm:px-4 sm:py-2 sm:text-[12.5px]"
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
    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-white">
      <img
        src="/adehq_icon_light.svg"
        alt="AdeHQ"
        className="h-[18px] w-[18px] object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.2, 0.7, 0.3, 1] as const;

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const reduced = useReducedMotion();
  const y =
    direction === "up" ? 28 : direction === "down" ? -28 : 0;

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduced
          ? undefined
          : {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-accent",
        className,
      )}
    >
      <span className="h-px w-6 bg-accent/40" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
  action?: React.ReactNode;
}) {
  return (
    <FadeIn
      className={cn(
        align === "center"
          ? "container-prose mx-auto text-center"
          : "container-prose",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-end justify-between gap-6",
          align === "center" && "flex-col items-center",
        )}
      >
        <div className={align === "center" ? "text-center" : ""}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-4 text-[26px] font-bold leading-[1.12] tracking-[-0.025em] text-ink text-balance sm:text-[32px] md:text-[42px]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">
              {description}
            </p>
          )}
        </div>
        {action}
      </div>
    </FadeIn>
  );
}

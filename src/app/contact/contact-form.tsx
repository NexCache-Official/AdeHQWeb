"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[20px] border border-green/30 bg-green-soft p-8 text-center">
        <p className="text-lg font-bold text-ink">Message received</p>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-[20px] border border-border bg-white p-6 shadow-[0_1px_3px_rgba(40,30,15,0.06)] md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Name
          <input
            required
            name="name"
            className="rounded-[11px] border border-border bg-canvas px-3.5 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent/30"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Email
          <input
            required
            type="email"
            name="email"
            className="rounded-[11px] border border-border bg-canvas px-3.5 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent/30"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-ink">
        Topic
        <select
          name="topic"
          className="rounded-[11px] border border-border bg-canvas px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option>General inquiry</option>
          <option>Product demo</option>
          <option>Sales & pricing</option>
          <option>Careers</option>
          <option>Partnerships</option>
          <option>Security & privacy</option>
        </select>
      </label>
      <label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-ink">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="resize-y rounded-[11px] border border-border bg-canvas px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/30"
          placeholder="Tell us about your team and what you're building..."
        />
      </label>
      <Button type="submit" className="mt-5 w-full md:w-auto">
        Send message
      </Button>
    </form>
  );
}

import { legalCompany } from "@/lib/legal/company";

export function ContactPageContent() {
  return (
    <>
      <section className="mx-auto max-w-[820px] px-7 pt-16 text-center">
        <FadeIn>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
            Contact
          </span>
          <h1 className="mt-3.5 text-[34px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[42px]">
            Talk to us
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-ink-muted">
            Questions about AdeHQ, pricing, or partnerships? We&apos;d love to
            hear from you.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto grid max-w-[960px] gap-8 px-7 pt-12 pb-8 md:grid-cols-[1fr_340px]">
        <FadeIn>
          <ContactForm />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] border border-border bg-muted p-5">
              <h2 className="font-bold text-ink">Sales & demos</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Want a walkthrough of hiring, orchestration, or AI Work Hours?
                Email{" "}
                <a
                  href={`mailto:${legalCompany.email}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {legalCompany.email}
                </a>
                .
              </p>
            </div>
            <div className="rounded-[20px] border border-border bg-muted p-5">
              <h2 className="font-bold text-ink">Support</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Existing customers: email{" "}
                <a
                  href={`mailto:${legalCompany.email}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {legalCompany.email}
                </a>{" "}
                with your workspace name.
              </p>
            </div>
            <div className="rounded-[20px] border border-border bg-muted p-5">
              <h2 className="font-bold text-ink">Legal, privacy & billing</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                For privacy requests, legal enquiries, billing, or security
                disclosures, contact{" "}
                <a
                  href={`mailto:${legalCompany.email}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {legalCompany.email}
                </a>
                .
              </p>
            </div>
            <div className="rounded-[20px] bg-rail p-5 text-white">
              <h2 className="font-bold">Response time</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                We typically reply within one business day. Email{" "}
                <a
                  href={`mailto:${legalCompany.email}`}
                  className="text-white underline underline-offset-2"
                >
                  {legalCompany.email}
                </a>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

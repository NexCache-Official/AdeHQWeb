"use client";

import { ValidationError, useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

const HELLO_EMAIL = "hello@adehq.com";
const SUPPORT_EMAIL = "support@adehq.com";

export function ContactForm() {
  const [state, handleSubmit] = useForm("maqgzzod");

  if (state.succeeded) {
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
      onSubmit={handleSubmit}
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
          <ValidationError field="name" errors={state.errors} />
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
          <ValidationError field="email" errors={state.errors} />
        </label>
      </div>
      <label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-ink">
        Topic
        <select
          required
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
        <ValidationError field="topic" errors={state.errors} />
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
        <ValidationError field="message" errors={state.errors} />
      </label>
      <div className="mt-5 rounded-[16px] border border-border bg-muted p-4 text-sm text-ink-muted">
        Prefer email?
        <span className="ml-1">
          <a
            href={`mailto:${HELLO_EMAIL}`}
            className="font-semibold text-accent hover:underline"
          >
            {HELLO_EMAIL}
          </a>
          {" or "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-semibold text-accent hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
        </span>
      </div>
      <div className="mt-5">
        <Button type="submit" disabled={state.submitting} className="w-full md:w-auto">
          {state.submitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}

export function ContactPageContent() {
  return (
    <>
      <section className="container-content pt-10 text-center sm:pt-16">
        <FadeIn>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
            Contact
          </span>
          <h1 className="mt-3.5 text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-ink sm:text-[34px] md:text-[42px]">
            Talk to us
          </h1>
          <p className="mx-auto mt-4 max-w-[min(92vw,640px)] text-[17px] leading-relaxed text-ink-muted lg:text-[18px]">
            Questions about AdeHQ, pricing, or partnerships? We&apos;d love to
            hear from you.
          </p>
        </FadeIn>
      </section>

      <section className="container-wide grid gap-6 pt-8 pb-8 sm:gap-8 sm:pt-12 lg:grid-cols-[1fr_minmax(300px,380px)] lg:gap-12">
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
                  href={`mailto:${HELLO_EMAIL}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {HELLO_EMAIL}
                </a>{" "}
                or{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
            <div className="rounded-[20px] border border-border bg-muted p-5">
              <h2 className="font-bold text-ink">Support</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Existing customers: email{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                with your workspace name (or{" "}
                <a
                  href={`mailto:${HELLO_EMAIL}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {HELLO_EMAIL}
                </a>
                ).
              </p>
            </div>
            <div className="rounded-[20px] border border-border bg-muted p-5">
              <h2 className="font-bold text-ink">Legal, privacy & billing</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                For privacy requests, legal enquiries, billing, or security
                disclosures, contact{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
            <div className="rounded-[20px] bg-rail p-5 text-white">
              <h2 className="font-bold">Response time</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                We typically reply within one business day. Email{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-white underline underline-offset-2"
                >
                  {SUPPORT_EMAIL}
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

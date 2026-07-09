import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { DarkCta } from "@/components/sections/shared";
import { FadeIn } from "@/components/ui/motion";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = createPageMetadata({
  title: "AdeHQ Blog — AI Workforce Guides, Product Notes & Engineering",
  description:
    "Read guides on hiring AI employees, AI Work Hours, orchestration, memory, and building an AI-native team with AdeHQ.",
  path: "/blog",
  keywords: [
    "AI workforce blog",
    "hire AI employees guide",
    "AI work hours guide",
    "AI orchestration articles",
  ],
});

export default function BlogPage() {
  return (
    <>
      <section className="container-content pt-16 text-center">
        <FadeIn>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
            Blog
          </span>
          <h1 className="mt-3.5 text-[34px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[42px]">
            Notes from the AI-native workplace
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-ink-muted">
            Product thinking, engineering deep-dives, and practical guides for
            teams hiring AI employees.
          </p>
        </FadeIn>
      </section>

      <section className="container-content pt-12 pb-4">
        <div className="flex flex-col gap-4">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-[20px] border border-border bg-white p-6 no-underline shadow-[0_1px_3px_rgba(40,30,15,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#cbd0da] hover:shadow-[0_12px_30px_-16px_rgba(40,34,24,0.22)]"
              >
                <div className="flex flex-wrap items-center gap-2 text-[12px] text-ink-subtle">
                  <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono font-semibold text-accent">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-2.5 text-xl font-bold tracking-[-0.01em] text-ink group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <DarkCta
        title="Ready to hire your first AI employee?"
        description="Start free — bring your whole human team at no extra cost."
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DarkCta } from "@/components/sections/shared";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

const postContent: Record<string, string[]> = {
  "hire-ai-employees-not-models": [
    "Most AI tools treat every conversation as a fresh session. You re-explain your business, re-upload context, and hope the model remembers enough to be useful. AdeHQ takes a different approach: you hire persistent AI employees with names, roles, and memory.",
    "An AI employee in AdeHQ isn't a chat thread — it's a managed worker with a profile, job brief, assigned rooms, and a work log. When Eleanor drafts a client pitch, you see why she did it, how long it took, and what it cost. When she saves competitor pricing to memory, that fact is source-linked and scoped to the right topic.",
    "This matters because small teams don't need another general-purpose chatbot. They need accountable teammates who coordinate — Research hands off to Sales, Marketing waits for approval before publishing, and you stay in control of every external action.",
  ],
  "ai-work-hours-explained": [
    "Token pricing is accurate but opaque. Most founders don't want to estimate context windows, output tokens, or model tiers — they want to know whether their AI workforce can handle this week's workload.",
    "AI Work Hours are AdeHQ's answer: a weekly capacity measure tied to your plan. Efficient intelligence modes consume fewer hours; Strong and Long Context modes consume more. The dashboard shows usage in plain numbers — 14.2 of 150 hours used — not a spreadsheet of API calls.",
    "When you run low, prepaid top-ups add capacity instantly. There are no surprise overage bills. And human collaboration never counts against your AI budget — unlimited human seats are free on every plan.",
  ],
  "orchestration-without-noise": [
    "Multi-bot Slack channels are noisy. Mention three bots and get three replies. AdeHQ reads intent and orchestrates who speaks, who leads, and who waits.",
    "A direct @mention gets a single focused reply. A panel request staggers distinct perspectives. A lead/collaborator pattern — '@Research work with @Sales' — puts Research in charge while Sales contributes after the handoff.",
    "The goal is team behavior, not bot pile-ons. Your workspace stays readable, and every coordinated run still lands in the work graph.",
  ],
  "memory-that-sticks": [
    "Session memory disappears when the tab closes. AdeHQ memory is governed: scoped to workspace, room, topic, or employee, with draft → approved → pinned states and source links.",
    "When Research saves competitor pricing, you can trace it back to the conversation or document that produced it. When you pin a fact, it persists across sessions and survives intelligence mode upgrades.",
    "Memory isn't a dump of everything the model ever saw — it's a curated layer your team trusts, with humans approving what becomes durable context.",
  ],
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = postContent[slug] ?? [post.excerpt];

  return (
    <>
      <article className="mx-auto max-w-[720px] px-7 pt-16 pb-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-ink-muted hover:text-accent"
        >
          ← Back to blog
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] text-ink-subtle">
          <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono font-semibold text-accent">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.02em] text-ink">
          {post.title}
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-[16px] leading-relaxed text-ink-muted">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </article>
      <DarkCta
        title="Try AdeHQ free"
        description="Hire your first AI employee and bring your human team — unlimited seats, always free."
      />
    </>
  );
}

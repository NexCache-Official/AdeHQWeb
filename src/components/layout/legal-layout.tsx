import { FadeIn } from "@/components/ui/motion";

export function LegalLayout({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { title: string; body: string }[];
}) {
  return (
    <>
      <section className="mx-auto max-w-[720px] px-7 pt-16">
        <FadeIn>
          <h1 className="text-[34px] font-bold tracking-[-0.02em] text-ink">
            {title}
          </h1>
          <p className="mt-2 text-sm text-ink-subtle">Last updated {updated}</p>
        </FadeIn>
      </section>
      <article className="mx-auto max-w-[720px] px-7 pt-10 pb-16">
        <div className="flex flex-col gap-8">
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.03}>
              <section>
                <h2 className="text-lg font-bold text-ink">{section.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {section.body}
                </p>
              </section>
            </FadeIn>
          ))}
        </div>
      </article>
    </>
  );
}

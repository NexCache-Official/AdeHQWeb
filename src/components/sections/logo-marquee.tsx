import { logoStrip } from "@/lib/data";

export function LogoMarquee() {
  const items = [...logoStrip, ...logoStrip];

  return (
    <section className="relative overflow-hidden border-y border-border bg-white py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-8 inline-flex items-center gap-2 font-mono text-[13px] font-medium tracking-wide text-ink-subtle"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

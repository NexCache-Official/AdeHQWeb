import Link from "next/link";
import { Logo } from "@/components/ui/avatar";

const footerLinks = {
  product: [
    { href: "/product", label: "Features" },
    { href: "/product#how-it-works", label: "Hiring" },
    { href: "/product", label: "Rooms & topics" },
    { href: "/pricing", label: "AI Work Hours" },
    { href: "/product#orchestration", label: "Orchestration" },
  ],
  useCases: [
    { href: "/use-cases#launch", label: "Launch a product" },
    { href: "/use-cases#research", label: "Market research" },
    { href: "/use-cases#sales", label: "Sales outreach" },
    { href: "/use-cases#client", label: "Client work" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/security", label: "Security" },
  ],
};

export function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="mt-[90px] bg-rail text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-7 py-14">
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="text-[17px] font-bold tracking-[-0.02em]">
              AdeHQ
            </span>
          </div>
          <span className="text-[12.5px] text-white/55">
            © 2026 AdeHQ · The operating system for AI employees.
          </span>
          <div className="flex gap-4">
            <Link href="/" className="text-[13.5px] text-white/78 hover:text-white">
              Home
            </Link>
            <Link href="/pricing" className="text-[13.5px] text-white/78 hover:text-white">
              Pricing
            </Link>
            <Link href="/use-cases" className="text-[13.5px] text-white/78 hover:text-white">
              Use cases
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-24 bg-rail text-white">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-7 pt-16 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5">
            <Logo />
            <span className="text-[17px] font-bold tracking-[-0.02em]">
              AdeHQ
            </span>
          </div>
          <p className="max-w-[240px] text-[13.5px] leading-relaxed text-white/62">
            The operating system for AI employees. Hire and manage an AI
            workforce from one workspace.
          </p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-white/55">
              {group === "useCases" ? "Use cases" : group.charAt(0).toUpperCase() + group.slice(1)}
            </div>
            <div className="flex flex-col gap-2.5">
              {links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-[13.5px] text-white/78 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-[1180px] flex-wrap items-center justify-between gap-2.5 border-t border-white/10 px-7 py-5">
        <span className="text-[12.5px] text-white/55">
          © 2026 AdeHQ · The operating system for AI employees.
        </span>
        <span className="font-mono text-[11px] text-white/55">
          Hire employees, not models.
        </span>
      </div>
    </footer>
  );
}

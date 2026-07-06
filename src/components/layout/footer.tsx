import Link from "next/link";
import { ArrowUpRight, Globe, Mail, Share2 } from "lucide-react";
import { Logo } from "@/components/ui/avatar";

const footerLinks = {
  product: [
    { href: "/product", label: "Product" },
    { href: "/pricing", label: "Pricing" },
    { href: "/use-cases", label: "Use cases" },
    { href: "/pricing", label: "AI Work Hours" },
    { href: "/contact", label: "Hire AI employee" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  trust: [
    { href: "/security", label: "Security" },
    { href: "/subprocessors", label: "Subprocessors" },
    { href: "/data-processing", label: "Data Processing" },
    { href: "/contact", label: "Status" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/acceptable-use", label: "Acceptable Use" },
    { href: "/ai-terms", label: "AI Terms" },
    { href: "/refund-policy", label: "Refund Policy" },
  ],
};

const groupLabels: Record<string, string> = {
  product: "Product",
  company: "Company",
  trust: "Trust",
  legal: "Legal",
};

export function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="mt-[90px] bg-rail text-white">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-14">
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="text-[17px] font-bold tracking-[-0.02em]">AdeHQ</span>
          </div>
          <span className="text-[12.5px] text-white/55">
            © 2026 NexCache Limited · AdeHQ
          </span>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="text-[13.5px] text-white/78 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-[13.5px] text-white/78 hover:text-white">
              Terms
            </Link>
            <Link href="/security" className="text-[13.5px] text-white/78 hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-24 bg-rail text-white">
      <div className="container-wide grid gap-10 pt-16 pb-8 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <Logo />
            <span className="text-[18px] font-bold tracking-[-0.02em]">AdeHQ</span>
          </div>
          <p className="max-w-[300px] text-[14px] leading-relaxed text-white/62">
            Hire and manage an AI workforce from one workspace. Unlimited humans.
            Unlimited AI employees. Pay for work, not seats.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Share2, href: "https://adehq.com", label: "Social" },
              { icon: Globe, href: "https://adehq.com", label: "Website" },
              { icon: Mail, href: "/contact", label: "Contact" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/25 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <Link
            href="/pricing"
            className="mt-6 inline-flex items-center gap-2 rounded-[11px] bg-accent px-4 py-2.5 text-[13.5px] font-semibold !text-white no-underline transition-colors hover:bg-accent-d"
          >
            Start free
            <ArrowUpRight size={14} className="text-white" />
          </Link>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/45">
              {groupLabels[group]}
            </div>
            <div className="flex flex-col gap-2.5">
              {links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-[13.5px] text-white/72 no-underline transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container-wide flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-5">
        <span className="text-[12.5px] text-white/50">
          © 2026 NexCache Limited · Trading as AdeHQ · All rights reserved.
        </span>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/privacy" className="text-[12.5px] text-white/50 hover:text-white/80">
            Privacy
          </Link>
          <Link href="/terms" className="text-[12.5px] text-white/50 hover:text-white/80">
            Terms
          </Link>
          <Link href="/cookies" className="text-[12.5px] text-white/50 hover:text-white/80">
            Cookies
          </Link>
          <Link href="/security" className="text-[12.5px] text-white/50 hover:text-white/80">
            Security
          </Link>
        </div>
        <span className="font-mono text-[11px] text-white/40">
          Hire employees, not models.
        </span>
      </div>
    </footer>
  );
}

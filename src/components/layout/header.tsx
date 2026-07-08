"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, navMega } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/avatar";
import { AnnouncementBar } from "@/components/layout/announcement-bar";

type MegaKey = keyof typeof navMega;

function MegaDropdown({
  menuKey,
  open,
  onOpen,
  onClose,
}: {
  menuKey: MegaKey;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const menu = navMega[menuKey];

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 rounded-[9px] px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-muted hover:text-ink",
          open && "bg-muted text-ink",
        )}
        onClick={onOpen}
      >
        {menu.label}
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "absolute top-full left-1/2 z-50 w-[520px] -translate-x-1/2 pt-2 transition-all duration-200",
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      >
        <div className="rounded-[18px] border border-border bg-white p-5 shadow-[0_24px_60px_-20px_rgba(16,19,26,0.18)]">
          <div className="grid grid-cols-2 gap-6">
            {menu.sections.map((section) => (
              <div key={section.title}>
                <div className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-subtle">
                  {section.title}
                </div>
                <div className="flex flex-col gap-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.label + link.href}
                      href={link.href}
                      onClick={onClose}
                      className="group rounded-xl px-3 py-2.5 no-underline transition-colors hover:bg-muted"
                    >
                      <span className="block text-[13.5px] font-semibold text-ink group-hover:text-accent">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-[12px] leading-snug text-ink-subtle">
                        {link.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-4">
            <span className="text-[12px] text-ink-subtle">
              Explore the full {menu.label.toLowerCase()} →
            </span>
            <Link
              href={menu.href}
              onClick={onClose}
              className="text-[13px] font-semibold text-accent hover:underline"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl">
        <div className="container-wide flex h-14 items-center justify-between gap-3 sm:h-[68px] sm:gap-8">
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 no-underline sm:gap-2.5">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {(["product", "solutions", "resources"] as MegaKey[]).map((key) => (
              <MegaDropdown
                key={key}
                menuKey={key}
                open={openMega === key}
                onOpen={() => setOpenMega(key)}
                onClose={() => setOpenMega(null)}
              />
            ))}
            {navLinks
              .filter((l) => l.label === "Pricing")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-[9px] px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-muted hover:text-ink",
                    pathname === link.href && "bg-muted font-semibold text-ink",
                  )}
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="https://app.adehq.com/login"
              className="hidden rounded-[9px] px-3 py-2 text-sm font-semibold text-ink-muted transition-colors hover:text-ink md:inline"
            >
              Sign in
            </Link>
            <Button href="/contact" variant="ghost" size="sm" className="hidden xl:inline-flex">
              Book a demo
            </Button>
            <Button href="https://app.adehq.com/signup" size="sm" className="inline-flex">
              <span className="hidden min-[400px]:inline">Start free</span>
              <span className="min-[400px]:hidden">Free</span>
            </Button>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-border bg-white lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[125] bg-rail/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[130] flex w-[min(320px,90vw)] flex-col overflow-y-auto bg-rail p-6 shadow-[-20px_0_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="mb-6 flex h-[40px] w-[40px] items-center justify-center self-end rounded-[10px] border border-white/10 text-white"
        >
          <X size={18} />
        </button>
        {(["product", "solutions", "resources"] as MegaKey[]).map((key) => (
          <div key={key} className="mb-6">
            <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/40">
              {navMega[key].label}
            </div>
            {navMega[key].sections.flatMap((s) => s.links).slice(0, 4).map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-[15px] font-medium text-white/85 no-underline hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="my-2 h-px bg-white/10" />
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-2 py-3 text-[15px] font-medium text-white/85 no-underline"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-4 flex flex-col gap-2">
          <Link
            href="https://app.adehq.com/login"
            onClick={() => setMobileOpen(false)}
            className="rounded-[11px] border border-white/15 py-3 text-center text-[14px] font-semibold text-white no-underline"
          >
            Sign in
          </Link>
          <Link
            href="https://app.adehq.com/signup"
            onClick={() => setMobileOpen(false)}
            className="rounded-[11px] bg-accent py-3.5 text-center text-[15px] font-semibold text-white no-underline"
          >
            Start free
          </Link>
        </div>
      </div>
    </>
  );
}

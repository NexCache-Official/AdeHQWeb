"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/avatar";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-canvas/82 backdrop-blur-[14px]">
        <div className="mx-auto flex h-[62px] max-w-[1180px] items-center justify-between gap-6 px-7">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Logo />
            <span className="text-[17px] font-bold tracking-[-0.02em] text-ink">
              AdeHQ
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
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

          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="hidden rounded-[9px] px-3 py-2 text-sm font-semibold text-ink-muted transition-colors hover:text-ink md:inline"
            >
              Sign in
            </Link>
            <Button href="/pricing" size="sm" className="hidden md:inline-flex">
              Start free
            </Button>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-border bg-white md:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[125] bg-rail/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[130] flex w-[280px] flex-col gap-1 bg-rail p-6 shadow-[-20px_0_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-[106%]",
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="mb-4 flex h-[38px] w-[38px] items-center justify-center self-end rounded-[9px] border border-white/10 text-white"
        >
          <X size={18} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="rounded-[9px] px-2.5 py-3 text-base font-medium text-white/82 no-underline"
          >
            {link.label}
          </Link>
        ))}
        <div className="my-2.5 h-px bg-white/10" />
        <Link
          href="/pricing"
          onClick={() => setMobileOpen(false)}
          className="rounded-[11px] bg-accent py-3.5 text-center text-[15px] font-semibold text-white no-underline"
        >
          Start free
        </Link>
      </div>
    </>
  );
}

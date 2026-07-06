import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden border-b border-accent/20 bg-white">
      <div className="pointer-events-none absolute inset-0 animate-shimmer-line bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="container-wide flex items-center justify-center gap-2 px-3 py-2 text-center sm:py-2.5">
        <Sparkles size={14} className="hidden shrink-0 text-accent sm:block" />
        <p className="text-[11.5px] font-medium leading-snug text-ink sm:text-[13px]">
          <span className="font-semibold text-accent">New:</span>{" "}
          <span className="hidden sm:inline">
            Unlimited humans &amp; unlimited AI employees on every plan —{" "}
          </span>
          <span className="sm:hidden">Unlimited humans &amp; AI employees — </span>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
          >
            see pricing
            <ArrowRight size={13} className="hidden sm:inline" />
          </Link>
        </p>
      </div>
    </div>
  );
}

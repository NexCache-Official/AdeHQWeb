import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden border-b border-accent/20 bg-white">
      <div className="pointer-events-none absolute inset-0 animate-shimmer-line bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="container-wide flex items-center justify-center gap-2 py-2.5 text-center">
        <Sparkles size={14} className="shrink-0 text-accent" />
        <p className="text-[13px] font-medium text-ink">
          <span className="font-semibold text-accent">New:</span> Unlimited humans
          &amp; unlimited AI employees on every plan —{" "}
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
          >
            see pricing
            <ArrowRight size={13} />
          </Link>
        </p>
      </div>
    </div>
  );
}

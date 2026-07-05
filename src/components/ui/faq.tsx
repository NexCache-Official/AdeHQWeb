"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FaqItem = { q: string; a: string };

export function FaqAccordion({
  items,
  className,
}: {
  items: FaqItem[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_1px_3px_rgba(40,30,15,0.05)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-3.5 border-none bg-transparent px-5 py-[18px] text-left font-[inherit]"
            >
              <span className="text-[15.5px] font-semibold text-ink">
                {item.q}
              </span>
              <span
                className={cn(
                  "font-mono text-[22px] leading-none text-accent transition-transform duration-250",
                  open && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)]",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-[18px] text-sm leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

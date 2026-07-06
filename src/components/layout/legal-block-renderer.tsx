import type { LegalBlock } from "@/lib/legal/types";
import { legalText } from "@/lib/legal/company";

function t(text: string) {
  return legalText(text);
}

export function LegalBlockRenderer({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="legal-prose flex flex-col gap-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={t(block.text).toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="mt-4 scroll-mt-28 text-[20px] font-bold tracking-[-0.01em] text-ink first:mt-0"
              >
                {t(block.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-2 text-[16px] font-bold text-ink">
                {t(block.text)}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[15px] leading-[1.75] text-ink-muted">
                {t(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="ml-5 list-disc space-y-2 text-[15px] leading-[1.7] text-ink-muted">
                {block.items.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="ml-5 list-decimal space-y-2 text-[15px] leading-[1.7] text-ink-muted">
                {block.items.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[560px] border-collapse text-[13px]">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      {block.headers.map((h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left font-semibold text-ink"
                        >
                          {t(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-border-subtle last:border-0">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 text-ink-muted">
                            {t(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "note":
            return (
              <div
                key={i}
                className="rounded-xl border border-amber/25 bg-amber-soft/40 px-4 py-3 text-[13.5px] leading-relaxed text-ink-muted"
              >
                {t(block.text)}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

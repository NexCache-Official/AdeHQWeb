import { pricingComparisonRows } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/motion";

const columns = [
  { key: "free" as const, label: "Free" },
  { key: "pro" as const, label: "Pro", accent: true },
  { key: "team" as const, label: "Team" },
  { key: "business" as const, label: "Business" },
  { key: "enterprise" as const, label: "Enterprise" },
];

export function PricingComparisonTable() {
  return (
    <FadeIn className="mt-12 overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_1px_3px_rgba(40,30,15,0.06)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-[13px]">
          <thead>
            <tr className="border-b border-border-subtle bg-canvas">
              <th className="px-4 py-4 text-left text-[12px] font-semibold text-ink-muted">
                Feature
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "px-3 py-4 text-center text-[12px] font-semibold",
                    col.accent ? "text-accent" : "text-ink-muted",
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingComparisonRows.map((row) => (
              <tr
                key={row.label}
                className={cn(
                  "border-b border-border-subtle last:border-0",
                  row.highlight && "bg-accent-soft/30",
                )}
              >
                <td className="px-4 py-3 font-medium text-ink">{row.label}</td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-3 py-3 text-center",
                      col.accent ? "font-semibold text-ink" : "text-ink-muted",
                      row.highlight && col.accent && "text-accent",
                    )}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}

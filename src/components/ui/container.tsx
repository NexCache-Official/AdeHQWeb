import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  wide = true,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div className={cn(wide ? "container-wide" : "mx-auto max-w-[960px] px-7", className)}>
      {children}
    </div>
  );
}

export function SectionShell({
  children,
  className,
  id,
  dark,
  bordered,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        dark && "bg-rail text-white",
        bordered && "border-y border-border-subtle bg-white",
        className,
      )}
    >
      {children}
    </section>
  );
}

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("container-wide", className)}>{children}</div>;
}

export function ContainerContent({ children, className }: ContainerProps) {
  return <div className={cn("container-content", className)}>{children}</div>;
}

export function ContainerProse({ children, className }: ContainerProps) {
  return <div className={cn("container-prose", className)}>{children}</div>;
}

export function ContainerLegal({ children, className }: ContainerProps) {
  return <div className={cn("container-legal", className)}>{children}</div>;
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

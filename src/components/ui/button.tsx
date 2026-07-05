import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const variants = {
  primary:
    "bg-accent text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.5)] hover:brightness-105",
  secondary:
    "bg-white text-ink border border-border hover:bg-muted",
  ghost: "bg-transparent text-ink-muted hover:text-ink hover:bg-muted",
  outline:
    "bg-white text-ink border border-border hover:bg-muted",
};

const sizes = {
  sm: "h-[38px] px-4 text-sm rounded-[11px]",
  md: "h-[44px] px-5 text-sm rounded-[12px]",
  lg: "h-[48px] px-6 text-[15px] rounded-[14px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-150",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

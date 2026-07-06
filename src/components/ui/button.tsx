import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "onDark" | "onDarkOutline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const variants = {
  primary:
    "bg-accent !text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.5)] hover:bg-accent-d hover:!text-white",
  secondary:
    "bg-white text-ink border border-border hover:bg-muted",
  ghost: "bg-transparent text-ink-muted hover:text-ink hover:bg-muted",
  outline:
    "bg-white text-ink border border-border hover:bg-muted",
  onDark:
    "bg-white text-ink border-0 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.25)] hover:bg-white/92",
  onDarkOutline:
    "bg-transparent text-white border-2 border-white/90 hover:bg-white hover:text-ink",
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
      <Link href={href} className={classes} style={{ color: variant === "primary" ? "#ffffff" : undefined }}>
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

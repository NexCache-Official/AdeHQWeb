import { cn } from "@/lib/utils";

const gradients = {
  coral: "bg-gradient-to-br from-[#2563EB] to-[#5B93F6]",
  indigo: "bg-gradient-to-br from-[#4759A8] to-[#7A8BD8]",
  green: "bg-gradient-to-br from-[#1BA672] to-[#54C79A]",
  violet: "bg-gradient-to-br from-[#9A6BCB] to-[#C29BE6]",
  slate: "bg-gradient-to-br from-[#3B4C6B] to-[#5A6E94]",
};

type AvatarProps = {
  initials: string;
  gradient?: keyof typeof gradients;
  size?: number;
  ai?: boolean;
  status?: "working" | "available";
  className?: string;
};

export function Avatar({
  initials,
  gradient = "coral",
  size = 34,
  ai,
  status,
  className,
}: AvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-[9px] font-bold text-white",
        gradients[gradient],
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {initials}
      {status === "working" && (
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-white bg-green animate-glowpulse" />
      )}
      {ai && (
        <span className="absolute -top-1 -right-1 rounded bg-accent/90 px-1 text-[7px] font-bold tracking-wide text-white">
          AI
        </span>
      )}
    </span>
  );
}

export function Logo({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "icon" | "text";
}) {
  const icon = "/adehq_icon_light.svg";
  const text = "/AdeHQ_text_logo.svg";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {(variant === "full" || variant === "icon") && (
        <img
          src={icon}
          alt="AdeHQ"
          className="h-[40px] w-[40px] object-contain"
          loading="eager"
          decoding="async"
        />
      )}
      {(variant === "full" || variant === "text") && (
        <img
          src={text}
          alt="AdeHQ"
          className="h-[40px] w-auto object-contain"
          loading="eager"
          decoding="async"
        />
      )}
    </span>
  );
}

import Link from "next/link";
import {
  Brain,
  Briefcase,
  Clock,
  Cpu,
  GitBranch,
  Globe,
  List,
  Mail,
  MessageSquare,
  Search,
  Shield,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { platformFeatures } from "@/lib/data";
import { SectionHeader, Stagger, StaggerItem } from "@/components/ui/motion";
import { BentoPanel, InlineCta } from "@/components/ui/showcase";

const iconMap = {
  users: Users,
  message: MessageSquare,
  git: GitBranch,
  brain: Brain,
  shield: Shield,
  list: List,
  search: Search,
  globe: Globe,
  clock: Clock,
  cpu: Cpu,
  briefcase: Briefcase,
  mail: Mail,
} as const;

const featured = platformFeatures.slice(0, 4);
const rest = platformFeatures.slice(4);

export function PlatformGrid() {
  return (
    <section className="container-wide pt-20 pb-4">
      <SectionHeader
        eyebrow="Platform"
        title="Everything you need to run an AI-native company"
        description="Hire employees with identity and memory. Organize work in rooms. Meter AI work with weekly hours. Govern external actions with approvals and audit logs."
        action={<InlineCta href="/product" label="Full platform tour" />}
      />

      <div className="mt-12 grid gap-4 md:grid-cols-12">
        {featured.map((feat, i) => {
          const Icon = iconMap[feat.icon as keyof typeof iconMap] ?? Users;
          const spans = [
            "md:col-span-6",
            "md:col-span-3",
            "md:col-span-3",
            "md:col-span-6",
          ];
          return (
            <StaggerItem key={feat.title} className={spans[i]}>
              <BentoPanel
                href={feat.href}
                dark={i === 0}
                className="h-full min-h-[180px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                      i === 0
                        ? "bg-white/15 text-white"
                        : "bg-accent-soft text-accent"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wide ${
                      i === 0 ? "bg-white/10 text-white/70" : "bg-muted text-ink-subtle"
                    }`}
                  >
                    {feat.tag}
                  </span>
                </div>
                <h3
                  className={`mt-5 text-[18px] font-bold ${
                    i === 0 ? "text-white" : "text-ink"
                  }`}
                >
                  {feat.title}
                </h3>
                <p
                  className={`mt-2 text-[14px] leading-relaxed ${
                    i === 0 ? "text-white/75" : "text-ink-muted"
                  }`}
                >
                  {feat.desc}
                </p>
              </BentoPanel>
            </StaggerItem>
          );
        })}
      </div>

      <Stagger className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((feat) => {
          const Icon = iconMap[feat.icon as keyof typeof iconMap] ?? Users;
          return (
            <StaggerItem key={feat.title}>
              <Link
                href={feat.href}
                className="group flex items-start gap-3 rounded-2xl border border-transparent px-3 py-4 no-underline transition-colors hover:border-border hover:bg-muted"
              >
                <span className="mt-0.5 text-accent">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[14px] font-bold text-ink group-hover:text-accent">
                    {feat.title}
                  </span>
                  <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-muted">
                    {feat.desc}
                  </span>
                </span>
                <ArrowUpRight
                  size={14}
                  className="ml-auto shrink-0 text-ink-subtle opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}

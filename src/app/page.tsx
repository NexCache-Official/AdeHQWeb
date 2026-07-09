import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { PlatformGrid } from "@/components/sections/platform-grid";
import { ResourcesStrip } from "@/components/sections/resources-strip";
import {
  ComparisonSection,
  FaqSection,
  FinalCtaSection,
  HowItWorksSection,
  HumanAiSection,
  ProblemSection,
  ProductHighlightsSection,
  SolutionSection,
  StatsBand,
  TrustStrip,
  UseCasesSection,
} from "@/components/sections/home-sections";
import { PricingCards, NoSeatBanner } from "@/components/sections/shared";
import { SectionHeader } from "@/components/ui/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { homePageSchemas } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/seo";
import { pricingPositioning } from "@/lib/data";

export const metadata: Metadata = createPageMetadata({
  title: "AdeHQ — AI Workforce Platform | Hire AI Employees, Unlimited Team",
  description:
    "Hire persistent AI employees with roles, memory, and orchestration. Unlimited humans and unlimited AI employees on every plan. Pay for AI work, not per-seat pricing.",
  path: "",
  keywords: [
    "AI workforce software",
    "hire AI employees online",
    "AI employee platform for startups",
    "AI agents with memory",
    "team AI workspace",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchemas()} />
      <HeroSection />
      <LogoMarquee />
      <PlatformGrid />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <HumanAiSection />
      <StatsBand />
      <HowItWorksSection />
      <ProductHighlightsSection />
      <UseCasesSection />
      <ResourcesStrip />
      <section id="pricing" className="container-wide scroll-mt-[90px] pt-24">
        <SectionHeader
          eyebrow="Pricing"
          title={pricingPositioning.headline}
          description={pricingPositioning.subheadline}
        />
        <PricingCards compact limit={4} />
        <NoSeatBanner />
      </section>
      <ComparisonSection />
      <FinalCtaSection />
      <FaqSection />
    </>
  );
}

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
import { pricingPositioning } from "@/lib/data";

export default function HomePage() {
  return (
    <>
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

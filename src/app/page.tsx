import { HeroSection } from "@/components/sections/hero";
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
import { PricingCards } from "@/components/sections/shared";
import { SectionHeader } from "@/components/ui/motion";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <HumanAiSection />
      <StatsBand />
      <HowItWorksSection />
      <ProductHighlightsSection />
      <UseCasesSection />
      <section id="pricing" className="mx-auto max-w-[1180px] scroll-mt-[74px] px-7 pt-24">
        <SectionHeader
          eyebrow="Pricing"
          title="Start free. Scale when your workforce grows."
        />
        <PricingCards compact />
        <p className="mx-auto mt-5 max-w-[640px] text-center text-[13px] leading-relaxed text-ink-subtle">
          Human messaging is generous. Hosted AI usage is governed by AI Work
          Hours — capacity you can understand, no token math. BYOK coming for
          technical users.
        </p>
      </section>
      <ComparisonSection />
      <FinalCtaSection />
      <FaqSection />
    </>
  );
}

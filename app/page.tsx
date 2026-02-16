import Hero from "@/components/hero"
import CTA from "@/components/cta"
import TrustedBy from "@/components/trusted-by"
import ImpactSection from "@/components/impact-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import IndustriesSection from "@/components/industries-section"
import WhyDifferentSection from "@/components/why-different"
import ProcessSection from "@/components/process-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ImpactSection />
      <StatsSection />
      <WhyDifferentSection />
      <ServicesSection />
      <PortfolioSection />
      <IndustriesSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CTA />
    </main>
  );
}

import { Hero } from "@/components/home/hero";
import { StatsStrip } from "@/components/home/stats-strip";
import { PlansSection } from "@/components/home/plans-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { TrustStrip } from "@/components/home/trust-strip";
import { HelpCtaBar } from "@/components/home/help-cta-bar";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <PlansSection />
      <HowItWorks />
      <TrustStrip />
      <HelpCtaBar />
    </>
  );
}

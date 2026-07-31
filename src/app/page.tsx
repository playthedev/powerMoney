import { Hero } from "@/components/home/hero";
import { MarketTicker } from "@/components/home/market-ticker";
import { ProductGrid } from "@/components/home/product-grid";
import { StatsStrip } from "@/components/home/stats-strip";
import { WhyUs } from "@/components/home/why-us";
import { Testimonials } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketTicker />
      <ProductGrid />
      <StatsStrip />
      <WhyUs />
      <Testimonials />
      <CtaSection />
    </>
  );
}

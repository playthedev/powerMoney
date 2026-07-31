import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SipCalculator } from "@/components/calculators/sip-calculator";
import { EmiCalculator } from "@/components/calculators/emi-calculator";

export const metadata: Metadata = {
  title: "Calculators",
  description:
    "Free SIP and EMI calculators to plan your mutual fund investments and loan repayments.",
};

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculators"
        title="Plan before you commit"
        description="Use these free calculators to estimate SIP growth or loan EMIs. Figures are illustrative projections, not guaranteed outcomes."
      />

      <Container className="space-y-10 py-14 sm:py-16">
        <SipCalculator />
        <EmiCalculator />

        <p className="text-xs leading-relaxed text-foreground/40">
          These calculators provide illustrative estimates based on the
          inputs provided and assume a constant rate of return/interest rate.
          Actual returns and EMI amounts will vary. This is not investment or
          financial advice.
        </p>
      </Container>
    </>
  );
}

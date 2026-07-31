import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclosures about the information shown on PowerMoney.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Disclaimer" />
      <Container className="max-w-3xl space-y-6 py-14 text-sm leading-relaxed text-foreground/65 sm:py-16">
        <p>
          Mutual fund investments are subject to market risks. Please read
          all scheme-related documents carefully before investing. Stock
          prices, mutual fund NAVs and returns shown on this website are
          indicative and may not reflect live market data.
        </p>
        <p>
          Loan interest rates, insurance premiums and coverage details shown
          are indicative starting figures and may vary by lender/insurer,
          applicant profile and prevailing market conditions at the time of
          application. Final terms are determined by the lending or
          insurance partner.
        </p>
        <p>
          Nothing on this website should be construed as a recommendation to
          buy, sell or hold any security, or to apply for any specific loan
          or insurance product. Please consult a qualified advisor before
          making financial decisions.
        </p>
        <p className="text-xs text-foreground/40">
          This page is a general template and should be reviewed by legal
          and compliance counsel before publishing.
        </p>
      </Container>
    </>
  );
}

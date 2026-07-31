import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the PowerMoney website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <Container className="max-w-3xl space-y-6 py-14 text-sm leading-relaxed text-foreground/65 sm:py-16">
        <p>
          By accessing or using the PowerMoney website, you agree to these
          Terms of Use. Please read them carefully.
        </p>
        <div>
          <h2 className="font-display text-lg font-bold text-navy">
            Not financial advice
          </h2>
          <p className="mt-2">
            Nothing on this website constitutes investment, legal or tax
            advice. Consult a qualified, registered financial advisor before
            making any investment or borrowing decision.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-navy">
            Third-party products
          </h2>
          <p className="mt-2">
            Loan, insurance and investment products referenced on this
            website are offered in partnership with third-party institutions
            and are subject to their own terms and approval process.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-navy">
            Limitation of liability
          </h2>
          <p className="mt-2">
            PowerMoney makes no warranties regarding the accuracy or
            completeness of information displayed and shall not be liable
            for any decisions made based on it.
          </p>
        </div>
        <p className="text-xs text-foreground/40">
          This page is a general template and should be reviewed by legal
          counsel before publishing.
        </p>
      </Container>
    </>
  );
}

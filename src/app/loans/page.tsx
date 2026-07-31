import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { CardHover } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { loans } from "@/data/loans";

export const metadata: Metadata = {
  title: "Loans",
  description:
    "Compare personal, home, business loans and loans against property — rates, tenure and eligibility explained.",
};

export default function LoansPage() {
  return (
    <>
      <PageHero
        eyebrow="Loans"
        title="Compare loan offers from our partner lenders"
        description="See indicative interest rates, tenure and eligibility across loan types before you apply."
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {loans.map((loan) => (
            <CardHover key={loan.slug} className="flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-navy">{loan.name}</h3>
                <Badge variant="brand">{loan.category}</Badge>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xs text-foreground/45">Rate from</p>
                  <p className="text-sm font-semibold text-navy">{loan.rateFrom}%</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/45">Up to</p>
                  <p className="text-sm font-semibold text-navy">{loan.maxAmount}</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/45">Tenure</p>
                  <p className="text-sm font-semibold text-navy">{loan.tenure}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2">
                {loan.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/60">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-growth" />
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href={`/loans/${loan.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand"
              >
                View details & apply
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </CardHover>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-foreground/40">
          Interest rates and terms are indicative starting rates and vary by
          lender, credit profile and loan amount. Final terms are decided
          by the lending partner.
        </p>
      </Container>
    </>
  );
}

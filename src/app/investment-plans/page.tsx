import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { CardHover } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Investment Plans",
  description:
    "Guided advisory portfolios matched to your goal, horizon and risk appetite — Wealth Builder, Steady Saver and Retirement Shield.",
};

export default function InvestmentPlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Plans"
        title="Advisory portfolios matched to your goals"
        description="Each plan is a curated mix of mutual fund categories designed for a specific goal, horizon and risk appetite — reviewed and rebalanced by our advisory desk."
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <CardHover key={plan.slug} className="flex flex-col p-6">
              <Badge variant="brand" className="self-start">
                {plan.riskProfile}
              </Badge>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">{plan.name}</h3>
              <p className="mt-1 text-sm text-foreground/55">{plan.goal}</p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-foreground/45">Horizon</p>
                  <p className="font-medium text-navy">{plan.horizon}</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/45">Expected returns</p>
                  <p className="font-medium text-growth">{plan.expectedReturns}</p>
                </div>
              </div>

              <ul className="mt-5 flex-1 space-y-2">
                {plan.features.slice(0, 2).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/60">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-growth" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={`/investment-plans/${plan.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand"
              >
                View allocation & details
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </CardHover>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-foreground/40">
          *Expected returns are illustrative estimates based on historical
          category averages, not guaranteed outcomes. Mutual fund investments
          are subject to market risks.
        </p>
      </Container>
    </>
  );
}

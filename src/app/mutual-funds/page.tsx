import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { CardHover } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkline } from "@/components/charts/sparkline";
import { mutualFunds } from "@/data/mutualFunds";
import { formatPercent } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mutual Funds",
  description:
    "Compare mutual fund schemes across categories by returns, expense ratio, risk and minimum SIP.",
};

const riskVariant = {
  Low: "growth",
  Moderate: "brand",
  High: "accent",
  "Very High": "danger",
} as const;

export default function MutualFundsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mutual Funds"
        title="Compare mutual fund schemes before you commit"
        description="See historical returns, expense ratios and risk profile side by side across leading fund houses."
      />

      <Container className="py-14 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-foreground/55">
            Showing {mutualFunds.length} schemes
          </p>
          <Badge variant="neutral">Illustrative data · Direct plan NAV</Badge>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mutualFunds.map((fund) => (
            <Link key={fund.slug} href={`/mutual-funds/${fund.slug}`} className="group">
              <CardHover className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-foreground/40">
                      {fund.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold leading-snug text-navy">
                      {fund.name}
                    </h3>
                  </div>
                  <Badge variant={riskVariant[fund.risk]} className="shrink-0">
                    {fund.risk}
                  </Badge>
                </div>

                <div className="mt-4">
                  <Sparkline data={fund.series} positive={fund.returns1y >= 0} />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border-subtle pt-4 text-center">
                  <div>
                    <p className="text-xs text-foreground/45">1Y</p>
                    <p className="text-sm font-semibold text-growth">
                      {formatPercent(fund.returns1y)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/45">3Y</p>
                    <p className="text-sm font-semibold text-growth">
                      {formatPercent(fund.returns3y)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/45">5Y</p>
                    <p className="text-sm font-semibold text-growth">
                      {formatPercent(fund.returns5y)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-foreground/50">
                  <span>Min. SIP ₹{fund.minSip}</span>
                  <span>{fund.amc}</span>
                </div>
              </CardHover>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-foreground/40">
          Mutual fund investments are subject to market risks. Read all
          scheme-related documents carefully.
        </p>
      </Container>
    </>
  );
}

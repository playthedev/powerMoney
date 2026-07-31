import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PriceChart } from "@/components/charts/price-chart";
import { LeadForm } from "@/components/forms/lead-form";
import { getMutualFundBySlug, mutualFunds } from "@/data/mutualFunds";
import { formatPercent } from "@/lib/utils";

export function generateStaticParams() {
  return mutualFunds.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fund = getMutualFundBySlug(slug);
  if (!fund) return { title: "Fund not found" };
  return { title: fund.name, description: fund.about };
}

export default async function MutualFundDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fund = getMutualFundBySlug(slug);
  if (!fund) notFound();

  const stats = [
    { label: "NAV", value: `₹${fund.nav}` },
    { label: "AUM", value: fund.aum },
    { label: "Expense Ratio", value: `${fund.expenseRatio}%` },
    { label: "Min. SIP", value: `₹${fund.minSip}` },
    { label: "3Y Returns", value: formatPercent(fund.returns3y) },
    { label: "5Y Returns", value: formatPercent(fund.returns5y) },
  ];

  return (
    <Container className="py-10 sm:py-14">
      <Link
        href="/mutual-funds"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/55 hover:text-navy"
      >
        <ArrowLeft className="h-4 w-4" />
        All mutual funds
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-foreground/40">
                {fund.category} · {fund.amc}
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold text-navy sm:text-3xl">
                {fund.name}
              </h1>
              <div className="mt-2 flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    fill={i < fund.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
            <Badge variant="growth">1Y: {formatPercent(fund.returns1y)}</Badge>
          </div>

          <Card className="mt-6 p-5">
            <PriceChart data={fund.series} positive={fund.returns1y >= 0} />
          </Card>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-4">
                <p className="text-xs text-foreground/45">{stat.label}</p>
                <p className="mt-1 text-sm font-semibold text-navy">{stat.value}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-6 p-6">
            <h2 className="font-display text-lg font-bold text-navy">About this fund</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">{fund.about}</p>
            <p className="mt-4 text-sm text-foreground/60">
              Risk profile: <span className="font-semibold text-navy">{fund.risk}</span>
            </p>
          </Card>

          <p className="mt-6 text-xs leading-relaxed text-foreground/40">
            Mutual fund investments are subject to market risks. Read all
            scheme-related documents carefully.
          </p>
        </div>

        <div>
          <Card className="sticky top-24 p-6">
            <h2 className="font-display text-lg font-bold text-navy">
              Start a guided SIP plan
            </h2>
            <p className="mt-1.5 text-sm text-foreground/55">
              Get help evaluating {fund.name} against your goals from a
              qualified advisor.
            </p>
            <div className="mt-5">
              <LeadForm
                defaultInterest={`Mutual Fund: ${fund.name}`}
                submitLabel="Request Advisor Callback"
                showMessage={false}
              />
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}

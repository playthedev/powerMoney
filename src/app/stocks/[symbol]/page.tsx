import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PriceChart } from "@/components/charts/price-chart";
import { LeadForm } from "@/components/forms/lead-form";
import { getStockBySymbol, stocks } from "@/data/stocks";
import { cn, formatPercent } from "@/lib/utils";

export function generateStaticParams() {
  return stocks.map((s) => ({ symbol: s.symbol.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ symbol: string }>;
}): Promise<Metadata> {
  const { symbol } = await params;
  const stock = getStockBySymbol(symbol);
  if (!stock) return { title: "Stock not found" };
  return {
    title: `${stock.name} (${stock.symbol}) Share Price`,
    description: stock.about,
  };
}

export default async function StockDetailPage({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  const stock = getStockBySymbol(symbol);
  if (!stock) notFound();

  const positive = stock.changePercent >= 0;

  const stats = [
    { label: "Sector", value: stock.sector },
    { label: "Market Cap", value: stock.marketCap },
    { label: "P/E Ratio", value: stock.peRatio.toString() },
    { label: "52W High", value: `₹${stock.high52w.toLocaleString("en-IN")}` },
    { label: "52W Low", value: `₹${stock.low52w.toLocaleString("en-IN")}` },
    { label: "Volume", value: stock.volume },
  ];

  return (
    <Container className="py-10 sm:py-14">
      <Link
        href="/stocks"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/55 hover:text-navy"
      >
        <ArrowLeft className="h-4 w-4" />
        All stocks
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                  {stock.name}
                </h1>
                <Badge variant="neutral">{stock.symbol}</Badge>
              </div>
              <p className="mt-2 text-sm text-foreground/55">{stock.sector}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl font-extrabold text-navy">
                ₹{stock.price.toLocaleString("en-IN")}
              </p>
              <p className={cn("text-sm font-semibold", positive ? "text-growth" : "text-danger")}>
                {stock.change >= 0 ? "+" : ""}
                {stock.change} ({formatPercent(stock.changePercent)})
              </p>
            </div>
          </div>

          <Card className="mt-6 p-5">
            <PriceChart data={stock.series} positive={positive} />
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
            <h2 className="font-display text-lg font-bold text-navy">About {stock.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">{stock.about}</p>
          </Card>

          <p className="mt-6 text-xs leading-relaxed text-foreground/40">
            This page does not constitute investment advice.
          </p>
        </div>

        <div>
          <Card className="sticky top-24 p-6">
            <h2 className="font-display text-lg font-bold text-navy">
              Get personalised guidance
            </h2>
            <p className="mt-1.5 text-sm text-foreground/55">
              Talk to an advisor about {stock.name} and how it could fit your
              portfolio.
            </p>
            <div className="mt-5">
              <LeadForm
                defaultInterest={`Stock: ${stock.name}`}
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

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkline } from "@/components/charts/sparkline";
import { stocks } from "@/data/stocks";
import { cn, formatPercent } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Stocks",
  description:
    "Browse NSE/BSE listed stocks with price, P/E ratio, market cap and 52-week range.",
};

export default function StocksPage() {
  return (
    <>
      <PageHero
        eyebrow="Stocks"
        title="Research listed companies before you invest"
        description="Track prices, valuation ratios and trading ranges for widely held Indian stocks."
      />

      <Container className="py-14 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-foreground/55">
            Showing {stocks.length} stocks
          </p>
          <Badge variant="neutral">Illustrative data · Updated daily</Badge>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface text-xs uppercase tracking-wide text-foreground/45">
                  <th className="px-5 py-3 font-medium">Company</th>
                  <th className="px-5 py-3 font-medium">Price</th>
                  <th className="px-5 py-3 font-medium">Change</th>
                  <th className="px-5 py-3 font-medium">Trend</th>
                  <th className="px-5 py-3 font-medium">Market Cap</th>
                  <th className="px-5 py-3 font-medium">P/E</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((s) => {
                  const positive = s.changePercent >= 0;
                  return (
                    <tr
                      key={s.symbol}
                      className="border-b border-border-subtle last:border-0 hover:bg-surface/60"
                    >
                      <td className="px-5 py-4">
                        <Link href={`/stocks/${s.symbol.toLowerCase()}`} className="block">
                          <p className="font-semibold text-navy">{s.symbol}</p>
                          <p className="text-xs text-foreground/50">{s.name}</p>
                        </Link>
                      </td>
                      <td className="px-5 py-4 font-medium text-navy">
                        ₹{s.price.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={cn(
                            "font-semibold",
                            positive ? "text-growth" : "text-danger"
                          )}
                        >
                          {formatPercent(s.changePercent)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <Sparkline data={s.series} positive={positive} />
                      </td>
                      <td className="px-5 py-4 text-foreground/70">{s.marketCap}</td>
                      <td className="px-5 py-4 text-foreground/70">{s.peRatio}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        <p className="mt-6 text-xs leading-relaxed text-foreground/40">
          Data shown does not constitute investment advice or a
          recommendation to buy or sell any security.
        </p>
      </Container>
    </>
  );
}

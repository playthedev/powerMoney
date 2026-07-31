import { stocks } from "@/data/stocks";
import { cn, formatPercent } from "@/lib/utils";

export function MarketTicker() {
  return (
    <div className="overflow-hidden border-b border-border-subtle bg-surface py-3">
      <div className="flex w-max animate-marquee gap-8">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-8">
            {stocks.map((s) => (
              <div key={`${dup}-${s.symbol}`} className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-navy">{s.symbol}</span>
                <span className="text-foreground/60">₹{s.price.toLocaleString("en-IN")}</span>
                <span
                  className={cn(
                    "font-medium",
                    s.changePercent >= 0 ? "text-growth" : "text-danger"
                  )}
                >
                  {formatPercent(s.changePercent)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

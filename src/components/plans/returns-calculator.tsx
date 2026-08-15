"use client";

import * as React from "react";
import { Calculator } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/input";
import { formatINR } from "@/lib/utils";
import { calculateReturns, plans, type FixedPlan } from "@/data/plans";

export function ReturnsCalculator({ defaultSlug }: { defaultSlug?: string }) {
  const [slug, setSlug] = React.useState(defaultSlug ?? plans[0].slug);
  const [amountInput, setAmountInput] = React.useState("100000");

  const plan = plans.find((p) => p.slug === slug) as FixedPlan;
  const isSip = plan.tableType === "sip3year";
  const amount = Number(amountInput) || 0;
  const { totalProfit, totalValue } = calculateReturns(amount, plan);

  return (
    <Card className="p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display text-base font-bold text-navy">Calculate Your Estimated Returns</p>
          <p className="text-sm text-foreground/55">See how your investment grows with Power Money.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_auto_auto] xl:items-end">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/50">Select Plan</label>
          <Select value={slug} onChange={(e) => setSlug(e.target.value)}>
            {plans.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/50">
            {isSip ? "Enter Monthly Investment (₹)" : "Enter Amount (₹)"}
          </label>
          <input
            type="number"
            min={plan.minInvestment}
            max={plan.maxInvestment}
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            className="h-11 w-full min-w-0 rounded-xl border border-border-subtle bg-white px-4 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </div>

        <div className="xl:min-w-[9rem]">
          <p className="text-xs font-medium text-foreground/50">
            {isSip ? "Maturity Value After 3 Years" : "Estimated Total Returns"}
          </p>
          <p className="font-display text-2xl font-extrabold text-growth">{formatINR(totalValue)}</p>
          <p className="text-xs text-foreground/45">(Total Profit {formatINR(totalProfit)})</p>
        </div>

        <Button href="/contact" size="lg" className="w-full xl:w-auto">
          Get Started
        </Button>
      </div>
    </Card>
  );
}

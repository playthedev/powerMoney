import { CheckCircle2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn, formatINR } from "@/lib/utils";
import { themeClasses, type FixedPlan } from "@/data/plans";

export function PlanCard({
  plan,
  featured,
}: {
  plan: Omit<FixedPlan, "useCases">;
  featured?: boolean;
}) {
  const theme = themeClasses[plan.theme];
  const features = [
    `${plan.monthlyProfit}% Monthly Profit`,
    `Tenure: ${plan.tenureLabel}`,
    `Minimum Investment: ${formatINR(plan.minInvestment)}`,
    `Maximum Investment: ${formatINR(plan.maxInvestment)}`,
    `Profit Payout: ${plan.payout}`,
    `Profit Transfer: ${plan.transfer}`,
  ];

  return (
    <Card
      className={cn(
        "relative flex flex-col p-6 sm:p-7",
        featured ? "border-navy/30 shadow-xl shadow-navy/10 lg:-translate-y-3" : theme.border
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy shadow-sm">
          Popular
        </span>
      )}

      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white",
          theme.bg
        )}
      >
        {plan.name}
      </span>
      <p className="mt-2.5 text-sm font-semibold text-navy/70">{plan.hindiTagline}</p>

      <div className="mt-4 flex items-end gap-3">
        <p className={cn("font-display text-5xl font-extrabold leading-none", theme.text)}>
          {plan.yearlyProfit}%
        </p>
        <TrendingUp className={cn("mb-1.5 h-8 w-8 opacity-30", theme.text)} />
      </div>
      <p className="mt-1 text-sm font-medium text-foreground/50">Yearly Returns</p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground/65">
            <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", theme.text)} />
            {f}
          </li>
        ))}
      </ul>

      <Button href={`/investment-plans/${plan.slug}`} variant={theme.button} size="lg" className="mt-7 w-full">
        Choose This Plan
      </Button>
    </Card>
  );
}

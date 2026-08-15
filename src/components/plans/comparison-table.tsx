import { cn, formatINR } from "@/lib/utils";
import { themeClasses, type FixedPlan } from "@/data/plans";

export function ComparisonTable({
  plans,
  highlightSlug,
}: {
  plans: FixedPlan[];
  highlightSlug?: string;
}) {
  const rows: { label: string; value: (p: FixedPlan) => string }[] = [
    { label: "Monthly Profit", value: (p) => `${p.monthlyProfit}%` },
    { label: "Yearly Returns", value: (p) => `${p.yearlyProfit}%` },
    { label: "Tenure", value: (p) => p.tenureLabel },
    { label: "Minimum Investment", value: (p) => formatINR(p.minInvestment) },
    { label: "Maximum Investment", value: (p) => formatINR(p.maxInvestment) },
    { label: "Profit Payout", value: (p) => p.payout },
    { label: "Profit Transfer", value: (p) => p.transfer },
    { label: "Withdrawal", value: (p) => p.withdrawal },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-border-subtle">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr>
            <th className="bg-navy px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wide text-white/60">
              Features
            </th>
            {plans.map((plan) => {
              const theme = themeClasses[plan.theme];
              return (
                <th
                  key={plan.slug}
                  className={cn(
                    "px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white",
                    theme.bg,
                    highlightSlug === plan.slug && "ring-2 ring-inset ring-white/40"
                  )}
                >
                  {plan.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 1 ? "bg-surface" : "bg-white"}>
              <td className="px-5 py-3 text-left font-medium text-navy">{row.label}</td>
              {plans.map((plan) => {
                const theme = themeClasses[plan.theme];
                const isReturns = row.label === "Yearly Returns";
                return (
                  <td
                    key={plan.slug}
                    className={cn(
                      "px-5 py-3 text-center text-foreground/70",
                      isReturns && cn("font-bold", theme.text),
                      highlightSlug === plan.slug && "bg-brand-light/30"
                    )}
                  >
                    {row.value(plan)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import * as React from "react";
import { cn, formatINR } from "@/lib/utils";
import { themeClasses, type FixedPlan } from "@/data/plans";

export function PlanChartTable({ plan }: { plan: FixedPlan }) {
  const theme = themeClasses[plan.theme];

  if (plan.tableType === "sip3year" && plan.sipRows) {
    return (
      <div className="overflow-x-auto rounded-2xl border border-border-subtle">
        <table className="w-full min-w-[920px] border-collapse text-sm">
          <thead>
            <tr>
              <th
                rowSpan={2}
                className="border-b border-white/10 bg-navy px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-white/70 align-middle"
              >
                Monthly Investment (₹)
              </th>
              {["Year 1", "Year 2", "Year 3"].map((label) => (
                <th
                  key={label}
                  colSpan={3}
                  className={cn(
                    "border-b border-white/10 px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-white",
                    theme.bg
                  )}
                >
                  {label} ({plan.yearlyProfit}% Return)
                </th>
              ))}
              <th
                rowSpan={2}
                className="bg-navy px-4 py-3 text-center text-xs font-bold uppercase tracking-wide text-white/70 align-middle"
              >
                {plan.totalColumnLabel}
              </th>
            </tr>
            <tr>
              {[1, 2, 3].map((y) => (
                <React.Fragment key={y}>
                  <th className="bg-surface-alt px-3 py-2 text-center text-[11px] font-semibold text-foreground/55">
                    Invested (₹)
                  </th>
                  <th className="bg-surface-alt px-3 py-2 text-center text-[11px] font-semibold text-foreground/55">
                    Profit (₹)
                  </th>
                  <th className="bg-surface-alt px-3 py-2 text-center text-[11px] font-semibold text-foreground/55">
                    End of Year (₹)
                  </th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {plan.sipRows.map((row, i) => (
              <tr
                key={row.monthly}
                className={cn(
                  row.isMax ? cn(theme.bg, "text-white font-semibold") : i % 2 === 1 ? "bg-surface" : "bg-white"
                )}
              >
                <td className="px-4 py-3 text-left font-semibold text-navy">
                  <span className={row.isMax ? "text-white" : ""}>{formatINR(row.monthly)}</span>
                </td>
                <td className={cn("px-3 py-3 text-center", row.isMax ? "text-white/90" : "text-foreground/70")}>
                  {formatINR(row.year1Invested)}
                </td>
                <td className={cn("px-3 py-3 text-center", row.isMax ? "text-white/90" : "text-foreground/70")}>
                  {formatINR(row.year1Profit)}
                </td>
                <td className={cn("px-3 py-3 text-center font-medium", row.isMax ? "text-white" : "text-navy")}>
                  {formatINR(row.year1End)}
                </td>
                <td className={cn("px-3 py-3 text-center", row.isMax ? "text-white/90" : "text-foreground/70")}>
                  {formatINR(row.year2Invested)}
                </td>
                <td className={cn("px-3 py-3 text-center", row.isMax ? "text-white/90" : "text-foreground/70")}>
                  {formatINR(row.year2Profit)}
                </td>
                <td className={cn("px-3 py-3 text-center font-medium", row.isMax ? "text-white" : "text-navy")}>
                  {formatINR(row.year2End)}
                </td>
                <td className={cn("px-3 py-3 text-center", row.isMax ? "text-white/90" : "text-foreground/70")}>
                  {formatINR(row.year3Invested)}
                </td>
                <td className={cn("px-3 py-3 text-center", row.isMax ? "text-white/90" : "text-foreground/70")}>
                  {formatINR(row.year3Profit)}
                </td>
                <td className={cn("px-3 py-3 text-center font-medium", row.isMax ? "text-white" : "text-navy")}>
                  {formatINR(row.year3End)}
                </td>
                <td
                  className={cn(
                    "px-4 py-3 text-center font-bold",
                    row.isMax ? "text-white" : theme.text
                  )}
                >
                  {formatINR(row.maturity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (plan.lumpsumRows) {
    return (
      <div className="overflow-x-auto rounded-2xl border border-border-subtle">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="bg-navy px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wide text-white/70">
                Investment Amount (₹)
              </th>
              <th className="bg-navy px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white/70">
                Monthly Profit ({plan.monthlyProfit}%)
              </th>
              <th className="bg-navy px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white/70">
                Yearly Profit ({plan.yearlyProfit}%)
              </th>
              <th className={cn("px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white", theme.bg)}>
                {plan.totalColumnLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {plan.lumpsumRows.map((row, i) => (
              <tr
                key={row.investment}
                className={cn(
                  row.isMax ? cn(theme.bg, "text-white font-semibold") : i % 2 === 1 ? "bg-surface" : "bg-white"
                )}
              >
                <td className="px-5 py-3 text-left font-semibold text-navy">
                  <span className={row.isMax ? "text-white" : ""}>
                    {formatINR(row.investment)}
                    {row.isMax ? " (Max)" : ""}
                  </span>
                </td>
                <td className={cn("px-5 py-3 text-center", row.isMax ? "text-white/90" : "text-foreground/70")}>
                  {formatINR(row.monthlyProfit)}
                </td>
                <td className={cn("px-5 py-3 text-center", row.isMax ? "text-white/90" : "text-foreground/70")}>
                  {formatINR(row.yearlyProfit)}
                </td>
                <td
                  className={cn(
                    "px-5 py-3 text-center font-bold",
                    row.isMax ? "text-white" : theme.text
                  )}
                >
                  {formatINR(row.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

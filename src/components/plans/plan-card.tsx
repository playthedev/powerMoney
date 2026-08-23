import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo";
import { cn } from "@/lib/utils";
import { themeClasses, type FixedPlan } from "@/data/plans";
import {
  CoinJarIllustration,
  MoneyBagIllustration,
  ShieldCoinsIllustration,
} from "@/components/plans/plan-illustrations";

const illustrationByTheme = {
  growth: CoinJarIllustration,
  navy: ShieldCoinsIllustration,
  accent: MoneyBagIllustration,
};

export function PlanCard({
  plan,
  featured,
}: {
  plan: Omit<FixedPlan, "useCases">;
  featured?: boolean;
}) {
  const theme = themeClasses[plan.theme];
  const Illustration = illustrationByTheme[plan.theme];

  return (
    <Card
      className={cn(
        "relative flex flex-col items-center border-2 p-6 text-center shadow-sm sm:p-7",
        theme.border,
        featured && "shadow-lg"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy shadow-sm">
          Popular
        </span>
      )}

      <LogoMark className="h-6 w-auto" />

      <span
        className={cn(
          "mt-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white",
          theme.bg
        )}
      >
        {plan.name}
      </span>
      <p className="mt-2.5 text-sm font-semibold text-navy/70">{plan.hindiTagline}</p>

      <span
        className={cn(
          "mt-3 inline-flex items-center rounded-full px-3.5 py-1 text-sm font-bold text-white",
          theme.bg
        )}
      >
        {plan.yearlyProfit}% Per Year
      </span>

      <Illustration className={cn("mt-5", theme.text)} />

      <ul className="mt-5 w-full flex-1 space-y-2.5 text-left">
        {plan.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-foreground/65">
            <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", theme.text)} />
            {h}
          </li>
        ))}
      </ul>

      <Button
        href={`/investment-plans/${plan.slug}`}
        variant={theme.button}
        size="lg"
        className="mt-7 w-full"
      >
        Plan Details
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Card>
  );
}

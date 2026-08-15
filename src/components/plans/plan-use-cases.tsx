import { cn } from "@/lib/utils";
import { themeClasses, type FixedPlan } from "@/data/plans";

export function PlanUseCases({ plan }: { plan: FixedPlan }) {
  const theme = themeClasses[plan.theme];

  return (
    <div className={cn("grid gap-4", plan.useCases.length > 2 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2")}>
      {plan.useCases.map((useCase) => (
        <div key={useCase.title} className="rounded-2xl border border-border-subtle bg-white p-5">
          <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", theme.bgLight, theme.text)}>
            <useCase.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-3.5 text-sm font-bold text-navy">{useCase.title}</h3>
          <ul className="mt-2 space-y-1">
            {useCase.points.map((point) => (
              <li key={point} className="text-xs leading-relaxed text-foreground/55">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

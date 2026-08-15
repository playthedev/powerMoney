"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PlanCard } from "@/components/plans/plan-card";
import type { FixedPlan } from "@/data/plans";

export function PlanTabs({ plans }: { plans: Omit<FixedPlan, "useCases">[] }) {
  const [active, setActive] = React.useState<string>("all");

  const visiblePlans = active === "all" ? plans : plans.filter((p) => p.slug === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <TabButton active={active === "all"} onClick={() => setActive("all")}>
          All Plans
        </TabButton>
        {plans.map((plan) => (
          <TabButton key={plan.slug} active={active === plan.slug} onClick={() => setActive(plan.slug)}>
            {plan.name}
          </TabButton>
        ))}
      </div>

      <div
        className={cn(
          "mt-10 grid gap-6",
          visiblePlans.length === 1 ? "mx-auto max-w-sm" : "lg:grid-cols-3"
        )}
      >
        {visiblePlans.map((plan) => (
          <PlanCard key={plan.slug} plan={plan} featured={plan.popular && visiblePlans.length > 1} />
        ))}
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
        active
          ? "border-navy bg-navy text-white"
          : "border-border-subtle bg-white text-foreground/60 hover:border-navy/30 hover:text-navy"
      )}
    >
      {children}
    </button>
  );
}

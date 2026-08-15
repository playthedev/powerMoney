"use client";

import * as React from "react";
import { Cloud, Droplets, Sun, Wind } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SliderField } from "@/components/calculators/sip-calculator";
import { perTreeAnnualImpact } from "@/data/giftATree";
import { formatNumber } from "@/lib/utils";

export function ImpactCalculator() {
  const [trees, setTrees] = React.useState(25);

  const impact = React.useMemo(
    () => ({
      carbon: Math.round(trees * perTreeAnnualImpact.carbonKg),
      pollutants: Math.round(trees * perTreeAnnualImpact.pollutantsG),
      water: Math.round(trees * perTreeAnnualImpact.waterM3),
      oxygen: Math.round(trees * perTreeAnnualImpact.oxygenKg),
    }),
    [trees]
  );

  const stats = [
    {
      icon: Cloud,
      label: "Carbon sequestered",
      value: `${formatNumber(impact.carbon)} kg/yr`,
      color: "text-brand",
      bg: "bg-brand-light",
    },
    {
      icon: Wind,
      label: "Air pollutants removed",
      value: `${formatNumber(impact.pollutants)} g/yr`,
      color: "text-foreground/70",
      bg: "bg-surface-alt",
    },
    {
      icon: Droplets,
      label: "Water evapotranspired",
      value: `${formatNumber(impact.water)} m³/yr`,
      color: "text-growth",
      bg: "bg-growth-light",
    },
    {
      icon: Sun,
      label: "Oxygen produced",
      value: `${formatNumber(impact.oxygen)} kg/yr`,
      color: "text-accent-dark",
      bg: "bg-accent-light",
    },
  ];

  return (
    <Card className="p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-navy">Your impact, calculated</h2>
      <p className="mt-1.5 text-sm text-foreground/55">
        Move the slider to see the estimated annual environmental impact of your gift.
      </p>

      <div className="mt-6 max-w-md">
        <SliderField
          label="Number of trees"
          value={trees}
          onChange={setTrees}
          min={1}
          max={200}
          step={1}
          format={(v) => `${v} tree${v === 1 ? "" : "s"}`}
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-border-subtle p-4">
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </span>
            <p className="mt-3 text-lg font-bold text-navy">{stat.value}</p>
            <p className="mt-0.5 text-xs leading-snug text-foreground/50">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-foreground/40">
        Figures are illustrative estimates based on commonly cited averages for a
        mature tree and will vary by species, location and growing conditions.
      </p>
    </Card>
  );
}

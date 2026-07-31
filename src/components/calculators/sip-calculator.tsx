"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { AllocationChart } from "@/components/charts/allocation-chart";
import { formatINR } from "@/lib/utils";

function useSlider(initial: number) {
  const [value, setValue] = React.useState(initial);
  return { value, setValue };
}

export function SipCalculator() {
  const monthly = useSlider(10000);
  const rate = useSlider(12);
  const years = useSlider(10);

  const { invested, futureValue, returns } = React.useMemo(() => {
    const months = years.value * 12;
    const monthlyRate = rate.value / 12 / 100;
    const fv =
      monthlyRate === 0
        ? monthly.value * months
        : monthly.value *
          (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const investedAmount = monthly.value * months;
    return {
      invested: Math.round(investedAmount),
      futureValue: Math.round(fv),
      returns: Math.round(fv - investedAmount),
    };
  }, [monthly.value, rate.value, years.value]);

  return (
    <Card id="sip" className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <h2 className="font-display text-xl font-bold text-navy">SIP Calculator</h2>
        <p className="mt-1.5 text-sm text-foreground/55">
          Estimate the future value of your monthly mutual fund investment.
        </p>

        <div className="mt-8 space-y-7">
          <SliderField
            label="Monthly investment"
            value={monthly.value}
            onChange={monthly.setValue}
            min={500}
            max={200000}
            step={500}
            format={(v) => formatINR(v)}
          />
          <SliderField
            label="Expected return rate (p.a.)"
            value={rate.value}
            onChange={rate.setValue}
            min={1}
            max={30}
            step={0.5}
            format={(v) => `${v}%`}
          />
          <SliderField
            label="Time period"
            value={years.value}
            onChange={years.setValue}
            min={1}
            max={35}
            step={1}
            format={(v) => `${v} Yr`}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <AllocationChart
          data={[
            { label: "Invested Amount", value: invested, color: "#1a73e8" },
            { label: "Est. Returns", value: Math.max(returns, 0), color: "#178a4c" },
          ]}
        />
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-xs text-foreground/45">Invested</p>
            <p className="mt-1 text-sm font-semibold text-navy">{formatINR(invested)}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/45">Est. Returns</p>
            <p className="mt-1 text-sm font-semibold text-growth">{formatINR(returns)}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/45">Total Value</p>
            <p className="mt-1 text-sm font-semibold text-navy">{formatINR(futureValue)}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground/70">{label}</label>
        <span className="rounded-lg bg-brand-light px-2.5 py-1 text-sm font-semibold text-brand-dark">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-alt accent-brand"
      />
    </div>
  );
}

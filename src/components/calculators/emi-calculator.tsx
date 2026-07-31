"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { AllocationChart } from "@/components/charts/allocation-chart";
import { SliderField } from "@/components/calculators/sip-calculator";
import { formatINR } from "@/lib/utils";

export function EmiCalculator() {
  const [amount, setAmount] = React.useState(1500000);
  const [rate, setRate] = React.useState(9.5);
  const [years, setYears] = React.useState(15);

  const { emi, totalInterest, totalPayment } = React.useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    const emiValue =
      monthlyRate === 0
        ? amount / months
        : (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
    const total = emiValue * months;
    return {
      emi: Math.round(emiValue),
      totalPayment: Math.round(total),
      totalInterest: Math.round(total - amount),
    };
  }, [amount, rate, years]);

  return (
    <Card id="emi" className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <h2 className="font-display text-xl font-bold text-navy">EMI Calculator</h2>
        <p className="mt-1.5 text-sm text-foreground/55">
          Estimate your monthly instalment for a home, personal or business loan.
        </p>

        <div className="mt-8 space-y-7">
          <SliderField
            label="Loan amount"
            value={amount}
            onChange={setAmount}
            min={50000}
            max={10000000}
            step={50000}
            format={(v) => formatINR(v)}
          />
          <SliderField
            label="Interest rate (p.a.)"
            value={rate}
            onChange={setRate}
            min={5}
            max={20}
            step={0.1}
            format={(v) => `${v.toFixed(1)}%`}
          />
          <SliderField
            label="Loan tenure"
            value={years}
            onChange={setYears}
            min={1}
            max={30}
            step={1}
            format={(v) => `${v} Yr`}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <AllocationChart
          data={[
            { label: "Principal Amount", value: amount, color: "#1a73e8" },
            { label: "Total Interest", value: Math.max(totalInterest, 0), color: "#f2b705" },
          ]}
        />
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-xs text-foreground/45">Monthly EMI</p>
            <p className="mt-1 text-sm font-semibold text-navy">{formatINR(emi)}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/45">Total Interest</p>
            <p className="mt-1 text-sm font-semibold text-accent-dark">
              {formatINR(totalInterest)}
            </p>
          </div>
          <div>
            <p className="text-xs text-foreground/45">Total Payment</p>
            <p className="mt-1 text-sm font-semibold text-navy">{formatINR(totalPayment)}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

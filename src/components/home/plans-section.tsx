import { Crown, Gem, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const homePlans = [
  {
    icon: Wallet,
    name: "Starter Plan",
    description: "Start small, grow big",
    rate: "1.5%",
  },
  {
    icon: TrendingUp,
    name: "Growth Plan",
    description: "For steady growth",
    rate: "2%",
  },
  {
    icon: Crown,
    name: "Premium Plan",
    description: "Higher returns, greater future",
    rate: "2.5%",
  },
  {
    icon: Gem,
    name: "Elite Plan",
    description: "For maximum growth",
    rate: "3%",
  },
];

export function PlansSection() {
  return (
    <section
      id="plans"
      className="scroll-mt-20 bg-surface py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Our Investment Plans
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Flexible Plans For Every Investor
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homePlans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col items-center rounded-2xl border border-border-subtle bg-white px-6 py-8 text-center shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                <plan.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">
                {plan.name}
              </h3>
              <p className="mt-1.5 text-sm text-foreground/55">
                {plan.description}
              </p>
              <p className="mt-5 font-display text-2xl font-extrabold text-navy">
                {plan.rate}
              </p>
              <p className="mt-0.5 text-xs font-medium text-foreground/50">
                Daily Returns
              </p>
              <Button href="/contact" size="sm" variant="outline" className="mt-6 w-full">
                Invest Now
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

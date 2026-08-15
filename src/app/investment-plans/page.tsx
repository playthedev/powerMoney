import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PlanTabs } from "@/components/plans/plan-tabs";
import { ReturnsCalculator } from "@/components/plans/returns-calculator";
import { ComparisonTable } from "@/components/plans/comparison-table";
import { plans, trustPoints, whyInvestPoints } from "@/data/plans";

export const metadata: Metadata = {
  title: "Our Plans",
  description:
    "Fixed-tenure investment plans with guaranteed monthly returns — choose 12, 24 or 36 months and watch your money grow with Power Money.",
};

export default function InvestmentPlansPage() {
  // PlanTabs is a Client Component — useCases carries lucide icon components
  // (functions), which can't cross the server -> client prop boundary.
  const tabPlans = plans.map(({ useCases: _useCases, ...rest }) => rest);

  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-24 pt-16 sm:pb-32 sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 10%, rgba(26,115,232,0.35), transparent), radial-gradient(50% 40% at 90% 20%, rgba(23,138,76,0.3), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-growth" />
                Our Plans
              </span>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Smart Investment,
                <br />
                <span className="bg-gradient-to-r from-brand via-sky-300 to-growth bg-clip-text text-transparent">
                  Secure Future.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
                Start your investment journey with Power Money and choose a plan that matches
                your goals — from a no-lock-in secure plan to a high-growth plan, all with
                guaranteed monthly returns*.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#plans" size="lg" variant="growth">
                  Choose a Plan
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" size="lg" variant="inverse">
                  Talk to an Advisor
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {trustPoints.map((point) => (
                  <div key={point.label} className="flex flex-col items-start gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-growth">
                      <point.icon className="h-5 w-5" />
                    </span>
                    <p className="text-xs font-medium leading-snug text-white/60">
                      {point.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white/70">Plan Snapshot</p>
                  <span className="rounded-full bg-growth/15 px-2.5 py-1 text-xs font-semibold text-growth">
                    Guaranteed*
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.slug}
                      className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3.5"
                    >
                      <div>
                        <p className="text-sm font-medium text-white/80">{plan.name}</p>
                        <p className="text-xs text-white/40">{plan.monthlyProfit}% every month</p>
                      </div>
                      <p className="font-display text-xl font-bold text-growth">
                        {plan.yearlyProfit}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-border-subtle bg-white p-4 shadow-xl sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-growth-light text-growth-dark">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-foreground/50">Avg. Yearly Returns</p>
                  <p className="text-sm font-semibold text-navy">22% across plans</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-4 hidden items-center gap-3 rounded-2xl border border-border-subtle bg-white p-4 shadow-xl sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-foreground/50">100% Safe</p>
                  <p className="text-sm font-semibold text-navy">RBI-compliant process</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="plans" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Choose a Plan That Suits You"
            title="Flexible plans, attractive fixed returns"
            description="Pick a plan that fits your goal — every plan pays a fixed monthly profit, transferred directly to your bank account."
            className="mx-auto"
          />

          <div className="mt-12">
            <PlanTabs plans={tabPlans} />
          </div>

          <p className="mt-8 text-center text-xs leading-relaxed text-foreground/40">
            *Premature withdrawal terms vary by plan. Investment in financial market products
            is subject to market risks — please read all scheme-related documents carefully.
          </p>
        </Container>
      </section>

      <section id="calculator" className="py-10">
        <Container>
          <ReturnsCalculator />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading align="center" title="Plan Comparison" className="mx-auto" />
          <div className="mt-10">
            <ComparisonTable plans={plans} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading align="center" title="Why Invest With Us?" className="mx-auto" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyInvestPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-border-subtle bg-white p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-growth-light text-growth-dark">
                  <point.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-navy px-8 py-10 text-center sm:flex-row sm:text-left sm:px-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="mt-1.5 text-sm text-white/60">
                Join thousands of smart investors and grow your wealth with Power Money.
              </p>
            </div>
            <Button href="/contact" size="lg" variant="growth" className="shrink-0">
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LeadForm } from "@/components/forms/lead-form";
import { SlidingBanner } from "@/components/plans/sliding-banner";
import { ReturnsCalculator } from "@/components/plans/returns-calculator";
import { ComparisonTable } from "@/components/plans/comparison-table";
import { PlanChartTable } from "@/components/plans/plan-chart-table";
import { PlanUseCases } from "@/components/plans/plan-use-cases";
import { getPlanBySlug, plans, themeClasses } from "@/data/plans";
import { formatINR, cn } from "@/lib/utils";

export function generateStaticParams() {
  return plans.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);
  if (!plan) return { title: "Plan not found" };
  return { title: plan.name, description: plan.about };
}

export default async function PlanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);
  if (!plan) notFound();

  const theme = themeClasses[plan.theme];
  // useCases carries lucide icon components (functions), which can't cross the
  // server -> client prop boundary into SlidingBanner — strip it before passing.
  const { useCases: _useCases, ...bannerPlan } = plan;

  const stats = [
    { label: "Monthly Profit", value: `${plan.monthlyProfit}%` },
    { label: "Tenure", value: plan.tenureLabel },
    { label: "Min. Investment", value: formatINR(plan.minInvestment) },
    { label: "Max. Investment", value: formatINR(plan.maxInvestment) },
  ];

  return (
    <>
      <SlidingBanner plan={bannerPlan} />

      <Container className="py-10 sm:py-14">
        <Link
          href="/investment-plans"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/55 hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          All plans
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                {plan.name}
              </h1>
              <Badge variant={theme.badge}>{plan.yearlyProfit}% Yearly Returns</Badge>
              {plan.popular && <Badge variant="accent">Popular</Badge>}
            </div>
            <p className="mt-1.5 text-sm font-medium text-foreground/50">{plan.hindiSubtitle}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60">
              {plan.about}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-4">
                  <p className="text-xs text-foreground/45">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold text-navy">{stat.value}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-6 p-6">
              <h2 className="font-display text-lg font-bold text-navy">What&apos;s included</h2>
              <ul className="mt-3 space-y-2.5">
                {plan.highlights.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/65">
                    <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", theme.text)} />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="mt-10">
              <h2 className="font-display text-lg font-bold text-navy">Returns Chart</h2>
              <p className="mt-1 text-sm text-foreground/55">
                Illustrative growth of your investment at {plan.monthlyProfit}% monthly profit.
              </p>
              <div className="mt-4">
                <PlanChartTable plan={plan} />
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-lg font-bold text-navy">Who is this for?</h2>
              <div className="mt-4">
                <PlanUseCases plan={plan} />
              </div>
            </div>

            <div id="calculator" className="mt-10">
              <ReturnsCalculator defaultSlug={plan.slug} />
            </div>

            <div className="mt-10">
              <h2 className="font-display text-lg font-bold text-navy">How it compares</h2>
              <div className="mt-4">
                <ComparisonTable plans={plans} highlightSlug={plan.slug} />
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-foreground/40">
              *Guaranteed returns are as per the selected plan. {plan.withdrawal}
              {plan.withdrawalTime ? ` Funds are typically credited ${plan.withdrawalTime.toLowerCase()}.` : ""}{" "}
              Investment in financial market products is subject to market risks — please read
              all scheme-related documents carefully.
            </p>
          </div>

          <div id="apply">
            <Card className="sticky top-24 p-6">
              <h2 className="font-display text-lg font-bold text-navy">
                Start with {plan.name}
              </h2>
              <p className="mt-1.5 text-sm text-foreground/55">
                Share your details and an advisor will help you get started with the {plan.name.toLowerCase()}.
              </p>
              <div className="mt-5">
                <LeadForm defaultInterest={plan.name} submitLabel="Choose This Plan" />
              </div>
            </Card>
          </div>
        </div>
      </Container>

      <section className="bg-surface py-14 sm:py-16">
        <Container>
          <SectionHeading align="center" title="Explore Our Other Plans" className="mx-auto" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {plans
              .filter((p) => p.slug !== plan.slug)
              .map((p) => {
                const pTheme = themeClasses[p.theme];
                return (
                  <Link
                    key={p.slug}
                    href={`/investment-plans/${p.slug}`}
                    className="group rounded-2xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <span
                      className={cn(
                        "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white",
                        pTheme.bg
                      )}
                    >
                      {p.name}
                    </span>
                    <p className={cn("mt-4 font-display text-3xl font-extrabold", pTheme.text)}>
                      {p.yearlyProfit}%
                    </p>
                    <p className="text-xs font-medium text-foreground/50">Yearly Returns</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/55">{p.englishTagline}</p>
                  </Link>
                );
              })}
          </div>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AllocationChart } from "@/components/charts/allocation-chart";
import { LeadForm } from "@/components/forms/lead-form";
import { getPlanBySlug, plans } from "@/data/plans";

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

  const stats = [
    { label: "Goal", value: plan.goal },
    { label: "Horizon", value: plan.horizon },
    { label: "Risk profile", value: plan.riskProfile },
    { label: "Min. investment", value: plan.minInvestment },
  ];

  return (
    <Container className="py-10 sm:py-14">
      <Link
        href="/investment-plans"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/55 hover:text-navy"
      >
        <ArrowLeft className="h-4 w-4" />
        All investment plans
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              {plan.name}
            </h1>
            <Badge variant="brand">{plan.expectedReturns}</Badge>
          </div>
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
            <h2 className="font-display text-lg font-bold text-navy">Asset allocation</h2>
            <AllocationChart data={plan.allocation} />
          </Card>

          <Card className="mt-6 p-6">
            <h2 className="font-display text-lg font-bold text-navy">What&apos;s included</h2>
            <ul className="mt-3 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/65">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-growth" />
                  {f}
                </li>
              ))}
            </ul>
          </Card>

          <p className="mt-6 text-xs leading-relaxed text-foreground/40">
            *Expected returns are illustrative estimates based on historical
            category averages, not guaranteed outcomes. Mutual fund
            investments are subject to market risks. This is not investment
            advice.
          </p>
        </div>

        <div>
          <Card className="sticky top-24 p-6">
            <h2 className="font-display text-lg font-bold text-navy">
              Start with {plan.name}
            </h2>
            <p className="mt-1.5 text-sm text-foreground/55">
              An advisor will walk you through the plan and help you get
              started with a suitable fund combination.
            </p>
            <div className="mt-5">
              <LeadForm defaultInterest={plan.name} submitLabel="Talk to an Advisor" />
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}

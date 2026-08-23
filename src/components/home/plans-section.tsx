import { Container } from "@/components/ui/container";
import { PlanCard } from "@/components/plans/plan-card";
import { plans } from "@/data/plans";

export function PlansSection() {
  return (
    <section
      id="plans"
      className="scroll-mt-20 bg-gradient-to-b from-surface via-white to-surface py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="h-px w-16 bg-border-subtle" />
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Hamare 3 Smart Investment Plans
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/60">
            Teen Smart Plans — Har Niveshak Ke Liye Best Option. Pick a plan that
            fits your goal, every plan pays a fixed monthly profit direct to your
            bank account.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const { useCases: _useCases, ...cardPlan } = plan;
            return (
              <div key={plan.slug} className="relative">
                <span className="absolute -top-3 left-6 z-10 rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Plan {i + 1}
                </span>
                <PlanCard plan={cardPlan} featured={plan.popular} />
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-foreground/40">
          *Premature withdrawal terms vary by plan. Investment in financial market
          products is subject to market risks — please read all scheme-related
          documents carefully.
        </p>
      </Container>
    </section>
  );
}

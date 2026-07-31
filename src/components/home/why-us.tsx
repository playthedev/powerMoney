import { BadgeCheck, LineChart, ShieldCheck, Sparkles } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";

const points = [
  {
    icon: LineChart,
    title: "Clear, jargon-free data",
    description:
      "Every stock, fund and loan is explained in plain language alongside the numbers, so you understand what you're comparing.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-grade security",
    description:
      "Your details are encrypted end-to-end and shared only with the partner you choose to work with — never sold to anyone else.",
  },
  {
    icon: BadgeCheck,
    title: "Unbiased comparisons",
    description:
      "We show you the full picture across categories and providers so you can make an informed decision, not just the highest-paying offer.",
  },
  {
    icon: Sparkles,
    title: "Built for beginners & experts",
    description:
      "Whether it's your first SIP or your fiftieth stock pick, our tools and explainers scale with how much you already know.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why PowerMoney"
          title="Built to help you decide, not to sell to you"
          description="No hidden fees, no fine print tricks — just the information you need, presented well."
          className="[&_h2]:text-white [&_p]:text-white/55"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-growth">
                <point.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

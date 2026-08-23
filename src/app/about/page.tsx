import type { Metadata } from "next";
import { Heart, ShieldCheck, Target, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trustStats } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "PowerMoney helps Indians grow their savings with fixed-tenure investment plans and guaranteed monthly returns.",
};

const values = [
  {
    icon: Target,
    title: "Clarity first",
    description: "We simplify financial data instead of burying it in jargon.",
  },
  {
    icon: ShieldCheck,
    title: "No conflicts, no pressure",
    description: "We're not paid to push any single product — our only job is to inform you.",
  },
  {
    icon: Users,
    title: "Built for every Indian",
    description: "From first-time investors to seasoned traders, our tools scale with you.",
  },
  {
    icon: Heart,
    title: "Long-term trust",
    description: "We measure success by how confident you feel about your decisions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PowerMoney"
        title="Powering your financial future, one clear decision at a time"
        description="PowerMoney was founded to give everyday Indians a single, trustworthy place to research and act on their money decisions — without the pressure of a sales pitch."
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <Card key={v.title} className="flex gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                <v.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
                  {v.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      <section className="border-y border-border-subtle bg-surface py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-foreground/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container id="careers" className="py-14 sm:py-16">
        <SectionHeading
          eyebrow="Careers"
          title="We're building the future of financial clarity"
          description="We're a small, focused team of engineers, designers and financial analysts. If our mission resonates with you, we'd love to hear from you."
        />
        <Button href="/contact" size="lg" className="mt-8">
          Reach out about opportunities
        </Button>
      </Container>
    </>
  );
}

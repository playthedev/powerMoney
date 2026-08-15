import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Leaf, ShieldCheck, TreePine } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui/container";
import { Card, CardHover } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/lead-form";
import { ImpactCalculator } from "@/components/gift-tree/impact-calculator";
import {
  maintenanceIncludes,
  occasions,
  perTreeCost,
  steps,
  treePackages,
} from "@/data/giftATree";
import { formatINR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gift a Tree",
  description:
    "Celebrate birthdays, anniversaries and festivals by gifting a tree in someone's name. We plant and maintain it for 3 years.",
};

const interestOptions = treePackages.map((p) => `${p.trees} Trees`);

export default async function GiftATreePage({
  searchParams,
}: {
  searchParams: Promise<{ trees?: string }>;
}) {
  const { trees } = await searchParams;
  const defaultInterest =
    trees && treePackages.some((p) => p.trees.toString() === trees)
      ? `${trees} Trees`
      : interestOptions[1] ?? interestOptions[0];

  return (
    <>
      <PageHero
        eyebrow="CSR Initiative"
        title="Gift a tree. Grow a legacy."
        description="Celebrate the special days of your life — birthdays, anniversaries, festivals — by planting and gifting a tree in someone's name. We handle the planting, protection and 3 years of maintenance."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#packages" size="lg" variant="growth">
            <TreePine className="h-4 w-4" />
            Choose a Package
          </Button>
          <Button href="#gift-form" size="lg" variant="inverse">
            Gift a Tree Now
          </Button>
        </div>
      </PageHero>

      {/* How it works */}
      <Container className="py-14 sm:py-16">
        <SectionHeading
          eyebrow="How it works"
          title="From your gesture to a growing tree"
          description="A simple, four-step process — no plot of land or gardening experience required."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Card key={step.title} className="p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-growth-light text-sm font-bold text-growth-dark">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/55">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>

      {/* Occasions */}
      <section className="bg-surface py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Occasions"
            title="Every occasion is a reason to plant"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {occasions.map((occasion) => (
              <Card key={occasion.label} className="flex flex-col items-center p-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-growth-light text-growth-dark">
                  <occasion.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-navy">{occasion.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/50">
                  {occasion.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <Container id="packages" className="scroll-mt-20 py-14 sm:py-16">
        <SectionHeading
          eyebrow="Packages"
          title="Pick how many trees to gift"
          description={`Every tree costs ${formatINR(perTreeCost)}, covering planting and 3 years of maintenance.`}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treePackages.map((pkg) => (
            <CardHover
              key={pkg.trees}
              className={`relative flex flex-col items-center p-6 text-center ${
                pkg.popular ? "border-growth ring-1 ring-growth/30" : ""
              }`}
            >
              {pkg.popular && (
                <Badge variant="growth" className="absolute -top-3">
                  Most Gifted
                </Badge>
              )}
              <TreePine className="h-8 w-8 text-growth" />
              <p className="mt-3 font-display text-2xl font-extrabold text-navy">
                {pkg.trees} Trees
              </p>
              <p className="mt-1 text-sm text-foreground/55">
                {formatINR(pkg.price)} total
              </p>
              <Button
                href={`/gift-a-tree?trees=${pkg.trees}#gift-form`}
                size="sm"
                variant={pkg.popular ? "growth" : "outline"}
                className="mt-5 w-full"
              >
                Gift {pkg.trees} Trees
              </Button>
            </CardHover>
          ))}
        </div>

        <Card className="mt-8 p-6">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
            <CheckCircle2 className="h-5 w-5 text-growth" />
            What&apos;s included per tree
          </h3>
          <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {maintenanceIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/65">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-growth" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Container>

      {/* Impact calculator */}
      <section className="bg-surface py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Your impact" title="See what your gift grows into" />
          <div className="mt-10">
            <ImpactCalculator />
          </div>
        </Container>
      </section>

      {/* Tax note */}
      <Container className="py-14 sm:py-16">
        <Card className="flex flex-col items-start gap-4 border-brand/20 bg-brand-light/40 p-6 sm:flex-row sm:items-center">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-navy">
              Eligible for tax benefits
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-foreground/60">
              Contributions towards this initiative are routed to our afforestation
              partners and may qualify for deduction under Section 80G of the
              Income Tax Act. A receipt will be shared once your gift is confirmed.
            </p>
          </div>
        </Card>
      </Container>

      {/* Gift form */}
      <section id="gift-form" className="scroll-mt-20 bg-navy py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-growth">
                <Leaf className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                Gift a tree today
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Share a few details below and our team will confirm your gift,
                the occasion and dedication, and share a certificate once your
                trees are planted.
              </p>
              <p className="mt-6 text-sm text-white/50">
                Prefer to talk first?{" "}
                <Link href="/contact" className="font-semibold text-white underline underline-offset-4">
                  Reach out to our team
                </Link>
                .
              </p>
            </div>

            <Card className="p-6 sm:p-8 lg:col-span-3">
              <LeadForm
                key={defaultInterest}
                defaultInterest={defaultInterest}
                interestOptions={interestOptions}
                submitLabel="Gift These Trees"
              />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}

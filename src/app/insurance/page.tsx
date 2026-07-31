import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { CardHover } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { insurance } from "@/data/insurance";

export const metadata: Metadata = {
  title: "Insurance",
  description:
    "Compare term life, health and motor insurance plans — coverage, premiums and claim settlement ratios explained.",
};

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance"
        title="Understand your cover before you buy"
        description="Compare life, health and motor insurance plans across coverage, premium and claim settlement ratio."
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insurance.map((item) => (
            <CardHover key={item.slug} className="flex flex-col p-6">
              <Badge variant="growth" className="self-start">
                {item.category}
              </Badge>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{item.name}</h3>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/50">Coverage from</span>
                  <span className="font-medium text-navy">{item.coverageFrom}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/50">Premium from</span>
                  <span className="font-medium text-navy">{item.premiumFrom}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/50">Claim settlement</span>
                  <span className="font-medium text-navy">{item.claimSettlement}</span>
                </div>
              </div>

              <ul className="mt-4 flex-1 space-y-2">
                {item.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/60">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-growth" />
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href={`/insurance/${item.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand"
              >
                View details & enquire
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </CardHover>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-foreground/40">
          Insurance is a subject matter of solicitation. Premiums, coverage
          and claim settlement ratios shown are indicative and vary by
          insurer, age and health/asset profile.
        </p>
      </Container>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LeadForm } from "@/components/forms/lead-form";
import { getInsuranceBySlug, insurance } from "@/data/insurance";

export function generateStaticParams() {
  return insurance.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsuranceBySlug(slug);
  if (!item) return { title: "Insurance plan not found" };
  return { title: item.name, description: item.about };
}

export default async function InsuranceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getInsuranceBySlug(slug);
  if (!item) notFound();

  const stats = [
    { label: "Coverage from", value: item.coverageFrom },
    { label: "Premium from", value: item.premiumFrom },
    { label: "Claim settlement", value: item.claimSettlement },
  ];

  return (
    <Container className="py-10 sm:py-14">
      <Link
        href="/insurance"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/55 hover:text-navy"
      >
        <ArrowLeft className="h-4 w-4" />
        All insurance plans
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              {item.name}
            </h1>
            <Badge variant="growth">{item.category}</Badge>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60">
            {item.about}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-4">
                <p className="text-xs text-foreground/45">{stat.label}</p>
                <p className="mt-1 text-sm font-semibold text-navy">{stat.value}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-6 p-6">
            <h2 className="font-display text-lg font-bold text-navy">Why choose this plan</h2>
            <ul className="mt-3 space-y-2.5">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground/65">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-growth" />
                  {h}
                </li>
              ))}
            </ul>
          </Card>

          <p className="mt-6 text-xs leading-relaxed text-foreground/40">
            Insurance is a subject matter of solicitation. Coverage, premium
            and claim settlement figures are indicative and vary by insurer,
            age, health and asset profile.
          </p>
        </div>

        <div>
          <Card className="sticky top-24 p-6">
            <h2 className="font-display text-lg font-bold text-navy">
              Get a quote for {item.name}
            </h2>
            <p className="mt-1.5 text-sm text-foreground/55">
              Share your details and a partner insurance advisor will reach
              out with a personalised quote.
            </p>
            <div className="mt-5">
              <LeadForm defaultInterest={item.name} submitLabel="Get a Quote" />
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}

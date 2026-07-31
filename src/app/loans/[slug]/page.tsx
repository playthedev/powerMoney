import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ListChecks } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LeadForm } from "@/components/forms/lead-form";
import { getLoanBySlug, loans } from "@/data/loans";

export function generateStaticParams() {
  return loans.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loan = getLoanBySlug(slug);
  if (!loan) return { title: "Loan not found" };
  return { title: loan.name, description: loan.about };
}

export default async function LoanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loan = getLoanBySlug(slug);
  if (!loan) notFound();

  const stats = [
    { label: "Interest rate", value: `${loan.rateFrom}% p.a. onwards` },
    { label: "Loan amount", value: `Up to ${loan.maxAmount}` },
    { label: "Tenure", value: loan.tenure },
    { label: "Processing fee", value: loan.processingFee },
  ];

  return (
    <Container className="py-10 sm:py-14">
      <Link
        href="/loans"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/55 hover:text-navy"
      >
        <ArrowLeft className="h-4 w-4" />
        All loans
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              {loan.name}
            </h1>
            <Badge variant="brand">{loan.category}</Badge>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60">
            {loan.about}
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
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
              <CheckCircle2 className="h-5 w-5 text-growth" />
              Highlights
            </h2>
            <ul className="mt-3 space-y-2.5">
              {loan.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground/65">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-growth" />
                  {h}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="mt-6 p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
              <ListChecks className="h-5 w-5 text-brand" />
              Eligibility
            </h2>
            <ul className="mt-3 space-y-2.5">
              {loan.eligibility.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-foreground/65">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {e}
                </li>
              ))}
            </ul>
          </Card>

          <p className="mt-6 text-xs leading-relaxed text-foreground/40">
            Rates and terms are indicative and vary by lender, credit profile
            and loan amount. Final approval and terms rest with the lending
            partner.
          </p>
        </div>

        <div>
          <Card className="sticky top-24 p-6">
            <h2 className="font-display text-lg font-bold text-navy">Apply for {loan.name}</h2>
            <p className="mt-1.5 text-sm text-foreground/55">
              Share your details and our loan desk will match you with
              suitable lenders — no fee, no obligation.
            </p>
            <div className="mt-5">
              <LeadForm defaultInterest={loan.name} submitLabel="Apply Now" />
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}

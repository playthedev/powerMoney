import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { CardHover } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Plain-language explainers on investing, credit and insurance basics to help you make informed money decisions.",
};

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Financial concepts, explained simply"
        description="No jargon, no fine print tricks — just clear explainers to help you understand what you're comparing."
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/learn/${article.slug}`} className="group">
              <CardHover className="flex h-full flex-col p-6">
                <Badge variant="brand" className="self-start">
                  {article.category}
                </Badge>
                <h3 className="mt-4 font-display text-base font-bold leading-snug text-navy">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/55">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-foreground/45">
                  <span>{article.readTime}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-brand">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </CardHover>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

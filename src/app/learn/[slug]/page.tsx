import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <Container className="max-w-3xl py-10 sm:py-14">
      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/55 hover:text-navy"
      >
        <ArrowLeft className="h-4 w-4" />
        All articles
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <Badge variant="brand">{article.category}</Badge>
        <span className="text-xs text-foreground/45">{article.readTime}</span>
      </div>

      <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-8 space-y-5">
        {article.content.map((para, i) => (
          <p key={i} className="text-base leading-relaxed text-foreground/70">
            {para}
          </p>
        ))}
      </div>
    </Container>
  );
}

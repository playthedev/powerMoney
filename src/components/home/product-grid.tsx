import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { CardHover } from "@/components/ui/card";
import { productLinks } from "@/data/nav";

export function ProductGrid() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What you can do here"
          title="One place to research every money decision"
          description="From daily market moves to long-term loans and cover, compare options clearly before you decide."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productLinks.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <CardHover className="flex h-full flex-col p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">
                  {item.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/55">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Explore
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </CardHover>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/container";
import { trustStats } from "@/data/testimonials";

export function StatsStrip() {
  return (
    <section className="border-y border-border-subtle bg-surface py-12">
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
  );
}

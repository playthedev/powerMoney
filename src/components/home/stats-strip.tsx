import { ClipboardCheck, IndianRupee, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { trustStats } from "@/data/testimonials";

const icons = [Users, IndianRupee, TrendingUp, ClipboardCheck];

export function StatsStrip() {
  return (
    <section className="border-y border-border-subtle bg-surface py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {trustStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={stat.label} className="flex items-center justify-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-foreground/55 sm:text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

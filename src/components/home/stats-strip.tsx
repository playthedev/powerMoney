import { ClipboardCheck, IndianRupee, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { trustStats } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const stats = [
  { icon: Users, bg: "bg-brand-light", text: "text-brand" },
  { icon: IndianRupee, bg: "bg-growth-light", text: "text-growth-dark" },
  { icon: TrendingUp, bg: "bg-accent-light", text: "text-accent-dark" },
  { icon: ClipboardCheck, bg: "bg-danger-light", text: "text-danger" },
];

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border-subtle bg-gradient-to-r from-brand-light/40 via-white to-growth-light/40 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {trustStats.map((stat, i) => {
            const { icon: Icon, bg, text } = stats[i];
            return (
              <div key={stat.label} className="flex items-center justify-center gap-3">
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                    bg,
                    text
                  )}
                >
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

import { CheckCircle2, IndianRupee, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { trustStats } from "@/data/testimonials";

const icons = [Users, IndianRupee, TrendingUp, CheckCircle2];

const stats = trustStats.map((stat, i) => ({ ...stat, icon: icons[i] }));

export function StatsStrip() {
  return (
    <section className="bg-navy py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <stat.icon className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-white/50 sm:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

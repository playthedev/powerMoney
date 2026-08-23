import { CheckCircle2, Star, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { trustStats } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const avatarColors = [
  "bg-brand-light text-brand",
  "bg-growth-light text-growth-dark",
  "bg-accent-light text-accent-dark",
  "bg-danger-light text-danger",
  "bg-violet-light text-violet-dark",
  "bg-navy-light text-white",
  "bg-brand-light text-brand",
  "bg-growth-light text-growth-dark",
];

export function TrustStrip() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="h-px w-16 bg-border-subtle" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Bharosa Hazaaron Niveshakon Ka
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {avatarColors.map((color, i) => (
              <span
                key={i}
                className={cn(
                  "relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-white shadow-sm",
                  color
                )}
              >
                <User className="h-6 w-6 fill-current" />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-growth text-white">
                  <CheckCircle2 className="h-3 w-3" />
                </span>
              </span>
            ))}
          </div>

          <div className="text-center">
            <p className="font-display text-2xl font-extrabold text-navy">
              {trustStats[0].value}
            </p>
            <p className="text-sm text-foreground/55">{trustStats[0].label}</p>
            <div className="mt-1.5 flex justify-center gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

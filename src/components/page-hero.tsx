import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-navy py-16 sm:py-20", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(50% 60% at 15% 0%, rgba(36,101,169,0.35), transparent), radial-gradient(40% 50% at 90% 100%, rgba(239,195,95,0.14), transparent)",
        }}
      />
      <Container className="relative">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}

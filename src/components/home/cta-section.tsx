import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-dark to-navy px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Talk to an advisor about your financial goals
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              Share a few details and our team will get in touch — no cost,
              no obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg" variant="inverse">
                Request a Callback
              </Button>
              <Button href="/calculators" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                Try our Calculators
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

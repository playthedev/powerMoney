import { Headset, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HelpCtaBar() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="flex flex-col gap-8 rounded-3xl bg-navy px-8 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-growth">
              <Headset className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Need Help?</p>
              <p className="mt-0.5 text-sm text-white/50">
                Hamari team aapki madad ke liye hamesha tayyar hai.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl bg-growth px-6 py-5 text-center lg:flex-1 lg:mx-4">
            <p className="font-display text-lg font-bold text-white">
              Aaj Hi Investment Shuru Karein
            </p>
            <p className="text-sm text-white/80">Sahi Plan Chunein, Secure Future Banayein</p>
            <Button href="/contact" size="lg" variant="inverse" className="mt-1 text-navy">
              Invest Now
            </Button>
          </div>

          <div className="flex flex-col gap-2.5 text-sm text-white/70">
            <a href="tel:+911800123456" className="flex items-center gap-2.5 hover:text-white">
              <Phone className="h-4 w-4 shrink-0 text-growth" />
              1800-123-456
            </a>
            <a href="mailto:support@powermoney.in" className="flex items-center gap-2.5 hover:text-white">
              <Mail className="h-4 w-4 shrink-0 text-growth" />
              support@powermoney.in
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

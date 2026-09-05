import { ArrowRight, Headset, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HelpCtaBar() {
  return (
    <section className="bg-[#f7f8fa] py-14 sm:py-16">
      <Container>
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-white/10 bg-shell px-7 py-8 shadow-xl shadow-shell/10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(38% 100% at 100% 0%, rgba(36,101,169,0.3), transparent), radial-gradient(28% 80% at 0% 100%, rgba(239,195,95,0.13), transparent)" }} />
          <div className="relative flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent"><Headset className="h-7 w-7" /></span>
            <div><p className="text-lg font-bold text-white">Need Help?</p><p className="mt-1 text-sm text-white/60">Our team is always ready to help you.</p></div>
          </div>
          <div className="relative flex flex-col items-center gap-2 border-y border-white/10 px-6 py-5 text-center lg:mx-4 lg:flex-1 lg:border-x lg:border-y-0 lg:py-1">
            <p className="font-display text-xl font-bold text-white">Start Investing Today</p>
            <p className="text-sm text-white/60">Choose the right plan, secure your future</p>
            <Button href="/contact" size="lg" variant="accent" className="mt-3 min-w-40 text-navy">Invest Now <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="relative flex min-w-fit flex-col gap-3 text-sm text-white/70">
            <a href="tel:+911800123456" className="flex items-center gap-2.5 transition-colors hover:text-white"><Phone className="h-4 w-4 shrink-0 text-accent" />1800-123-456</a>
            <a href="mailto:support@powermoney.in" className="flex items-center gap-2.5 transition-colors hover:text-white"><Mail className="h-4 w-4 shrink-0 text-accent" />support@powermoney.in</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

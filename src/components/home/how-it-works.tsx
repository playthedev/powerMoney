import { Clock3, Eye, Landmark, Leaf, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const points = [
  {
    icon: Clock3,
    title: "On-Time Monthly Transfer",
    description: "Profit hits your bank account the same day, every single month.",
    bg: "bg-brand/15",
    text: "text-brand",
  },
  {
    icon: Eye,
    title: "100% Transparent Process",
    description: "Clear terms and monthly statements — track every rupee you've invested.",
    bg: "bg-accent/15",
    text: "text-accent",
  },
  {
    icon: ShieldCheck,
    title: "Koi Hidden Charges Nahi",
    description: "What we quote is what you get. No fine print, no surprise deductions.",
    bg: "bg-danger/15",
    text: "text-danger",
  },
  {
    icon: Landmark,
    title: "Aapka Paisa, Aapka Adhikar",
    description: "Withdraw as per your plan's terms — your money stays your decision.",
    bg: "bg-growth/15",
    text: "text-growth",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 relative overflow-hidden bg-navy py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(45% 40% at 90% 0%, rgba(23,138,76,0.25), transparent), radial-gradient(40% 35% at 0% 100%, rgba(26,115,232,0.22), transparent), radial-gradient(30% 30% at 60% 40%, rgba(242,183,5,0.12), transparent)",
        }}
      />
      <Landmark className="pointer-events-none absolute -right-16 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 text-white/[0.03]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-growth">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Har Mahine Profit, Seedha Aapke Account Mein!
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/55">
              Pura Bharosa, Puri Transparency — har mahine ka profit aapke bank
              account mein samay par transfer hota hai.
            </p>

            {/* phone mockup */}
            <div className="relative mt-10 w-fit">
              <div className="w-52 rounded-[2rem] border-4 border-white/15 bg-navy-light p-3 shadow-2xl shadow-black/40">
                <div className="mx-auto h-1 w-10 rounded-full bg-white/20" />
                <div className="mt-4 rounded-2xl bg-white/[0.06] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-growth/15 text-growth">
                    <Leaf className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs text-white/50">Profit Received</p>
                  <p className="font-display text-2xl font-bold text-white">₹9,000</p>
                </div>
                <div className="mt-3 h-2 w-3/4 rounded-full bg-white/10" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", point.bg, point.text)}>
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/50">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

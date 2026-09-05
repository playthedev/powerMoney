import { Clock3, Eye, Landmark, Leaf, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const points = [
  { icon: Clock3, title: "On-Time Monthly Transfer", description: "Profit hits your bank account the same day, every single month.", bg: "bg-brand/15", text: "text-[#2f86d5]" },
  { icon: Eye, title: "100% Transparent Process", description: "Clear terms and monthly statements — track every rupee you've invested.", bg: "bg-accent/15", text: "text-accent" },
  { icon: ShieldCheck, title: "No Hidden Charges", description: "What we quote is what you get. No fine print, no surprise deductions.", bg: "bg-red-500/15", text: "text-red-400" },
  { icon: Landmark, title: "Your Money, Your Choice", description: "Withdraw as per your plan's terms — your money stays your decision.", bg: "bg-brand/15", text: "text-[#2f86d5]" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-20 overflow-hidden bg-shell py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: "radial-gradient(45% 45% at 100% 0%, rgba(36,101,169,0.2), transparent), radial-gradient(38% 45% at 0% 100%, rgba(36,101,169,0.16), transparent)" }} />
      <Landmark className="pointer-events-none absolute -right-16 top-1/2 h-[27rem] w-[27rem] -translate-y-1/2 text-white/[0.035]" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2f86d5]">How It Works</p>
            <h2 className="mt-4 max-w-md font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">Monthly Profit, Straight To Your Account</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/60">Complete trust, full transparency — your monthly profit is transferred to your bank account right on time, every month.</p>
            <div className="relative mt-10 w-fit">
              <div className="w-52 rounded-[2rem] border-4 border-white/20 bg-[#082743] p-3 shadow-2xl shadow-black/30">
                <div className="mx-auto h-1 w-10 rounded-full bg-white/20" />
                <div className="mt-4 rounded-2xl bg-white/[0.06] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-[#2f86d5]"><Leaf className="h-5 w-5" /></span>
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
              <article key={point.title} className="min-h-44 rounded-xl border border-white/15 bg-white/[0.045] p-6 shadow-sm shadow-black/10 transition-colors hover:border-accent/40 hover:bg-white/[0.065]">
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", point.bg, point.text)}><point.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-sm font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/55">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

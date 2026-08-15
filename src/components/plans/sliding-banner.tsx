"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn, formatINR } from "@/lib/utils";
import { themeClasses, type FixedPlan } from "@/data/plans";

export function SlidingBanner({ plan }: { plan: Omit<FixedPlan, "useCases"> }) {
  const theme = themeClasses[plan.theme];
  const isSip = plan.tableType === "sip3year";
  const sampleAmount = Math.max(plan.minInvestment, isSip ? 5000 : 100000);
  const samplePayout = Math.round((sampleAmount * plan.monthlyProfit) / 100);

  const slides = React.useMemo(
    () => [
      {
        icon: TrendingUp,
        eyebrow: plan.popular ? "Most Popular Plan" : "Fixed Return Plan",
        title: `${plan.yearlyProfit}% Yearly Returns${isSip ? ` Over ${plan.tenureLabel}` : ""}`,
        description: `Invest with Power Money and earn a fixed ${plan.monthlyProfit}% every month, paid directly to your bank account.`,
      },
      {
        icon: Wallet,
        eyebrow: "Monthly Payouts",
        title: `${formatINR(sampleAmount)} → ${formatINR(samplePayout)}/mo`,
        description: isSip
          ? `On a ${formatINR(sampleAmount)} monthly SIP, you earn roughly ${formatINR(
              samplePayout
            )} in profit that very month — and it keeps compounding every year.`
          : `On a ${formatINR(sampleAmount)} investment, you earn ${formatINR(
              samplePayout
            )} every month — transferred directly to your bank account, on time, every time.`,
      },
      {
        icon: ShieldCheck,
        eyebrow: "Safe & Transparent",
        title: "100% Safe. Fully Transparent.",
        description:
          "No hidden charges, no fine print. Track every rupee with monthly statements and a dedicated support team.",
      },
    ],
    [plan, isSip, sampleAmount, samplePayout]
  );

  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  const goTo = React.useCallback(
    (next: number) => {
      setDirection(next > index || (index === slides.length - 1 && next === 0) ? 1 : -1);
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [index, slides.length]
  );

  React.useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), 5000);
    return () => clearInterval(timer);
  }, [index, goTo]);

  const slide = slides[index];

  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br py-20 sm:py-28", theme.gradient)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative">
        <p className="mb-3 text-sm font-semibold text-white/60">{plan.hindiTagline}</p>
        <div className="flex min-h-[220px] items-center overflow-hidden sm:min-h-[240px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full"
            >
              <div className="flex max-w-2xl flex-col gap-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/85 ring-1 ring-white/15">
                  <slide.icon className="h-3.5 w-3.5" />
                  {slide.eyebrow}
                </span>
                <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  {slide.title}
                </h1>
                <p className="max-w-lg text-base leading-relaxed text-white/70">
                  {slide.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Button href="#calculator" size="lg" variant="inverse">
                    Calculate My Returns
                  </Button>
                  <Button href="#apply" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                    Choose This Plan
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          <button
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}

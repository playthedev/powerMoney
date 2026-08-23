"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HeartHandshake, IndianRupee, Landmark, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { themeClasses, plans } from "@/data/plans";
import { cn } from "@/lib/utils";

const trustIcons = [
  {
    icon: ShieldCheck,
    title: "100% Safe",
    subtitle: "Aapka Paisa Pura Surakshit",
    bg: "bg-brand-light",
    text: "text-brand",
  },
  {
    icon: HeartHandshake,
    title: "100% Trusted",
    subtitle: "Bharosa Hamara Vada Pakka",
    bg: "bg-danger-light",
    text: "text-danger",
  },
  {
    icon: IndianRupee,
    title: "Monthly Profit",
    subtitle: "Har Mahine Profit Aapke Account Mein",
    bg: "bg-accent-light",
    text: "text-accent-dark",
  },
  {
    icon: TrendingUp,
    title: "Big Returns",
    subtitle: "Smart Plans, Bada Fayda",
    bg: "bg-growth-light",
    text: "text-growth-dark",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(55% 45% at 15% 0%, rgba(26,115,232,0.08), transparent), radial-gradient(45% 40% at 90% 15%, rgba(23,138,76,0.1), transparent)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-growth-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-growth-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-growth" />
              Smart Investment, Secure Future
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.2rem]">
              Aaj Invest Karein,
              <br />
              <span className="text-growth">Kal Secure Future Payein</span>
            </h1>

            <p className="mt-5 text-base font-semibold text-brand sm:text-lg">
              — Kam Invest Karo, Zyada Profit Pao! —
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {trustIcons.map((item) => (
                <div key={item.title} className="flex flex-col items-start gap-2.5">
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl",
                      item.bg,
                      item.text
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-snug text-foreground/50">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Invest Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#plans" size="lg" variant="outline">
                Our Plans
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl border border-border-subtle bg-gradient-to-br from-brand-light via-white to-growth-light p-6 pb-8 shadow-2xl shadow-slate-900/10 sm:pb-28">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-navy/70">Hamare Plans</p>
                <span className="rounded-full bg-growth/15 px-2.5 py-1 text-xs font-semibold text-growth-dark">
                  Guaranteed*
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {plans.map((plan) => {
                  const theme = themeClasses[plan.theme];
                  return (
                    <div
                      key={plan.slug}
                      className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3.5"
                    >
                      <div>
                        <p className="text-sm font-medium text-navy">{plan.name}</p>
                        <p className="text-xs text-foreground/45">{plan.monthlyProfit}% every month</p>
                      </div>
                      <p className={cn("font-display text-xl font-bold", theme.text)}>
                        {plan.yearlyProfit}%
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-border-subtle bg-white p-4 shadow-xl sm:flex"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                <Landmark className="h-5 w-5" />
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-xs text-foreground/50">Monthly Profit Transfer</p>
                  <CheckCircle2 className="h-3.5 w-3.5 text-growth" />
                </div>
                <p className="font-display text-lg font-bold text-navy">₹9,000</p>
                <p className="text-[11px] text-foreground/45">Har mahine bank account mein</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

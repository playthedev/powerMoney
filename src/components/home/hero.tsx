"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, ShieldCheck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-28 pt-16 sm:pb-36 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(26,115,232,0.35), transparent), radial-gradient(50% 40% at 85% 30%, rgba(23,138,76,0.3), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-growth" />
              Trusted by 12L+ Indians to research their money
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Every rupee decision,
              <br />
              <span className="bg-gradient-to-r from-brand via-sky-300 to-growth bg-clip-text text-transparent">
                made with clarity.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
              Research stocks and mutual funds, compare loans and insurance,
              and plan your goals with calculators built for Indian investors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/stocks" size="lg" variant="growth">
                Explore Markets
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" size="lg" variant="inverse">
                Talk to an Advisor
              </Button>
            </div>

            <div className="mt-10 hidden max-w-lg items-center gap-2 rounded-2xl border border-white/15 bg-white/5 p-2 pl-4 backdrop-blur sm:flex">
              <Search className="h-4 w-4 shrink-0 text-white/40" />
              <input
                placeholder="Search stocks, mutual funds, loans…"
                className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <Button size="sm">Search</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white/70">
                  Your Watchlist
                </p>
                <span className="rounded-full bg-growth/15 px-2.5 py-1 text-xs font-semibold text-growth">
                  +2.4% today
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { name: "NIFTY 50", value: "24,812.35", change: "+1.18%", up: true },
                  { name: "SENSEX", value: "81,540.20", change: "+1.02%", up: true },
                  { name: "Reliance Ind.", value: "2,952.40", change: "+1.17%", up: true },
                  { name: "HDFC Bank", value: "1,687.90", change: "-0.32%", up: false },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-white/80">
                      {row.name}
                    </span>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-white">
                        {row.value}
                      </p>
                      <p
                        className={
                          row.up
                            ? "text-xs font-medium text-growth"
                            : "text-xs font-medium text-red-400"
                        }
                      >
                        {row.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border-subtle bg-white p-4 shadow-xl sm:flex sm:items-center sm:gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
                <Wallet className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-foreground/50">SIP Calculator</p>
                <p className="text-sm font-semibold text-navy">Plan your goal</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -top-6 -right-4 hidden rounded-2xl border border-border-subtle bg-white p-4 shadow-xl sm:flex sm:items-center sm:gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-growth-light text-growth-dark">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-foreground/50">Insurance</p>
                <p className="text-sm font-semibold text-navy">Compare plans</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

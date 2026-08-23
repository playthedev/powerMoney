"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HeartHandshake, IndianRupee, Landmark, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const bannerSlides = [
  { src: "/hero-banner-1.jpg", alt: "Indian rupee currency notes" },
  { src: "/hero-banner-2.jpg", alt: "Stacked gold coins" },
  { src: "/hero-banner-3.jpg", alt: "Gold coins closeup" },
];

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
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % bannerSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20">
              <AnimatePresence>
                <motion.div
                  key={slide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={bannerSlides[slide].src}
                    alt={bannerSlides[slide].alt}
                    fill
                    priority={slide === 0}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-growth-dark backdrop-blur">
                Guaranteed Returns*
              </span>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {bannerSlides.map((s, i) => (
                  <button
                    key={s.src}
                    aria-label={`Show slide ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === slide ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                    )}
                  />
                ))}
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

import Image from "next/image";
import { Clock3, Eye, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const points = [
  { icon: Eye, title: "100% Transparent" },
  { icon: ShieldCheck, title: "Secure Investments" },
  { icon: Users, title: "Expert Management" },
  { icon: Clock3, title: "Timely Returns" },
];

const investorAvatars = [
  { src: "/avatar-1.jpg", position: "object-[50%_18%]" },
  { src: "/avatar-2.jpg", position: "object-[62%_16%]" },
  { src: "/avatar-3.jpg", position: "object-[55%_22%]" },
  { src: "/avatar-4.jpg", position: "object-[50%_18%]" },
  { src: "/avatar-5.jpg", position: "object-[50%_12%]" },
];

export function AboutTrust() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              About Power Money
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
              A Platform Built On <span className="text-brand">Trust</span>
              <br />
              And <span className="text-brand">Transparency</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/60">
              Power Money is an investment company that helps you grow your
              money with safe and smart investment opportunities. We are
              committed to transparency, trust and timely returns.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {points.map((point) => (
                <div key={point.title} className="flex flex-col items-start gap-2.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-bold leading-snug text-navy">
                    {point.title}
                  </p>
                </div>
              ))}
            </div>

            <Button href="/about" size="lg" className="mt-9">
              Know More About Us
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20">
              <Image
                src="/about-handshake.jpg"
                alt="Power Money advisor shaking hands with an investor"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-10 left-1/2 w-[94%] -translate-x-1/2 rounded-2xl border border-border-subtle bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold text-navy">
                  Trusted by Thousands of Investors
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div className="flex -space-x-2">
                  {investorAvatars.map((avatar) => (
                    <span
                      key={avatar.src}
                      className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white"
                    >
                      <Image
                        src={avatar.src}
                        alt=""
                        fill
                        sizes="28px"
                        className={`object-cover ${avatar.position}`}
                      />
                    </span>
                  ))}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-accent text-[9px] font-bold text-navy">
                    10K+
                  </span>
                </div>
                <p className="text-xs text-foreground/50">
                  10,000+ Happy Investors and Growing
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

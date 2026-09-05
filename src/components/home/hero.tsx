import { ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const trustIcons = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    subtitle: "Your money is in safe hands",
  },
  {
    icon: Users,
    title: "Trusted by 10,000+",
    subtitle: "Happy investors across India",
  },
  {
    icon: TrendingUp,
    title: "High Returns",
    subtitle: "Better returns for a better future",
  },
];

/** Stacks of ₹ coins rising under a gold trend arrow, over a faint chart grid. */
function CoinGrowthIllustration({ className }: { className?: string }) {
  // x position, number of coins per stack — stacks grow left to right
  const stacks = [
    { x: 60, coins: 4 },
    { x: 150, coins: 6 },
    { x: 240, coins: 8 },
    { x: 330, coins: 11 },
    { x: 420, coins: 14 },
  ];
  const coinRx = 38;
  const coinRy = 11;
  const coinH = 13;
  const baseY = 420;

  return (
    <svg
      viewBox="0 0 560 470"
      role="img"
      aria-label="Stacks of rupee coins growing under a rising trend arrow"
      className={className}
    >
      <defs>
        <linearGradient id="coinTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe082" />
          <stop offset="55%" stopColor="#f2b705" />
          <stop offset="100%" stopColor="#d99b00" />
        </linearGradient>
        <linearGradient id="coinSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b57f00" />
          <stop offset="30%" stopColor="#f2b705" />
          <stop offset="65%" stopColor="#e0a600" />
          <stop offset="100%" stopColor="#a97600" />
        </linearGradient>
        <linearGradient id="arrowGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#f2b705" />
          <stop offset="100%" stopColor="#ffd34d" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f2b705" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#f2b705" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft glow behind the composition */}
      <ellipse cx="300" cy="300" rx="270" ry="200" fill="url(#glow)" />

      {/* faint chart grid + bars in the background */}
      <g opacity="0.14" stroke="#7fb0ff" strokeWidth="1.5">
        {[110, 180, 250, 320, 390].map((y) => (
          <line key={y} x1="30" y1={y} x2="540" y2={y} />
        ))}
      </g>
      <g opacity="0.12" fill="#4a90ff">
        {[
          [470, 150],
          [500, 210],
          [530, 110],
        ].map(([x, h]) => (
          <rect key={x} x={x} y={410 - h} width="18" height={h} rx="4" />
        ))}
      </g>

      {/* rising trend arrow */}
      <path
        d="M40 360 L150 300 L245 322 L360 190 L470 96"
        fill="none"
        stroke="url(#arrowGrad)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M520 62 L462 152 L432 84 Z" fill="url(#arrowGrad)" />

      {/* coin stacks */}
      {stacks.map((stack) => (
        <g key={stack.x}>
          {Array.from({ length: stack.coins }).map((_, i) => {
            const y = baseY - i * coinH;
            return (
              <g key={i}>
                <path
                  d={`M${stack.x - coinRx} ${y} v-${coinH} a${coinRx} ${coinRy} 0 0 0 ${coinRx * 2} 0 v${coinH} a${coinRx} ${coinRy} 0 0 1 -${coinRx * 2} 0 z`}
                  fill="url(#coinSide)"
                />
                <ellipse
                  cx={stack.x}
                  cy={y - coinH}
                  rx={coinRx}
                  ry={coinRy}
                  fill="url(#coinTop)"
                  stroke="#a97600"
                  strokeWidth="1.2"
                  strokeOpacity="0.55"
                />
              </g>
            );
          })}
          {/* rupee mark on the top coin */}
          <text
            x={stack.x}
            y={baseY - (stack.coins - 1) * coinH - coinH + 4}
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#8a6500"
            opacity="0.75"
          >
            ₹
          </text>
        </g>
      ))}

      {/* floating rupee coin */}
      <g>
        <circle cx="497" cy="200" r="34" fill="url(#coinTop)" stroke="#c99400" strokeWidth="2" />
        <circle cx="497" cy="200" r="26" fill="none" stroke="#c99400" strokeWidth="1.5" opacity="0.6" />
        <text
          x="497"
          y="212"
          textAnchor="middle"
          fontSize="30"
          fontWeight="800"
          fill="#8a6500"
        >
          ₹
        </text>
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(45% 55% at 100% 0%, rgba(239,195,95,0.14), transparent), radial-gradient(40% 45% at 0% 100%, rgba(36,101,169,0.18), transparent)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Invest Today
              <br />
              Secure Your
              <br />
              <span className="text-accent">Tomorrow</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
              Power Money is a trusted investment platform where your money
              grows safely with high returns and complete transparency.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" variant="accent">
                Start Investing
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/investment-plans"
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:border-white hover:text-white hover:bg-white/10"
              >
                Explore Plans
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              {trustIcons.map((item) => (
                <div key={item.title} className="flex items-start gap-2.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                    <item.icon className="h-[1.1rem] w-[1.1rem]" />
                  </span>
                  <div className="min-w-0">
                    <p className="whitespace-nowrap text-[13px] font-bold text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/45">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <CoinGrowthIllustration className="h-auto w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}

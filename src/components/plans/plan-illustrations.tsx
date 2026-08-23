import { cn } from "@/lib/utils";

// Small flat-style illustrations echoing each plan's personality —
// a savings jar for the SIP plan, a shield for the secure plan, and a
// money bag for the high-growth plan.

export function CoinJarIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={cn("h-24 w-24", className)}>
      <ellipse cx="48" cy="82" rx="26" ry="5" fill="currentColor" opacity="0.08" />
      {/* jar body */}
      <path
        d="M30 38h36v34a10 10 0 0 1-10 10H40a10 10 0 0 1-10-10V38Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M30 38h36v34a10 10 0 0 1-10 10H40a10 10 0 0 1-10-10V38Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* jar lid */}
      <rect x="26" y="28" width="44" height="10" rx="4" fill="currentColor" />
      <rect x="40" y="20" width="16" height="10" rx="3" fill="currentColor" opacity="0.7" />
      {/* coins inside */}
      <ellipse cx="48" cy="52" rx="13" ry="5" fill="currentColor" opacity="0.9" />
      <ellipse cx="48" cy="60" rx="13" ry="5" fill="currentColor" opacity="0.65" />
      <ellipse cx="48" cy="68" rx="13" ry="5" fill="currentColor" opacity="0.4" />
      {/* sprout */}
      <path
        d="M48 20c0-8 8-12 8-12s2 9-4 13c-2 1.2-4 0-4 0Z"
        fill="#178a4c"
      />
      <path
        d="M48 20c0-6-6-9-6-9s-1.5 6.5 3 9.5c1.5 1 3 0 3 0Z"
        fill="#22a75d"
      />
    </svg>
  );
}

export function ShieldCoinsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={cn("h-24 w-24", className)}>
      <ellipse cx="48" cy="82" rx="26" ry="5" fill="currentColor" opacity="0.08" />
      {/* coins behind shield */}
      <ellipse cx="24" cy="60" rx="11" ry="10" fill="currentColor" opacity="0.18" />
      <ellipse cx="72" cy="60" rx="11" ry="10" fill="currentColor" opacity="0.18" />
      <circle cx="24" cy="58" r="10" fill="currentColor" opacity="0.4" />
      <circle cx="72" cy="58" r="10" fill="currentColor" opacity="0.4" />
      {/* shield */}
      <path
        d="M48 14 24 22v20c0 18 10 30 24 34 14-4 24-16 24-34V22L48 14Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M48 14 24 22v20c0 18 10 30 24 34 14-4 24-16 24-34V22L48 14Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text x="48" y="56" textAnchor="middle" fontSize="22" fontWeight="700" fill="currentColor">
        ₹
      </text>
    </svg>
  );
}

export function MoneyBagIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={cn("h-24 w-24", className)}>
      <ellipse cx="48" cy="86" rx="26" ry="5" fill="currentColor" opacity="0.08" />
      {/* coins beside bag */}
      <circle cx="18" cy="72" r="8" fill="currentColor" opacity="0.35" />
      <circle cx="78" cy="68" r="9" fill="currentColor" opacity="0.35" />
      {/* bag body */}
      <path
        d="M48 24c-5 0-8 5-8 10-12 6-20 20-20 32 0 16 12.5 26 28 26s28-10 28-26c0-12-8-26-20-32 0-5-3-10-8-10Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M48 24c-5 0-8 5-8 10-12 6-20 20-20 32 0 16 12.5 26 28 26s28-10 28-26c0-12-8-26-20-32 0-5-3-10-8-10Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* tie band + knot */}
      <ellipse cx="48" cy="34" rx="9" ry="3.5" fill="currentColor" />
      <circle cx="48" cy="24" r="4" fill="currentColor" />
      {/* rupee mark */}
      <text x="48" y="72" textAnchor="middle" fontSize="22" fontWeight="700" fill="currentColor">
        ₹
      </text>
    </svg>
  );
}

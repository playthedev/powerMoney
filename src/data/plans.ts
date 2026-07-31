export type InvestmentPlan = {
  slug: string;
  name: string;
  goal: string;
  horizon: string;
  riskProfile: "Conservative" | "Balanced" | "Growth" | "Aggressive";
  expectedReturns: string;
  minInvestment: string;
  allocation: { label: string; value: number; color: string }[];
  about: string;
  features: string[];
};

export const plans: InvestmentPlan[] = [
  {
    slug: "wealth-builder",
    name: "Wealth Builder Plan",
    goal: "Long-term wealth creation",
    horizon: "7+ years",
    riskProfile: "Growth",
    expectedReturns: "12% – 15% p.a.*",
    minInvestment: "₹5,000/month",
    allocation: [
      { label: "Equity Funds", value: 70, color: "#1a73e8" },
      { label: "Debt Funds", value: 20, color: "#178a4c" },
      { label: "Gold", value: 10, color: "#f2b705" },
    ],
    about:
      "A curated basket of equity-heavy mutual funds for investors with a long horizon who can ride out short-term market swings for higher growth.",
    features: [
      "Quarterly portfolio rebalancing",
      "Dedicated relationship manager",
      "Goal-tracking dashboard",
    ],
  },
  {
    slug: "steady-saver",
    name: "Steady Saver Plan",
    goal: "Capital protection with modest growth",
    horizon: "1–3 years",
    riskProfile: "Conservative",
    expectedReturns: "7% – 9% p.a.*",
    minInvestment: "₹2,000/month",
    allocation: [
      { label: "Debt Funds", value: 75, color: "#178a4c" },
      { label: "Equity Funds", value: 15, color: "#1a73e8" },
      { label: "Gold", value: 10, color: "#f2b705" },
    ],
    about:
      "Designed for investors prioritising safety of capital, ideal for short-term goals or as an emergency fund alternative to savings accounts.",
    features: [
      "Low volatility, high liquidity",
      "Monthly statement & tracking",
      "Easy partial withdrawals",
    ],
  },
  {
    slug: "retirement-shield",
    name: "Retirement Shield Plan",
    goal: "Retirement corpus building",
    horizon: "15+ years",
    riskProfile: "Balanced",
    expectedReturns: "10% – 13% p.a.*",
    minInvestment: "₹3,000/month",
    allocation: [
      { label: "Equity Funds", value: 55, color: "#1a73e8" },
      { label: "Debt Funds", value: 35, color: "#178a4c" },
      { label: "Gold", value: 10, color: "#f2b705" },
    ],
    about:
      "A glide-path portfolio that gradually shifts from growth to safety as you approach retirement, aiming for a comfortable post-retirement income.",
    features: [
      "Auto-rebalancing glide path",
      "Annual retirement readiness review",
      "Systematic Withdrawal Plan (SWP) guidance",
    ],
  },
];

export function getPlanBySlug(slug: string) {
  return plans.find((p) => p.slug === slug);
}

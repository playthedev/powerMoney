export type MutualFund = {
  slug: string;
  name: string;
  amc: string;
  category: string;
  risk: "Low" | "Moderate" | "High" | "Very High";
  nav: number;
  returns1y: number;
  returns3y: number;
  returns5y: number;
  aum: string;
  expenseRatio: number;
  minSip: number;
  rating: number;
  about: string;
  series: number[];
};

function series(base: number, points: number, drift: number, volatility: number) {
  const out: number[] = [];
  let v = base;
  for (let i = 0; i < points; i++) {
    v = v + drift + Math.sin(i / 2.8) * volatility;
    out.push(Math.round(v * 100) / 100);
  }
  return out;
}

export const mutualFunds: MutualFund[] = [
  {
    slug: "growthpath-bluechip-equity",
    name: "GrowthPath Bluechip Equity Fund",
    amc: "GrowthPath Mutual Fund",
    category: "Large Cap Equity",
    risk: "High",
    nav: 84.32,
    returns1y: 18.4,
    returns3y: 15.9,
    returns5y: 14.2,
    aum: "₹28,450 Cr",
    expenseRatio: 0.68,
    minSip: 500,
    rating: 5,
    about:
      "Invests primarily in large, well-established companies with a track record of stable earnings and market leadership.",
    series: series(78, 20, 0.35, 1.1),
  },
  {
    slug: "summit-flexicap",
    name: "Summit Flexicap Fund",
    amc: "Summit Asset Management",
    category: "Flexi Cap Equity",
    risk: "High",
    nav: 56.18,
    returns1y: 21.6,
    returns3y: 17.8,
    returns5y: 16.1,
    aum: "₹14,220 Cr",
    expenseRatio: 0.82,
    minSip: 100,
    rating: 4,
    about:
      "A flexible mandate across large, mid and small cap stocks, actively rotating exposure based on market cycles.",
    series: series(50, 20, 0.32, 1.4),
  },
  {
    slug: "steadyincome-corporate-bond",
    name: "SteadyIncome Corporate Bond Fund",
    amc: "SteadyIncome Mutual Fund",
    category: "Debt - Corporate Bond",
    risk: "Low",
    nav: 28.9,
    returns1y: 7.6,
    returns3y: 6.9,
    returns5y: 7.1,
    aum: "₹9,860 Cr",
    expenseRatio: 0.42,
    minSip: 500,
    rating: 4,
    about:
      "Invests in high-quality corporate bonds rated AA+ and above, aiming for stable income with low volatility.",
    series: series(27.5, 20, 0.07, 0.08),
  },
  {
    slug: "nextgen-midcap-opportunities",
    name: "NextGen Midcap Opportunities Fund",
    amc: "NextGen Fund House",
    category: "Mid Cap Equity",
    risk: "Very High",
    nav: 112.47,
    returns1y: 26.3,
    returns3y: 19.4,
    returns5y: 17.8,
    aum: "₹11,340 Cr",
    expenseRatio: 0.91,
    minSip: 500,
    rating: 4,
    about:
      "Targets fast-growing mid-sized companies with the potential to become tomorrow's market leaders.",
    series: series(100, 20, 0.55, 2.1),
  },
  {
    slug: "harmony-hybrid-balanced",
    name: "Harmony Hybrid Balanced Advantage Fund",
    amc: "Harmony Mutual Fund",
    category: "Hybrid - Balanced Advantage",
    risk: "Moderate",
    nav: 41.05,
    returns1y: 13.8,
    returns3y: 12.1,
    returns5y: 11.4,
    aum: "₹19,760 Cr",
    expenseRatio: 0.58,
    minSip: 500,
    rating: 5,
    about:
      "Dynamically balances equity and debt allocation based on market valuations to smooth out volatility.",
    series: series(38.5, 20, 0.2, 0.5),
  },
  {
    slug: "horizon-taxsaver-elss",
    name: "Horizon Taxsaver ELSS Fund",
    amc: "Horizon Asset Management",
    category: "ELSS - Tax Saving",
    risk: "High",
    nav: 67.82,
    returns1y: 19.9,
    returns3y: 16.7,
    returns5y: 15.3,
    aum: "₹8,420 Cr",
    expenseRatio: 0.75,
    minSip: 500,
    rating: 4,
    about:
      "An equity-linked savings scheme offering tax deduction under Section 80C with a 3-year lock-in period.",
    series: series(62, 20, 0.29, 1.2),
  },
];

export function getMutualFundBySlug(slug: string) {
  return mutualFunds.find((f) => f.slug === slug);
}

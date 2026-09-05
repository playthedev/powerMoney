import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  ClipboardCheck,
  Headset,
  Landmark,
  Clock3,
  BadgeIndianRupee,
  GraduationCap,
  HeartHandshake,
  Users,
  Home,
  TrendingUp,
  Building2,
} from "lucide-react";

export type PlanTheme = "growth" | "navy" | "accent";
export type TableType = "lumpsum" | "sip3year";

export type LumpsumRow = {
  investment: number;
  monthlyProfit: number;
  yearlyProfit: number;
  total: number;
  isMax?: boolean;
};

export type SipRow = {
  monthly: number;
  year1Invested: number;
  year1Profit: number;
  year1End: number;
  year2Invested: number;
  year2Profit: number;
  year2End: number;
  year3Invested: number;
  year3Profit: number;
  year3End: number;
  maturity: number;
  isMax?: boolean;
};

export type UseCase = { icon: LucideIcon; title: string; points: string[] };

export type FixedPlan = {
  slug: string;
  name: string;
  hindiTagline: string;
  hindiSubtitle: string;
  englishTagline: string;
  monthlyProfit: number;
  yearlyProfit: number;
  minInvestment: number;
  maxInvestment: number;
  tableType: TableType;
  tenureLabel: string;
  payout: string;
  transfer: string;
  withdrawal: string;
  withdrawalTime?: string;
  theme: PlanTheme;
  popular?: boolean;
  about: string;
  highlights: string[];
  useCases: UseCase[];
  totalColumnLabel: string;
  lumpsumRows?: LumpsumRow[];
  sipRows?: SipRow[];
};

export const plans: FixedPlan[] = [
  {
    slug: "jivan-bachat-sip-plan",
    name: "Jivan Bachat SIP Plan",
    hindiTagline: "छोटी बचत, बड़ा बदलाव",
    hindiSubtitle: "आज की बचत, कल का सुरक्षित जीवन",
    englishTagline: "Start small, grow big — a 3-year SIP plan for every dream.",
    monthlyProfit: 1,
    yearlyProfit: 12,
    minInvestment: 1000,
    maxInvestment: 100000,
    tableType: "sip3year",
    tenureLabel: "3 Years",
    payout: "Monthly",
    transfer: "Direct to Bank Account",
    withdrawal: "Easy withdrawal as per plan terms, whenever you need it.",
    theme: "growth",
    popular: true,
    about:
      "Jivan Bachat SIP Plan turns small, regular savings into a big outcome. Invest as little as ₹1,000 a month for 3 years and earn 1% profit every month — 12% a year — with your profits compounding year after year.",
    highlights: [
      "1 saal ka 12% profit",
      "Minimum 3 saal tak ka plan",
      "Har mahine SIP karein, 1 saal baad 12% profit paayein",
      "100% safe & transparent, no hidden charges",
      "Monthly profit transferred directly to your account",
    ],
    useCases: [
      {
        icon: GraduationCap,
        title: "Your Daughter's Education",
        points: ["School fees", "College tuition", "Higher education dreams"],
      },
      {
        icon: Users,
        title: "Secure Future for Elders",
        points: ["Post-retirement financial security", "Health & medical needs", "A respected, dignified life"],
      },
    ],
    totalColumnLabel: "Maturity Amount After 3 Years (₹)",
    sipRows: [
      { monthly: 1000, year1Invested: 12000, year1Profit: 1440, year1End: 13440, year2Invested: 12000, year2Profit: 1613, year2End: 15053, year3Invested: 12000, year3Profit: 1806, year3End: 16859, maturity: 16859 },
      { monthly: 2000, year1Invested: 24000, year1Profit: 2880, year1End: 26880, year2Invested: 24000, year2Profit: 3226, year2End: 30106, year3Invested: 24000, year3Profit: 3612, year3End: 33718, maturity: 33718 },
      { monthly: 5000, year1Invested: 60000, year1Profit: 7200, year1End: 67200, year2Invested: 60000, year2Profit: 8064, year2End: 75264, year3Invested: 60000, year3Profit: 9032, year3End: 84296, maturity: 84296 },
      { monthly: 10000, year1Invested: 120000, year1Profit: 14400, year1End: 134400, year2Invested: 120000, year2Profit: 16128, year2End: 150528, year3Invested: 120000, year3Profit: 18064, year3End: 168592, maturity: 168592 },
      { monthly: 15000, year1Invested: 180000, year1Profit: 21600, year1End: 201600, year2Invested: 180000, year2Profit: 24193, year2End: 225793, year3Invested: 180000, year3Profit: 27097, year3End: 252890, maturity: 252890 },
      { monthly: 20000, year1Invested: 240000, year1Profit: 28800, year1End: 268800, year2Invested: 240000, year2Profit: 32257, year2End: 301057, year3Invested: 240000, year3Profit: 36129, year3End: 337186, maturity: 337186 },
      { monthly: 25000, year1Invested: 300000, year1Profit: 36000, year1End: 336000, year2Invested: 300000, year2Profit: 40322, year2End: 376322, year3Invested: 300000, year3Profit: 45161, year3End: 421483, maturity: 421483 },
      { monthly: 50000, year1Invested: 600000, year1Profit: 72000, year1End: 672000, year2Invested: 600000, year2Profit: 80645, year2End: 752645, year3Invested: 600000, year3Profit: 90322, year3End: 842967, maturity: 842967 },
      { monthly: 75000, year1Invested: 900000, year1Profit: 108000, year1End: 1008000, year2Invested: 900000, year2Profit: 120967, year2End: 1128967, year3Invested: 900000, year3Profit: 135483, year3End: 1264450, maturity: 1264450 },
      { monthly: 100000, year1Invested: 1200000, year1Profit: 144000, year1End: 1344000, year2Invested: 1200000, year2Profit: 161290, year2End: 1505290, year3Invested: 1200000, year3Profit: 180645, year3End: 1685934, maturity: 1685934, isMax: true },
    ],
  },
  {
    slug: "jivan-suraksha-plan",
    name: "Jivan Suraksha Plan",
    hindiTagline: "सुरक्षित निवेश, निश्चित रिटर्न",
    hindiSubtitle: "आज की बचत, कल का सुरक्षित जीवन",
    englishTagline: "Secure investment, guaranteed returns — withdraw anytime, no lock-in.",
    monthlyProfit: 1.5,
    yearlyProfit: 18,
    minInvestment: 50000,
    maxInvestment: 1000000,
    tableType: "lumpsum",
    tenureLabel: "No Lock-in",
    payout: "Monthly",
    transfer: "Direct to Bank Account",
    withdrawal: "Withdraw your full amount + profit anytime — zero lock-in period.",
    withdrawalTime: "Within 72 hours",
    theme: "navy",
    about:
      "Jivan Suraksha is a secure, no-lock-in investment plan that pays a fixed 1.5% profit every month — a steady 18% a year — with the freedom to withdraw your full amount plus profit whenever you need it, no questions asked.",
    highlights: [
      "1 saal ka 18% profit",
      "Har mahine profit aapke Customer Care Account mein transfer ho jata hai",
      "Minimum 3 saal ke liye plan",
      "100% safe & transparent, no hidden charges",
      "Funds credited within 72 hours of withdrawal",
    ],
    useCases: [
      { icon: GraduationCap, title: "Children's Education", points: ["Fund your child's education without worry"] },
      { icon: HeartHandshake, title: "Health & Emergencies", points: ["Stay ready for medical & emergency needs"] },
      { icon: Users, title: "Retirement Security", points: ["A secure, worry-free life after retirement"] },
      { icon: Home, title: "Life Goals", points: ["Fulfil your dreams — a new home, a new car"] },
    ],
    totalColumnLabel: "Total After 12 Months (₹)",
    lumpsumRows: [
      { investment: 50000, monthlyProfit: 750, yearlyProfit: 9000, total: 59000 },
      { investment: 100000, monthlyProfit: 1500, yearlyProfit: 18000, total: 118000 },
      { investment: 200000, monthlyProfit: 3000, yearlyProfit: 36000, total: 236000 },
      { investment: 300000, monthlyProfit: 4500, yearlyProfit: 54000, total: 354000 },
      { investment: 500000, monthlyProfit: 7500, yearlyProfit: 90000, total: 590000 },
      { investment: 750000, monthlyProfit: 11250, yearlyProfit: 135000, total: 885000 },
      { investment: 1000000, monthlyProfit: 15000, yearlyProfit: 180000, total: 1180000, isMax: true },
    ],
  },
  {
    slug: "today-growth-plan",
    name: "Today Growth Plan",
    hindiTagline: "Smart Investment, Secure Future",
    hindiSubtitle: "Grow Today, Secure Tomorrow",
    englishTagline: "Our highest-return plan, built for high-ticket investors.",
    monthlyProfit: 3,
    yearlyProfit: 36,
    minInvestment: 300000,
    maxInvestment: 1500000,
    tableType: "lumpsum",
    tenureLabel: "Flexible",
    payout: "Monthly",
    transfer: "Direct to Bank Account",
    withdrawal: "Withdrawals as per company policy and terms.",
    theme: "accent",
    about:
      "Today Growth Plan is built for investors ready to deploy larger capital for the highest returns in our lineup — a fixed 3% every month, 36% a year, with profit transferred directly to your bank account.",
    highlights: [
      "Har mahine 3% Profit (36% Per Year)",
      "Har mahine profit aapke direct account mein transfer ho jata hai",
      "Minimum 3 saal ke liye plan",
      "100% safe & transparent, no hidden charges",
      "Highest total returns across our entire plan lineup",
    ],
    useCases: [
      { icon: Building2, title: "High-Ticket Investors", points: ["For investors ready to deploy larger capital"] },
      { icon: TrendingUp, title: "Fast-Track Wealth Growth", points: ["The highest returns across our entire plan lineup"] },
    ],
    totalColumnLabel: "Yearly Total Return (₹)",
    lumpsumRows: [
      { investment: 300000, monthlyProfit: 9000, yearlyProfit: 108000, total: 408000 },
      { investment: 500000, monthlyProfit: 15000, yearlyProfit: 180000, total: 680000 },
      { investment: 750000, monthlyProfit: 22500, yearlyProfit: 270000, total: 1020000 },
      { investment: 1000000, monthlyProfit: 30000, yearlyProfit: 360000, total: 1360000 },
      { investment: 1250000, monthlyProfit: 37500, yearlyProfit: 450000, total: 1700000 },
      { investment: 1500000, monthlyProfit: 45000, yearlyProfit: 540000, total: 2040000, isMax: true },
    ],
  },
];

export function getPlanBySlug(slug: string) {
  return plans.find((p) => p.slug === slug);
}

export function calculateReturns(amount: number, plan: FixedPlan) {
  const safeAmount = Math.min(Math.max(amount || 0, plan.minInvestment), plan.maxInvestment);

  if (plan.tableType === "sip3year") {
    const yearlyInvested = safeAmount * 12;
    const year1Profit = Math.round((yearlyInvested * plan.yearlyProfit) / 100);
    const year1End = yearlyInvested + year1Profit;
    const year2Profit = Math.round(year1Profit * (1 + plan.yearlyProfit / 100));
    const year2End = year1End + year2Profit;
    const year3Profit = Math.round(year2Profit * (1 + plan.yearlyProfit / 100));
    const year3End = year2End + year3Profit;
    const totalProfit = year1Profit + year2Profit + year3Profit;
    return {
      safeAmount,
      monthlyPayout: Math.round((safeAmount * plan.monthlyProfit) / 100),
      totalProfit,
      totalValue: year3End,
      totalInvested: yearlyInvested * 3,
    };
  }

  const monthlyPayout = Math.round((safeAmount * plan.monthlyProfit) / 100);
  const totalProfit = Math.round((safeAmount * plan.yearlyProfit) / 100);
  const totalValue = safeAmount + totalProfit;
  return { safeAmount, monthlyPayout, totalProfit, totalValue, totalInvested: safeAmount };
}

export const themeClasses: Record<
  PlanTheme,
  {
    text: string;
    bg: string;
    bgLight: string;
    border: string;
    button: "growth" | "navy" | "accent";
    badge: "growth" | "navy" | "accent";
    gradient: string;
  }
> = {
  growth: {
    text: "text-growth",
    bg: "bg-growth",
    bgLight: "bg-growth-light",
    border: "border-growth/30",
    button: "growth",
    badge: "growth",
    gradient: "from-shell via-navy-light to-shell",
  },
  navy: {
    text: "text-navy",
    bg: "bg-navy",
    bgLight: "bg-navy-light",
    border: "border-navy/25",
    button: "navy",
    badge: "navy",
    gradient: "from-shell via-navy-light to-shell",
  },
  accent: {
    text: "text-accent-dark",
    bg: "bg-accent",
    bgLight: "bg-accent-light",
    border: "border-accent/30",
    button: "accent",
    badge: "accent",
    gradient: "from-shell via-navy-light to-shell",
  },
};

export const trustPoints: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "100% Safe & Secure" },
  { icon: ClipboardCheck, label: "Transparent Process" },
  { icon: BadgeIndianRupee, label: "Guaranteed Returns*" },
  { icon: Headset, label: "24/7 Support" },
];

export const whyInvestPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "100% Safe & Secure",
    description: "Your money is protected with top security and full compliance.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    description: "Clear terms, no hidden charges and full transparency at every step.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Guaranteed Returns*",
    description: "Get assured returns as per the selected plan.",
  },
  {
    icon: Landmark,
    title: "Monthly Payouts",
    description: "Profits are transferred directly to your bank account every month.",
  },
  {
    icon: Headset,
    title: "24/7 Customer Support",
    description: "We are always here to help you at every step.",
  },
  {
    icon: Clock3,
    title: "Easy Withdrawals",
    description: "Withdraw your amount quickly, typically within 72 hours*.",
  },
];

import {
  TrendingUp,
  PiggyBank,
  Landmark,
  ShieldCheck,
  Wallet,
  Calculator,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const productLinks: NavLink[] = [
  {
    label: "Stocks",
    href: "/stocks",
    description: "Live-style market data on NSE/BSE listed companies",
    icon: TrendingUp,
  },
  {
    label: "Mutual Funds",
    href: "/mutual-funds",
    description: "Compare direct plans across every fund house",
    icon: PiggyBank,
  },
  {
    label: "Our Plans",
    href: "/investment-plans",
    description: "Fixed 12/24/36-month plans with guaranteed monthly returns",
    icon: Wallet,
  },
  {
    label: "Loans",
    href: "/loans",
    description: "Personal, home & business loan offers explained",
    icon: Landmark,
  },
  {
    label: "Insurance",
    href: "/insurance",
    description: "Term, health & motor cover, compared simply",
    icon: ShieldCheck,
  },
  {
    label: "Calculators",
    href: "/calculators",
    description: "SIP, EMI, lumpsum & retirement calculators",
    icon: Calculator,
  },
];

export const mainNav: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Products: productLinks.map((l) => ({ label: l.label, href: l.href })),
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Gift a Tree", href: "/gift-a-tree" },
    { label: "Learn Hub", href: "/learn" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/about#careers" },
  ],
  Resources: [
    { label: "SIP Calculator", href: "/calculators#sip" },
    { label: "EMI Calculator", href: "/calculators#emi" },
    { label: "Mutual Fund Screener", href: "/mutual-funds" },
    { label: "Stock Screener", href: "/stocks" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
  ],
};

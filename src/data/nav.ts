import { plans } from "@/data/plans";

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Investment Plans", href: "/investment-plans" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = {
  Plans: [
    ...plans.map((p) => ({ label: p.name, href: `/investment-plans/${p.slug}` })),
    { label: "Compare All Plans", href: "/#plans" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Gift a Tree", href: "/gift-a-tree" },
    { label: "Learn Hub", href: "/learn" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/about#careers" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
  ],
};

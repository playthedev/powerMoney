export type InsuranceProduct = {
  slug: string;
  name: string;
  category: string;
  coverageFrom: string;
  premiumFrom: string;
  claimSettlement: string;
  highlights: string[];
  about: string;
};

export const insurance: InsuranceProduct[] = [
  {
    slug: "term-life-insurance",
    name: "Term Life Insurance",
    category: "Life",
    coverageFrom: "₹1 Crore",
    premiumFrom: "₹600/month",
    claimSettlement: "98.3% ratio",
    highlights: [
      "High cover at low premium",
      "Optional riders for critical illness & accidental death",
      "Tax benefits under Section 80C & 10(10D)",
    ],
    about:
      "Pure protection cover that pays a lump sum to your family in case of an unfortunate event, at some of the lowest premiums in the category.",
  },
  {
    slug: "health-insurance",
    name: "Health Insurance",
    category: "Health",
    coverageFrom: "₹5 Lakh",
    premiumFrom: "₹450/month",
    claimSettlement: "96.7% ratio",
    highlights: [
      "Cashless treatment at 10,000+ hospitals",
      "No-claim bonus up to 100% of sum insured",
      "Covers pre & post hospitalisation expenses",
    ],
    about:
      "Comprehensive individual and family floater plans covering hospitalisation, day-care procedures and critical illness.",
  },
  {
    slug: "motor-insurance",
    name: "Motor Insurance",
    category: "Motor",
    coverageFrom: "IDV based",
    premiumFrom: "₹2,200/year",
    claimSettlement: "95.1% ratio",
    highlights: [
      "Instant policy issuance & renewal",
      "Zero depreciation add-on available",
      "24x7 roadside assistance",
    ],
    about:
      "Third-party and comprehensive cover for cars and two-wheelers, compared across insurers for the best premium.",
  },
];

export function getInsuranceBySlug(slug: string) {
  return insurance.find((i) => i.slug === slug);
}

export type LoanProduct = {
  slug: string;
  name: string;
  category: string;
  rateFrom: number;
  maxAmount: string;
  tenure: string;
  processingFee: string;
  highlights: string[];
  eligibility: string[];
  about: string;
};

export const loans: LoanProduct[] = [
  {
    slug: "personal-loan",
    name: "Personal Loan",
    category: "Unsecured",
    rateFrom: 10.5,
    maxAmount: "₹40 Lakh",
    tenure: "12 – 60 months",
    processingFee: "Up to 2%",
    highlights: [
      "Disbursal in as little as 24 hours",
      "No collateral or guarantor required",
      "Flexible tenure options",
    ],
    eligibility: [
      "Age 21–58 years",
      "Minimum monthly income ₹25,000",
      "CIBIL score of 700+ preferred",
    ],
    about:
      "An unsecured loan for weddings, travel, medical needs or debt consolidation, matched from our network of partner lenders based on your profile.",
  },
  {
    slug: "home-loan",
    name: "Home Loan",
    category: "Secured",
    rateFrom: 8.35,
    maxAmount: "₹5 Crore",
    tenure: "Up to 30 years",
    processingFee: "0.5% – 1%",
    highlights: [
      "Balance transfer with top-up available",
      "Doorstep document pickup",
      "Special rates for women applicants",
    ],
    eligibility: [
      "Age 23–65 years (at loan maturity)",
      "Stable income source, salaried or self-employed",
      "Property should be clear-titled",
    ],
    about:
      "Financing for purchase, construction or renovation of a home, with long tenures designed to keep EMIs manageable.",
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    category: "Unsecured / Secured",
    rateFrom: 11.9,
    maxAmount: "₹75 Lakh",
    tenure: "12 – 48 months",
    processingFee: "Up to 2.5%",
    highlights: [
      "Working capital & term loan options",
      "Minimal documentation for existing businesses",
      "Overdraft facility with select lenders",
    ],
    eligibility: [
      "Business vintage of 2+ years",
      "Minimum annual turnover ₹10 Lakh",
      "Valid business registration & GST",
    ],
    about:
      "Capital for expansion, inventory or working capital needs, sourced from banks and NBFCs suited to your business profile.",
  },
  {
    slug: "loan-against-property",
    name: "Loan Against Property",
    category: "Secured",
    rateFrom: 9.25,
    maxAmount: "₹10 Crore",
    tenure: "Up to 20 years",
    processingFee: "0.5% – 1.5%",
    highlights: [
      "Unlock value from residential or commercial property",
      "Higher loan amounts at lower rates",
      "Use for business or personal needs",
    ],
    eligibility: [
      "Age 25–65 years",
      "Clear property title in applicant's name",
      "Stable, verifiable income",
    ],
    about:
      "A secured loan that lets you borrow against owned property, typically at lower interest rates than unsecured credit.",
  },
];

export function getLoanBySlug(slug: string) {
  return loans.find((l) => l.slug === slug);
}

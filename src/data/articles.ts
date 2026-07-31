export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "what-is-sip-and-how-does-it-work",
    title: "What is a SIP and how does it actually work?",
    category: "Mutual Funds",
    excerpt:
      "Systematic Investment Plans let you invest a fixed amount regularly. Here's how rupee-cost averaging works in your favour.",
    readTime: "5 min read",
    publishedAt: "2026-06-02",
    content: [
      "A Systematic Investment Plan (SIP) is a method of investing a fixed sum in a mutual fund scheme at regular intervals — typically monthly — rather than investing a lump sum at once.",
      "Because you invest the same amount regardless of whether markets are up or down, you automatically buy more units when prices are low and fewer when prices are high. Over time, this averages out your purchase cost, a principle known as rupee-cost averaging.",
      "SIPs also build the habit of disciplined, long-term investing, taking emotion out of the decision of when to invest. Most funds allow SIPs starting from as little as ₹100–₹500 per month.",
      "This article is for educational purposes only and does not constitute investment advice.",
    ],
  },
  {
    slug: "understanding-your-cibil-score",
    title: "Understanding your CIBIL score before you apply for a loan",
    category: "Loans",
    excerpt:
      "Your credit score can make or break a loan application. Learn what goes into it and how to improve it.",
    readTime: "6 min read",
    publishedAt: "2026-05-18",
    content: [
      "A CIBIL score is a three-digit number between 300 and 900 that summarises your credit history. Lenders use it to assess how likely you are to repay a loan on time.",
      "Key factors that influence your score include repayment history, credit utilisation ratio, length of credit history, and the mix of secured versus unsecured credit you hold.",
      "A score above 750 is generally considered good and can help you access lower interest rates. Paying bills on time, keeping credit utilisation below 30%, and avoiding multiple loan enquiries in a short span are simple ways to protect your score.",
      "This article is for educational purposes only and does not constitute financial advice.",
    ],
  },
  {
    slug: "term-vs-endowment-insurance",
    title: "Term insurance vs endowment plans: which one do you need?",
    category: "Insurance",
    excerpt:
      "Not all life insurance is the same. We break down the difference between pure protection and investment-linked cover.",
    readTime: "4 min read",
    publishedAt: "2026-04-27",
    content: [
      "Term insurance offers pure life cover — a large payout to your family if something happens to you, at a relatively low premium, with no maturity benefit if you outlive the term.",
      "Endowment plans combine insurance with a savings component, paying out a maturity benefit if you survive the policy term, but typically at much higher premiums and lower effective cover.",
      "For most people, financial planners recommend a large term cover paired with separate, dedicated investments — since combining insurance and investment in one product rarely optimises either.",
      "This article is for educational purposes only and does not constitute insurance advice.",
    ],
  },
  {
    slug: "how-to-read-a-stock-quote",
    title: "How to read a stock quote like an analyst",
    category: "Stocks",
    excerpt:
      "P/E ratio, 52-week high/low, market cap — what do all these numbers actually tell you about a company?",
    readTime: "7 min read",
    publishedAt: "2026-03-14",
    content: [
      "A stock quote packs a lot of information into a small space. The price and day change tell you current sentiment, but the deeper numbers tell you about the business.",
      "The Price-to-Earnings (P/E) ratio compares a company's share price to its earnings per share, giving a sense of how expensive the stock is relative to its profits. Market capitalisation — price multiplied by total shares outstanding — indicates the company's overall size.",
      "The 52-week high and low show the trading range over the past year, useful context for understanding whether a stock is trading near its historical peak or trough.",
      "This article is for educational purposes only and does not constitute investment advice.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

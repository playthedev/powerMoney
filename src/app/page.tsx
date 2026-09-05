import Link from "next/link";
import { ShieldCheck, Users, Award, ChartNoAxesCombined, BadgeIndianRupee, Clock3, Landmark, HandCoins, Crown, Gem, ChevronRight } from "lucide-react";
import { HowItWorks } from "@/components/home/how-it-works";
import { HelpCtaBar } from "@/components/home/help-cta-bar";
const plans = [
 { icon: HandCoins, name: "Starter Plan", description: "Start small, grow big", rate: "1.5%" },
 { icon: ChartNoAxesCombined, name: "Growth Plan", description: "For steady growth", rate: "2%" },
 { icon: Crown, name: "Premium Plan", description: "Higher returns, greater future", rate: "2.5%" },
 { icon: Gem, name: "Elite Plan", description: "For maximum growth", rate: "3%" },
];
const reviews = [
 { name: "Rahul Sharma", quote: "Power Money is a trusted platform. I am getting regular returns without any problem." },
 { name: "Priya Verma", quote: "Best investment platform with transparent system and great support." },
 { name: "Amit Kumar", quote: "I have invested in premium plan and the returns are beyond my expectations." },
];
export default function Home() {
 return <><div className="reference-home">
 <section className="reference-hero"><div className="hero-art" role="img" aria-label="Gold rupee coin stacks with a rising gold arrow" /><div className="hero-copy">
 <h1>INVEST TODAY<br />SECURE YOUR<br /><span>TOMORROW</span></h1>
 <p>Power Money is a trusted investment platform<br className="desktop-break" /> where your money grows safely with high returns<br className="desktop-break" /> and complete transparency.</p>
 <div className="hero-actions"><Link href="/contact" className="reference-button gold">Start Investing <ChevronRight /></Link><Link href="/investment-plans" className="reference-button outline">Explore Plans</Link></div>
 <div className="hero-benefits">{[{ icon: ShieldCheck, title: "Safe & Secure", text: "Your money is in safe hands" }, { icon: Users, title: "Trusted by 10,000+", text: "Happy investors across India" }, { icon: Award, title: "High Returns", text: "Better returns for a better future" }].map(item => <div key={item.title}><item.icon /><div><strong>{item.title}</strong><span>{item.text}</span></div></div>)}</div>
 </div></section>
 <section className="reference-about" id="why-us"><div className="about-copy"><p className="eyebrow">ABOUT POWER MONEY</p><h2>A Platform Built On <span>Trust</span><br />And <span>Transparency</span></h2><p className="about-description">Power Money is an investment company that helps you grow your money with safe and smart investment opportunities. We are committed to transparency, trust and timely returns.</p>
 <div className="about-points">{[{ icon: Landmark, title: "100% Transparent" }, { icon: ShieldCheck, title: "Secure Investments" }, { icon: HandCoins, title: "Expert Management" }, { icon: Clock3, title: "Timely Returns" }].map(item => <div key={item.title}><item.icon /><strong>{item.title}</strong></div>)}</div>
 <Link href="/about" className="reference-button navy">Know More About Us <ChevronRight /></Link></div>
 <div className="investor-card"><div className="handshake-art" role="img" aria-label="An investor and advisor shaking hands" /><div className="investor-card-body"><ShieldCheck className="investor-shield" /><div><h3>Trusted by Thousands of Investors</h3><div className="investor-faces" role="img" aria-label="Our investor community">{[1,2,3,4,5].map(number => <span key={number} style={{ backgroundImage: `url('/avatar-${number}.jpg')` }} />)}<strong>10K+</strong></div><p>10,000+ Happy Investors and Growing</p></div></div></div>
 </section>
 <section className="reference-plans" id="plans"><p className="eyebrow">OUR INVESTMENT PLANS</p><h2>Flexible Plans For Every Investor</h2><div className="reference-plan-grid">{plans.map(plan => <article className="reference-plan" key={plan.name}><span className="plan-icon"><plan.icon /></span><h3>{plan.name}</h3><p>{plan.description}</p><strong className="plan-rate">{plan.rate}</strong><p>Daily Returns</p><Link className="reference-button" href="/contact">Invest Now</Link></article>)}</div></section>
 <section className="reference-stats" aria-label="Power Money in numbers">{[{ icon: Users, value: "10,000+", text: "Happy Investors" }, { icon: BadgeIndianRupee, value: "₹25CR+", text: "Total Investments" }, { icon: ChartNoAxesCombined, value: "99.8%", text: "On-Time Payouts" }, { icon: Award, value: "100%", text: "Trusted Platform" }].map(item => <div key={item.value}><item.icon /><div><strong>{item.value}</strong><p>{item.text}</p></div></div>)}</section>
 <section className="reference-reviews" id="reviews"><p className="eyebrow">WHAT OUR INVESTORS SAY</p><h2>Trusted By Thousands, Proven By Results</h2><div className="reference-review-grid">{reviews.map((review, i) => <figure key={review.name}><span className={`review-avatar avatar-${i}`} role="img" aria-label={review.name} /><div><div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>{review.quote}</blockquote><figcaption>– {review.name}</figcaption></div></figure>)}</div></section>
 </div><HowItWorks /><HelpCtaBar /></>;
}

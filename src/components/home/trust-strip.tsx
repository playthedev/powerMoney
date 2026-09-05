import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";

const reviews = [
  {
    name: "Rahul Sharma",
    photo: "/avatar-1.jpg",
    position: "object-[50%_18%]",
    quote:
      "Power Money is a trusted platform. I am getting my returns on time without any problem.",
  },
  {
    name: "Priya Verma",
    photo: "/avatar-2.jpg",
    position: "object-[62%_16%]",
    quote:
      "Best investment platform with transparent pricing and great support.",
  },
  {
    name: "Amit Kumar",
    photo: "/avatar-3.jpg",
    position: "object-[55%_22%]",
    quote:
      "I have invested in the premium plan and the returns are beyond my expectations.",
  },
];

export function TrustStrip() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            What Our Investors Say
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Trusted By Thousands, Proven By Results
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex gap-4 rounded-2xl border border-border-subtle bg-white p-6 shadow-sm shadow-slate-900/[0.03]"
            >
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-border-subtle">
                <Image
                  src={review.photo}
                  alt={review.name}
                  fill
                  sizes="48px"
                  className={`object-cover ${review.position}`}
                />
              </span>
              <div>
                <div
                  className="flex gap-0.5 text-accent"
                  aria-label="Rated 5 out of 5"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-2.5 text-sm leading-relaxed text-foreground/70">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-accent-dark">
                  &ndash; {review.name}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

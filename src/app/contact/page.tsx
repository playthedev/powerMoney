import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/forms/lead-form";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the PowerMoney team for questions about our investment plans.",
};

const interestOptions = [
  "General Enquiry",
  ...plans.map((p) => p.name),
  "Gift a Tree",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        description="Questions about a product, feedback on the site, or want to talk to an advisor? Send us a message and we'll get back to you."
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-navy">Get in touch</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">
              Our support team typically responds within 1 business day.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow icon={Phone} label="Call us" value="1800-123-456 (Toll Free)" />
              <ContactRow icon={Mail} label="Email us" value="support@powermoney.in" />
              <ContactRow icon={MapPin} label="Visit us" value="HSR Layout, Bengaluru, India" />
            </div>

            <Card className="mt-8 p-5">
              <p className="text-sm font-semibold text-navy">Business hours</p>
              <p className="mt-1 text-sm text-foreground/55">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
            </Card>
          </div>

          <Card className="p-6 sm:p-8 lg:col-span-3">
            <LeadForm interestOptions={interestOptions} submitLabel="Send Message" />
          </Card>
        </div>
      </Container>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs text-foreground/45">{label}</p>
        <p className="text-sm font-medium text-navy">{value}</p>
      </div>
    </div>
  );
}

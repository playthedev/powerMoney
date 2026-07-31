import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PowerMoney collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Container className="max-w-3xl space-y-6 py-14 text-sm leading-relaxed text-foreground/65 sm:py-16">
        <p>
          This Privacy Policy explains how PowerMoney (&quot;we&quot;,
          &quot;us&quot;) collects, uses and protects information when you
          use this website.
        </p>
        <div>
          <h2 className="font-display text-lg font-bold text-navy">
            Information we collect
          </h2>
          <p className="mt-2">
            When you submit an enquiry or callback request form, we collect
            your name, email address, phone number and any message you
            provide.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-navy">
            How we use your information
          </h2>
          <p className="mt-2">
            Information submitted through our forms is used solely to
            respond to your enquiry, connect you with a relevant advisor or
            partner institution, and improve our services. We do not sell
            your personal information to third parties.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-navy">
            Third-party partners
          </h2>
          <p className="mt-2">
            For loan and insurance enquiries, your details may be shared
            with the relevant partner bank, NBFC or insurer solely to
            process your request. These partners are bound by their own
            privacy and data protection obligations.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-navy">
            Contact us
          </h2>
          <p className="mt-2">
            For any privacy-related questions, reach us at
            support@powermoney.in.
          </p>
        </div>
        <p className="text-xs text-foreground/40">
          This page is a general template and should be reviewed by legal
          counsel before publishing.
        </p>
      </Container>
    </>
  );
}

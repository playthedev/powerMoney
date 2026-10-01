import type { LeadFormValues } from "@/lib/schemas";

// Business WhatsApp number that enquiry details are sent to (click-to-WhatsApp,
// no API/credentials required). Kept distinct from the phone/call number shown
// elsewhere on the site.
export const WHATSAPP_BUSINESS_NUMBER = "919999880667";

export function buildLeadWhatsAppMessage(values: LeadFormValues): string {
  const lines = [
    "*New Enquiry – Power Money*",
    "",
    `*Name:* ${values.name}`,
    `*Phone:* ${values.phone}`,
    `*Email:* ${values.email}`,
  ];

  if (values.city) {
    lines.push(`*City:* ${values.city}`);
  }

  lines.push(`*Interested in:* ${values.interest}`);

  if (values.message) {
    lines.push(`*Message:* ${values.message}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string, number: string = WHATSAPP_BUSINESS_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

import { Resend } from "resend";

type LeadEmailPayload = {
  name: string;
  email: string;
  phone: string;
  city?: string;
  interest: string;
  message?: string;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendLeadEmail(payload: LeadEmailPayload) {
  const resend = getResendClient();
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!resend || !to) {
    console.warn(
      "[email] RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL not configured — lead was received but no email was sent.",
      payload
    );
    return { skipped: true };
  }

  return resend.emails.send({
    from: process.env.LEAD_FROM_EMAIL ?? "PowerMoney <onboarding@resend.dev>",
    to,
    replyTo: payload.email,
    subject: `New enquiry: ${payload.interest} — ${payload.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #0b1220;">
        <h2 style="margin-bottom: 16px;">New website enquiry</h2>
        <table cellpadding="6" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(payload.email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(payload.phone)}</td></tr>
          ${payload.city ? `<tr><td><strong>City</strong></td><td>${escapeHtml(payload.city)}</td></tr>` : ""}
          <tr><td><strong>Interested in</strong></td><td>${escapeHtml(payload.interest)}</td></tr>
          ${payload.message ? `<tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(payload.message)}</td></tr>` : ""}
        </table>
        <p style="margin-top: 20px; color: #667085; font-size: 12px;">
          Sent from the PowerMoney website enquiry form. No payment or transaction was involved.
        </p>
      </div>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

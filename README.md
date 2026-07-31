# PowerMoney

An informational Next.js website for researching and comparing stocks,
mutual funds, loans, insurance and investment plans. The site does **not**
process payments or transactions anywhere — every product page routes
interested visitors to a lead/enquiry form instead.

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4
- Framer Motion (hero/section animations)
- Recharts (price charts, sparklines, allocation pie charts)
- React Hook Form + Zod (form validation)
- Resend (transactional email for lead/contact forms)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Enquiry forms & email

Every "Apply Now" / "Get a Callback" / "Contact Us" form posts to
`/api/lead`, which emails the submission via [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from your Resend account
- `LEAD_NOTIFICATION_EMAIL` — inbox that should receive enquiries
- `LEAD_FROM_EMAIL` — must be on a domain verified in Resend (the
  sandbox `onboarding@resend.dev` address works for testing only)

Without these set, submissions are still validated and accepted, but
no email is sent (a warning is logged instead) — useful for local
development without a Resend account.

## Content

All product data (stocks, mutual funds, loans, insurance, investment
plans, articles) is mock/illustrative data in `src/data/`. Swap these
with real data sources before launch, and update the disclaimers in
`src/app/legal/` with copy reviewed by legal/compliance counsel.

## Branding

The brand mark is extracted from the client-supplied logo artwork:

- `public/logo-icon.png` — icon only, transparent background (used in
  the header/footer via `src/components/logo.tsx`)
- `public/logo-full.png` — full lockup (icon + wordmark + tagline),
  transparent background, dark tagline text (use on light surfaces)
- `public/logo-full-dark.png` — same full lockup with the tagline
  recolored white (use on dark surfaces)
- `src/app/icon.png` / `src/app/apple-icon.png` — favicon and iOS
  home-screen icon, cropped from the same source

If the client provides a fresh export of the logo (e.g. a vector SVG)
later, regenerate these from that file instead for the cleanest edges.

## Deploy

Deploy like any Next.js app (e.g. on [Vercel](https://vercel.com/new)).
Remember to set the environment variables above in your hosting
provider's dashboard.

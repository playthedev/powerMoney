# Visual verification

Reference: 510 x 801 pixels.
Screenshots: home-510.png, home-mobile.png (390px), home-desktop.png (1280px), contact-mobile.png.

Homepage section boundaries match the reference within one pixel. Typography, logo lettering, and Lucide icons are approximations. Artwork and portraits use CSS crops of public/home-reference.png; no original high-resolution artwork was supplied.

Production build and TypeScript passed. Main routes returned HTTP 200 with no browser runtime errors. Checked horizontal overflow at 320, 390, 480, 510, 768, and 1440px. Mobile navigation opens and routes to Contact. Empty form validation works; invalid API payload returns 422. No enquiry was sent.

Email delivery requires RESEND_API_KEY and LEAD_NOTIFICATION_EMAIL (optional LEAD_FROM_EMAIL). The form reports unavailable delivery when these are missing.

Existing supporting investment offerings were preserved. Their monthly-return terms differ from the homepage reference's daily-return plan copy.

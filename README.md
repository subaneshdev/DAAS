# DaaS.media

Next.js App Router, TypeScript and Tailwind CSS agency website. Original black, pink and white design; digital and physical distribution, with real estate as the first specialty.

## Run

Use Node.js 22+ and npm. Run `npm ci`, then `npm run dev`. For production run `npm run build` and `npm start`. Deploy to a host supporting Next.js server routes, not static-file-only hosting.

## Edit

- `src/content/services.ts` and `additional-services.ts`: service copy, SEO metadata, FAQs and related links.
- `src/content/site.ts`: verified brand and email details.
- `src/content/markets.ts`: research targets, not office locations.
- `src/app/page.tsx`: homepage; `real-estate-marketing/page.tsx`: specialty page.
- `src/app/globals.css`: brand styles and responsive layouts.

## Enquiries

The default form validates the brief and opens a prefilled email to contact@daas.media. Users can also download their brief. It does not claim that an email was sent. To enable server-side delivery, copy `.env.example` to `.env.local`, configure `RESEND_API_KEY` and `ENQUIRY_FROM_EMAIL` with a verified sender, and restart/redeploy. Never commit credentials. Test delivery with the business inbox before launch. Add host-level request rate limiting for the enquiry endpoint before enabling public direct delivery.

Set `NEXT_PUBLIC_SITE_URL` to the final canonical origin before building. Set `PREVIEW_NOINDEX=1` for public staging deployments. Vercel preview deployments are also marked noindex. No analytics or advertising pixels are installed.

## Checks

`npm run lint`, `npm run typecheck`, and `npm test`. Start the production server, then run `npm run check:seo` to crawl all 25 public pages, metadata, internal links, sitemap, robots, social image, missing routes and enquiry validation. The crawler does not submit a valid enquiry or send email.

## Launch details still needed

Hosting/domain access, verified email-delivery sender and credentials if direct submission is wanted; optional phone/WhatsApp, legal entity, business address and social profiles. Client work, permissions and approved evidence are needed before publishing case studies or testimonials. None are invented in this site.

See `docs/SEO-PLAN.md` and `docs/MARKET-RESEARCH.md` for page intent and the location expansion criteria.

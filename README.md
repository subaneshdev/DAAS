# DAAS — Distribution as a Service

A complete responsive agency website in black, pink and warm white, with original copy for digital and physical brand distribution. The design draws on the editorial scale and floating navigation of dontmatter.eu, using original DAAS typography, layouts and campaign artwork.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Open the local address printed in your terminal.

## Production build

```sh
npm run build
npm run preview
```

The `dist/` folder is the deployable static website. Use `npm run build` as the hosting build command and `dist` as the output directory. Serve from the root of a domain; a subdirectory deployment requires setting Vite's `base` option. No backend, database or private credentials are required.

## Enquiries

All email links use **contact@daas.media**. The enquiry form validates required fields and opens an email draft containing the brief. The visitor reviews and sends it in their email application. The download option produces a text brief as an alternative. The site does not itself send messages or store leads, and never reports an enquiry as submitted.

To override the email address, copy `.env.example` to `.env` and set `VITE_CONTACT_EMAIL` before building. This address is public client-side configuration; never put secrets in a `VITE_` variable.

For direct form delivery in a later version, connect a mail service or server endpoint with server-side validation, abuse protection and an appropriate privacy notice.

## Content and design

- Brand position: “Get seen. Everywhere.”
- Digital: content, paid media, creators, community, search and email.
- Physical: sampling, product seeding, retail visibility, outdoor media, pop-ups and activations.
- Connected campaigns: launches, cross-channel creative, QR journeys and measurement.
- Physical distribution is framed as marketing distribution. Warehousing and fulfilment are separately scoped.
- Campaign panels are illustrative concepts, explicitly labelled; no client results or endorsements are invented.
- Budget is free text so visitors can specify their own currency.
- Typography is self-hosted DM Sans and Manrope. Font license files are in `public/fonts/`.
- Original campaign mockups use HTML/CSS and SVG, without stock images or external media dependencies.

## Editing

- `src/main.js`: page content, services, examples, dialogs and enquiry flow.
- `src/style.css`: brand palette, layout, motion and responsive styles.
- `index.html`: page title, search description and social metadata.
- `public/favicon.svg`: browser icon.

## Accessibility and behaviour

Semantic headings, skip navigation, labelled fields, native accessible dialogs, keyboard focus return, Escape-to-close, native disclosure panels, visible focus indicators and reduced-motion support are included. Navigation remains available on mobile.

## Launch checklist

1. Confirm final service scope and agency wording.
2. Confirm `contact@daas.media` receives email.
3. Choose hosting and connect the intended domain.
4. Add the final canonical URL and a social preview image after the domain is chosen.
5. Add real case studies and verified client material when available.

Hosting and domain configuration are separate from the local build.

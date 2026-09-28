# Validation — 28 September 2026

- Production build: Next.js 16.3.6 default Turbopack build passed in the repository. TypeScript passed as part of the build. An independent webpack build also passed.
- ESLint: passed with no warnings after configuration cleanup.
- Unit checks: 7 passed, covering content uniqueness and relationships, all 23 research markets, JSON-LD escaping, enquiry validation, honeypot rejection and encoded email handoff.
- Production HTTP crawl: 25 pages and 25 internal destinations passed; unique metadata, one main H1 per page, canonical URLs, Open Graph/Twitter tags, 68 parseable JSON-LD blocks, sitemap, robots, social image, 404 responses and API validation.
- Unconfigured delivery endpoint: confirmed 503 with an explicit email/download fallback. No external email was sent during testing.
- Browser: reviewed desktop homepage and mobile homepage/real-estate layouts; checked 390px and 320px layouts, including service directory and long service title. No document-width overflow on checked pages. Form preselection, invalid-field focus, validation feedback and brief-download status checked interactively.
- Source files and isolated build snapshot compared: identical application, tests and crawler sources.

Not claimed: Lighthouse scores, search rankings, every device/browser combination, live email delivery, domain deployment, full locality research or campaign performance. Live email delivery still requires verified sender credentials and a business-inbox delivery test.

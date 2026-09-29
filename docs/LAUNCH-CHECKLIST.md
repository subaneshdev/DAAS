# Launch and measurement handover

## Ready in source
- 40 indexable HTML pages, including distinct industry scopes, labelled demonstrations, resources and pilot offer.
- Server-rendered content, metadata, canonical URLs, sitemap and structured data.
- Direct file downloads; no signup gate and no fictional lead records.
- Optional self-reported discovery source in enquiry form.
- Email draft/download fallback and an existing server email integration point.

## Business input required
- Hosting provider and domain/DNS access through normal provider controls.
- Final domain variant (default canonical https://daas.media).
- Verified email sender and Resend credentials only through hosting secrets; do not paste secrets into public files.
- Real founder name, biography and optional public profiles. No invented author added.
- Pilot fees, scope/revision terms and availability before offering any engagement.
- Actual in-person service details before assessing Google Business Profile eligibility.

## Production acceptance
1. Deploy this reviewed branch to a Next.js-capable host. A static-file-only host cannot run the enquiry endpoint.
2. Set NEXT_PUBLIC_SITE_URL to the canonical origin, rebuild and connect HTTPS.
3. Use PREVIEW_NOINDEX=1 for staging; remove it for the public production build. Verify both robots and page metadata after deployment.
4. Redirect HTTP and alternate domain variants to the canonical host; test one-hop redirects with the provider.
5. Run TEST_BASE_URL=https://daas.media npm run check:seo against production. The script does not send a valid enquiry.
6. Configure direct email if wanted, apply host-level request rate limits, and send one labelled test to the actual business inbox. Confirm receipt and reply path. Remove the test from lead reporting.
7. Verify the Search Console domain property with its genuine DNS token. Submit /sitemap.xml and inspect key URLs. Record indexing status without treating submission as guaranteed indexing.
8. Run PageSpeed Insights on home, one industry page and contact. Record mobile lab results. Monitor field CWV when enough traffic exists.
9. Establish the dated baseline in organic-baseline.csv; leave unavailable values blank, never zero by assumption.
10. Confirm forms, downloads, menu links and keyboard navigation on the live domain.

No public deployment, Search Console verification, Business Profile creation, external outreach, backlinks or campaign outcomes are implied by the source build.

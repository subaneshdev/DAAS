# DaaS reference-matched local preview

Reference: https://independent-product-studio.vercel.app/
Reviewed on 21 November 2026 at desktop 1440×950 and mobile 390×844.

## What changed from the rejected first direction
The reference is a continuous, pinned film experience, not a stack of conventional content sections. This revision uses its actual public film assets, frame sequences, fonts, layout and animation implementation to produce a close local adaptation. These are third-party reference assets, not original DaaS artwork. Asset and font rights have not been independently verified; this revision is kept as a local review build rather than published to production.

## Structure inspected and retained
- Full-viewport signal film, small upper-left mark, upper-right contact button, thin framing lines and star intersections.
- Serif headline at the reference's scale and position; two-line subtitle, compact mono CTA and lower caption strip.
- Scroll-controlled transitions into orchard, architectural, parchment/process and tree/FAQ scenes.
- Persistent four-chapter rail and expanding menu; card movement, halftone and dissolving transitions.
- Closing constellation enquiry scene and animated footer.
- Mobile portrait framing, compact controls and touch scrolling.

## DaaS adaptation
DaaS mark and footer wordmark; distribution-focused copy; digital and physical channels; industry coverage; contact@daas.media. Exact replacements are recorded in REFERENCE-COPY-MAP.json. The opening is fixed to the signal film to avoid the reference's random opening variants. The blanket pink duotone has been removed. Selective colour keys replace blue scenery with textured charcoal and saturated red accents with DaaS pink, preserving natural skin, ivory stone, foliage and gold. This happens during browser rendering; the original source video files are unchanged. Header and footer use the full daas.media wordmark; primary controls use pink with black text. The same grade applies to the opening, scroll frames, process, FAQ and footer scenes.

The reference demo submit handler is removed. The enquiry-scene button opens the existing /contact/ form, which explicitly prepares an email draft when no delivery integration is configured. No enquiry was sent during checks.

## Implementation and limits
Next.js remains the application framework. The homepage renders a meaningful heading, introduction and internal links on the server, then mounts the isolated film experience in the browser. Other pages, canonical URLs, sitemap, metadata and organisation schema remain intact. Film CSS is scoped to its root. The static introduction remains available without JavaScript or WebGL.

The film runtime is a vendored, adapted public browser bundle in public/reference/experience.js. It is excluded from lint as generated vendor code. The original source repository and its licence were not supplied. Full document navigation intentionally resets its scroll/animation state. This is heavier than the previous static homepage: approximately 51 MB of locally hosted film/frame/font assets across the entire experience, loaded progressively by the reference engine. No claim of measured Core Web Vitals improvement is made.

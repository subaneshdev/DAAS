# DaaS cinematic homepage redesign

Reference inspected on 20 November 2026: https://independent-product-studio.vercel.app/

The reference uses large serif type, a full-screen art-led opening, restrained navigation, fine framing lines and chapter-based storytelling. This implementation adapts those layout ideas to DaaS using its own copy, black/pink/warm-white palette and original artwork. No reference assets or source were reused.

## Changes
- A server-rendered homepage with a cinematic hero, chapter navigation, capabilities, industries, real estate feature, process, demonstrations, resources, FAQs and enquiry CTA.
- A compact native disclosure menu with keyboard access, Escape dismissal and links to the existing pages.
- Existing 40 URLs, canonical metadata, sitemap, structured data and enquiry implementation retained.
- Georgia provides the editorial serif accent without a new font download. Existing Manrope and DM Sans remain in use.
- The static hero has a brief entrance animation. Reduced-motion settings disable this. No scroll hijacking, autoplay video or WebGL dependency.
- Image delivered as WebP through Next Image, with responsive sizes and a decorative empty alt on the hero. The separate concept-art feature has descriptive alt text.

## Artwork
Created with the built-in image-generation tool and saved at `public/images/distribution-city.webp`.

Prompt: Premium cinematic website hero for a distribution agency. A sculptural miniature modern Indian city in ivory stone, with residential towers, commercial terraces, arches and stairs on monolithic plinths. A blush pink ribbon of light connects the buildings and curves into an elliptical orbit. Dark charcoal background, pink edge light, detailed tactile stone and black marble base. Architecture occupies the right side; calm dark negative space on the left for typography. No text, logos, UI or human figures.

The architecture is explicitly conceptual, not a client project or completed property development.

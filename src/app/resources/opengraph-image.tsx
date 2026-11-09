import { createOgImage, ogSize } from "@/lib/og";

export const alt =
  "Free Marketing Planning Resources — DaaS.media";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "FREE PLANNING RESOURCES",
    line1: "Useful tools.",
    line2: "Open to everyone.",
    footer: "Briefing templates · Checklists · Campaign enquiry tracker",
  });
}

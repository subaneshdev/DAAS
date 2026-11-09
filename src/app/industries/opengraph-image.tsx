import { createOgImage, ogSize } from "@/lib/og";

export const alt =
  "Industry Marketing & Distribution Scopes — DaaS.media";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "INDUSTRIES",
    line1: "Different businesses.",
    line2: "Different buying decisions.",
    footer: "Real Estate · Restaurants · Manufacturing · B2B · Food · FMCG",
  });
}

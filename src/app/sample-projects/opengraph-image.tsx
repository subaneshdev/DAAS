import { createOgImage, ogSize } from "@/lib/og";

export const alt =
  "Marketing Demonstration Projects (Illustrative) — DaaS.media";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "DEMONSTRATION PROJECTS",
    line1: "See the thinking.",
    line2: "Inspect the work.",
    footer: "Explicitly labelled fictional planning briefs. Zero fabricated results.",
  });
}

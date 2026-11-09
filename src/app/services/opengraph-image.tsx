import { createOgImage, ogSize } from "@/lib/og";

export const alt =
  "Digital, Creative & Distribution Services — DaaS.media";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "WHAT WE BUILD",
    line1: "Different channels.",
    line2: "A shared direction.",
    footer: "SEO · Paid Media · Content · Web & Systems · Activations",
  });
}

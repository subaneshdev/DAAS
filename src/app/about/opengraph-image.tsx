import { createOgImage, ogSize } from "@/lib/og";

export const alt =
  "About DaaS.media — Distribution as a Service Agency in Chennai";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "ABOUT DAAS.MEDIA",
    line1: "Independent thinking.",
    line2: "Connected execution.",
    footer: "Founded in Chennai · Remote campaigns across India",
  });
}

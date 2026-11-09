import { createOgImage, ogSize } from "@/lib/og";

export const alt =
  "Real Estate Marketing & Distribution in Chennai — DaaS.media";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "OUR FIRST SPECIALTY",
    line1: "Property is local.",
    line2: "Distribution should be, too.",
    footer: "Developers · Builders · Brokers · PropTech",
  });
}

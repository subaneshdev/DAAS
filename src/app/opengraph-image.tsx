import { createOgImage, ogSize } from "@/lib/og";

export const alt =
  "DaaS.media — Distribution as a Service. Digital, physical and connected.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    line1: "Good business.",
    line2: "Better distribution.",
    footer: "Digital marketing in Chennai. Built for distribution.",
  });
}

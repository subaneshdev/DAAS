import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function createOgImage({
  eyebrow = "DISTRIBUTION AS A SERVICE",
  line1,
  line2,
  footer = "Chennai / Digital + Physical",
}: {
  eyebrow?: string;
  line1: string;
  line2: string;
  footer?: string;
}) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#111111",
        color: "#f5f3ef",
        width: "100%",
        height: "100%",
        padding: "64px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 30,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>DaaS.media</span>
        <span style={{ fontSize: 17, color: "#aaaaaa", letterSpacing: 1 }}>
          {eyebrow}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 82,
          lineHeight: 1.08,
          letterSpacing: -3,
        }}
      >
        <span>{line1}</span>
        <span style={{ color: "#ff86be" }}>{line2}</span>
      </div>
      <div style={{ fontSize: 22, color: "#c7c7c2" }}>{footer}</div>
    </div>,
    ogSize,
  );
}

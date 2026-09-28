import { ImageResponse } from "next/og";
export const alt =
  "DaaS.media — Distribution as a Service. Digital, physical and connected.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#111",
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
        }}
      >
        <span>DaaS.media</span>
        <span style={{ fontSize: 17, color: "#aaa" }}>
          DISTRIBUTION AS A SERVICE
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 90,
          lineHeight: 1.1,
          letterSpacing: -4,
          marginTop: 100,
        }}
      >
        <span>Good business.</span>
        <span style={{ color: "#ff86be" }}>Better distribution.</span>
      </div>
      <div style={{ fontSize: 23, marginTop: 60 }}>
        Digital. Physical. Connected.
      </div>
    </div>,
    size,
  );
}

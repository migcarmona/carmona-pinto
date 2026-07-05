import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e293b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#f59e0b",
            color: "#020617",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          CP
        </div>
        <div style={{ marginTop: 40, fontSize: 56, fontWeight: 700, maxWidth: 900, lineHeight: 1.2, display: "flex" }}>
          {siteConfig.tagline}
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#cbd5e1", display: "flex" }}>
          {siteConfig.name} · Évora, Portugal
        </div>
      </div>
    ),
    { ...size }
  );
}

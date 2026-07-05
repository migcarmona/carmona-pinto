import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = readFileSync(join(process.cwd(), "public", "logo-white.png")).toString("base64");

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
          background: "linear-gradient(135deg, #232927 0%, #2f3634 60%, #1a1f1d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={`data:image/png;base64,${logo}`}
          width={340}
          height={195}
          alt=""
          style={{ objectFit: "contain" }}
        />
        <div style={{ marginTop: 40, fontSize: 56, fontWeight: 700, maxWidth: 900, lineHeight: 1.2, display: "flex" }}>
          {siteConfig.tagline}
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#5bc8ca", display: "flex" }}>
          {siteConfig.name} · Évora, Portugal
        </div>
      </div>
    ),
    { ...size }
  );
}

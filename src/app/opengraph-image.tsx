import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CT Forwarding & Transport — Sabah's Trusted Logistics Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0B1A2B 0%, #0B3D24 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 8,
            height: 630,
            background: "#0B7A3A",
          }}
        />

        {/* CT monogram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 16,
            background: "#0B7A3A",
            marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 44, fontWeight: 900, color: "white", letterSpacing: "-2px" }}>
            CT
          </span>
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          CT Forwarding &amp; Transport
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.65)",
            marginBottom: 48,
            fontWeight: 400,
          }}
        >
          Sabah&apos;s Trusted Logistics Partner Since 1999
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 40 }}>
          {[
            ["200+", "Fleet Units"],
            ["25+", "Years"],
            ["3", "Sabah Offices"],
          ].map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 36, fontWeight: 800, color: "#4ADE80" }}>{v}</span>
              <span style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "1px" }}>{l}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 20,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "1px",
          }}
        >
          www.ctforwarding.com.my
        </div>
      </div>
    ),
    { ...size }
  );
}

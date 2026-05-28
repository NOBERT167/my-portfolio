import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nobert Langat — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0d0d0d",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* Available badge */}
      <div
        style={{
          background: "rgba(139, 92, 246, 0.2)",
          border: "1px solid #8b5cf6",
          color: "#a78bfa",
          borderRadius: "20px",
          padding: "6px 18px",
          fontSize: "18px",
          marginBottom: "32px",
        }}
      >
        Available for work
      </div>

      {/* Name */}
      <div
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          color: "white",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        Nobert Langat
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: "36px",
          color: "#a78bfa",
          marginBottom: "32px",
        }}
      >
        Full-Stack Developer
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "22px",
          color: "#888",
          maxWidth: "700px",
        }}
      >
        I craft performant web experiences with clean code and sharp design.
      </div>

      {/* Domain */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "80px",
          fontSize: "18px",
          color: "#555",
        }}
      >
        nobertdev.vercel.app
      </div>
    </div>,
    { ...size },
  );
}

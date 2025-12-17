import React from "react";
export default function WelcomeStep() {
  return (
    <div style={{ padding: "32px", color: "#fff", textAlign: "center" }}>
      <div
        style={{
          width: 72,
          height: 72,
          margin: "0 auto 24px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
        }}
      >
        🔮
      </div>

      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
        Vote Your Favorite TikToker
      </h1>

      <p
        style={{
          fontSize: 15,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.85)",
          marginBottom: 28,
        }}
      >
        Support creators you love. Shape rankings in real time. One device. One vote. Zero noise.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 32,
        }}
      >
        {["⚡ Fast", "🔒 Secure", "📊 Live", "🌍 Global"].map((text) => (
          <div
            key={text}
            style={{
              padding: 12,
              borderRadius: 14,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontSize: 13,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

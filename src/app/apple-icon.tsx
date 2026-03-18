import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "linear-gradient(135deg, #1E293B 0%, #334155 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {/* Demand curve */}
          <path
            d="M15 20 L85 80"
            stroke="#60A5FA"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Supply curve */}
          <path
            d="M15 80 L85 20"
            stroke="#F87171"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Equilibrium dot */}
          <circle cx="50" cy="50" r="8" fill="#34D399" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

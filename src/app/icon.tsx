import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        {/* Stylized supply-demand cross */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {/* Demand curve (downward slope) */}
          <path
            d="M3 5 L19 17"
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Supply curve (upward slope) */}
          <path
            d="M3 17 L19 5"
            stroke="#F87171"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Equilibrium dot */}
          <circle cx="11" cy="11" r="2.5" fill="#34D399" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

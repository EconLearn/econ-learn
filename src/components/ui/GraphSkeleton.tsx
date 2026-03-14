export default function GraphSkeleton() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border-subtle)",
      }}
    >
      {/* Graph area */}
      <div className="p-5">
        <div
          className="w-full rounded-lg animate-pulse"
          style={{
            height: 320,
            background: "var(--color-surface-sunken)",
          }}
        />
      </div>

      {/* Controls placeholder */}
      <div
        className="px-5 py-4 space-y-3"
        style={{ borderTop: "1px solid var(--color-border-subtle)" }}
      >
        <div
          className="h-3 w-24 rounded animate-pulse"
          style={{ background: "var(--color-surface-sunken)" }}
        />
        <div className="flex gap-3">
          <div
            className="h-8 flex-1 rounded-lg animate-pulse"
            style={{ background: "var(--color-surface-sunken)" }}
          />
          <div
            className="h-8 flex-1 rounded-lg animate-pulse"
            style={{ background: "var(--color-surface-sunken)" }}
          />
        </div>
        <div className="flex gap-3">
          <div
            className="h-8 flex-1 rounded-lg animate-pulse"
            style={{ background: "var(--color-surface-sunken)" }}
          />
          <div
            className="h-8 flex-1 rounded-lg animate-pulse"
            style={{ background: "var(--color-surface-sunken)" }}
          />
        </div>
      </div>
    </div>
  );
}

export function CinematicBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.55_0.24_295/0.35)] blur-[140px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-[oklch(0.45_0.22_300/0.3)] blur-[160px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.6_0.26_290/0.25)] blur-[140px] animate-aurora"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}

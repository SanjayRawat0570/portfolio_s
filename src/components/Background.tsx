export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* dot grid, fading out toward the bottom */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(var(--dot) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, #000 30%, transparent 100%)",
        }}
      />
      {/* single warm glow at the top */}
      <div
        className="absolute left-1/2 top-[-280px] h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[110px]"
        style={{ background: "var(--glow)" }}
      />
    </div>
  );
}

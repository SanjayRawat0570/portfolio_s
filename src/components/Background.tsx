export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      {/* glows */}
      <div
        className="absolute -left-24 -top-32 h-[500px] w-[500px] rounded-full bg-[#7c5cff] blur-[120px]"
        style={{ opacity: "var(--glow-1)" }}
      />
      <div
        className="absolute -right-32 top-[18%] h-[450px] w-[450px] rounded-full bg-[#00d4ff] blur-[120px]"
        style={{ opacity: "var(--glow-2)" }}
      />
    </div>
  );
}

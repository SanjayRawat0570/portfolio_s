import Reveal from "./Reveal";

export default function SectionHeading({
  num,
  label,
  title,
}: {
  num: string;
  label: string;
  title: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
          {title}
        </h2>
        <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[12px] uppercase tracking-wider text-text-faint">
          <span className="text-accent">{num}</span> / {label}
        </span>
      </div>
    </Reveal>
  );
}

import Reveal from "./Reveal";

export default function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-[15px] font-medium text-accent">{num}</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-[-1px]">
          {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
    </Reveal>
  );
}

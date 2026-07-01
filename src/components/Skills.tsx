import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1120px] px-6 py-24">
      <SectionHeading num="02" title="Technical skills" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.08}>
            <TiltCard
              maxTilt={6}
              className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border-hover hover:bg-card-hover"
            >
              <h3 className="mb-4 flex items-center gap-2.5 text-[1.1rem] font-semibold">
                <span className="text-xl">{group.icon}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-bg-soft px-2.5 py-1 font-mono text-[12.5px] text-text-dim transition-colors group-hover:border-border-hover"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { certifications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { AwardIcon } from "./icons";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-[1120px] px-6 py-24">
      <SectionHeading num="04" title="Certifications & achievements" />

      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <TiltCard
              maxTilt={7}
              className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border-hover"
            >
              <span className="text-accent">
                <AwardIcon />
              </span>
              <div>
                <h3 className="text-[1.05rem] font-semibold">{c.title}</h3>
                <p className="mt-1 text-[13.5px] text-text-dim">{c.issuer}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

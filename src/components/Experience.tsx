import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Tile from "./Tile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
      <SectionHeading
        num="03"
        label="Experience"
        title={
          <>
            Where I&apos;ve{" "}
            <span className="font-serif font-normal italic text-text-dim">shipped.</span>
          </>
        }
      />

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {experience.map((job, i) => (
          <Tile key={job.company} delay={i * 0.08} className="flex flex-col p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full border border-border bg-bg-soft px-3 py-1 font-mono text-[12px] text-text-dim">
                {job.date}
              </span>
              <span className="font-mono text-[12px] text-text-faint">{job.location}</span>
            </div>

            <h3 className="mt-6 text-[22px] font-semibold leading-tight tracking-tight">{job.role}</h3>
            <p className="mt-1 text-[15px] font-medium text-accent">{job.company}</p>

            <ul className="mt-5 space-y-3 border-t border-border pt-5">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-text-dim">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Tile>
        ))}
      </div>
    </section>
  );
}

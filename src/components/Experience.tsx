import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1120px] px-6 py-24">
      <SectionHeading num="03" title="Experience" />

      <div className="relative pl-8">
        <div className="absolute bottom-1.5 left-[5px] top-1.5 w-0.5 bg-gradient-to-b from-accent via-accent2 to-transparent" />
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1}>
            <div className="relative mb-10 last:mb-0">
              <span className="absolute -left-[28px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(124,92,255,.18)]" />
              <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:translate-x-1 hover:border-border-hover">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-[1.2rem] font-semibold">{job.role}</h3>
                  <span className="whitespace-nowrap font-mono text-[13px] text-accent2">
                    {job.date}
                  </span>
                </div>
                <p className="mb-3.5 mt-1 text-[14.5px] font-medium text-text-faint">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-5 text-[14.5px] text-text-dim">
                      <span className="absolute left-0 text-accent">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

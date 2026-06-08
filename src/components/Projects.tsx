import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { FolderIcon, GithubIcon, ExternalIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1120px] px-6 py-24">
      <SectionHeading num="04" title="Featured projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1.5 hover:border-border-hover hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,.6)]">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-accent">
                  <FolderIcon />
                </span>
                <div className="flex items-center gap-3 text-text-faint">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} GitHub`}
                      className="transition-colors hover:text-text"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="transition-colors hover:text-text"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-[1.5rem] font-bold tracking-[-.5px]">{p.title}</h3>
              <p className="mb-3.5 mt-0.5 text-[14px] font-medium text-accent2">
                {p.tagline}
              </p>
              <p className="mb-4 text-[14.5px] text-text-dim">{p.description}</p>

              <ul className="mb-5 space-y-1.5">
                {p.points.map((pt) => (
                  <li key={pt} className="relative pl-5 text-[13.5px] text-text-dim">
                    <span className="absolute left-0 text-accent">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-bg-soft px-2 py-0.5 font-mono text-[11.5px] text-text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

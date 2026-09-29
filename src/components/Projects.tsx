import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Tile from "./Tile";
import { GithubIcon, ExternalIcon } from "./icons";

type Project = (typeof projects)[number];

function Links({ p }: { p: Project }) {
  return (
    <div className="flex items-center gap-2">
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.title} GitHub`}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-bg-soft text-text-dim transition-colors hover:border-text-faint hover:text-text"
        >
          <GithubIcon width={18} height={18} />
        </a>
      )}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-text px-4 text-[13.5px] font-medium text-bg transition-opacity hover:opacity-85"
        >
          Live demo
          <ExternalIcon width={14} height={14} />
        </a>
      )}
    </div>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-full border border-border bg-bg-soft px-2.5 py-0.5 font-mono text-[11.5px] text-text-dim"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Points({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2.5">
      {points.map((pt) => (
        <li key={pt} className="flex gap-3 text-[14px] leading-relaxed text-text-dim">
          <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {pt}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
      <SectionHeading
        num="05"
        label="Projects"
        title={
          <>
            Selected{" "}
            <span className="font-serif font-normal italic text-text-dim">work.</span>
          </>
        }
      />

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {/* Featured project — full-width tile split in two */}
        <Tile className="p-7 sm:p-9 md:col-span-2">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col">
              <span className="w-fit rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                Featured · {featured.tagline}
              </span>
              <h3 className="mt-5 text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                {featured.title}
              </h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-text-dim">{featured.description}</p>
              <div className="mt-6 lg:mt-auto lg:pt-8">
                <Links p={featured} />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl border border-border bg-bg-soft p-6">
              <Points points={featured.points} />
              <div className="mt-auto">
                <TechList tech={featured.tech} />
              </div>
            </div>
          </div>
        </Tile>

        {rest.map((p, i) => (
          <Tile key={p.title} delay={0.08 + i * 0.08} className="flex flex-col p-7">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">{p.tagline}</span>
            <h3 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-0.03em]">{p.title}</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-text-dim">{p.description}</p>
            <div className="mt-5 border-t border-border pt-5">
              <Points points={p.points} />
            </div>
            <div className="mt-6">
              <TechList tech={p.tech} />
            </div>
            <div className="mt-6 pt-2 md:mt-auto">
              <Links p={p} />
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import Tile from "./Tile";

const focus = [
  { title: "LLM apps & agents", body: "Multi-agent systems with LangGraph, tool use and RAG pipelines." },
  { title: "Full-stack product", body: "Next.js front-ends backed by FastAPI and Node services." },
  { title: "Shipping to prod", body: "Docker, CI/CD, monitoring — deployed, not just demoed." },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
      <SectionHeading
        num="01"
        label="About"
        title={
          <>
            Engineer by training,{" "}
            <span className="font-serif font-normal italic text-text-dim">builder by habit.</span>
          </>
        }
      />

      <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
        <Tile className="p-7 sm:p-8 md:col-span-2">
          <div className="space-y-4 text-[16px] leading-relaxed text-text-dim">
            <p>
              I&apos;m a Computer Engineering undergraduate at{" "}
              <strong className="font-semibold text-text">SAGE University, Indore</strong>, passionate
              about building products that blend solid full-stack engineering with modern AI. From admin
              panels and trading dashboards to multi-agent AI platforms, I enjoy taking ideas from concept
              to production.
            </p>
            <p>
              I&apos;ve shipped real-world features as a{" "}
              <strong className="font-semibold text-text">Frontend Developer Intern</strong> and a{" "}
              <strong className="font-semibold text-text">Full Stack Developer Intern</strong>, and I build
              AI-native systems using LangChain, LangGraph, and multi-agent orchestration. I care about
              clean, scalable code, REST API design, and great developer experience.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent transition-all hover:gap-2.5"
          >
            Let&apos;s work together <span aria-hidden>→</span>
          </a>
        </Tile>

        <Tile delay={0.08} className="flex flex-col justify-between p-7">
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">Education</span>
          <div className="mt-8">
            <p className="text-[19px] font-semibold leading-snug tracking-tight">B.Tech, Computer Engineering</p>
            <p className="mt-1 text-[14.5px] text-text-dim">SAGE University, Indore</p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-[2.4rem] font-semibold leading-none tracking-[-0.04em] text-gradient">8.38</span>
              <span className="font-mono text-[12px] text-text-faint">CGPA</span>
            </div>
          </div>
        </Tile>

        {focus.map((f, i) => (
          <Tile key={f.title} delay={0.1 + i * 0.06} className="p-6">
            <span className="font-mono text-[12px] text-accent">0{i + 1}</span>
            <h3 className="mt-3 text-[17px] font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-text-dim">{f.body}</p>
          </Tile>
        ))}
      </div>
    </section>
  );
}

import { stats } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1120px] px-6 py-24">
      <SectionHeading num="01" title="About me" />

      <div className="grid items-start gap-12 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-[1.05rem] text-text-dim">
            <p>
              I&apos;m a Computer Engineering undergraduate at{" "}
              <strong className="font-semibold text-text">SAGE University, Indore</strong>{" "}
              (CGPA 8.40), passionate about building products that blend solid full-stack
              engineering with modern AI. From admin panels and trading dashboards to
              multi-agent AI platforms, I enjoy taking ideas from concept to production.
            </p>
            <p>
              I&apos;ve shipped real-world features as a{" "}
              <strong className="font-semibold text-text">Frontend Developer Intern</strong> and a{" "}
              <strong className="font-semibold text-text">Full Stack Developer Intern</strong>, and I
              build AI-native systems using LangChain, LangGraph, and multi-agent orchestration. I
              care about clean, scalable code, REST API design, and great developer experience.
            </p>
            <a
              href="#contact"
              className="inline-block pt-2 font-semibold text-accent2 transition-all hover:tracking-wide"
            >
              Let&apos;s work together →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-border-hover">
                <span className="block text-[2rem] font-extrabold tracking-[-1px] text-gradient">
                  {s.num}
                </span>
                <span className="text-[13.5px] text-text-faint">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

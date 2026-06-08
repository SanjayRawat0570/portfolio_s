import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1120px] px-6 py-24 text-center">
      <Reveal>
        <span className="mb-3 block font-mono text-[15px] font-medium text-accent">05</span>
        <h2 className="mb-4 text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-1.5px]">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mb-9 max-w-[560px] text-[1.08rem] text-text-dim">
          I&apos;m currently open to software engineering opportunities and collaborations.
          Whether you have a role, a project, or just want to connect — my inbox is always open.
        </p>
        <ContactForm />

        <div className="mt-10 flex flex-wrap justify-center gap-3.5 font-mono text-[14.5px] text-text-dim">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent2">
            {profile.email}
          </a>
          <span className="text-text-faint">•</span>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="transition-colors hover:text-accent2"
          >
            {profile.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

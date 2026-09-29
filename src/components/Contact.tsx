import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import Tile from "./Tile";
import { MailIcon, PhoneIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
      <SectionHeading
        num="06"
        label="Contact"
        title={
          <>
            Let&apos;s build{" "}
            <span className="font-serif font-normal italic text-text-dim">something together.</span>
          </>
        }
      />

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1fr_1.4fr]">
        <div className="grid gap-3 sm:gap-4">
          <Tile className="flex flex-col justify-between p-7">
            <p className="text-[16px] leading-relaxed text-text-dim">
              I&apos;m currently open to software engineering opportunities and collaborations. Whether
              you have a role, a project, or just want to connect — my inbox is always open.
            </p>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg-soft px-3 py-1 font-mono text-[12px] text-text-dim">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Usually replies within a day
            </span>
          </Tile>

          <Tile delay={0.06}>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-6 transition-colors hover:text-accent"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-bg-soft">
                <MailIcon width={18} height={18} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-text-faint">Email</span>
                <span className="block truncate text-[15px] font-medium">{profile.email}</span>
              </span>
              <span aria-hidden className="ml-auto text-text-faint">↗</span>
            </a>
          </Tile>

          <Tile delay={0.1}>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 p-6 transition-colors hover:text-accent"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-bg-soft">
                <PhoneIcon width={18} height={18} />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-text-faint">Phone</span>
                <span className="block text-[15px] font-medium">{profile.phone}</span>
              </span>
              <span aria-hidden className="ml-auto text-text-faint">↗</span>
            </a>
          </Tile>
        </div>

        <Tile delay={0.08} spotlight={false} className="p-7 sm:p-8">
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">Send a message</span>
          <ContactForm />
        </Tile>
      </div>
    </section>
  );
}

import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Tile from "./Tile";
import { AwardIcon } from "./icons";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
      <SectionHeading
        num="04"
        label="Awards"
        title={
          <>
            Certifications{" "}
            <span className="font-serif font-normal italic text-text-dim">&amp; achievements.</span>
          </>
        }
      />

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Tile key={c.title} delay={i * 0.08} className="flex items-center gap-5 p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-bg-soft text-accent">
              <AwardIcon />
            </span>
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-0.5 text-[14px] text-text-dim">{c.issuer}</p>
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}

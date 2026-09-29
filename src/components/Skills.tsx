import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Tile from "./Tile";

// Bento layout: the first group is featured wide, the last spans the full row.
function spanFor(i: number, total: number) {
  if (i === 0) return "md:col-span-2";
  if (i === total - 1) return "md:col-span-3";
  return "";
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
      <SectionHeading
        num="02"
        label="Skills"
        title={
          <>
            The toolkit{" "}
            <span className="font-serif font-normal italic text-text-dim">I reach for.</span>
          </>
        }
      />

      <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
        {skills.map((group, i) => (
          <Tile key={group.title} delay={(i % 3) * 0.06} className={`p-6 ${spanFor(i, skills.length)}`}>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-bg-soft text-[18px]">
                {group.icon}
              </span>
              <h3 className="text-[17px] font-semibold tracking-tight">{group.title}</h3>
              <span className="ml-auto font-mono text-[12px] text-text-faint">{group.items.length}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-bg-soft px-3 py-1 text-[13px] text-text-dim transition-colors hover:border-accent hover:text-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}

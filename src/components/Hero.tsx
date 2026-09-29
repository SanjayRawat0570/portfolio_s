import { profile, skills, stats } from "@/lib/data";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, MailIcon, PhoneIcon } from "./icons";
import Tile from "./Tile";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon, ext: true },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon, ext: true },
  { href: profile.leetcode, label: "LeetCode", Icon: LeetcodeIcon, ext: true },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon, ext: false },
  { href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone", Icon: PhoneIcon, ext: false },
];

// A cross-section of the stack for the scrolling tile
const stack = skills.flatMap((g) => g.items.slice(0, 4));

function Stat({ num, label, delay }: { num: string; label: string; delay: number }) {
  return (
    <Tile delay={delay} className="flex flex-col justify-between p-6">
      <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">{label}</span>
      <span className="mt-6 block text-[clamp(2rem,4vw,2.6rem)] font-semibold leading-none tracking-[-0.04em]">
        {num}
      </span>
    </Tile>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-[1200px] px-4 pb-10 pt-28 sm:px-6 sm:pt-32">
      <div className="grid auto-rows-[minmax(150px,auto)] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {/* Intro — the big tile */}
        <Tile className="col-span-2 row-span-2 flex flex-col justify-between p-7 sm:p-9" spotlight={false}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-3 py-1 font-mono text-[12px] text-text-dim">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for opportunities
            </span>

            <h1 className="mt-8 text-[clamp(2.5rem,6vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
              Hi, I&apos;m {profile.name.split(" ")[0]}.
              <br />
              <span className="font-serif font-normal italic tracking-[-0.02em] text-text-dim">
                I build{" "}
              </span>
              <span className="font-serif font-normal italic tracking-[-0.02em] text-gradient">
                AI-native
              </span>
              <span className="font-serif font-normal italic tracking-[-0.02em] text-text-dim">
                {" "}software.
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-text-dim">
              {profile.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-text px-6 py-3 text-[14.5px] font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-hover px-6 py-3 text-[14.5px] font-medium transition-all hover:-translate-y-0.5 hover:border-text-faint"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
              </svg>
              Résumé
            </a>
          </div>
        </Tile>

        {/* Identity */}
        <Tile delay={0.05} className="col-span-2 flex items-center gap-5 p-6 sm:col-span-1 sm:flex-col sm:items-start sm:justify-between lg:col-span-1">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-accent text-[22px] font-bold text-white shadow-[0_10px_30px_-10px_var(--color-accent)]">
            SR
          </div>
          <div>
            <p className="text-[17px] font-semibold tracking-tight">{profile.name}</p>
            <p className="text-[14px] text-text-dim">{profile.role}</p>
            <p className="mt-1 flex items-center gap-1.5 font-mono text-[12px] text-text-faint">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              Indore, India
            </p>
          </div>
        </Tile>

        {stats.map((s, i) => (
          <Stat key={s.label} num={s.num} label={s.label} delay={0.1 + i * 0.05} />
        ))}

        {/* Socials */}
        <Tile delay={0.3} className="col-span-2 flex flex-col justify-between p-6 sm:col-span-1 lg:col-span-1">
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">Find me on</span>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map(({ href, label, Icon, ext }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-bg-soft text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
        </Tile>

        {/* Stack marquee */}
        <Tile delay={0.35} spotlight={false} className="col-span-2 flex flex-col justify-between py-6">
          <div className="flex items-center justify-between px-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-faint">Daily stack</span>
            <a href="#skills" className="text-[13px] text-text-dim transition-colors hover:text-accent">
              All skills →
            </a>
          </div>
          <div className="marquee-mask mt-5 overflow-hidden">
            <div className="animate-marquee flex w-max gap-2.5">
              {[...stack, ...stack].map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="whitespace-nowrap rounded-full border border-border bg-bg-soft px-4 py-2 text-[13.5px] text-text-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Tile>
      </div>
    </section>
  );
}

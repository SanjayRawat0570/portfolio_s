import { profile } from "@/lib/data";

const links = [
  { href: profile.github, label: "GitHub", ext: true },
  { href: profile.linkedin, label: "LinkedIn", ext: true },
  { href: profile.leetcode, label: "LeetCode", ext: true },
  { href: `mailto:${profile.email}`, label: "Email", ext: false },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-4 pb-8 pt-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card px-6 py-5">
        <p className="text-[14px] text-text-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex flex-wrap gap-5 text-[14px] text-text-dim">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

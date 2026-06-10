import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3.5 px-6">
        <p className="text-[14px] text-text-faint">
          © {new Date().getFullYear()} Sanjay Rawat. Built with Next.js.
        </p>
        <div className="flex gap-6 text-[14px] text-text-dim">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent2">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent2">
            LinkedIn
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent2">
            LeetCode
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent2">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

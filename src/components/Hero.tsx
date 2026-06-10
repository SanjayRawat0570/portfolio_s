"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, MailIcon, PhoneIcon } from "./icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[860px]"
      >
        <motion.p
          variants={item}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-4 py-1.5 font-mono text-[13px] text-text-dim"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Available for opportunities
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-4 text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold leading-[1.05] tracking-[-2px]"
        >
          Hi, I&apos;m <span className="text-gradient">Sanjay Rawat</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mb-6 text-[clamp(1.15rem,3vw,1.7rem)] font-semibold tracking-tight text-text-dim"
        >
          Software Engineer building{" "}
          <span className="text-text">full-stack apps</span> &amp;{" "}
          <span className="text-text">AI-native systems</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mb-9 max-w-[640px] text-[1.05rem] text-text-dim"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          variants={item}
          className="mb-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-xl bg-gradient-accent px-7 py-3 font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,92,255,.6)] transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border-hover bg-bg-soft px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
            </svg>
            Download résumé
          </a>
        </motion.div>

        <motion.div variants={item} className="flex justify-center gap-3.5">
          {[
            { href: profile.github, label: "GitHub", Icon: GithubIcon, ext: true },
            { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon, ext: true },
            { href: profile.leetcode, label: "LeetCode", Icon: LeetcodeIcon, ext: true },
            { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon, ext: false },
            { href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone", Icon: PhoneIcon, ext: false },
          ].map(({ href, label, Icon, ext }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-bg-soft text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-text"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 flex h-10 w-6 -translate-x-1/2 justify-center rounded-2xl border-2 border-border-hover pt-2"
      >
        <motion.span
          animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-2 w-1 rounded-full bg-accent"
        />
      </motion.div>
    </section>
  );
}

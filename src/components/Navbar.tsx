"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 ${
          scrolled
            ? "border-border bg-card/75 shadow-[0_8px_30px_-12px_rgba(0,0,0,.35)] backdrop-blur-xl"
            : "border-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2.5 pl-1">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-text text-[13px] font-bold text-bg">
            SR
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors ${
                active === l.href ? "text-text" : "text-text-dim hover:text-text"
              }`}
            >
              {active === l.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-bg-soft ring-1 ring-border"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-text px-4 py-2 text-[14px] font-medium text-bg transition-opacity hover:opacity-85 sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-border bg-bg-soft lg:hidden"
          >
            <span className={`h-0.5 w-4 rounded bg-text transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-4 rounded bg-text transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-4 rounded bg-text transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-3xl border border-border bg-card/95 p-2 backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-text-dim transition-colors hover:bg-bg-soft hover:text-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-text-dim transition-colors hover:bg-bg-soft hover:text-text"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "./Magnetic";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputCls =
    "w-full rounded-2xl border border-border bg-bg-soft px-4 py-3 text-[15px] text-text outline-none transition-colors placeholder:text-text-faint focus:border-accent focus:ring-4 focus:ring-accent/10";

  return (
    <form onSubmit={onSubmit} className="mt-5 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-text-dim">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-text-dim">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-text-dim">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role or project…"
          className={`${inputCls} resize-y`}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Magnetic strength={0.2}>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 rounded-full bg-text px-7 py-3 text-[14.5px] font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block h-4 w-4 rounded-full border-2 border-bg/40 border-t-bg"
                />
                Sending…
              </>
            ) : (
              "Send message"
            )}
          </button>
        </Magnetic>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.span
              key="ok"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-[14px] font-medium text-green-500"
            >
              ✓ Thanks! Your message is on its way.
            </motion.span>
          )}
          {status === "error" && (
            <motion.span
              key="err"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-[14px] font-medium text-red-500"
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

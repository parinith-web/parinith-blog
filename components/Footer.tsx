"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-3 px-4 md:px-6 border-t border-[#5b8fd9]"
      style={{ background: "var(--blue)", color: "var(--footer-text)" }}
    >
      <div className="max-w-[1760px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="flex items-center gap-3 justify-start md:justify-self-start">
          <span className="font-display font-bold text-2xl" style={{ color: "var(--footer-text)" }}>PR</span>
          <span className="font-mono text-base" style={{ color: "color-mix(in srgb, var(--footer-text) 65%, transparent)" }}>&middot;</span>
          <span className="font-mono text-lg" style={{ color: "color-mix(in srgb, var(--footer-text) 78%, transparent)" }}>Parinith Reddy</span>
        </div>
        <p className="font-mono text-lg text-center justify-self-center" style={{ color: "color-mix(in srgb, var(--footer-text) 78%, transparent)" }}>
          Developed by Parinith Reddy
        </p>
        <div className="flex items-center gap-4 justify-start md:justify-self-end">
          {[
            { href: "https://github.com/parinith-web", label: "GitHub" },
            { href: "https://www.linkedin.com/in/parinith-reddy", label: "LinkedIn" },
            { href: "https://leetcode.com/u/parinith_reddy/", label: "LeetCode" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors font-mono text-lg"
              style={{ color: "color-mix(in srgb, var(--footer-text) 78%, transparent)" }}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 transition-colors font-mono text-lg group"
            style={{ color: "color-mix(in srgb, var(--footer-text) 78%, transparent)" }}
            aria-label="Back to top"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

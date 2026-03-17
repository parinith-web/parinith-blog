"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const TAGLINES = ["AI / ML Engineer", "Backend Systems Builder"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const yFarBack = useTransform(scrollY, [0, 800], [0, -160]);
  const yBack = useTransform(scrollY, [0, 800], [0, -100]);
  const yMid = useTransform(scrollY, [0, 800], [0, -60]);
  const yFront = useTransform(scrollY, [0, 800], [0, -20]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 600], [1, 0.94]);

  const yBackSpring = useSpring(yBack, { stiffness: 80, damping: 20 });
  const yMidSpring = useSpring(yMid, { stiffness: 60, damping: 20 });
  const yFrontSpring = useSpring(yFront, { stiffness: 40, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(var(--hero-grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--hero-grid-line) 1px,transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: yFarBack }}
          className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-20"
          animate={{
            background: [
              "radial-gradient(circle,rgba(91,143,217,0.4) 0%,transparent 70%)",
              "radial-gradient(circle,rgba(91,143,217,0.4) 0%,transparent 70%)",
              "radial-gradient(circle,rgba(91,143,217,0.4) 0%,transparent 70%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ y: yFarBack }}
          className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-15"
          animate={{
            background: [
              "radial-gradient(circle,rgba(91,143,217,0.5) 0%,transparent 70%)",
              "radial-gradient(circle,rgba(91,143,217,0.3) 0%,transparent 70%)",
              "radial-gradient(circle,rgba(91,143,217,0.5) 0%,transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(91,143,217,0.3),transparent)" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        style={{ y: yFarBack, opacity: opacityHero }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(60px,14vw,180px)",
            letterSpacing: "-0.04em",
            color: "rgba(91,143,217,0.04)",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          PARINITH
        </span>
      </motion.div>

      <motion.div style={{ y: yBackSpring, opacity: opacityHero }} className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${15 + i * 17}%`,
              background: `linear-gradient(90deg,transparent ${10 + i * 5}%,var(--hero-grid-accent) 50%,transparent ${90 - i * 5}%)`,
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ y: yMidSpring, opacity: opacityHero }} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              background: "rgba(91,143,217,0.6)",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: (i * 0.3) % 4, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ y: yMidSpring, opacity: opacityHero, scale: scaleHero }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(11px,1.2vw,14px)",
            fontWeight: 400,
            color: "var(--text2)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Hello, I&apos;m
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            fontSize: "clamp(48px,9vw,120px)",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg,var(--blue),#5b8fd9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Parinith
          </span>
          <span style={{ display: "block", color: "var(--text)" }}>Reddy</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-5 text-center"
        >
          {TAGLINES.map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(14px,2vw,20px)",
                  color: "var(--blue)",
                }}
              >
                {tag}
              </span>
              {i < TAGLINES.length - 1 && (
                <span style={{ color: "var(--text3)", fontFamily: "var(--font-mono)" }}>&middot;</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text2)",
            maxWidth: "520px",
            margin: "0 auto 36px",
            fontSize: "clamp(14px,1.6vw,17px)",
            lineHeight: 1.7,
          }}
        >
          Building intelligent systems, scalable backends, and research-driven machine learning solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group parallax__cta parallax__cta--ghost"
          >
            View Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="/resume.pdf" download className="group parallax__cta parallax__cta--ghost">
            Download Resume
            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }} className="flex flex-wrap items-center justify-center gap-2">
          {["Python", "PyTorch", "Next.js", "FastAPI", "Go", "Docker"].map((t) => (
            <span key={t} className="parallax__chip">
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div style={{ y: yFrontSpring, opacity: opacityHero }} className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
        <div className="w-full h-full" style={{ background: "var(--hero-fade)" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: opacityHero as never }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text3)" }}>
          Scroll
        </span>
        <div
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "99px",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: "rgba(91,143,217,0.6)" }} />
        </div>
      </motion.div>
    </section>
  );
}

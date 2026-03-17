"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "NIT Delhi",
    desc: "Started B.Tech in Electronics & Communication Engineering. Maintained a CGPA of 8.28.",
  },
  {
    year: "2025",
    title: "ISDC - NIT Delhi",
    desc: "Joined the Institute Software Development Cell. Contributed to the official NIT Delhi website (nitdelhi.ac.in) and backend systems.",
    link: "https://www.figma.com/design/dkhSkTIPfjCPnkIS5hiUp1/Untitled?node-id=0-1&p=f&t=yjinQu0zoJpChSpu-0",
  },
  {
    year: "2025",
    title: "Head Graphic Designer - Upvision",
    desc: "Led design and branding for Upvision Technical Club - events, standees, brochures, and promotional assets.",
    link: "https://www.figma.com/design/NrgW42wzRuIarGR1gBjAfX/Untitled?node-id=0-1&p=f&t=MljnUDs0xsbChKgu-0",
  },
  {
    year: "2026",
    title: "Research - LSH Image Search",
    desc: "Investigating Locality Sensitive Hashing for scalable approximate nearest neighbour image retrieval at NIT Delhi.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} id="about" className="relative px-6 py-36 lg:py-40 overflow-hidden flex items-center min-h-screen">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(91,143,217,0.15) 0%, transparent 70%)" }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--blue)",
              fontSize: "14px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            01 / About
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,56px)",
              color: "var(--text)",
              marginTop: "12px",
              letterSpacing: "-0.02em",
            }}
          >
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "34px", minHeight: "100%" }}
          >
            <p style={{ fontFamily: "var(--font-body)", color: "var(--text2)", fontSize: "16px", lineHeight: "1.9", margin: 0 }}>
              I&apos;m a <strong style={{ color: "var(--text)", fontWeight: 600 }}>software developer</strong> studying Electronics &amp; Communication Engineering at{" "}
              <span style={{ color: "var(--blue)", fontWeight: 500 }}>NIT Delhi</span>, with a deep passion for the intersection of machine learning, systems design, and engineering.
            </p>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--text2)", fontSize: "16px", lineHeight: "1.9", margin: 0 }}>
              I build <span style={{ color: "var(--blue)", fontWeight: 500 }}>AI/ML systems</span>,{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>scalable backends</strong>, and research-driven solutions - from real-time computer vision pipelines to distributed retrieval architectures.
            </p>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--text2)", fontSize: "16px", lineHeight: "1.9", margin: 0 }}>
              Outside engineering, I lead design work at <span style={{ color: "var(--blue)", fontWeight: 500 }}>Upvision</span> and contribute to my institute&apos;s digital infrastructure - bridging creative and technical thinking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" style={{ marginTop: "8px" }}>
              {[{ value: "8.28", label: "CGPA" }, { value: "175+", label: "LeetCode" }, { value: "4+", label: "Projects" }].map(({ value, label }) => (
                <div
                  key={label}
                  className="glass"
                  style={{
                    borderRadius: "14px",
                    padding: "22px 18px",
                    textAlign: "center",
                    border: "1px solid rgba(91,143,217,0.12)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "22px", color: "var(--blue)" }}>{value}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text3)",
                      marginTop: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: "relative", display: "flex", alignItems: "center", minHeight: "100%" }}
          >
            <div style={{ position: "relative", width: "100%", paddingTop: "12px", paddingBottom: "12px" }}>
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  background: "linear-gradient(to bottom, transparent, rgba(91,143,217,0.4), transparent)",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                    style={{ position: "relative", paddingLeft: "48px" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "20px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "var(--blue)",
                        border: "2px solid var(--bg)",
                        boxShadow: "0 0 10px rgba(91,143,217,0.6)",
                        transform: "translateX(-50%)",
                      }}
                    />

                    <div
                      className="glass"
                      style={{
                        borderRadius: "14px",
                        padding: "18px 22px",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            padding: "2px 10px",
                            borderRadius: "99px",
                            border: "1px solid rgba(91,143,217,0.3)",
                            background: "rgba(91,143,217,0.08)",
                            color: "var(--blue)",
                          }}
                        >
                          {item.year}
                        </span>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "13px", color: "var(--text)" }}>{item.title}</span>
                        {("link" in item) && item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open link for ${item.title}`}
                            style={{
                              marginLeft: "auto",
                              width: "28px",
                              height: "28px",
                              borderRadius: "8px",
                              border: "1px solid rgba(91,143,217,0.18)",
                              background: "rgba(91,143,217,0.06)",
                              color: "var(--blue)",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M14 4h6m0 0v6m0-6L10 14" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M20 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h4" />
                            </svg>
                          </a>
                        )}
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text3)", lineHeight: "1.7", margin: 0 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

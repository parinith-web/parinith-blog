"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const topics = [
  "Approximate Nearest Neighbours",
  "Random Projections",
  "Dimensionality Reduction",
  "Hash Bucket Uniformity",
  "Query Latency vs Recall Trade-offs",
  "CIFAR-10 / MNIST Benchmarking",
];

const researchInterests = [
  "Scalable ML Algorithms",
  "Dimensionality Reduction",
  "Similarity Search",
  "Locality Sensitive Hashing",
  "Randomized Algorithms",
  "Clustering with Provable Guarantees",
];

const pipelineRows = [
  ["Image Input", "Feature Embedding", "Random Projection"],
  ["Hash Buckets", "ANN Retrieval"],
];

export default function Research() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="research"
      className="relative px-6 py-36 lg:py-40 overflow-hidden flex items-center min-h-screen"
      style={{ background: "var(--section-tint)" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg,transparent,rgba(91,143,217,0.2),transparent)",
        }}
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
              fontSize: "15px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            04 / Research
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(36px,6vw,60px)",
              color: "var(--text)",
              marginTop: "12px",
              letterSpacing: "-0.02em",
            }}
          >
            Deep Dive
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass"
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(91,143,217,0.18)",
              padding: "38px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.15,
                pointerEvents: "none",
                backgroundImage:
                  "linear-gradient(rgba(91,143,217,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(91,143,217,0.08) 1px,transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "26px", flexWrap: "wrap" }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "99px",
                    background: "rgba(91,143,217,0.08)",
                    border: "1px solid rgba(91,143,217,0.25)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--blue)",
                  }}
                >
                  NIT Delhi - 2026 - Present
                </span>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "99px",
                    background: "rgba(106,191,106,0.08)",
                    border: "1px solid rgba(106,191,106,0.25)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "#6abf6a",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#6abf6a",
                      boxShadow: "0 0 6px #6abf6a",
                      animation: "blink 2s infinite",
                    }}
                  />
                  Active
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "var(--text)",
                  marginBottom: "18px",
                  lineHeight: 1.3,
                }}
              >
                Locality Sensitive Hashing for <span style={{ color: "var(--blue)" }}>Image Similarity Search</span>
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text2)",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  marginBottom: "28px",
                }}
              >
                Investigating approximate nearest neighbour (ANN) search techniques using Locality Sensitive Hashing (LSH) for scalable image retrieval over high-dimensional feature spaces. Implementing and benchmarking random projection-based hashing schemes on standard image datasets.
              </p>

              <div
                className="glass"
                style={{
                  borderRadius: "10px",
                  padding: "18px 20px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  marginBottom: "26px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "16px",
                  }}
                >
                  ANN Search Pipeline
                </p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                  {pipelineRows.map((row, rowIndex) => (
                    <div key={row.join("-")} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                      {row.map((step, stepIndex) => (
                        <div key={step} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              padding: "7px 14px",
                              borderRadius: "8px",
                              border: "1px solid rgba(91,143,217,0.3)",
                              background: "rgba(91,143,217,0.06)",
                              fontFamily: "var(--font-mono)",
                              fontSize: "11px",
                              color: "var(--blue)",
                            }}
                          >
                            {step}
                          </span>
                          {stepIndex < row.length - 1 && <span style={{ color: "var(--text3)", fontSize: "12px" }}>&rarr;</span>}
                        </div>
                      ))}
                      {rowIndex < pipelineRows.length - 1 && (
                        <span style={{ color: "rgba(91,143,217,0.3)", fontSize: "14px", width: "100%", textAlign: "center", lineHeight: 1 }}>&darr;</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {topics.map((topic, index) => (
                  <div
                    key={topic}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        width: "28px",
                        height: "1px",
                        flexShrink: 0,
                        background: `linear-gradient(90deg, rgba(91,143,217,${0.75 - index * 0.08}), transparent)`,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--text2)",
                        lineHeight: 1.7,
                      }}
                    >
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px", minHeight: "100%" }}
          >
            <div className="glass" style={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", padding: "28px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "20px",
                }}
              >
                Research Interests
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {researchInterests.map((interest, i) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "var(--text2)",
                    }}
                  >
                    <span
                      style={{
                        width: "24px",
                        height: "1px",
                        flexShrink: 0,
                        background: `linear-gradient(90deg, rgba(91,143,217,${0.4 + i * 0.08}), transparent)`,
                      }}
                    />
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass" style={{ borderRadius: "16px", border: "1px solid rgba(91,143,217,0.15)", padding: "28px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "18px",
                }}
              >
                Benchmarked Datasets
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[{ name: "CIFAR-10", items: "60,000 images", dims: "3072-D" }, { name: "MNIST", items: "70,000 samples", dims: "784-D" }].map((dataset) => (
                  <div
                    key={dataset.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--blue)", margin: 0 }}>{dataset.name}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text3)", margin: "2px 0 0" }}>{dataset.items}</p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--text3)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {dataset.dims}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: "01",
    name: "Handtracking Piano",
    description:
      "Real-time computer vision piano controlled using hand tracking. Engineered using Google MediaPipe's pre-trained neural network for on-device hand landmark detection entirely client-side via WebAssembly.",
    highlights: [
      "21 hand landmark detection across skeletal keypoints",
      "Sub-50ms end-to-end inference latency",
      "Gesture-to-audio pipeline with debounced collision detection",
    ],
    stack: ["React", "TypeScript", "MediaPipe", "Tone.js", "WebAssembly", "Vite"],
    accent: "blue",
    github: "https://github.com/parinith-web/handtracking-piano",
    live: "https://github.com/parinith-web/handtracking-piano",
    tag: "Computer Vision",
  },
  {
    id: "02",
    name: "Audify",
    description:
      "Content-aware music recommendation engine trained on 10,000+ Spotify tracks using K-Means clustering over high-dimensional audio feature vectors — tempo, energy, valence, danceability.",
    highlights: [
      "K-Means over high-dimensional audio feature vectors",
      "Hybrid: cluster-based retrieval + cosine similarity ranking",
      "80% intra-cluster retrieval, 20% cross-cluster diversity",
    ],
    stack: ["Python", "Next.js", "Scikit-learn", "Spotify API", "K-Means"],
    accent: "blue",
    github: "https://github.com/parinith-web/audify",
    live: null,
    tag: "ML / Recommendation",
  },
  {
    id: "03",
    name: "PurePixels",
    description:
      "Full-stack AI-powered background removal platform using deep learning segmentation. Scalable RESTful backend with PostgreSQL for auth, image metadata, and rate limiting across 100+ concurrent sessions.",
    highlights: [
      "Deep learning segmentation pipeline",
      "Sub-5s processing latency under concurrent load",
      "Per-user daily rate limiting across 100+ sessions",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "TailwindCSS"],
    accent: "blue",
    github: "https://github.com/parinith-web/purepixels",
    live: null,
    tag: "Full Stack · AI",
  },
  {
    id: "04",
    name: "F1 Strategy Prediction Engine",
    description:
      "ML system predicting optimal Formula 1 pit strategies using FastF1 telemetry data from 200k+ laps across 20+ circuits and 4 seasons with chained multi-model architecture.",
    highlights: [
      "200k+ lap telemetry dataset from 4 seasons",
      "3 chained ML models: XGBoost + Random Forest",
      "Season-blocked cross-validation to prevent temporal leakage",
    ],
    stack: ["Python", "XGBoost", "Pandas", "Random Forest", "Optuna", "Streamlit"],
    accent: "blue",
    github: "https://github.com/parinith-web/f1-strategy-ml",
    live: null,
    tag: "ML · Data Science",
  },
];

const accentMap: Record<string, {
  border: string; text: string; badge: string; tagBg: string; highlightDot: string;
}> = {
  blue: {
    border: "hover:border-[#5b8fd9]/50",
    text: "text-[#5b8fd9]",
    badge: "bg-[#5b8fd9]/10 border-[#5b8fd9]/20 text-[#5b8fd9]",
    tagBg: "bg-[#5b8fd9]/10 text-[#5b8fd9] border-[#5b8fd9]/20",
    highlightDot: "bg-[#5b8fd9]",
  },
  purple: {
    border: "hover:border-[#5b8fd9]/50",
    text: "text-[#5b8fd9]",
    badge: "bg-accent-blue/10 border-[#5b8fd9]/20 text-[#5b8fd9]",
    tagBg: "bg-accent-blue/10 text-[#5b8fd9] border-[#5b8fd9]/20",
    highlightDot: "bg-accent-blue",
  },
  cyan: {
    border: "hover:border-accent-blue/50",
    text: "text-[#5b8fd9]",
    badge: "bg-accent-blue/10 border-accent-blue/20 text-[#5b8fd9]",
    tagBg: "bg-accent-blue/10 text-[#5b8fd9] border-accent-blue/20",
    highlightDot: "bg-accent-blue",
  },
  pink: {
    border: "hover:border-accent-blue/50",
    text: "text-[#5b8fd9]",
    badge: "bg-accent-blue/10 border-accent-blue/20 text-[#5b8fd9]",
    tagBg: "bg-accent-blue/10 text-[#5b8fd9] border-accent-blue/20",
    highlightDot: "bg-accent-blue",
  },
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(91,143,217,0.8) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[#5b8fd9] text-sm tracking-widest uppercase">
            03 / Projects
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text-primary mt-3">
            What I&apos;ve Built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const c = accentMap[project.accent];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`project-card glass rounded-2xl border border-white/5 p-7 group relative overflow-hidden transition-all duration-400 ${c.border}`}
              >

                {/* Top: tag + links */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-full border ${c.tagBg}`}
                  >
                    {project.tag}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary transition-colors"
                        aria-label="Live demo"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-display font-bold text-xl mb-3 group-hover:${c.text} transition-colors duration-300`}>
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed font-body mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs font-mono text-text-secondary">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.highlightDot}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-text-muted px-2 py-0.5 rounded border border-white/5 bg-white/2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  style={{
                    background:
                      project.accent === "blue"
                        ? "radial-gradient(circle at 80% 20%, rgba(91,143,217,0.06) 0%, transparent 60%)"
                        : project.accent === "blue"
                        ? "radial-gradient(circle at 80% 20%, rgba(91,143,217,0.06) 0%, transparent 60%)"
                        : project.accent === "blue"
                        ? "radial-gradient(circle at 80% 20%, rgba(91,143,217,0.06) 0%, transparent 60%)"
                        : "radial-gradient(circle at 80% 20%, rgba(91,143,217,0.06) 0%, transparent 60%)",
                  }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/parinith-web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-[#5b8fd9] transition-colors duration-300 font-mono text-sm group"
          >
            View all repositories on GitHub
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

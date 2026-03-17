"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    color: "blue",
    skills: ["C++", "Python", "Go", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Tools",
    icon: "⚙",
    color: "blue",
    skills: ["React", "Next.js", "FastAPI", "Flask", "Docker", "AWS", "Git", "Linux"],
  },
  {
    category: "AI / ML",
    icon: "⬡",
    color: "blue",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "MediaPipe", "LangChain"],
  },
  {
    category: "Concepts",
    icon: "◈",
    color: "blue",
    skills: ["DSA", "Computer Vision", "RAG Systems", "DBMS", "Distributed Systems"],
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  blue: {
    border: "border-[#5b8fd9]/30 hover:border-[#5b8fd9]/70",
    text: "text-[#5b8fd9]",
    bg: "bg-[#5b8fd9]/5 hover:bg-[#5b8fd9]/10",
    glow: "hover:shadow-[0_0_20px_rgba(91,143,217,0.2)]",
  },
  purple: {
    border: "border-[#5b8fd9]/30 hover:border-[#5b8fd9]/70",
    text: "text-[#5b8fd9]",
    bg: "bg-accent-blue/5 hover:bg-accent-blue/10",
    glow: "hover:shadow-[0_0_20px_rgba(91,143,217,0.2)]",
  },
  cyan: {
    border: "border-accent-blue/30 hover:border-accent-blue/70",
    text: "text-[#5b8fd9]",
    bg: "bg-accent-blue/5 hover:bg-accent-blue/10",
    glow: "hover:shadow-[0_0_20px_rgba(91,143,217,0.2)]",
  },
  pink: {
    border: "border-accent-blue/30 hover:border-accent-blue/70",
    text: "text-[#5b8fd9]",
    bg: "bg-accent-blue/5 hover:bg-accent-blue/10",
    glow: "hover:shadow-[0_0_20px_rgba(91,143,217,0.2)]",
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--section-tint-soft)" }}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(91,143,217,0.3), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(91,143,217,0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[#5b8fd9] text-sm tracking-widest uppercase">
            02 / Skills
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text-primary mt-3">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className={`glass rounded-2xl p-6 border transition-all duration-300 ${c.border} ${c.glow}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`font-mono text-lg ${c.text}`}>{group.icon}</span>
                  <h3 className={`font-display font-semibold text-base ${c.text}`}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`skill-card px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 cursor-default ${
                        hoveredSkill === skill
                          ? `${c.text} ${c.bg} ${c.border}`
                          : "text-text-secondary border-white/5 bg-white/2"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tools row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-5 border border-white/5"
        >
          <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">
            Developer Tooling
          </p>
          <div className="flex flex-wrap gap-3">
            {["Git", "Linux", "Docker", "VS Code", "Jupyter Notebook", "Figma", "Vercel", "Postman"].map(
              (tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/2 text-xs font-mono text-text-muted hover:text-text-primary hover:border-white/15 transition-all duration-200 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5b8fd9]/50" />
                  {tool}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

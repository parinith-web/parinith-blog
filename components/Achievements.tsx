"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

const platforms = [
  {
    name: "LeetCode",
    count: 175,
    suffix: "+",
    label: "Problems Solved",
    sublabel: "Algorithms · Database · CP",
    href: "https://leetcode.com/u/parinith_reddy/",
    color: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: "Codeforces + AtCoder + CodeChef",
    count: 200,
    suffix: "+",
    label: "Problems Combined",
    sublabel: "Competitive Programming",
    color: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9A1.5 1.5 0 0 1 1.5 7.5zm9-4.5A1.5 1.5 0 0 1 15 4.5v15A1.5 1.5 0 0 1 13.5 21h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5A1.5 1.5 0 0 1 22.5 21h-3A1.5 1.5 0 0 1 18 19.5V12a1.5 1.5 0 0 1 1.5-1.5z" />
      </svg>
    ),
  },
  {
    name: "Total",
    count: 375,
    suffix: "+",
    label: "DSA Problems",
    sublabel: "Across all platforms",
    color: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  blue: { text: "text-[#5b8fd9]", border: "border-[#5b8fd9]/30", bg: "bg-[#5b8fd9]/10" },
  purple: { text: "text-[#5b8fd9]", border: "border-[#5b8fd9]/30", bg: "bg-accent-blue/10" },
  cyan: { text: "text-[#5b8fd9]", border: "border-accent-blue/30", bg: "bg-accent-blue/10" },
};

function StatCard({
  platform,
  active,
}: {
  platform: (typeof platforms)[0];
  active: boolean;
}) {
  const count = useCountUp(platform.count, active);
  const c = colorMap[platform.color];
  const isLinked = Boolean(platform.href);

  return (
    <motion.a
      href={platform.href ?? undefined}
      target={isLinked ? "_blank" : undefined}
      rel={isLinked ? "noopener noreferrer" : undefined}
      className={`glass rounded-2xl border p-8 text-center relative overflow-hidden group transition-all duration-300 ${c.border} ${
        isLinked ? "hover:scale-[1.03] cursor-pointer" : ""
      }`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(91,143,217,0.08) 0%, transparent 70%)",
        }}
      />

      <div className={`inline-flex p-3 rounded-xl ${c.bg} ${c.text} mb-5`}>{platform.icon}</div>

      <div className={`font-display font-extrabold text-5xl md:text-6xl ${c.text} mb-2`}>
        {count}
        <span className="text-3xl">{platform.suffix}</span>
      </div>
      <p className="font-body text-text-primary font-medium mb-1">{platform.label}</p>
      <p className="font-mono text-text-muted text-xs">{platform.name}</p>
      <p className="font-mono text-text-muted/60 text-xs mt-1">{platform.sublabel}</p>
    </motion.a>
  );
}

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="achievements" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[#5b8fd9] text-sm tracking-widest uppercase">05 / Achievements</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text-primary mt-3">Problem Solving</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {platforms.map((platform) => (
            <StatCard key={platform.name} platform={platform} active={inView} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass rounded-2xl border border-white/5 p-6"
        >
          <div className="flex flex-wrap items-center gap-4 justify-between">
            <div>
              <p className="font-display font-semibold text-text-primary mb-1">
                CGPA: <span className="text-gradient-blue">8.28 / 10</span>
              </p>
              <p className="text-text-muted text-sm font-body">B.Tech ECE · National Institute of Technology, Delhi</p>
            </div>
            <div className="flex gap-3">
              {["DSA", "Algorithms", "Database", "Competitive"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/5 text-text-muted text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

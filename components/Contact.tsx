"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contacts = [
  {
    label: "Email",
    value: "parinithreddymavurapu@gmail.com",
    href: "mailto:parinithreddymavurapu@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "blue",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/parinith-reddy",
    href: "https://www.linkedin.com/in/parinith-reddy",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "blue",
  },
  {
    label: "GitHub",
    value: "github.com/parinith-web",
    href: "https://github.com/parinith-web",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "blue",
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  blue: { text: "text-[#5b8fd9]", border: "border-[#5b8fd9]/30 hover:border-[#5b8fd9]/60", bg: "bg-[#5b8fd9]/10" },
  purple: { text: "text-[#5b8fd9]", border: "border-[#5b8fd9]/30 hover:border-[#5b8fd9]/60", bg: "bg-accent-blue/10" },
  cyan: { text: "text-[#5b8fd9]", border: "border-accent-blue/30 hover:border-accent-blue/60", bg: "bg-accent-blue/10" },
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="contact-section" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-[10%] bottom-[10%] w-[28rem] h-[28rem] rounded-full opacity-10"
          animate={{
            background: [
              "radial-gradient(circle, rgba(91,143,217,0.48) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(91,143,217,0.48) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(91,143,217,0.48) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-[1720px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-0 items-end">
          <div className="max-w-4xl pl-4 lg:pl-12 xl:pl-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-4"
            >
              <span className="font-mono text-sm text-[#5b8fd9] tracking-widest uppercase">06 / Contact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-6xl text-text-primary mb-5 text-left tracking-[-0.04em]"
            >
              Let&apos;s Connect
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-secondary text-base xl:text-[1.18rem] font-body leading-relaxed mb-12 max-w-2xl text-left"
            >
              I&apos;m open to internships, research collaborations, and full-time roles in AI/ML and backend engineering. Feel free to reach out.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contacts.map((contact, i) => {
                const c = colorMap[contact.color];
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`glass rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-300 group ${c.border}`}
                  >
                    <div className={`inline-flex p-2.5 rounded-xl ${c.bg} ${c.text} w-fit group-hover:scale-110 transition-transform`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className={`font-display font-semibold text-[1.05rem] ${c.text} mb-1`}>{contact.label}</p>
                      <p className="text-text-muted text-[11px] font-mono truncate">{contact.value}</p>
                    </div>
                <div className={`mt-auto flex items-center gap-1 text-[11px] font-mono ${c.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      Open
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-9 flex items-center gap-2 font-mono text-base"
              style={{ color: "var(--blue)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              New Delhi, India · +91 83285 34237
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative hidden lg:flex justify-end items-end min-h-[38rem] xl:min-h-[42rem] pointer-events-none"
          >
            <div className="absolute bottom-10 right-8 xl:right-16 w-[26rem] h-[26rem] xl:w-[32rem] xl:h-[32rem] rounded-full bg-[#5b8fd9]/18 blur-[110px]" />
            <div className="relative w-[31rem] h-[31rem] xl:w-[37.5rem] xl:h-[37.5rem] -mr-4 xl:mr-0 -mb-2">
              <Image
                src="/avatar.png"
                alt="Parinith avatar"
                fill
                className="object-contain object-right-bottom"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

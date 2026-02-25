"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education, experiences } from "@/data/site";

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
] as const;

type TabId = (typeof tabs)[number]["id"];

/* ── animation variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.08, staggerDirection: -1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 24 },
  },
  exit: { opacity: 0, y: -20, scale: 0.96, transition: { duration: 0.2 } },
};

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative mx-auto max-w-5xl px-5 py-24"
    >
      <SectionHeading
        eyebrow="Timeline"
        title="Experience & Education"
        description="My professional journey and academic background in engineering."
      />

      {/* ── Tab Switcher ── */}
      <div className="mx-auto mb-14 flex w-fit rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-200 ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/15 to-cyan-500/20 border border-white/10 shadow-lg shadow-cyan-500/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Timeline Content ── */}
      <div className="relative mx-auto max-w-2xl">
        {/* Animated vertical line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/[0.06]">
          <motion.div
            className="w-full bg-gradient-to-b from-cyan-400/60 via-purple-400/40 to-transparent"
            style={{ height: lineHeight }}
          />
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div
              key="experience"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] top-8 z-10 flex items-center justify-center">
                    <span className="absolute h-5 w-5 rounded-full bg-cyan-400/20 animate-ping" />
                    <span className="relative h-[18px] w-[18px] rounded-full border-[3px] border-zinc-950 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/20 hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.15)] hover:-translate-y-0.5">
                    {/* Shine sweep */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -inset-full top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent translate-x-[-200%] group-hover:animate-[shine_1.5s_ease-in-out]" />
                    </div>

                    {/* Top row: badge + location */}
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 border border-cyan-400/20">
                        <Calendar className="h-3 w-3" />
                        {item.duration}
                      </span>
                      {item.location && (
                        <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {item.role}
                    </h4>
                    <p className="mt-0.5 text-sm font-medium text-cyan-200/80">
                      {item.company}
                    </p>

                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="education"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative pl-14"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] top-8 z-10 flex items-center justify-center">
                    <span className="absolute h-5 w-5 rounded-full bg-purple-400/20 animate-ping" />
                    <span className="relative h-[18px] w-[18px] rounded-full border-[3px] border-zinc-950 bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.5)]" />
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/20 hover:shadow-[0_8px_40px_-12px_rgba(192,132,252,0.15)] hover:-translate-y-0.5">
                    {/* Shine sweep */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -inset-full top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent translate-x-[-200%] group-hover:animate-[shine_1.5s_ease-in-out]" />
                    </div>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300 border border-purple-400/20">
                        <Calendar className="h-3 w-3" />
                        {item.duration}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-purple-100 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="mt-0.5 text-sm font-medium text-purple-200/80">
                      {item.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/site";

const groupIcons: Record<string, string> = {
  "Electronics & Embedded": "🔧",
  Programming: "💻",
  "Web & Backend": "🌐",
  Databases: "🗄️",
};

const groupColors: Record<string, { bar: string; glow: string; border: string; bg: string }> = {
  "Electronics & Embedded": {
    bar: "from-cyan-400 to-cyan-500",
    glow: "shadow-cyan-500/30",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
  },
  Programming: {
    bar: "from-purple-400 to-purple-500",
    glow: "shadow-purple-500/30",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
  },
  "Web & Backend": {
    bar: "from-blue-400 to-indigo-500",
    glow: "shadow-blue-500/30",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
  },
  Databases: {
    bar: "from-emerald-400 to-teal-500",
    glow: "shadow-emerald-500/30",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
  },
};

const defaultColor = {
  bar: "from-cyan-400 to-purple-500",
  glow: "shadow-cyan-500/30",
  border: "border-white/10",
  bg: "bg-white/5",
};

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Technical depth across embedded to full-stack"
        description="A focused skill matrix shaped by projects in IoT, firmware, backend architecture, and AI-assisted automation."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => {
          const colors = groupColors[group.title] ?? defaultColor;
          const icon = groupIcons[group.title] ?? "📦";

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border ${colors.border} ${colors.bg} p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20`}
            >
              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/[0.02] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.bg} border ${colors.border} text-xl`}>
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: groupIndex * 0.08 + skillIndex * 0.06 }}
                  >
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-zinc-200">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.08 + skillIndex * 0.06 + 0.3 }}
                        className="tabular-nums text-zinc-500"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: groupIndex * 0.08 + skillIndex * 0.06 }}
                        className={`h-full rounded-full bg-gradient-to-r ${colors.bar} shadow-sm ${colors.glow}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

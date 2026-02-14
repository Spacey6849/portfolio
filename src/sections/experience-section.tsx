"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { education, experiences } from "@/data/site";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Timeline"
        title="Experience & Education"
        description="My professional journey and academic background in engineering."
      />

      <div className="grid gap-12 md:grid-cols-2">
        {/* Experience Column */}
        <div className="relative space-y-8 pl-8">
          <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-400/50 to-purple-500/50" />

          <h3 className="mb-6 text-2xl font-bold text-white relative -left-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xl">💼</span>
            Experience
          </h3>

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
            >
              <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] border border-black" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">{item.duration}</span>
                <h4 className="text-lg font-bold text-white">{item.role}</h4>
                <p className="text-sm font-medium text-cyan-200">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Column */}
        <div className="relative space-y-8 pl-8">
          <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-purple-500/50 to-cyan-400/50" />

          <h3 className="mb-6 text-2xl font-bold text-white relative -left-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xl">🎓</span>
            Education
          </h3>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
            >
              <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.8)] border border-black" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{item.duration}</span>
                <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                <p className="text-sm font-medium text-zinc-300">{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

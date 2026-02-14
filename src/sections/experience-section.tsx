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
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 text-xl shadow-inner">💼</div>
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>

          <div className="relative border-l border-white/10 ml-5 space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group pl-8"
              >
                <div className="absolute -left-[6.5px] top-4 h-3 w-3 rounded-full bg-cyan-400 border border-zinc-950 shadow-[0_0_8px_rgba(34,211,238,0.6)] ring-4 ring-zinc-950" />

                <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-5 transition-all hover:bg-white/[0.05] hover:border-white/10 hover:shadow-lg hover:shadow-cyan-900/10">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-purple-300">{item.duration}</span>
                  <h4 className="text-lg font-bold text-white">{item.role}</h4>
                  <p className="font-medium text-cyan-100/90">{item.company}</p>
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 text-xl shadow-inner">🎓</div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="relative border-l border-white/10 ml-5 space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group pl-8"
              >
                <div className="absolute -left-[6.5px] top-4 h-3 w-3 rounded-full bg-purple-400 border border-zinc-950 shadow-[0_0_8px_rgba(192,132,252,0.6)] ring-4 ring-zinc-950" />

                <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-5 transition-all hover:bg-white/[0.05] hover:border-white/10 hover:shadow-lg hover:shadow-purple-900/10">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-cyan-300">{item.duration}</span>
                  <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                  <p className="font-medium text-zinc-300">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

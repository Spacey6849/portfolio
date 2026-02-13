"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/site";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Achievements and professional growth"
        description="A timeline of milestones spanning internships, certifications, and high-pressure innovation challenges."
      />

      <div className="relative mx-auto max-w-3xl pl-8">
        <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-400/70 to-purple-500/70" />
        <div className="space-y-8">
          {experiences.map((item, itemIndex) => (
            <motion.article
              key={`${item.title}-${item.year}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
              <p className="text-xs uppercase tracking-wider text-purple-300">{item.year}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{item.subtitle}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

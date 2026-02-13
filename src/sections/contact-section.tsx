"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { socialLinks } from "@/data/site";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl px-5 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s build impactful systems together"
        description="Open to internships, collaborations, and engineering opportunities in embedded, IoT, and AI-enabled product development."
      />

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-cyan-300/60"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-cyan-300/60"
          />
        </div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your message"
          className="mt-4 w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-cyan-300/60"
        />

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ y: -2 }}
          type="submit"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-zinc-950"
        >
          {sent ? "Message Sent" : "Send Message"} <Send size={16} />
        </motion.button>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
          <a href={socialLinks.email} className="inline-flex items-center gap-2 hover:text-white">
            <Mail size={16} /> Email
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Github size={16} /> GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </motion.form>
    </section>
  );
}

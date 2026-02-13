"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import DarkVeil from "@/components/dark-veil";
import { rotatingRoles } from "@/data/site";

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % rotatingRoles.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-30 pb-20 md:min-h-screen md:pt-36 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300">
          Future-ready Engineering Portfolio
        </p>

        <h1 className="text-balance bg-gradient-to-r from-cyan-200 via-purple-200 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Hi, I&apos;m Moses Rodrigues
        </h1>

        <p className="mt-4 text-lg text-zinc-200 md:text-2xl">
          Electronics &amp; Computer Engineering Student
        </p>

        <div className="mt-6 flex h-10 items-center justify-center overflow-hidden text-base md:text-xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingRoles[index]}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="font-medium text-purple-200/90"
            >
              {rotatingRoles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
          >
            View Projects <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="/resume.txt"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
          >
            Download Resume <Download size={16} />
          </a>
        </div>
      </motion.div>

    </section>
  );
}

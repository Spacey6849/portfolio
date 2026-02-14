"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 150);
    setScrolled(latest > 20);
  });

  // Track active section via IntersectionObserver
  const setupObserver = useCallback(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, [setupObserver]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-4 z-50 mx-auto w-[min(92%,56rem)] rounded-full border px-5 py-2.5 backdrop-blur-xl transition-colors duration-300 ${scrolled
        ? "border-white/15 bg-zinc-950/70 shadow-lg shadow-black/20"
        : "border-white/10 bg-zinc-950/40"
        }`}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group relative flex items-center text-sm font-bold text-white"
        >
          <span className="transition-colors group-hover:text-cyan-300">Moses Rodrigues</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ${isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button — desktop */}
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-1.5 text-xs font-semibold text-zinc-950 transition-opacity hover:opacity-90 md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-full border border-white/15 p-2 text-zinc-200 transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-1 border-t border-white/10 pt-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                        ? "bg-white/10 text-white"
                        : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2.5 text-center text-sm font-semibold text-zinc-950"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [projectsHovered, setProjectsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useEffect(() => setMounted(true), []);

  // Track scrolled state for header styling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Track active section via IntersectionObserver
  const setupObserver = useCallback(() => {
    if (pathname !== "/") {
      setActiveSection("#projects");
      return () => {};
    }

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
  }, [pathname]);

  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, [setupObserver]);

  const resolveHref = useCallback(
    (href: string) => {
      if (pathname === "/") return href;
      return `/${href}`;
    },
    [pathname]
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // Close menu on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      {/* ─── Backdrop overlay (rendered via portal so it's NOT clipped by the header) ─── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* ─── Header bar ─── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed inset-x-0 top-4 z-50 mx-auto w-[min(92%,56rem)] border px-5 py-2.5 backdrop-blur-xl transition-all duration-300 ${open
            ? "rounded-2xl border-white/15 bg-zinc-950/90 shadow-2xl shadow-black/40"
            : "rounded-full"
          } ${!open && scrolled
            ? "border-white/15 bg-zinc-950/70 shadow-lg shadow-black/20"
            : !open
              ? "border-white/10 bg-zinc-950/40"
              : ""
          }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href={resolveHref("#home")}
            className="group relative flex items-center text-sm font-bold text-white"
          >
            <span className="transition-colors group-hover:text-cyan-300">
              Moses Rodrigues
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              const isProjects = link.href === "#projects";
              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (isProjects) setProjectsHovered(true);
                  }}
                  onMouseLeave={() => {
                    if (isProjects) setProjectsHovered(false);
                  }}
                >
                  <a
                    href={resolveHref(link.href)}
                    className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ${isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-200"
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>

                  <AnimatePresence>
                    {isProjects && projectsHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.92, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, scale: 0.96, filter: "blur(4px)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 24, mass: 0.6 }}
                        className="absolute left-1/2 top-[calc(100%+0.7rem)] z-50 w-48 -translate-x-1/2 rounded-2xl border border-cyan-300/30 bg-zinc-950/95 p-2 shadow-[0_20px_50px_-20px_rgba(34,211,238,0.7)] backdrop-blur-xl"
                      >
                        <a
                          href="/projects"
                          className="block rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 px-3 py-2 text-center text-xs font-semibold text-cyan-100 transition-all duration-200 hover:from-cyan-400/30 hover:to-purple-500/30 hover:text-white"
                        >
                          View All Projects
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* CTA Button — desktop */}
          <a
            href={resolveHref("#contact")}
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

        {/* ─── Mobile menu panel (inside header, but now it's rounded-2xl when open) ─── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <ul className="mt-3 space-y-1 border-t border-white/10 pt-3 pb-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={resolveHref(link.href)}
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
                    href="/projects"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl bg-cyan-400/15 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/25 hover:text-cyan-100"
                  >
                    View All Projects
                  </a>
                </li>
                <li>
                  <a
                    href={resolveHref("#contact")}
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
    </>
  );
}

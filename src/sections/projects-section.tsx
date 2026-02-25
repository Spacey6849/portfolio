"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink, Github, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ImageLightbox } from "@/components/image-lightbox";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/data/site";

type Project = (typeof featuredProjects)[number];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages: string[] = activeProject
    ? ((activeProject as any).gallery ?? [])
    : [];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
      ),
    [galleryImages.length]
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % galleryImages.length : null
      ),
    [galleryImages.length]
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-5">
      <SectionHeading
        eyebrow="Projects"
        title="Innovation built through real systems"
        description="A selected portfolio of embedded, IoT, and full-stack solutions designed for measurable impact."
      />

      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, itemIndex) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: itemIndex * 0.1 }}
            whileHover={{ y: -6 }}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]"
            onClick={() => setActiveProject(project)}
          >
            {/* Image Holder */}
            <div
              className={`relative h-40 w-full overflow-hidden bg-gradient-to-br sm:h-44 ${project.gradient}`}
            >
              {(project as any).cardImage ? (
                <Image
                  src={(project as any).cardImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.08),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-60 transition-transform duration-500 group-hover:scale-125">
                      {project.icon}
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </>
              )}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="text-base font-semibold text-white sm:text-lg">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-3">{project.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] text-cyan-200 sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 sm:pt-5">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm text-purple-300 transition hover:text-purple-200"
                >
                  View Details <ExternalLink size={14} />
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-zinc-400 transition hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ─── Full-Screen Modal ─── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-4 md:p-8"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl border border-white/15 bg-zinc-950/95 shadow-2xl sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-zinc-900/80 p-2 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white sm:right-4 sm:top-4 sm:p-2.5"
                aria-label="Close project details"
              >
                <X size={16} className="sm:h-[18px] sm:w-[18px]" />
              </button>

              <div className="flex flex-col md:grid md:grid-cols-2">
                {/* ─── Left Column ─── */}
                <div className="border-b border-white/10 md:border-b-0 md:border-r">
                  {/* Hero Image */}
                  <div
                    className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${activeProject.gradient} sm:h-56 md:h-64 md:rounded-tl-3xl`}
                  >
                    {(activeProject as any).cardImage ? (
                      <Image
                        src={(activeProject as any).cardImage}
                        alt={activeProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_60%)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-7xl opacity-50">{activeProject.icon}</span>
                        </div>
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/90 to-transparent" />
                  </div>

                  {/* Details below image */}
                  <div className="p-4 sm:p-6">
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {activeProject.details}
                    </p>

                    {/* Key Features */}
                    <div className="mt-4 sm:mt-5">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {activeProject.features.map((f) => (
                          <span
                            key={f}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-zinc-300 sm:px-3 sm:py-1 sm:text-xs"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Gallery thumbnails */}
                    {(activeProject as any).gallery && (activeProject as any).gallery.length > 0 && (
                      <div className="mt-5 sm:mt-6">
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          More Photos & Video
                        </h4>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {(activeProject as any).gallery.map((img: string, i: number) => (
                            <div
                              key={i}
                              className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-white/10 transition-all duration-200 hover:border-cyan-400/40 hover:ring-1 hover:ring-cyan-400/20 sm:rounded-xl"
                              onClick={() => setLightboxIndex(i)}
                            >
                              <Image
                                src={img}
                                alt={`${activeProject.title} screenshot ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-110"
                                sizes="(max-width: 640px) 45vw, 150px"
                              />
                              <div className="absolute inset-0 bg-black/0 transition-colors duration-200 hover:bg-black/10" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* ─── Right Column ─── */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl font-bold text-white sm:text-2xl">{activeProject.title}</h2>

                  {/* Meta info */}
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-zinc-400 sm:gap-4">
                    <span className="flex items-center gap-1.5">
                      <Star size={14} className="text-cyan-400" />
                      {activeProject.role}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-purple-400" />
                      {activeProject.duration}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:mt-5">
                    {activeProject.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 sm:mt-6">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {activeProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan-200 sm:px-3 sm:py-1 sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 sm:mt-6">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Highlights
                    </h4>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {activeProject.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-zinc-300 sm:gap-2.5"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                    {(activeProject as any).live && (
                      <a
                        href={(activeProject as any).live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 ${(activeProject as any).live ? "border border-white/15 text-zinc-300 hover:bg-white/10" : "bg-gradient-to-r from-cyan-400 to-purple-500 text-zinc-950"}`}
                    >
                      <Github size={16} /> View Repository
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 sm:px-5 sm:py-2.5"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Zoomable Lightbox ─── */}
      <ImageLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        projectTitle={activeProject?.title}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      {/* View All Projects Button */}
      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-zinc-200 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white sm:px-7 sm:py-3"
        >
          View All Projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

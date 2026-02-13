"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowLeft,
    Calendar,
    ExternalLink,
    Github,
    ImageIcon,
    Star,
    Wrench,
    X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { allProjects } from "@/data/site";

type Project = (typeof allProjects)[number];

export default function ProjectsPage() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    return (
        <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
            {/* Fixed top bar */}
            <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <ArrowLeft size={14} /> Back to Home
                    </Link>
                    <div className="h-5 w-px bg-white/10" />
                    <h1 className="text-sm font-medium text-zinc-400">All Projects</h1>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-5 pb-20 pt-28">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                        Portfolio
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        All Projects
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
                        A complete collection of embedded systems, IoT, and full-stack projects
                        I&apos;ve built across experimentation, hackathons, and production deployments.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allProjects.map((project, idx) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.07 }}
                            whileHover={{ y: -6 }}
                            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]"
                            onClick={() => setActiveProject(project)}
                        >
                            {/* Image Holder */}
                            <div
                                className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
                            >
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
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                                {(project as any).wip && (
                                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur-sm">
                                        <Wrench size={12} /> In Development
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                <p className="mt-1 text-xs text-zinc-500">{project.role} · {project.duration}</p>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    {project.summary}
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-5">
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
            </main>

            {/* ─── Full-Screen 2-Column Modal ─── */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md md:p-8"
                        onClick={() => setActiveProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 32, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 24, scale: 0.97 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-zinc-950/95 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                type="button"
                                onClick={() => setActiveProject(null)}
                                className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-zinc-900/80 p-2.5 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>

                            <div className="grid md:grid-cols-2">
                                {/* Left Column */}
                                <div className="border-b border-white/10 md:border-b-0 md:border-r">
                                    <div
                                        className={`relative h-56 w-full overflow-hidden bg-gradient-to-br ${activeProject.gradient} md:h-64 md:rounded-tl-3xl`}
                                    >
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
                                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/90 to-transparent" />
                                    </div>

                                    <div className="p-6">
                                        <p className="text-sm leading-relaxed text-zinc-300">
                                            {activeProject.details}
                                        </p>

                                        <div className="mt-5">
                                            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                                Key Features
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {activeProject.features.map((f) => (
                                                    <span
                                                        key={f}
                                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                                                    >
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                                More Photos & Video
                                            </h4>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[1, 2, 3].map((i) => (
                                                    <div
                                                        key={i}
                                                        className={`flex aspect-video items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${activeProject.gradient} opacity-60`}
                                                    >
                                                        <ImageIcon size={20} className="text-white/40" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="p-6 md:p-8">
                                    <h2 className="text-2xl font-bold text-white">{activeProject.title}</h2>

                                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-400">
                                        <span className="flex items-center gap-1.5">
                                            <Star size={14} className="text-cyan-400" />
                                            {activeProject.role}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-purple-400" />
                                            {activeProject.duration}
                                        </span>
                                    </div>

                                    <p className="mt-5 text-sm leading-relaxed text-zinc-300">
                                        {activeProject.summary}
                                    </p>

                                    <div className="mt-6">
                                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                            Highlights
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {activeProject.highlights.map((h) => (
                                                <li
                                                    key={h}
                                                    className="flex items-start gap-2.5 text-sm text-zinc-300"
                                                >
                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {(activeProject as any).wip && (
                                        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-200">
                                            <Wrench size={14} /> Under Development
                                        </div>
                                    )}

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        {(activeProject as any).live && (
                                            <a
                                                href={(activeProject as any).live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
                                            >
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                        )}
                                        <a
                                            href={activeProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 ${(activeProject as any).live ? "border border-white/15 text-zinc-300 hover:bg-white/10" : "bg-gradient-to-r from-cyan-400 to-purple-500 text-zinc-950"}`}
                                        >
                                            <Github size={16} /> View Repository
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => setActiveProject(null)}
                                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10"
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
        </div>
    );
}

"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { allProjects } from "@/data/site";

// Dynamically import CircularGallery with SSR disabled (uses WebGL/canvas)
const CircularGallery = dynamic(
  () => import("@/components/circular-gallery"),
  { ssr: false }
);

/** Build gallery items from project card images */
const galleryItems = allProjects
  .filter((p) => (p as any).cardImage)
  .map((p) => ({
    image: (p as any).cardImage as string,
    text: p.title,
  }));

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      {/* Section heading */}
      <SectionHeading
        eyebrow="Gallery"
        title="Project showcase"
        description="Scroll or drag through an interactive 3D gallery of my projects."
      />

      {/* Gallery container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ height: "600px", position: "relative" }}
        className="mt-10"
      >
        <CircularGallery
          items={galleryItems}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </motion.div>

      {/* Subtle hint text */}
      <p className="mt-4 text-center text-xs text-zinc-500 tracking-wider uppercase">
        Drag or scroll to explore
      </p>
    </section>
  );
}

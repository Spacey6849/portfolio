"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import BlobCursor from "@/components/blob-cursor";


export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen overflow-clip bg-zinc-950 text-zinc-100">

        <BlobCursor
          blobType="circle"
          fillColor="#5227FF"
          trailCount={3}
          sizes={[30, 50, 35]}
          innerSizes={[10, 15, 12]}
          innerColor="rgba(255,255,255,0.6)"
          opacities={[0.4, 0.35, 0.3]}
          shadowColor="rgba(0,0,0,0.5)"
          shadowBlur={3}
          shadowOffsetX={5}
          shadowOffsetY={5}
          filterStdDeviation={20}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={0}
        />

        <Navbar />

        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10"
        >
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </motion.main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

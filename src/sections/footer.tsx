import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-[min(92%,72rem)] flex-col items-center justify-between gap-4 text-sm text-zinc-400 md:flex-row">
        <p>Built with Next.js &amp; ❤️</p>
        <div className="flex items-center gap-4">
          <a href={socialLinks.email} aria-label="Email" className="hover:text-white">
            <Mail size={16} />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
            <Github size={16} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

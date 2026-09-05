import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">

      <div className="section-container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Kaustav Nandi.
          All rights reserved.
        </p>

        <div className="flex gap-4">

          <a
            href="#"
            className="social-button"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="#"
            className="social-button"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

        </div>

      </div>

    </footer>
  );
}
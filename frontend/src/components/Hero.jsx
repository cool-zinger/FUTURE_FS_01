import {
  ArrowDown,
  Download,
  Github,
  Linkedin
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-grid" />

        <div className="glow glow-one" />
        <div className="glow glow-two" />
      </div>

      <div className="section-container pt-24">
        <div className="max-w-4xl">

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-indigo-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl">
            {personalInfo.name}
            <span className="text-gradient">.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-zinc-300 sm:text-3xl">
            {personalInfo.headline}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {personalInfo.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <button
              onClick={scrollToProjects}
              className="primary-button"
            >
              View My Work
              <ArrowDown size={18} />
            </button>

            <a
              href="/resume.pdf"
              download
              className="secondary-button"
            >
              Download Resume
              <Download size={18} />
            </a>

          </div>

          <div className="mt-10 flex items-center gap-4">

            <a
              href="#"
              aria-label="GitHub"
              className="social-button"
            >
              <Github size={20} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="social-button"
            >
              <Linkedin size={20} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
import {
  ArrowUpRight,
  Github
} from "lucide-react";

import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
    >
      <div className="section-container">

        <div className="section-heading">
          <p className="section-eyebrow">
            Selected Work
          </p>

          <h2 className="section-title">
            Projects that solve
            <span className="text-gradient">
              {" "}real problems.
            </span>
          </h2>

          <p className="section-description">
            A selection of projects covering computer vision,
            artificial intelligence, databases and safety-focused
            applications.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {projects.map((project, index) => (

            <article
              key={project.id}
              className="project-card group"
            >

              <div className="flex items-center justify-between">

                <span className="project-number">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  className="text-zinc-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  size={24}
                />

              </div>

              <div className="mt-10">

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

              </div>

              <ul className="mt-6 space-y-2">

                {project.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm leading-6 text-zinc-500"
                  >
                    • {detail}
                  </li>
                ))}

              </ul>

              <div className="mt-7 flex flex-wrap gap-2">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-8 flex gap-3">

                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={17} />
                  Live Demo
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}
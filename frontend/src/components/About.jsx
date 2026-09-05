import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
    >
      <div className="section-container">

        <div className="section-heading">
          <p className="section-eyebrow">
            About Me
          </p>

          <h2 className="section-title">
            Building with
            <span className="text-gradient">
              {" "}curiosity.
            </span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">

          <div>
            <p className="text-lg leading-9 text-zinc-400">
              {personalInfo.summary}
            </p>
          </div>

          <div className="about-card">

            <div>
              <p className="text-sm text-zinc-500">
                Location
              </p>

              <p className="mt-1 text-white">
                {personalInfo.location}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Email
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-1 block text-white hover:text-indigo-400"
              >
                {personalInfo.email}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
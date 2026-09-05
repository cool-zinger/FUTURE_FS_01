import {
  GraduationCap,
  Code2,
  Trophy,
  BookOpen
} from "lucide-react";

import {
  education,
  currentLearning,
  achievements
} from "../data/portfolioData";

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-padding"
    >
      <div className="section-container">

        <div className="section-heading">
          <p className="section-eyebrow">
            Resume
          </p>

          <h2 className="section-title">
            My
            <span className="text-gradient">
              {" "}journey.
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Education */}
          <div className="resume-panel">

            <div className="resume-heading">
              <GraduationCap size={22} />
              <h3>Education</h3>
            </div>

            <div className="timeline">

              {education.map((item) => (

                <div
                  key={item.institution}
                  className="timeline-item"
                >
                  <div className="timeline-dot" />

                  <p className="text-sm text-indigo-400">
                    {item.type}
                  </p>

                  <h4 className="mt-1 text-xl font-semibold text-white">
                    {item.institution}
                  </h4>

                  <p className="mt-2 text-zinc-400">
                    {item.program}
                  </p>
                </div>

              ))}

            </div>

          </div>

          {/* Learning */}
          <div className="resume-panel">

            <div className="resume-heading">
              <BookOpen size={22} />
              <h3>Currently Learning</h3>
            </div>

            <div className="mt-7 space-y-4">

              {currentLearning.map((item, index) => (

                <div
                  key={item}
                  className="learning-item"
                >
                  <span>
                    0{index + 1}
                  </span>

                  <p>
                    {item}
                  </p>
                </div>

              ))}

            </div>

          </div>

          {/* Achievement */}
          <div className="resume-panel">

            <div className="resume-heading">
              <Trophy size={22} />
              <h3>Achievement</h3>
            </div>

            {achievements.map((achievement) => (

              <div
                key={achievement.title}
                className="mt-7"
              >
                <h4 className="text-xl font-semibold text-white">
                  {achievement.title}
                </h4>

                <p className="mt-3 leading-7 text-zinc-400">
                  {achievement.description}
                </p>
              </div>

            ))}

          </div>

          {/* Focus */}
          <div className="resume-panel">

            <div className="resume-heading">
              <Code2 size={22} />
              <h3>Professional Focus</h3>
            </div>

            <p className="mt-7 leading-8 text-zinc-400">
              Building practical solutions through artificial
              intelligence, computer vision, software development,
              cybersecurity, automation and emerging technologies.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
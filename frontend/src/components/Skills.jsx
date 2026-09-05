import { skills } from "../data/portfolioData";

const categories = [
  ["Programming", skills.programming],
  ["AI & Computer Vision", skills.ai],
  ["Core Computer Science", skills.computerScience],
  ["Databases", skills.databases],
  ["Cybersecurity", skills.cybersecurity],
  ["Engineering Interests", skills.engineering]
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
    >
      <div className="section-container">

        <div className="section-heading">
          <p className="section-eyebrow">
            Technical Skills
          </p>

          <h2 className="section-title">
            Tools I
            <span className="text-gradient">
              {" "}work with.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {categories.map(([category, items]) => (

            <div
              key={category}
              className="skill-card"
            >

              <h3 className="text-lg font-semibold text-white">
                {category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
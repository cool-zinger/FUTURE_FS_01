function Achievement() {
  const achievements = [
    {
      title: "Cybersecurity Competition",
      description:
        "Secured 2nd position in a cybersecurity competition, demonstrating problem-solving and technical skills.",
    },
    {
      title: "AI & Software Development",
      description:
        "Built multiple practical software and AI projects using Python, MySQL, OpenCV, React, and Node.js.",
    },
    {
      title: "Project Development",
      description:
        "Developed projects including an Airport Management System, AI traffic violation detection system, and AI-based healthcare applications.",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold uppercase tracking-wider">
            Achievements
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            Milestones & Achievements
          </h2>

          <p className="text-gray-400 mt-4">
            Some highlights from my technical and development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <div className="text-3xl mb-4">
                🏆
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {achievement.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievement;
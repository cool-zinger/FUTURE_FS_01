function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section
      id="resume"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            Resume
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            My Resume
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore my technical skills, projects, achievements and professional
            development journey.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-white mb-5">
              Technical Profile
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                <span className="text-white font-semibold">
                  Development:
                </span>{" "}
                React, JavaScript, HTML, CSS, Node.js and Express.
              </p>

              <p>
                <span className="text-white font-semibold">
                  Programming:
                </span>{" "}
                Python and SQL.
              </p>

              <p>
                <span className="text-white font-semibold">
                  Database:
                </span>{" "}
                MySQL.
              </p>

              <p>
                <span className="text-white font-semibold">
                  AI & Computer Vision:
                </span>{" "}
                Artificial Intelligence, OpenCV and intelligent application
                development.
              </p>

              <p>
                <span className="text-white font-semibold">
                  Tools:
                </span>{" "}
                Git, GitHub, VS Code and Linux.
              </p>

            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">

            <div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Download Resume
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Download my resume to learn more about my projects, technical
                experience, achievements and skills.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-6 py-3 border border-slate-700 text-white rounded-lg hover:border-blue-500 hover:text-blue-500 transition"
              >
                View Resume
              </a>

              <a
                href={resumeUrl}
                download="Kaustav_Nandi_Resume.pdf"
                className="text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;
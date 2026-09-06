function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="max-w-4xl">

          <p className="text-blue-500 uppercase tracking-[0.3em] font-semibold mb-4">
            Full Stack Developer • AI Enthusiast
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Kaustav Nandi
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-5">
            Building intelligent applications and modern digital experiences.
          </h2>

          <p className="text-gray-400 mt-7 text-lg leading-relaxed max-w-3xl">
            I work with Python, MySQL, React, Node.js, artificial intelligence
            and computer vision to build practical software projects that solve
            real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href={resumeUrl}
              download="Kaustav_Nandi_Resume.pdf"
              className="px-7 py-3 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition"
            >
              Download Resume
            </a>

          </div>

          <div className="flex flex-wrap gap-5 mt-8">

            <a
              href="https://www.linkedin.com/in/kaustav-nandi2007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/cool-zinger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              GitHub ↗
            </a>

            <a
              href="https://cool-zinger.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Portfolio ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
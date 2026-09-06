function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-xl font-bold text-white">
              Kaustav Nandi
              <span className="text-blue-500">.</span>
            </h3>

            <p className="text-gray-500 mt-2">
              Full Stack Developer • AI Enthusiast
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="https://www.linkedin.com/in/kaustav-nandi2007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/cool-zinger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://cool-zinger.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Contact
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kaustav Nandi. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
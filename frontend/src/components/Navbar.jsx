import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          Kaustav
          <span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">

          <a
            href="https://github.com/cool-zinger"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-slate-700 rounded-lg text-gray-300 hover:border-blue-500 hover:text-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kaustav-nandi2007/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-5">

          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://github.com/cool-zinger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kaustav-nandi2007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500"
            >
              LinkedIn
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
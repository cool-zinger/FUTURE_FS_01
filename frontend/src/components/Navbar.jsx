import { useState } from "react";

import {
  Menu,
  X
} from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Resume", "resume"],
  ["Contact", "contact"]
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">

      <nav className="section-container flex h-20 items-center justify-between">

        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold text-white"
        >
          KN<span className="text-indigo-400">.</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">

          {links.map(([label, id]) => (

            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="nav-link"
            >
              {label}
            </button>

          ))}

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>

      {open && (

        <div className="border-t border-white/5 bg-black/95 px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            {links.map(([label, id]) => (

              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-zinc-300"
              >
                {label}
              </button>

            ))}

          </div>

        </div>

      )}

    </header>
  );
}
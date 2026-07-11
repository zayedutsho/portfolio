import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const saved = window.localStorage.getItem("theme");
    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-mono text-2xl font-bold text-[var(--accent)]"
        >
          {"<Utsho />"}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              {link.name}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] p-2.5 text-[var(--text)] transition hover:border-[var(--accent)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href="/resume.pdf"
            download
            className="rounded-xl bg-[var(--accent)] px-5 py-3 font-semibold text-[var(--surface-strong)] transition hover:bg-[var(--accent-strong)]"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] p-2.5 text-[var(--text)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="text-3xl text-[var(--text)] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[color:var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="rounded-lg bg-[var(--accent)] px-5 py-3 text-center font-semibold text-[var(--surface-strong)]"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

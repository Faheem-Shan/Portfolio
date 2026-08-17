import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";
import { scrollToSection } from "../hooks/useSmoothScroll";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onOnePage = location.pathname === "/";

  // Track scroll depth to trigger shrinking pill state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Accurate scroll-spy: tracks active section based on current scroll depth
  useEffect(() => {
    if (!onOnePage) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      const sections = links
        .map((l) => document.getElementById(l.id))
        .filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPos) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onOnePage]);

  const goToSection = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (onOnePage) {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  return (
    <header className="sticky top-3 z-50 px-3 transition-all duration-300">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        className={`mx-auto flex items-center justify-between rounded-full border backdrop-blur-md relative transition-all duration-300 ${
          scrolled
            ? "max-w-2xl px-5 py-2 shadow-2xl shadow-black/40"
            : "max-w-5xl px-7 py-3.5"
        }`}
        style={{
          borderColor: scrolled
            ? "color-mix(in srgb, var(--accent) 35%, var(--border))"
            : "var(--border)",
          backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
        }}
      >
        <a
          href="#home"
          onClick={goToSection("home")}
          className="flex items-center gap-2.5 font-mono-ui font-bold text-sm sm:text-base shrink-0 hover:opacity-90 transition-opacity tracking-wide"
        >
          <TerminalSquare size={19} style={{ color: "var(--accent)" }} />
          <span>{scrolled ? "FS" : profile.name.toUpperCase()}</span>
        </a>

        <div className="hidden md:flex items-center gap-2 font-mono-ui text-sm">
          {links.map((link) => {
            const isActive = onOnePage && active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={goToSection(link.id)}
                className="relative px-3.5 py-1.5 font-medium transition-colors hover:text-[var(--text-primary)]"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/30 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] active:scale-95 cursor-pointer"
            style={{ borderColor: "var(--border)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-3 flex flex-col gap-1.5 p-3 rounded-2xl border font-mono-ui text-sm shadow-2xl z-50 overflow-hidden"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-elevated)",
              }}
            >
              {links.map((link) => {
                const isActive = onOnePage && active === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={goToSection(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-[var(--accent-soft)] text-[var(--accent)] font-bold border border-[var(--accent)]/40"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    )}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}


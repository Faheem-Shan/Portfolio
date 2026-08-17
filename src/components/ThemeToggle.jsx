import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {theme === "dark" ? (
            <Sun size={16} className="text-[var(--accent)]" />
          ) : (
            <Moon size={16} className="text-[var(--accent)]" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

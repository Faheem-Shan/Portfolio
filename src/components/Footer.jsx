import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";
import { scrollToSection } from "../hooks/useSmoothScroll";

export default function Footer() {
  return (
    <footer
      className="mt-12 border-t px-6 py-6"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-ui text-xs text-[var(--text-secondary)]">
        <p>
          © {new Date().getFullYear()} · Designed &amp; developed by{" "}
          <span className="text-[var(--text-primary)] font-medium">
            {profile.name}
          </span>
        </p>

        <button
          onClick={() => scrollToSection("home")}
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] cursor-pointer"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <ArrowUp
            size={13}
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
}

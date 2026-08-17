import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";

/**
 * Used in the Projects grid. Clicking the card navigates to /projects/:slug
 * which reads the same project object from data/projects.js.
 */
export default function ProjectCard({ project }) {
  const repoUrl = project.repo || project.backendRepo || project.frontendRepo;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group relative h-full rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:border-[var(--accent)] hover:shadow-xl hover:shadow-[var(--accent-soft)]"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-elevated)",
      }}
    >
      {/* Top Media Banner */}
      <Link to={`/projects/${project.slug}`} className="relative h-48 overflow-hidden block">
        <img
          src={project.screenshots[0]}
          alt={`${project.name} screenshot`}
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.style.display = "flex";
          }}
        />

        {/* Dark Architecture Fallback Graphic when screenshot isn't added yet */}
        <div
          className="hidden absolute inset-0 flex-col justify-between p-4 font-mono-ui select-none overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(245,166,35,0.2) 0%, rgba(15,16,20,0.98) 75%)",
            backgroundColor: "#0f1014",
          }}
        >
          {/* Top Row: Terminal Dots & Primary Tech */}
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            {project.badge !== false && (project.badge || project.tech[0]) && (
              <span className="text-[10px] px-2.5 py-0.5 rounded-md border border-neutral-700/80 bg-black/60 text-[var(--accent)] font-semibold tracking-wide">
                {project.badge || project.tech[0]}
              </span>
            )}
          </div>

          {/* Center Graphic Title & Tech Icon */}
          <div className="flex flex-col items-center justify-center my-auto gap-2">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-lg"
              style={{
                borderColor: "color-mix(in srgb, var(--accent) 40%, #333)",
                backgroundColor: "rgba(245,166,35,0.15)",
                color: "var(--accent)",
              }}
            >
              <Code2 size={22} />
            </div>
            <span className="font-bold text-base text-white tracking-wide">
              {project.name}
            </span>
          </div>

          {/* Bottom Code Snippet Line */}
          <div className="text-[11px] text-neutral-400 truncate font-mono">
            $ git checkout <span style={{ color: "var(--accent)" }}>{project.slug}</span>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </Link>

      {/* Card Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link to={`/projects/${project.slug}`}>
              <h3 className="font-semibold text-lg hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5 group/title">
                {project.name}
                <ArrowUpRight
                  size={16}
                  className="opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-[var(--accent)]"
                />
              </h3>
            </Link>
            <p className="text-xs font-mono-ui mt-0.5" style={{ color: "var(--accent)" }}>
              {project.tagline}
            </p>
          </div>

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              className="p-2 rounded-lg border text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all shrink-0"
              style={{ borderColor: "var(--border)" }}
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>

        <p className="text-sm text-[var(--text-secondary)] flex-1 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border)]/60">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono-ui px-2.5 py-0.5 rounded-full border transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span
              className="text-[11px] font-mono-ui px-2 py-0.5 rounded-full border opacity-75"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

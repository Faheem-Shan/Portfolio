import { useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/icons/BrandIcons";
import RevealSection from "../components/RevealSection";
import Button from "../components/Button";
import { projects } from "../data/projects";
import { scrollToSection } from "../hooks/useSmoothScroll";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} · Faheem Shan K A`;
    }
    return () => {
      document.title = "Faheem Shan K A · Python Backend & Full Stack Developer";
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;


  const backToProjects = () => {
    navigate("/");
    setTimeout(() => scrollToSection("projects"), 100);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 pt-16 pb-32">
      <RevealSection>
        <button
          onClick={backToProjects}
          className="inline-flex items-center gap-2 text-sm font-mono-ui text-[var(--text-secondary)] hover:text-[var(--accent)] mb-8"
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>

        <p className="font-mono-ui text-sm mb-2" style={{ color: "var(--accent)" }}>
          {project.tagline}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {project.name}
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-8">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono-ui px-3 py-1.5 rounded-full border"
              style={{ borderColor: "var(--border)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          {project.frontendRepo && (
            <Button as="a" href={project.frontendRepo} icon={GithubIcon}>
              Frontend
            </Button>
          )}

          {project.backendRepo && (
            <Button as="a" href={project.backendRepo} icon={GithubIcon}>
              Backend
            </Button>
          )}

          {project.repo && (
            <Button as="a" href={project.repo} icon={GithubIcon}>
              View Repo
            </Button>
          )}

          {project.demo && (
            <Button
              as="a"
              href={project.demo}
              variant="outline"
              icon={ExternalLink}
            >
              Live Demo
            </Button>
          )}
        </div>
      </RevealSection>

      <RevealSection delay={0.1}>
        <h3 className="text-xl font-semibold mb-5">Screenshots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {project.screenshots.map((src, i) => (
            <div
              key={src}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
            >
              <img
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.replaceWith(
                    Object.assign(document.createElement("div"), {
                      className: "h-48 flex items-center justify-center text-xs font-mono-ui text-[var(--text-secondary)]",
                      innerText: "Add screenshot to /public" + src,
                    })
                  );
                }}
              />
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

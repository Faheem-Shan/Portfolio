import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 pt-16 pb-32 scroll-mt-24">
      <RevealSection>
        <SectionHeading
          eyebrow="/projects"
          ghost="PROJECTS"
          title="Things I've Built."
          subtitle="A selection of backend-focused and full-stack projects — click any card for screenshots, tech stack, and repo links."
        />
      </RevealSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <RevealSection key={project.slug} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} />
          </RevealSection>
        ))}
      </div>
    </section>
  );
}

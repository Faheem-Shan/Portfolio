import { useRef, useState } from "react";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/SectionHeading";
import SkillBox from "../components/SkillBox";
import { skillGroups, tools } from "../data/skills";

function ToolTile({ name }) {
  const ref = useRef(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };

  const handleMouseLeave = () => setGlow((g) => ({ ...g, visible: false }));

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-xl border px-4 py-3 font-mono-ui text-sm flex items-center gap-2.5 cursor-default select-none"
      style={{
        borderColor: glow.visible ? "var(--accent)" : "var(--border)",
        backgroundColor: "var(--bg-elevated)",
        transition: "border-color 0.25s ease",
      }}
    >
      {/* Cursor spotlight */}
      {glow.visible && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(120px circle at ${glow.x}px ${glow.y}px, rgba(245,166,35,0.12) 0%, transparent 70%)`,
          }}
        />
      )}
      <span
        className="relative z-10 w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: glow.visible ? "var(--accent)" : "var(--text-secondary)", transition: "background-color 0.25s" }}
      />
      <span className="relative z-10" style={{ color: glow.visible ? "var(--text-primary)" : "var(--text-secondary)", transition: "color 0.25s" }}>
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 pt-16 pb-32 scroll-mt-24">
      <RevealSection>
        <SectionHeading
          eyebrow="/skills"
          ghost="SKILLS"
          title="Capabilities."
          subtitle="Technologies I use to design, build, and ship backend-driven web applications."
        />
      </RevealSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {skillGroups.map((group, i) => (
          <RevealSection key={group.title} delay={i * 0.08}>
            <SkillBox group={group} />
          </RevealSection>
        ))}
      </div>

      <RevealSection>
        <h3 className="text-xl font-semibold mb-5">Tools & Practices</h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <RevealSection key={tool} delay={i * 0.04}>
              <ToolTile name={tool} />
            </RevealSection>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}


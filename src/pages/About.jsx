import { GraduationCap, Briefcase, Award } from "lucide-react";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "5", label: "Projects Built" },
  { value: "2", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 pt-16 pb-32 scroll-mt-24">
      <RevealSection>
        <SectionHeading
          eyebrow="/about"
          ghost="ABOUT"
          title="Building Reliable Systems."
          subtitle={profile.aboutParagraph}
        />
      </RevealSection>

      {/* Stat Strip */}
      <RevealSection delay={0.05}>
        <div
          className="flex flex-wrap gap-6 sm:gap-10 mb-10 px-6 py-5 rounded-2xl border"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              {i > 0 && (
                <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "var(--border)" }} />
              )}
              <div>
                <p
                  className="text-2xl font-bold leading-none"
                  style={{ color: "var(--accent)" }}
                >
                  {s.value}
                </p>
                <p className="font-mono-ui text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Education */}
      <RevealSection
        delay={0.1}
        className="rounded-2xl border p-6 mb-12 flex items-start gap-3"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
      >
        <GraduationCap size={20} style={{ color: "var(--accent)" }} className="mt-1 shrink-0" />
        <div>
          <p className="font-semibold">{profile.education.degree}</p>
          <p className="text-sm text-[var(--text-secondary)]">
            {profile.education.institution} · {profile.education.years}
          </p>
        </div>
      </RevealSection>

      {/* Experience — Timeline */}
      <RevealSection delay={0.15}>
        <h3 className="flex items-center gap-2 text-2xl font-semibold mb-8">
          <Briefcase size={20} style={{ color: "var(--accent)" }} />
          Experience
        </h3>
      </RevealSection>

      <div className="relative mb-16">
        {/* Vertical timeline line */}
        <div
          className="absolute left-3 top-2 bottom-2 w-px"
          style={{ backgroundColor: "var(--border)" }}
        />

        <div className="space-y-8">
          {profile.experience.map((job, i) => (
            <RevealSection key={job.role} delay={0.1 + i * 0.05}>
              <div className="pl-10 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: "var(--accent)",
                    backgroundColor: "var(--bg)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg-elevated)",
                    borderLeft: "2px solid var(--accent)",
                  }}
                >
                  <p className="font-mono-ui text-xs mb-1" style={{ color: "var(--accent)" }}>
                    {job.period}
                  </p>
                  <p className="font-semibold text-lg">{job.role}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="text-sm text-[var(--text-secondary)] flex gap-2">
                        <span style={{ color: "var(--accent)" }}>–</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>

      {/* Certifications — Chip tags */}
      <RevealSection>
        <h3 className="flex items-center gap-2 text-2xl font-semibold mb-6">
          <Award size={20} style={{ color: "var(--accent)" }} />
          Certifications
        </h3>
        <div className="flex flex-wrap gap-3">
          {profile.certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-2 text-sm font-mono-ui px-4 py-2 rounded-full border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-elevated)",
                color: "var(--text-secondary)",
              }}
            >
              <Award size={12} style={{ color: "var(--accent)" }} />
              {cert}
            </span>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

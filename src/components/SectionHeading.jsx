/**
 * The "/label" + big ghost watermark word + real heading pattern
 * used at the top of every section (About, Projects, Skills, Contact).
 *
 *   <SectionHeading eyebrow="/projects" ghost="PROJECTS" title="Engineered Solutions." />
 */
/**
 * The "/label" + big ghost watermark word + real heading pattern
 * used at the top of every page (About, Projects, Skills, Contact).
 *
 *   <SectionHeading eyebrow="/projects" ghost="PROJECTS" title="Engineered Solutions." />
 */
export default function SectionHeading({ eyebrow, ghost, title, subtitle }) {
  return (
    <div className="relative mb-16 overflow-hidden">
      {ghost && (
        <span
          aria-hidden="true"
          className="absolute -top-6 sm:-top-10 left-0 text-[3.2rem] sm:text-[7rem] md:text-[9rem] font-bold tracking-tight select-none pointer-events-none leading-none whitespace-nowrap"
          style={{ color: "var(--border)", opacity: 0.5 }}
        >
          {ghost}
        </span>
      )}
      <div className="relative">
        {eyebrow && (
          <p className="font-mono-ui text-sm mb-3" style={{ color: "var(--accent)" }}>
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="max-w-xl text-[var(--text-secondary)] text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

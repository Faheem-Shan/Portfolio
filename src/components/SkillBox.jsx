import { useRef, useState } from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export default function SkillBox({ group }) {
  const Icon = Icons[group.icon] ?? Icons.Code2;
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((s) => ({ ...s, visible: false }));
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl border p-6 overflow-hidden cursor-default"
      style={{
        borderColor: spotlight.visible ? "var(--accent)" : "var(--border)",
        backgroundColor: "var(--bg-elevated)",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Mouse-tracking radial spotlight */}
      {spotlight.visible && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${spotlight.x}px ${spotlight.y}px, rgba(245,166,35,0.09) 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--accent-soft)" }}
        >
          <Icon size={18} style={{ color: "var(--accent)" }} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-5">{group.description}</p>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-mono-ui px-3 py-1.5 rounded-full border transition-colors duration-200"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}


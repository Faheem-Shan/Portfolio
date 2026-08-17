import { motion } from "framer-motion";

/**
 * Reusable button. Use it everywhere instead of raw <button>/<a> tags
 * so every CTA in the site stays visually consistent.
 *
 * variant: "solid" | "outline"
 * as: "button" | "a"  (renders an <a> when you need it to be a link)
 */
export default function Button({
  children,
  variant = "solid",
  as = "button",
  href,
  onClick,
  type = "button",
  download,
  className = "",
  icon: Icon,
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-ui text-sm font-medium transition-colors duration-200";

  const styles =
    variant === "solid"
      ? "bg-[var(--accent)] text-[#111111] hover:brightness-110"
      : "border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]";

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      href={as === "a" ? href : undefined}
      download={as === "a" ? download : undefined}
      type={as === "button" ? type : undefined}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      {Icon && <Icon size={16} />}
    </Component>
  );
}

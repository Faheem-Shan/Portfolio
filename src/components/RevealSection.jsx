import { motion } from "framer-motion";

/**
 * Wrap any section/block in this to get the fade-up-on-scroll effect
 * used throughout the site. This is the ONE place that controls that
 * animation — change it here and every section updates.
 *
 *   <RevealSection>
 *     <YourContent />
 *   </RevealSection>
 */
export default function RevealSection({
  children,
  delay = 0,
  className = "",
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

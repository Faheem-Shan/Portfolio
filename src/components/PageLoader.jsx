import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Thin amber progress bar that sweeps 0→100% on first page load.
 * Mounts in App.jsx, runs once, then unmounts itself.
 * No splash screen — just a sleek top-edge line.
 */
export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fast ramp to 80% quickly, then slow down, then snap to 100%
    const t1 = setTimeout(() => setProgress(40), 80);
    const t2 = setTimeout(() => setProgress(70), 300);
    const t3 = setTimeout(() => setProgress(85), 600);
    const t4 = setTimeout(() => setProgress(100), 900);
    const t5 = setTimeout(() => setVisible(false), 1150);

    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
          style={{ backgroundColor: "transparent" }}
        >
          <motion.div
            className="h-full"
            style={{
              width: `${progress}%`,
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 8px var(--accent), 0 0 2px var(--accent)",
              transition: "width 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          {/* Leading glow tip */}
          <div
            className="absolute top-0 h-full w-6 rounded-full"
            style={{
              left: `calc(${progress}% - 12px)`,
              background:
                "radial-gradient(ellipse at center, rgba(245,166,35,0.7) 0%, transparent 100%)",
              transition: "left 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

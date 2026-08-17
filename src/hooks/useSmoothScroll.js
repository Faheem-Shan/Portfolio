import { useEffect } from "react";
import Lenis from "lenis";

// Module-level reference so any component (e.g. Navbar) can trigger a
// smooth scroll to a section without needing React context for it.
let lenisInstance = null;

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -90, duration: 1.2 }); // offset clears the sticky navbar
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Sets up buttery, eased momentum scrolling for the whole site
 * (the "weighted" scroll feel from the reference video) instead of
 * the browser's default instant/linear scroll.
 *
 * Mounted once in App.jsx. Nothing else needs to import this —
 * it just needs to run for the lifetime of the app.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}


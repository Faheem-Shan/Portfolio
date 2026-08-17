import { motion } from "framer-motion";
import { ArrowRight, Code2 ,Download } from "lucide-react";
import Button from "../components/Button";
import RevealSection from "../components/RevealSection";
import { profile } from "../data/profile";
import { scrollToSection } from "../hooks/useSmoothScroll";

export default function Home() {
  return (
    <section id="home" className="max-w-5xl mx-auto px-6 pt-12 lg:pt-20 pb-32 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Intro & Info */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono-ui text-xs mb-8"
            style={{ borderColor: "var(--border)" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Available for opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border p-4 max-w-md mb-8 font-mono-ui text-sm shadow-sm"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
          >
            <div className="flex gap-1.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <p className="text-[var(--text-secondary)]">faheem@dev:~$ stack</p>
            <p className="blink-cursor" style={{ color: "var(--accent)" }}>
              Python • Django • FastAPI • React
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold mb-6"
            style={{ color: "var(--accent)" }}
          >
            {profile.heroTagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl text-[var(--text-secondary)] text-base md:text-lg mb-10"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button icon={ArrowRight} onClick={() => scrollToSection("projects")}>
              View Projects
            </Button>
            <Button
              as="a"
              href="/Faheem_Shan_Python_Developer.pdf"
              download
              variant="outline"
              icon={Download}
            >
              Download Resume
            </Button>
            <Button variant="outline" icon={Code2} onClick={() => scrollToSection("contact")}>
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
            {/* Background Soft Glow Aura */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-25"
              style={{ backgroundColor: "var(--accent)" }}
            />

            {/* Main Circular Image Frame */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden border-4 shadow-2xl transition-transform duration-500 hover:scale-105"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
            >
              <img
                src="/profile.jpg"
                alt={profile.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <RevealSection delay={0.1} className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Backend Focus", value: "Python · Django · DRF · FastAPI" },
          // { label: "Currently", value: "Full Stack Intern @ Bridgeon" },
          { label: "Based In", value: profile.location },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border p-6"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
          >
            <p className="font-mono-ui text-xs text-[var(--text-secondary)] mb-2">
              {stat.label}
            </p>
            <p className="font-semibold">{stat.value}</p>
          </div>
        ))}
      </RevealSection>
    </section>
  );
}


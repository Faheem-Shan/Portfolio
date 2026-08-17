import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import OnePage from "./pages/OnePage";
import useSmoothScroll from "./hooks/useSmoothScroll";

const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

export default function App() {
  const location = useLocation();
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="min-h-[50vh] flex items-center justify-center font-mono-ui text-sm text-[var(--text-secondary)]">
              Loading...
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<OnePage />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}


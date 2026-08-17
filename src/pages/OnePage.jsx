import { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function OnePage() {
  useEffect(() => {
    document.title = "Faheem Shan K A · Python Backend & Full Stack Developer";
  }, []);

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}


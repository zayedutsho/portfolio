import { Suspense, lazy } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";

const About = lazy(() => import("../components/About/About"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Education = lazy(() => import("../components/Education/Education"));
const Experience = lazy(() => import("../components/Experience/Experience"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const Skills = lazy(() => import("../components/Skills/Skills"));

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </Suspense>
        <ScrollProgress />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;

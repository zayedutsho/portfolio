import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import Skills from "../components/Skills/Skills";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero></Hero>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <ScrollProgress></ScrollProgress>
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;

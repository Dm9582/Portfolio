import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import IntroLoader from './components/IntroLoader';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <IntroLoader />
        <ScrollProgress />
        <CursorGlow />
        <div className="noise-overlay" aria-hidden="true" />

        <Navbar />

        <main id="main" tabIndex={-1} className="relative z-10 outline-none">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
}

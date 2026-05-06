import { useEffect, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Works from './sections/Works';
import Social from './sections/Social';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#FAF7F2] text-[#1A3C34] overflow-x-hidden">
        <Navigation scrolled={scrolled} />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Works />
          <Social />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

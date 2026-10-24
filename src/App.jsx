import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import useTheme from './hooks/useTheme';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  // Show admin panel when ?admin=true is in the URL
  const isAdmin = new URLSearchParams(window.location.search).get('admin') === 'true';

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // Admin route — full-page override
  if (isAdmin) {
    return <Admin />;
  }

  return (
    <>
      <Loader visible={loading} />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Achievements />
        <Skills />
        <Education />
        <Projects />
        <Freelance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

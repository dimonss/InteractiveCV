import { useEffect } from 'react';
import { useLocaleStore } from './store/localeStore';
import { useThemeStore } from './store/themeStore';
import Background3D from './components/Background3D';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/globals.css';

function App() {
  const { initLocale } = useLocaleStore();
  const { initTheme } = useThemeStore();

  useEffect(() => {
    initLocale();
    initTheme();
  }, [initLocale, initTheme]);

  return (
    <>
      <Background3D />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;

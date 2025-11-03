import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  // Enable smooth scrolling for in-page anchors
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.documentElement.style.scrollBehavior = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <main>
        <section id="home" className="relative overflow-hidden">
          <Hero />
        </section>
        <section id="projects" className="relative">
          <Projects />
        </section>
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>
      <footer className="py-8 text-center text-neutral-400 border-t border-neutral-800">
        <p>
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;

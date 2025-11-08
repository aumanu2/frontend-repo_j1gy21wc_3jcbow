import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-white tracking-tight">dev<span className="text-emerald-400">.portfolio</span></a>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a
            href="#contact"
            className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2"
          >Hire me</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

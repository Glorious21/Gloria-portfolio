import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        transition: 'background-color 300ms ease, color 300ms ease',
      }}
    >
      <div className="film-grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

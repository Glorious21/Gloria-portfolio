import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Toolkit from './components/Toolkit';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-ink relative overflow-x-hidden">
      <div className="film-grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Toolkit />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

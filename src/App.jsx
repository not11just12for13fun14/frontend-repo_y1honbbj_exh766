import React from 'react';
import Hero from './components/Hero';
import LogoGrid from './components/LogoGrid';
import MarqueeGallery from './components/MarqueeGallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-neutral-100">
      {/* High-contrast top bar for navigation */}
      <header className="sticky top-0 z-20 border-b border-neutral-800 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-geist text-sm font-semibold tracking-tight">Designer Studio</a>
          <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#logos" className="hover:text-white">Logos</a>
            <a href="#work" className="hover:text-white">Posters & Collateral</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-100 shadow-sm transition hover:border-rose-500/50 hover:shadow-md">Start a Project</a>
        </div>
      </header>

      <main>
        <Hero />
        <LogoGrid />
        <MarqueeGallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import Hero from './components/Hero';
import LogoGrid from './components/LogoGrid';
import MarqueeGallery from './components/MarqueeGallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white text-neutral-900">
      {/* Minimal top bar for quick navigation */}
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-geist text-sm font-semibold tracking-tight">Designer Studio</a>
          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <a href="#logos" className="hover:text-neutral-900">Logos</a>
            <a href="#work" className="hover:text-neutral-900">Posters</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-900 shadow-sm transition hover:border-rose-300 hover:shadow">Start a Project</a>
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

import React from 'react';
import { motion } from 'framer-motion';

const logos = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  // Use generated minimalist placeholders to maintain whitespace aesthetic
  src: `https://api.dicebear.com/8.x/shapes/svg?seed=logo${i+1}&backgroundType=solid&backgroundColor=ffffff&scale=80&size=128`,
}));

const LogoGrid = () => {
  return (
    <section id="logos" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-geist text-2xl font-semibold text-neutral-900 md:text-3xl">Logo Collection</h2>
            <p className="mt-2 max-w-xl text-sm text-neutral-600">A selection of minimal marks and wordmarks. Arranged in clean rows of four with soft motion.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700 transition hover:border-rose-300 md:block">Work Together</a>
        </div>

        {/* Auto-scrolling, animated grid */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                whileHover={{ scale: 1.03 }}
                className="group aspect-square rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition"
              >
                <img
                  src={logo.src}
                  alt={`Logo ${logo.id}`}
                  className="h-full w-full object-contain opacity-80 transition group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;

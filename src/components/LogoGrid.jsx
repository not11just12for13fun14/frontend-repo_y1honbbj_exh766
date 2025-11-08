import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const logos = Array.from({ length: 48 }).map((_, i) => ({
  id: i + 1,
  src: `https://api.dicebear.com/8.x/shapes/svg?seed=logo${i + 1}&backgroundType=solid&backgroundColor=111111&scale=80&size=128&flip=true`,
}));

const chunk = (arr, size) => arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

const GridContent = () => {
  const rows = useMemo(() => chunk(logos, 4), []);
  return (
    <div className="flex flex-col gap-6">
      {rows.map((row, rIdx) => (
        <div key={rIdx} className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {row.map((logo) => (
            <div key={logo.id} className="group aspect-square rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-sm transition">
              <img
                src={logo.src}
                alt={`Logo ${logo.id}`}
                className="h-full w-full object-contain opacity-90 transition group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const LogoGrid = () => {
  return (
    <section id="logos" className="bg-black py-20 text-neutral-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-geist text-2xl font-semibold md:text-3xl">Logo Collection</h2>
            <p className="mt-2 max-w-xl text-sm text-neutral-400">Always-on, infinite scroll. Clean rows of four with subtle motion and crisp contrast.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-neutral-800 px-4 py-2 text-xs font-medium text-neutral-200 transition hover:border-rose-500/50 md:block">Work Together</a>
        </div>

        {/* Infinite vertical marquee: duplicate content and translate by 50% */}
        <div className="relative h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="absolute inset-x-0 flex flex-col gap-6"
            animate={{ y: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            <GridContent />
            <GridContent />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;

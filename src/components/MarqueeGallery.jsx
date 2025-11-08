import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Generate an array of 50+ placeholder poster/business images with generous whitespace
const makeImg = (i) => `https://picsum.photos/seed/whitespace-${i}/800/1000`;

const MarqueeRow = ({ reverse = false, offset = 0 }) => {
  const items = useMemo(() => Array.from({ length: 12 }).map((_, i) => makeImg(i + offset)), [offset]);
  return (
    <div className="relative flex w-full overflow-hidden py-3">
      <motion.div
        className="flex gap-6"
        animate={{ x: reverse ? [0, -1200] : [0, 1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((src, idx) => (
          <div key={idx} className="aspect-[3/4] w-48 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
            <img src={src} alt="Portfolio item" className="h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MarqueeGallery = () => {
  return (
    <section id="work" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="font-geist text-2xl font-semibold text-neutral-900 md:text-3xl">Posters & Business Collateral</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">A calm, looping marquee shows a broad sample without overwhelming the page. Hover any item to pause and inspect.</p>
        </div>
      </div>
      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <MarqueeRow />
        <MarqueeRow reverse offset={12} />
        <MarqueeRow offset={24} />
      </div>
    </section>
  );
};

export default MarqueeGallery;

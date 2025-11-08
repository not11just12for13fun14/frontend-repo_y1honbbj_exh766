import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Shared infinite marquee row component used for both Posters and Business Collateral
const makeImg = (seed, w = 800, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const MarqueeRow = ({ reverse = false, seedBase = 'poster', speed = 30 }) => {
  const items = useMemo(() => Array.from({ length: 10 }).map((_, i) => makeImg(`${seedBase}-${i}`, 800, 1000)), [seedBase]);
  return (
    <div className="relative w-full overflow-hidden py-3">
      <motion.div
        className="flex gap-6"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((src, idx) => (
          <div key={idx} className="aspect-[3/4] w-52 shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60">
            <img src={src} alt="Portfolio item" className="h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SectionBlock = ({ title, description, seed }) => (
  <div className="mx-auto max-w-6xl px-6 py-12">
    <div className="mb-6">
      <h3 className="font-geist text-xl font-semibold text-neutral-100 md:text-2xl">{title}</h3>
      <p className="mt-2 max-w-2xl text-sm text-neutral-400">{description}</p>
    </div>
    <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <MarqueeRow seedBase={`${seed}-a`} />
      <MarqueeRow reverse seedBase={`${seed}-b`} speed={34} />
      <MarqueeRow seedBase={`${seed}-c`} speed={28} />
    </div>
  </div>
);

const MarqueeGallery = () => {
  return (
    <section id="work" className="bg-black py-20">
      <SectionBlock
        title="Posters"
        description="Large-format explorations with strong type and composition, designed for impact."
        seed="poster"
      />
      <SectionBlock
        title="Business Collateral"
        description="Stationery, profiles, and templates. Consistent, modern, unmistakably on-brand."
        seed="biz"
      />
    </section>
  );
};

export default MarqueeGallery;

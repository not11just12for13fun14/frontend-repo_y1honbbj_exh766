import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vignette to boost contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"></div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-geist text-4xl font-semibold leading-tight text-neutral-100 md:text-6xl"
        >
          Bold, high-contrast brand systems
          <span className="block text-rose-400">logos · posters · business identity</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base text-neutral-300 md:text-lg"
        >
          Modern, minimal, and unmistakable. Precision-crafted visuals for brands that want presence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#logos"
            className="rounded-full border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-medium text-neutral-100 shadow-sm transition hover:border-rose-500/50 hover:shadow-md"
          >
            Explore Logos
          </a>
          <a
            href="#work"
            className="rounded-full px-5 py-3 text-sm font-medium text-rose-400 transition hover:text-rose-300"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

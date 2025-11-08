import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignette to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white"></div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-geist text-4xl font-semibold leading-tight text-neutral-900 md:text-6xl"
        >
          Minimal, modern brand identities
          <span className="block text-rose-500">crafted with whitespace</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg"
        >
          I design logos, posters, and business materials that are clean, functional, and memorable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#logos"
            className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:border-rose-300 hover:shadow"
          >
            Explore Logos
          </a>
          <a
            href="#work"
            className="rounded-full px-5 py-3 text-sm font-medium text-rose-600 transition hover:text-rose-700"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

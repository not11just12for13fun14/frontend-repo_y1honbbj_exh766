import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24 text-neutral-200">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-geist text-2xl font-semibold md:text-3xl"
        >
          Collaborate on your next identity
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400"
        >
          Logo systems, brand guidelines, posters, business profiles. High contrast. Minimal noise. Maximum clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="mailto:hello@designer.studio"
            className="w-full rounded-full border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-medium text-neutral-100 shadow-sm transition hover:border-rose-500/50 hover:shadow-md sm:w-auto"
          >
            hello@designer.studio
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full px-6 py-3 text-sm font-medium text-rose-400 transition hover:text-rose-300 sm:w-auto"
          >
            Instagram
          </a>
        </motion.div>

        <p className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} Designer Studio. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;

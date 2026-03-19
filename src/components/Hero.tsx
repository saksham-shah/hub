"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        Saksham Shah
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-gray-500 max-w-xl"
      >
        This whole thing is made by whatever free model ChatGPT uses. I&apos;ll get Claude to improve it later, it was just down when I made this.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
      >
        View Projects
      </motion.a>
    </section>
  );
}
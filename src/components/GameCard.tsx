"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function GameCard({ title, description, href }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group border rounded-2xl p-6 bg-white/50 backdrop-blur hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>

      <Link
        href={href}
        className="inline-flex items-center mt-4 text-sm font-medium"
      >
        Play →
      </Link>

      <motion.div
        className="h-1 bg-black mt-4 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
      />
    </motion.div>
  );
}
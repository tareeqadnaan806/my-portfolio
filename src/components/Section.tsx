"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  id: string;
};

export function Section({ eyebrow, title, children, id }: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-20 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-600 dark:text-lime-300">
            {eyebrow}
          </p>
          <h2 className="text-4xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

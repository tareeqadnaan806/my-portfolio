"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Braces,
  Code2,
  Mail,
  MapPin,
  Network,
  Rocket,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { MotionCard } from "@/components/MotionCard";
import { Section } from "@/components/Section";
import { ThemeToggle } from "@/components/ThemeToggle";
import { education, experience, profile, projects, skills } from "@/data/portfolio";

const navItems = ["about", "skills", "projects", "experience", "education", "contact"];
const stats = [
  ["03", "Years building"],
  ["12+", "Interfaces shipped"],
  ["98", "Performance score"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf1] text-zinc-950 transition-colors dark:bg-[#050505] dark:text-white">
      <div className="energy-grid pointer-events-none fixed inset-0 -z-20 opacity-80" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(120deg,rgba(34,211,238,0.22),transparent_28%),linear-gradient(300deg,rgba(244,63,94,0.18),transparent_26%),linear-gradient(180deg,transparent,rgba(250,204,21,0.16))] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.18),transparent_30%),linear-gradient(300deg,rgba(217,70,239,0.16),transparent_28%),linear-gradient(180deg,transparent,rgba(163,230,53,0.10))]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-950/10 bg-[#fffaf1]/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#050505]/75">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href="#hero"
            className="group flex items-center gap-2 font-mono text-sm font-black uppercase tracking-[0.2em]"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-zinc-950 text-white transition group-hover:bg-fuchsia-600 dark:bg-white dark:text-zinc-950 dark:group-hover:bg-lime-300">
              A
            </span>
            <span className="hidden sm:inline">Adnaan Dev</span>
          </a>
          <div className="hidden items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="rounded-full px-3 py-2 capitalize transition hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950"
              >
                {item}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <section
        id="hero"
        className="relative px-5 pt-28 pb-14 sm:px-8 sm:pt-36 lg:px-10 lg:pb-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex -rotate-1 items-center gap-2 rounded-lg border-2 border-zinc-950 bg-lime-300 px-4 py-2 font-mono text-sm font-black uppercase tracking-[0.18em] text-zinc-950 shadow-[6px_6px_0_#18181b] dark:border-white dark:shadow-[6px_6px_0_#22d3ee]">
              <Zap size={16} />
              Open for bold frontend work
            </div>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-tight text-zinc-950 dark:text-white sm:text-7xl lg:text-8xl">
              I turn product ideas into{" "}
              <span className="bg-[linear-gradient(90deg,#06b6d4,#d946ef,#f43f5e,#facc15)] bg-clip-text text-transparent">
                electric web experiences.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-zinc-700 dark:text-zinc-300">
              {profile.role} with {profile.experience} of
              experience building animated, accessible, high-performance
              interfaces with React, Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-7 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[7px_7px_0_#22d3ee] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#d946ef] dark:bg-white dark:text-zinc-950"
              >
                See the work <Rocket size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border-2 border-zinc-950 bg-white/80 px-7 text-sm font-black uppercase tracking-[0.14em] text-zinc-950 backdrop-blur transition hover:-translate-y-1 hover:bg-lime-300 dark:border-white dark:bg-white/10 dark:text-white dark:hover:bg-fuchsia-500"
              >
                Start a build <Mail size={18} />
              </a>
            </div>
            <div className="mt-9 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border-2 border-zinc-950 bg-white/75 p-4 shadow-[4px_4px_0_rgba(24,24,27,0.9)] backdrop-blur dark:border-white dark:bg-white/10 dark:shadow-[4px_4px_0_rgba(163,230,53,0.7)]"
                >
                  <p className="text-3xl font-black">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 3, scale: 0.94 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.72, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 hidden rounded-lg bg-fuchsia-500 px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-white shadow-[5px_5px_0_#18181b] sm:block">
              UI in motion
            </div>
            <div className="overflow-hidden rounded-lg border-2 border-zinc-950 bg-zinc-950 text-white shadow-[12px_12px_0_#22d3ee] dark:border-white dark:shadow-[12px_12px_0_#d946ef]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-4">
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-rose-400" />
                  <span className="size-3 rounded-full bg-yellow-300" />
                  <span className="size-3 rounded-full bg-lime-300" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
                  live-preview
                </span>
              </div>
              <div className="scanline relative p-5 sm:p-6">
                <div className="grid gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <Braces className="text-lime-300" />
                      <p className="font-mono text-sm text-zinc-300">
                        component/velocity.tsx
                      </p>
                    </div>
                    <pre className="overflow-hidden text-sm leading-7 text-zinc-200">
                      <code>{`const craft = {
  motion: "intentional",
  layout: "responsive",
  polish: "production-grade",
  energy: "high"
};`}</code>
                    </pre>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-cyan-300 p-4 text-zinc-950">
                      <p className="text-sm font-black uppercase tracking-[0.16em]">
                        Stack
                      </p>
                      <p className="mt-5 text-2xl font-black">Next + TS</p>
                    </div>
                    <div className="rounded-lg bg-lime-300 p-4 text-zinc-950">
                      <p className="text-sm font-black uppercase tracking-[0.16em]">
                        Focus
                      </p>
                      <p className="mt-5 text-2xl font-black">UX speed</p>
                    </div>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: "18%" }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                      className="h-full bg-[linear-gradient(90deg,#22d3ee,#a3e635,#facc15)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="border-y-2 border-zinc-950 bg-zinc-950 py-3 text-white dark:border-white">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-8 font-mono text-sm font-black uppercase tracking-[0.22em]"
        >
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="whitespace-nowrap">
              {skill} <span className="text-lime-300">/</span>
            </span>
          ))}
        </motion.div>
      </div>

      <Section id="about" eyebrow="About me" title="Frontend with pulse and precision.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionCard className="rounded-lg border-2 border-zinc-950 bg-white p-6 shadow-[8px_8px_0_#18181b] dark:border-white dark:bg-white/[0.08] dark:shadow-[8px_8px_0_#a3e635]">
            <div className="flex items-center gap-3 font-bold text-zinc-700 dark:text-zinc-300">
              <MapPin size={18} className="text-fuchsia-600 dark:text-lime-300" />
              {profile.location}
            </div>
            <p className="mt-6 text-3xl font-black leading-tight tracking-tight text-zinc-950 dark:text-white">
              {profile.summary}
            </p>
          </MotionCard>
          <MotionCard
            delay={0.08}
            className="rounded-lg border-2 border-zinc-950 bg-cyan-200 p-6 text-lg font-semibold leading-8 text-zinc-950 shadow-[8px_8px_0_#d946ef] dark:border-white dark:bg-cyan-300 dark:shadow-[8px_8px_0_#facc15]"
          >
            I care about the moments users actually feel: the instant a page
            loads, the clarity of a dashboard, the motion after a click, and the
            confidence that the interface works on every screen. My work blends
            product thinking, clean component architecture, and polished visual
            execution.
          </MotionCard>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="Tools I use to ship momentum.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <MotionCard
              key={skill}
              delay={index * 0.025}
              className="group rounded-lg border-2 border-zinc-950 bg-white px-4 py-5 text-sm font-black uppercase tracking-[0.12em] text-zinc-950 shadow-[4px_4px_0_rgba(24,24,27,0.85)] transition hover:bg-lime-300 dark:border-white dark:bg-white/[0.08] dark:text-white dark:shadow-[4px_4px_0_rgba(34,211,238,0.8)] dark:hover:bg-fuchsia-500"
            >
              <span className="mr-2 text-fuchsia-600 group-hover:text-zinc-950 dark:text-lime-300">
                #
              </span>
              {skill}
            </MotionCard>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Featured projects"
        title="Project cards that hit harder."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionCard
              key={project.title}
              delay={index * 0.08}
              className="group overflow-hidden rounded-lg border-2 border-zinc-950 bg-white shadow-[9px_9px_0_rgba(24,24,27,0.92)] transition dark:border-white dark:bg-white/[0.08] dark:shadow-[9px_9px_0_rgba(34,211,238,0.75)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-zinc-950 bg-zinc-200 dark:border-white">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-lg bg-zinc-950 px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.18em] text-lime-300">
                  0{index + 1}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-black leading-tight text-zinc-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-28 text-base font-medium leading-7 text-zinc-700 dark:text-zinc-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-zinc-950/15 bg-zinc-100 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-zinc-800 dark:border-white/15 dark:bg-white/10 dark:text-zinc-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-fuchsia-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-lime-300"
                >
                  Live demo <ArrowUpRight size={17} />
                </a>
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="Shipping screens, systems, and speed."
      >
        <div className="relative space-y-5">
          {experience.map((item, index) => (
            <MotionCard
              key={`${item.company}-${item.role}`}
              delay={index * 0.08}
              className="rounded-lg border-2 border-zinc-950 bg-white p-6 shadow-[8px_8px_0_rgba(24,24,27,0.9)] dark:border-white dark:bg-white/[0.08] dark:shadow-[8px_8px_0_rgba(217,70,239,0.75)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-fuchsia-600 dark:text-lime-300">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-zinc-950 dark:text-white">
                    {item.role}
                  </h3>
                </div>
                <span className="w-fit rounded-lg border-2 border-zinc-950 bg-yellow-300 px-3 py-2 font-mono text-sm font-black text-zinc-950 dark:border-white">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-zinc-700 dark:text-zinc-300">
                {item.description}
              </p>
            </MotionCard>
          ))}
        </div>
      </Section>

      <Section
        id="education"
        eyebrow="Education"
        title="Academic roots and engineering background."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <MotionCard
              key={`${item.degree}-${index}`}
              delay={index * 0.08}
              className="rounded-lg border-2 border-zinc-950 bg-white p-6 shadow-[8px_8px_0_rgba(24,24,27,0.9)] dark:border-white dark:bg-white/[0.08] dark:shadow-[8px_8px_0_rgba(163,230,53,0.75)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-fuchsia-600 dark:text-lime-300">
                    {item.institution}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-zinc-950 dark:text-white">
                    {item.degree}
                  </h3>
                </div>
                <span className="w-fit rounded-lg border-2 border-zinc-950 bg-cyan-300 px-3 py-2 font-mono text-sm font-black text-zinc-950 dark:border-white dark:bg-cyan-300">
                  {item.period}
                </span>
              </div>
            </MotionCard>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Ready to make it loud and useful?">
        <MotionCard className="rounded-lg border-2 border-zinc-950 bg-[linear-gradient(135deg,#18181b,#27272a)] p-6 text-white shadow-[10px_10px_0_#22d3ee] sm:p-8 dark:border-white dark:shadow-[10px_10px_0_#a3e635]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="max-w-2xl text-xl font-semibold leading-9 text-zinc-200">
                I am open to frontend roles, product UI work, and polished
                Next.js builds. Send the product, scope, and timeline.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-7 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-lime-300 px-6 text-sm font-black uppercase tracking-[0.14em] text-zinc-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                <Mail size={18} /> {profile.email}
              </a>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border-2 border-white px-5 text-sm font-black uppercase tracking-[0.14em] transition hover:bg-white hover:text-zinc-950"
              >
                <Code2 size={18} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border-2 border-white px-5 text-sm font-black uppercase tracking-[0.14em] transition hover:bg-white hover:text-zinc-950"
              >
                <Network size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </MotionCard>
      </Section>

      <footer className="border-t-2 border-zinc-950 bg-[#fffaf1] px-5 py-8 text-center font-mono text-sm font-black uppercase tracking-[0.16em] text-zinc-700 dark:border-white dark:bg-[#050505] dark:text-zinc-300">
        Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}

"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { useRef } from "react";
import LiquidButton from "@/components/ui/LiquidButton";
import { portfolio } from "@/data/portfolio";
import dynamic from "next/dynamic";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ProjectCard from "@/components/projects/ProjectCard";
import Filters from "@/components/projects/Filters";
import Constellation from "@/components/skills/Constellation";
import Magnetic from "@/components/ui/Magnetic";
import { useFilterStore } from "@/store/filters";
import SimplePeel from "@/components/ui/SimplePeel";
import ScrapbookPage from "@/components/scrapbook/ScrapbookPage";

const HeroScene = dynamic(() => import("@/components/hero/Scene"), { ssr: false, loading: () => null });

function useLetterReveal(text: string) {
  const prefersReduced = useReducedMotion();
  return text.split("").map((ch, i) => (
    <motion.span
      key={`${ch}-${i}`}
      initial={{ y: prefersReduced ? 0 : 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: i * 0.04, duration: 0.5, ease: "easeOut" }}
      className="inline-block"
    >
      {ch === " " ? " " : ch}
    </motion.span>
  ));
}

function GradientMesh() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] dark:bg-white/[0.01] blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.01] dark:bg-white/[0.005] blur-[120px] rounded-full" />
      <div className="grain opacity-[0.02]" />
    </div>
  );
}

function ProjectsSection() {
  const active = useFilterStore((s) => s.activeTag);
  const setActive = useFilterStore((s) => s.setActiveTag);
  // Only surface tags shared by 2+ projects so the filter row stays scannable.
  const tagCounts = portfolio.projects
    .flatMap((p) => p.tech)
    .reduce((acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1), new Map<string, number>());
  const tags = Array.from(tagCounts.entries())
    .filter(([, n]) => n >= 2)
    .map(([t]) => t);
  const filtered = active ? portfolio.projects.filter((p) => p.tech.includes(active)) : portfolio.projects;
  return (
    <motion.section
      id="projects"
      className="py-32 px-6 max-w-6xl mx-auto relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <Filters tags={tags} active={active} onChange={setActive} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {filtered.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            tech={p.tech}
            featured={p.featured}
            description={p.description}
            github={p.github}
            live={p.live}
            year={p.year}
            image={p.image}
            imageFit={p.imageFit}
            imageBg={p.imageBg}
          />
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-32 px-6 max-w-4xl mx-auto relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
      <ol className="relative border-l border-black/10 dark:border-white/10 space-y-10 pl-8">
        {portfolio.experience.map((e, i) => (
          <motion.li
            key={`${e.role}-${e.org}`}
            className="relative"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
          >
            <span className="absolute -left-[38.5px] top-1.5 w-3 h-3 rounded-full bg-fg/70 ring-4 ring-bg" />
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-semibold text-fg-secondary dark:text-fg">
                {e.role} <span className="text-muted font-normal">· {e.org}</span>
              </h3>
              <span className="text-xs text-muted whitespace-nowrap">{e.period}</span>
            </div>
            <p className="mt-2 text-sm text-fg-tertiary dark:text-muted leading-relaxed max-w-2xl">{e.summary}</p>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}

function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-32 px-6 max-w-6xl mx-auto relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Expertise</h2>
        <p className="text-sm text-muted">Interactive constellation of technologies</p>
      </div>
      <Constellation skills={portfolio.skills} />
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 max-w-4xl mx-auto relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted mb-8 max-w-2xl mx-auto">
          Always excited to collaborate on meaningful projects or discuss new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Magnetic>
            <a
              href="mailto:shk021@ucsd.edu"
              className="glass glass-hover px-6 py-3 rounded-full text-sm font-medium inline-block"
            >
              📧 shk021@ucsd.edu
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://linkedin.com/in/shaheer-k-622418193"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover px-6 py-3 rounded-full text-sm font-medium inline-block"
            >
              💼 LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://github.com/Shaheer2492"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover px-6 py-3 rounded-full text-sm font-medium inline-block"
            >
              🔗 GitHub
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap text-xs text-muted">
        <span>© 2026 Shaheer Khan · Built with Next.js, TypeScript, and creative passion ✨</span>
        <a
          href="/wedding"
          className="hover:text-fg-secondary dark:hover:text-fg transition-colors"
          title="Shaheer & Amna"
        >
          💍 est. June 14, 2026
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  const nameLetters = useLetterReveal(portfolio.hero.name);
  const roleLetters = useLetterReveal(portfolio.hero.role);
  const prefersReduced = useReducedMotion();

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 140]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroSceneY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 60]);

  const mainContent = (
    <div className="relative min-h-screen text-fg bg-bg">
      <GradientMesh />
      <header className="fixed top-0 inset-x-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Magnetic strength={0.25}>
            <div className="glass glass-hover rounded-full px-5 py-2.5 text-xs font-medium tracking-wide">SK</div>
          </Magnetic>
          <nav className="glass rounded-full px-1 py-1 hidden sm:block">
            <ul className="flex items-center">
              {[
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a className="px-4 py-2 hover:bg-white/[0.05] dark:hover:bg-white/[0.02] rounded-full transition-colors text-sm inline-block" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Magnetic strength={0.25}>
            <ThemeToggle />
          </Magnetic>
        </div>
      </header>
      <main id="content">
        <section ref={heroRef} className="relative h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">
          <motion.div className="absolute inset-0 -z-10" style={{ y: heroSceneY }}>
            <HeroScene />
          </motion.div>
          <motion.div className="text-center select-none" style={{ y: heroTextY, opacity: heroTextOpacity }}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              <span className="block text-fg-secondary dark:text-fg">{nameLetters}</span>
            </h1>
            <div className="mt-6 text-xl md:text-2xl text-fg-tertiary dark:text-muted tracking-wide">{roleLetters}</div>
            <div className="mt-8">
              <Magnetic strength={0.2}>
                <LiquidButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Work
                </LiquidButton>
              </Magnetic>
            </div>
          </motion.div>
          <motion.div className="absolute bottom-10" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <ArrowDownCircle className="w-6 h-6 text-muted" />
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="py-32 px-6 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/20 to-transparent" />
          <div className="max-w-6xl mx-auto mb-12 relative">
            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
            <span className="text-xs text-muted uppercase tracking-wider">Scroll to explore</span>
          </div>
          <div className="no-scrollbar overflow-x-auto snap-x snap-mandatory flex gap-6 px-2 relative">
            <article className="min-w-[85%] md:min-w-[540px] glass rounded-2xl overflow-hidden snap-start relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/grad.jpg"
                alt="Shaheer Khan at his UC San Diego graduation, wearing a Halıcıoğlu Data Science Institute stole"
                className="w-full h-full object-cover object-[65%_20%] min-h-[320px] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
                <p className="text-white text-sm font-medium">UC San Diego, Class of 2026 🎓</p>
                <p className="text-white/70 text-xs mt-1">B.S. Data Science — Halıcıoğlu Data Science Institute</p>
              </div>
            </article>
            <article className="min-w-[85%] md:min-w-[540px] glass glass-hover rounded-2xl p-8 snap-start">
              <h3 className="font-semibold text-lg mb-3 text-fg-secondary dark:text-fg">Who I am</h3>
              <p className="text-sm text-fg-tertiary dark:text-muted leading-relaxed">
                I'm Shaheer, a UCSD Data Science graduate and full-stack developer. I specialize in building scalable
                education technology solutions, conducting computational neuroscience research, and developing
                data-driven applications with React, TypeScript, and Python.
              </p>
            </article>
            <article className="min-w-[85%] md:min-w-[540px] glass glass-hover rounded-2xl p-8 snap-start">
              <h3 className="font-semibold text-lg mb-3 text-fg-secondary dark:text-fg">Highlights</h3>
              <ul className="text-sm text-fg-tertiary dark:text-muted space-y-2 list-disc pl-5">
                <li>Built and scaled The Kaizen Academy to $60,000+ revenue in 2 months as CEO & Co-Founder</li>
                <li>Led Project DIANA to 1st place at EPICS IEEE Las Vegas Conference, securing $10,000 funding</li>
                <li>Developed responsive UIs at QuickCruit.Ai, improving accessibility scores by 27%</li>
                <li>Conducted computational neuroscience research on brain mapping using graph-based analysis</li>
              </ul>
            </article>
            <article className="min-w-[85%] md:min-w-[540px] glass glass-hover rounded-2xl p-8 snap-start">
              <h3 className="font-semibold text-lg mb-3 text-fg-secondary dark:text-fg">Now</h3>
              <p className="text-sm text-fg-tertiary dark:text-muted leading-relaxed">
                Freshly graduated from UCSD (March 2026) with a B.S. in Data Science. Currently building Longevity —
                an AI health platform — growing The Kaizen Academy's summer programs, and exploring what's next
                where machine learning meets human impact.
              </p>
            </article>
          </div>
        </motion.section>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );

  return (
    <SimplePeel
      scrapbookContent={<ScrapbookPage />}
    >
      {mainContent}
    </SimplePeel>
  );
}

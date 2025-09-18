"use client";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import LiquidButton from "@/components/ui/LiquidButton";
import { portfolio } from "@/data/portfolio";
import dynamic from "next/dynamic";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ProjectCard from "@/components/projects/ProjectCard";
import Filters from "@/components/projects/Filters";
import Constellation from "@/components/skills/Constellation";
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
      {ch === " " ? "\u00A0" : ch}
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
  const tags = Array.from(new Set(portfolio.projects.flatMap((p) => p.tech)));
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
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <Filters tags={tags} active={active} onChange={setActive} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {filtered.slice(0, 6).map((p, idx) => (
          <ProjectCard key={p.title} title={p.title} tech={p.tech} featured={idx === 0} />
        ))}
      </div>
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
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="mailto:your.email@example.com"
            className="glass glass-hover px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all"
          >
            📧 your.email@example.com
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all"
          >
            💼 LinkedIn
          </a>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all"
          >
            🔗 GitHub
          </a>
        </div>
        
        <p className="text-xs text-muted">
          Built with Next.js, TypeScript, and creative passion ✨
        </p>
      </div>
    </motion.section>
  );
}

export default function Home() {

  const nameLetters = useLetterReveal(portfolio.hero.name);
  const roleLetters = useLetterReveal(portfolio.hero.role);

  const mainContent = (
    <div className="relative min-h-screen text-fg bg-bg">
      <GradientMesh />
      <header className="fixed top-0 inset-x-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="glass glass-hover rounded-full px-5 py-2.5 text-xs font-medium tracking-wide">SK</div>
          <nav className="glass rounded-full px-1 py-1">
            <ul className="flex items-center">
              <li><a className="px-4 py-2 hover:bg-white/[0.05] dark:hover:bg-white/[0.02] rounded-full transition-colors text-sm" href="#about">About</a></li>
              <li><a className="px-4 py-2 hover:bg-white/[0.05] dark:hover:bg-white/[0.02] rounded-full transition-colors text-sm" href="#projects">Projects</a></li>
              <li><a className="px-4 py-2 hover:bg-white/[0.05] dark:hover:bg-white/[0.02] rounded-full transition-colors text-sm" href="#skills">Skills</a></li>
              <li><a className="px-4 py-2 hover:bg-white/[0.05] dark:hover:bg-white/[0.02] rounded-full transition-colors text-sm" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main id="content">
        <section className="relative h-[100svh] flex flex-col items-center justify-center px-6">
          <div className="absolute inset-0 -z-10">
            <HeroScene />
          </div>
          <div className="text-center select-none">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
              <span className="block text-fg-secondary dark:text-fg">{nameLetters}</span>
            </h1>
            <div className="mt-6 text-xl md:text-2xl text-fg-tertiary dark:text-muted tracking-wide">{roleLetters}</div>
            <div className="mt-8">
              <LiquidButton>Explore Work</LiquidButton>
            </div>
          </div>
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
            <article className="min-w-[85%] md:min-w-[540px] glass glass-hover rounded-2xl p-8 snap-start">
              <h3 className="font-semibold text-lg mb-3 text-fg-secondary dark:text-fg">Who I am</h3>
              <p className="text-sm text-fg-tertiary dark:text-muted leading-relaxed">
                I'm Shaheer, a UCSD Data Science student and creative developer. I love building systems that
                blend deep tech with clean, human interfaces—from robotics and AI–driven tools to polished
                frontends in React and TypeScript.
              </p>
            </article>
            <article className="min-w-[85%] md:min-w-[540px] glass glass-hover rounded-2xl p-8 snap-start">
              <h3 className="font-semibold text-lg mb-3 text-fg-secondary dark:text-fg">Highlights</h3>
              <ul className="text-sm text-fg-tertiary dark:text-muted space-y-2 list-disc pl-5">
                <li>Founded The Kaizen Academy to make learning practical and exciting.</li>
                <li>Led the first IEEE Student Branch at a U.S. community college; won Rising Stars.</li>
                <li>Built AI networking tools and XR experiments; funded drone project for pollution tracking.</li>
              </ul>
            </article>
            <article className="min-w-[85%] md:min-w-[540px] glass glass-hover rounded-2xl p-8 snap-start">
              <h3 className="font-semibold text-lg mb-3 text-fg-secondary dark:text-fg">Now</h3>
              <p className="text-sm text-fg-tertiary dark:text-muted leading-relaxed">
                Exploring Three.js visuals, system design, and shipping projects with performance-first craft.
                Open to collaborations where code meets impact.
              </p>
            </article>
          </div>
        </motion.section>

        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
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



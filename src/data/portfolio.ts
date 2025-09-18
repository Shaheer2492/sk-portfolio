import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  hero: {
    name: "Shaheer Khan",
    role: "Innovation Catalyst & Full-Stack Creator",
    tagline: "Building technology, scaling businesses, creating communities",
  },
  projects: [
    { title: "Neural Visualizer", tech: ["React", "Three.js"], featured: true },
    { title: "The Kaizen Academy", tech: ["Next.js", "React", "Stripe"], featured: true },
    { title: "Bio Nexus", tech: ["Canvas", "GSAP"], featured: true },
    { title: "Project DIANA", tech: ["D", "Three.js"] },
    { title: "A/V Reactive", tech: ["WebAudio", "Canvas"] },
    { title: "Path Tracer", tech: ["WebGPU", "Raymarch"] },
  ],
  skills: ["React", "TypeScript", "Three.js", "Node.js"],
};



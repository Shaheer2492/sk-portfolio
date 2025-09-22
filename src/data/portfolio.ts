import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  hero: {
    name: "Shaheer Khan",
    role: "Data Science Student & Full-Stack Developer",
    tagline: "Building scalable solutions with performance-first craft",
  },
  projects: [
    { title: "The Kaizen Academy", tech: ["React", "Node.js", "Stripe"], featured: true },
    { title: "BioNexus Platform", tech: ["React", "TypeScript", "Node.js", "WebSocket"], featured: true },
    { title: "Project DIANA", tech: ["Arduino", "C++", "Computer Vision", "IoT"], featured: true },
    { title: "Columbia Analysis Dashboard", tech: ["React", "D3.js", "Data Visualization"] },
    { title: "QuickCruit.Ai", tech: ["React", "TypeScript", "Redux"] },
    { title: "Neural Signal Processing", tech: ["Python", "Machine Learning", "Data Analysis"] },
  ],
  skills: [
    "React", "TypeScript", "JavaScript", "Python", "Node.js", "Redux", 
    "D3.js", "WebGL", "Machine Learning", "Data Visualization", "Git", 
    "AWS", "Performance Optimization", "Responsive Design"
  ],
};



export interface HeroInfo {
  name: string;
  role: string;
  tagline: string;
}

export interface ProjectItem {
  title: string;
  tech: string[];
  featured?: boolean;
  description?: string;
  github?: string;
  live?: string;
  year?: string;
}

export interface PortfolioData {
  hero: HeroInfo;
  projects: ProjectItem[];
  skills: string[];
}

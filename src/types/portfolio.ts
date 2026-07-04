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
  image?: string;
  /** "cover" (default) fills the thumbnail; "contain" letterboxes (logos). */
  imageFit?: "cover" | "contain";
  /** Background behind "contain" images, e.g. a brand color. */
  imageBg?: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  summary: string;
}

export interface PortfolioData {
  hero: HeroInfo;
  projects: ProjectItem[];
  experience: ExperienceItem[];
  skills: string[];
}

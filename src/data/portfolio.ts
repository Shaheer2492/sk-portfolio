import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  hero: {
    name: "Shaheer Khan",
    role: "Data Scientist & Full-Stack Developer",
    tagline: "Building scalable solutions with performance-first craft",
  },
  projects: [
    {
      title: "The Kaizen Academy",
      tech: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
      featured: true,
      year: "2024",
      live: "https://thekaizenacademy.com",
      image: "/images/kaizen-logo.png",
      imageFit: "contain",
      imageBg: "#0d1b2e",
      description:
        "Education platform powering youth STEM camps and private tutoring — co-founded and scaled to $60,000+ revenue in its first two months.",
    },
    {
      title: "VESPO",
      tech: ["JavaScript", "D3.js", "Data Visualization"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/VESPO/",
      github: "https://github.com/ShaheerAlamKhan/VESPO",
      image: "/images/projects/vespo.jpg",
      description:
        "Visual Exploration of Surgical Procedures & Outcomes — interactive analysis of surgical data from a Korean hospital.",
    },
    {
      title: "Longevity",
      tech: ["React Native", "FastAPI", "PostgreSQL", "Machine Learning"],
      featured: true,
      year: "2026",
      live: "https://ourlongevity.app",
      image: "/images/projects/longevity.jpg",
      description:
        "AI health platform that predicts biological age from wearable data, with device integrations and an AI health coach built on a LightGBM model.",
    },
    {
      title: "Cru App",
      tech: ["SwiftUI", "iOS", "Firebase"],
      year: "2026",
      description:
        "Native iOS community app with Apple Sign-In, events, and social features for a campus ministry.",
    },
    {
      title: "BCI Literacy Classifier",
      tech: ["Python", "Machine Learning", "EEG", "Flask"],
      featured: true,
      year: "2026",
      description:
        "UCSD capstone predicting motor-imagery BCI literacy from EEG features — an end-to-end MNE and scikit-learn pipeline with an interactive demo API.",
    },
    {
      title: "E-Waste Locator",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/waste-disposal/",
      github: "https://github.com/ShaheerAlamKhan/waste-disposal",
      image: "/images/projects/ewaste.jpg",
      description:
        "Web app helping San Diego residents find electronic-waste drop-off locations.",
    },
    {
      title: "Project DIANA",
      tech: ["Arduino", "C++", "Computer Vision", "IoT"],
      featured: true,
      year: "2023",
      description:
        "Drone system detecting nitrogen pollution and volatile organic compounds with geolocated mapping — 1st place at IEEE EPICS Las Vegas with $10,000 in funding.",
    },
    {
      title: "Bike Trax",
      tech: ["JavaScript", "Data Visualization", "Maps"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/BikeAnalysis/",
      github: "https://github.com/ShaheerAlamKhan/BikeAnalysis",
      image: "/images/projects/biketrax.jpg",
      description:
        "Immersive interactive map of Boston bike traffic across different times of day.",
    },
    {
      title: "QuickCruit.Ai",
      tech: ["React", "TypeScript", "Redux", "LLMs"],
      year: "2024",
      description:
        "AI recruiting platform — built LLM-powered resume analysis and recommendation features and improved accessibility scores by 27%.",
    },
    {
      title: "Colombia Vulnerability Map",
      tech: ["JavaScript", "D3.js", "Data Visualization"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/ColumbiaAnalysis/",
      github: "https://github.com/ShaheerAlamKhan/ColumbiaAnalysis",
      image: "/images/projects/colombia.jpg",
      description:
        "Interactive map visualizing socioeconomic vulnerability across Colombia's regions.",
    },
    {
      title: "BioNexus",
      tech: ["Node.js", "TypeScript", "REST APIs"],
      year: "2025",
      github: "https://github.com/ShaheerAlamKhan/BioNexus",
      description:
        "Smart API-integration hub linking biological databases through BioThings Explorer, with cross-database identifier mapping and data-quality pipelines.",
    },
    {
      title: "Session AI",
      tech: ["Python", "OpenAI API", "Pinecone"],
      year: "2023",
      description:
        "AI-facilitated networking tool matching event attendees using profile embeddings and smart-device location data.",
    },
    {
      title: "Financial Myths Analysis",
      tech: ["Python", "Jupyter", "Data Visualization"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/FinanceMyths/",
      github: "https://github.com/ShaheerAlamKhan/FinanceMyths",
      image: "/images/projects/financemyths.jpg",
      description:
        "Data-driven investigation of common personal-finance myths using exploratory analysis and interactive visuals.",
    },
    {
      title: "Data Structures Tutoring Platform",
      tech: ["C++", "Python", "Education"],
      year: "2022",
      description:
        "Comprehensive learning materials covering C++, Python, data structures, and algorithms for computer-science students.",
    },
  ],
  experience: [
    {
      role: "Co-Founder & CEO",
      org: "The Kaizen Academy",
      period: "2024 — Present",
      summary:
        "Built and scaled an education platform for youth STEM camps and tutoring to $60,000+ revenue in the first two months.",
    },
    {
      role: "Neuroscience Researcher",
      org: "UC San Diego",
      period: "2025 — 2026",
      summary:
        "Computational neuroscience research on brain mapping with graph-based analysis; capstone on motor-imagery BCI literacy prediction.",
    },
    {
      role: "Frontend Developer",
      org: "QuickCruit.Ai",
      period: "2024",
      summary:
        "Shipped responsive UI and LLM-powered resume analysis features, improving accessibility scores by 27%.",
    },
    {
      role: "B.S. Data Science",
      org: "UC San Diego — Halıcıoğlu Data Science Institute",
      period: "Class of 2026",
      summary:
        "Graduated June 2026.",
    },
  ],
  skills: [
    "React", "React Native", "Next.js", "TypeScript", "JavaScript", "Python",
    "Node.js", "FastAPI", "SwiftUI", "Machine Learning", "D3.js", "WebGL",
    "Data Visualization", "PostgreSQL", "Firebase", "AWS", "Git",
    "Performance Optimization", "Responsive Design"
  ],
};

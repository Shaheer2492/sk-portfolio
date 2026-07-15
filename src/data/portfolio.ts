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
        "Surgical outcomes intelligence: an interactive D3 explorer over 6,400 live surgical cases (VitalDB) — beeswarm, sunburst, and risk-factor views with a full clinical design system.",
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
      live: "https://shaheer2492.github.io/BCI-Classifier/",
      github: "https://github.com/Shaheer2492/BCI-Classifier",
      image: "/images/projects/bci.jpg",
      description:
        "UCSD capstone predicting motor-imagery BCI literacy from EEG features — an end-to-end MNE and scikit-learn pipeline with an interactive demo API.",
    },
    {
      title: "ReCircuit",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/waste-disposal/",
      github: "https://github.com/ShaheerAlamKhan/waste-disposal",
      image: "/images/projects/ewaste.jpg",
      description:
        "Civic-tech recycling finder for San Diego e-waste — geolocation-sorted drop-off sites with live search, accepted-item filters, and an environmental impact estimator.",
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
      title: "CycleFlow",
      tech: ["JavaScript", "Data Visualization", "Maps"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/BikeAnalysis/",
      github: "https://github.com/ShaheerAlamKhan/BikeAnalysis",
      image: "/images/projects/cycleflow.jpg",
      description:
        "Boston's bike traffic, hour by hour — a Mapbox + D3 flow map of 260K+ BlueBikes trips with a day-gradient time scrubber and dual light/dark basemaps.",
    },
    {
      title: "QuickCruit.Ai",
      tech: ["React", "TypeScript", "Redux", "LLMs"],
      year: "2024",
      description:
        "AI recruiting platform — built LLM-powered resume analysis and recommendation features and improved accessibility scores by 27%.",
    },
    {
      title: "Colombia Equity Atlas",
      tech: ["JavaScript", "D3.js", "Data Visualization"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/ColumbiaAnalysis/",
      github: "https://github.com/ShaheerAlamKhan/ColumbiaAnalysis",
      image: "/images/projects/colombia-atlas.jpg",
      description:
        "Data-journalism atlas mapping socioeconomic vulnerability across 1,100+ Colombian municipalities, 2007–2019, with an animated choropleth and regional driver analysis.",
    },
    {
      title: "BioNexus",
      tech: ["Node.js", "TypeScript", "REST APIs"],
      year: "2025",
      github: "https://github.com/ShaheerAlamKhan/BioNexus",
      description:
        "Biomedical knowledge-graph API and explorer — unifies queries across biological databases via BioThings Explorer with cross-database ID mapping, a React dashboard, and Dockerized services.",
    },
    {
      title: "Session AI",
      tech: ["Python", "OpenAI API", "Pinecone"],
      year: "2023",
      description:
        "AI-facilitated networking tool matching event attendees using profile embeddings and smart-device location data.",
    },
    {
      title: "Fact & Figure",
      tech: ["JavaScript", "Plotly", "D3.js", "Data Visualization"],
      year: "2025",
      live: "https://shaheeralamkhan.github.io/FinanceMyths/",
      github: "https://github.com/ShaheerAlamKhan/FinanceMyths",
      image: "/images/projects/financemyths.jpg",
      description:
        "Editorial data story debunking four money myths with interactive Plotly and D3 graphics — myth vs. verdict framing over SWIID and market data.",
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
        "Graduated March 2026.",
    },
  ],
  skills: [
    "React", "React Native", "Next.js", "TypeScript", "JavaScript", "Python",
    "Node.js", "FastAPI", "SwiftUI", "Machine Learning", "D3.js", "WebGL",
    "Data Visualization", "PostgreSQL", "Firebase", "AWS", "Git",
    "Performance Optimization", "Responsive Design"
  ],
};

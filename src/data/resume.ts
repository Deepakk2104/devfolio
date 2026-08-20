export const profile = {
  name: "Deepak Kumar",
  role: "Full Stack Developer",
  email: "deepakk12435@gmail.com",
  github: "https://github.com/Deepakk2104",
  linkedin: "https://www.linkedin.com/in/deepakk2104/",
  availability: "Open to Remote Opportunities",
  tagline: "Full-stack developer shipping production web applications.",
  summary:
    "with hands-on experience building and shipping production web applications using React, Next.js, TypeScript, Node.js, and Express. Skilled in designing REST APIs, relational database schemas, and secure authentication flows, with a strong focus on responsive UI and frontend performance optimization.",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "SQL", icon: "FaDatabase" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Redux Toolkit", icon: "SiRedux" },
      { name: "Zustand", icon: "FaStore" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "REST APIs", icon: "FaRoute" },
      { name: "JWT", icon: "FaKey" },
      { name: "PHP", icon: "SiPhp" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "Firebase Firestore", icon: "SiFirebase" },
      { name: "Prisma ORM", icon: "SiPrisma" },
    ],
  },
  {
    category: "Cloud / Services",
    items: [
      { name: "Vercel", icon: "SiVercel" },
      { name: "Render", icon: "SiRender" },
      { name: "Neon", icon: "SiNeon" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "Stripe", icon: "SiStripe" },
      { name: "Firebase Authentication", icon: "SiFirebase" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Vite", icon: "SiVite" },
      { name: "Figma", icon: "SiFigma" },
      { name: "WordPress", icon: "SiWordpress" },
      { name: "Divi", icon: "FaPalette" },
      { name: "Linux", icon: "SiLinux" },
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Spearmint Technologies",
    location: "Noida",
    period: "Apr 2026 – Jul 2026",
    stack: "React, Next.js, JavaScript, Tailwind CSS, WordPress, Divi, Git",
    bullets: [
      "Developed and maintained 8+ production websites using React, Next.js, WordPress, and Divi.",
      "Built responsive, reusable UI components and integrated REST APIs across client projects.",
      "Improved frontend performance through lazy loading, image optimization, and targeted UI optimizations.",
      "Collaborated with developers and designers to ship production features, fix issues, and meet client requirements.",
    ],
  },
];

export const projects = [
  {
    name: "Orbit",
    tagline: "Full-Stack Project Management App",
    stack: "Next.js, TypeScript, Express, PostgreSQL, Prisma, Zustand, React Query",
    github: "https://github.com/Deepakk2104/orbit",
    live: "https://orbit-azure-seven-18.vercel.app/",
    bullets: [
      "Built a full-stack Kanban app with drag-and-drop boards, task/comment management, organization-based access control, and JWT authentication.",
      "Optimized board updates using React Query caching and in-place mutations, reducing redundant API and database requests.",
      "Implemented position-based ordering for drag-and-drop workflows and validated backend behavior with a 57-test integration suite.",
    ],
  },
  {
    name: "RankPilot",
    tagline: "AI SEO Analyzer",
    stack: "React, Node.js, Express, PostgreSQL, Prisma, JWT",
    github: "https://github.com/Deepakk2104/rankpilot",
    live: "https://rankpilot-coral.vercel.app/",
    bullets: [
      "Built an SEO audit platform analyzing websites across 11 on-page factors with AI-powered optimization recommendations.",
      "Developed JWT-secured REST APIs and PostgreSQL/Prisma data models for scan history, rank tracking, and user analytics.",
      "Deployed the application using Vercel, Render, and Neon with secure CORS and environment-based configuration.",
    ],
  },
  {
    name: "Learnify",
    tagline: "AI Course Generator",
    stack: "React, Firebase, Grok API",
    github: "https://github.com/Deepakk2104/learnify",
    live: "https://learnify-sigma-two.vercel.app/",
    bullets: [
      "Built an AI course generator that creates personalized learning content from user inputs using the Grok API.",
      "Developed responsive React workflows and integrated Firebase for application data and course management.",
    ],
  },
];

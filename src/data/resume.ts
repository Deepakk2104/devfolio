export const profile = {
  name: "Deepak Kumar",
  role: "Full Stack Developer",
  email: "deepakk12435@gmail.com",
  emailHref: `https://mail.google.com/mail/?view=cm&fs=1&to=deepakk12435@gmail.com`,
  github: "https://github.com/Deepakk2104",
  linkedin: "https://www.linkedin.com/in/deepakk2104/",
  availability: "Open to Remote Opportunities",
  avatar: "/avatar.png",
  tagline: "Full-stack developer shipping production web applications.",
  summary:
    "Full-stack developer with hands-on experience building and shipping production web applications using React, Next.js, TypeScript, Node.js, and Express. Skilled in designing REST APIs, relational database schemas, and secure authentication flows, with a strong focus on responsive UI and frontend performance optimization.",
};

type SkillItem = { name: string; icon: string; color?: string };
type SkillGroup = { category: string; items: SkillItem[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "SQL", icon: "FaDatabase" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Redux Toolkit", icon: "SiRedux", color: "#764ABC" },
      { name: "Zustand", icon: "FaStore" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", icon: "SiCss", color: "#663399" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#5FA04E" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "REST APIs", icon: "FaRoute" },
      { name: "JWT", icon: "FaKey", color: "#FB015B" },
      { name: "PHP", icon: "SiPhp", color: "#777BB4" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
      { name: "Firebase Firestore", icon: "SiFirebase", color: "#DD2C00" },
      { name: "Prisma ORM", icon: "SiPrisma" },
    ],
  },
  {
    category: "Cloud / Services",
    items: [
      { name: "Vercel", icon: "SiVercel" },
      { name: "Render", icon: "SiRender", color: "#46E3B7" },
      { name: "Neon", icon: "SiNeon", color: "#00E599" },
      { name: "Firebase", icon: "SiFirebase", color: "#DD2C00" },
      { name: "Stripe", icon: "SiStripe", color: "#635BFF" },
      { name: "Firebase Authentication", icon: "SiFirebase", color: "#DD2C00" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
      { name: "Vite", icon: "SiVite", color: "#646CFF" },
      { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
      { name: "WordPress", icon: "SiWordpress", color: "#21759B" },
      { name: "Divi", icon: "FaPalette", color: "#7E3BD0" },
      { name: "Linux", icon: "SiLinux", color: "#FCC624" },
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
    image: "/projects/orbit.png",
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
    image: "/projects/rankpilot.png",
    bullets: [
      "Built an SEO audit platform analyzing websites across 11 on-page factors with AI-powered optimization recommendations.",
      "Developed JWT-secured REST APIs and PostgreSQL/Prisma data models for scan history, rank tracking, and user analytics.",
    ],
  },
  {
    name: "Learnify",
    tagline: "AI Course Generator",
    stack: "React, Firebase, Grok API",
    github: "https://github.com/Deepakk2104/learnify",
    live: "https://learnify-sigma-two.vercel.app/",
    image: "/projects/learnify.png",
    bullets: [
      "Built an AI course generator that creates personalized learning content from user inputs using the Grok API.",
      "Developed responsive React workflows and integrated Firebase for application data and course management.",
    ],
  },
];

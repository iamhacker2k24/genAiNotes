export const personalInfo = {
  name: "Alex Morgan",
  role: "Full Stack Engineer & AI Developer",
  tagline: "Building scalable, high-performance web applications and intelligent user experiences.",
  location: "San Francisco, CA (Open to Remote)",
  email: "alex.morgan.dev@example.com",
  phone: "+1 (555) 019-2834",
  status: "Available for new projects & full-time roles",
  bio: "I'm a full-stack engineer with over 5 years of experience specializing in React, Node.js, modern cloud architectures, and Generative AI integrations. I transform complex ideas into intuitive, fast, and resilient digital products.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    medium: "https://medium.com"
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Completed Projects", value: "40+" },
    { label: "GitHub Contributions", value: "1.8k+" },
    { label: "Client Satisfaction", value: "99%" }
  ]
};

export const skillsData = {
  categories: ["All", "Frontend", "Backend", "AI & Cloud", "Tools"],
  skills: [
    { name: "React.js", category: "Frontend", level: 95, icon: "react" },
    { name: "TypeScript", category: "Frontend", level: 90, icon: "typescript" },
    { name: "Next.js", category: "Frontend", level: 88, icon: "next" },
    { name: "Tailwind CSS", category: "Frontend", level: 92, icon: "tailwind" },
    { name: "HTML5 / CSS3", category: "Frontend", level: 98, icon: "html" },
    { name: "Redux / Zustand", category: "Frontend", level: 85, icon: "state" },
    { name: "Node.js", category: "Backend", level: 90, icon: "node" },
    { name: "Express.js", category: "Backend", level: 88, icon: "express" },
    { name: "PostgreSQL", category: "Backend", level: 84, icon: "postgres" },
    { name: "MongoDB", category: "Backend", level: 86, icon: "mongo" },
    { name: "GraphQL & REST", category: "Backend", level: 89, icon: "api" },
    { name: "LangChain / LLM APIs", category: "AI & Cloud", level: 86, icon: "ai" },
    { name: "Python / FastAPI", category: "AI & Cloud", level: 82, icon: "python" },
    { name: "AWS & Docker", category: "AI & Cloud", level: 80, icon: "cloud" },
    { name: "Git & CI/CD", category: "Tools", level: 92, icon: "git" },
    { name: "Jest / Vitest", category: "Tools", level: 85, icon: "test" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "AI Knowledge Copilot",
    subtitle: "RAG-Powered Enterprise Document Assistant",
    description: "An AI-powered document intelligence workspace allowing teams to chat with PDFs, analyze multi-source knowledge bases, and extract structured insights in real-time.",
    category: "AI & Cloud",
    tags: ["React", "FastAPI", "OpenAI", "Vector DB", "TailwindCSS"],
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    featured: true,
    liveUrl: "https://example.com/demo1",
    githubUrl: "https://github.com",
    metrics: "Reduced document lookup time by 75%"
  },
  {
    id: 2,
    title: "OmniFlow Dashboard",
    subtitle: "Modern SaaS Analytics & Subscription Platform",
    description: "A comprehensive analytics suite featuring real-time stream charting, multi-tenant billing with Stripe integration, and team collaboration permissions.",
    category: "Full Stack",
    tags: ["React 18", "TypeScript", "Node.js", "PostgreSQL", "Recharts"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    featured: true,
    liveUrl: "https://example.com/demo2",
    githubUrl: "https://github.com",
    metrics: "Processed over $2.4M in test transactions"
  },
  {
    id: 3,
    title: "DevSprint Kanban & Agile Tracker",
    subtitle: "Collaborative Task Engine with Real-Time Sockets",
    description: "High-performance drag-and-drop workflow tracker with optimistic UI updates, WebSocket live collaboration, automated burndown charts, and markdown notes.",
    category: "Frontend",
    tags: ["React", "DnD Kit", "Socket.io", "Tailwind", "Zustand"],
    gradient: "from-amber-500 via-orange-600 to-red-600",
    featured: true,
    liveUrl: "https://example.com/demo3",
    githubUrl: "https://github.com",
    metrics: "Sub-50ms sync latency across peers"
  },
  {
    id: 4,
    title: "CryptoPulse DeFi Terminal",
    subtitle: "Live Market Intelligence & Portfolio Tracker",
    description: "Crypto asset tracking platform with price alerts, decentralized liquidity pool metrics, and interactive TradingView technical indicators.",
    category: "Full Stack",
    tags: ["React", "WebSockets", "Ethers.js", "ChartJS", "Node"],
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    featured: false,
    liveUrl: "https://example.com/demo4",
    githubUrl: "https://github.com",
    metrics: "Live tracking of 1,200+ token pairs"
  },
  {
    id: 5,
    title: "Zenith Cloud File Vault",
    subtitle: "Zero-Knowledge Encrypted Cloud Storage",
    description: "Secure, client-side encrypted file hosting application with chunked multi-part uploading, instant shareable link generation, and audit logging.",
    category: "AI & Cloud",
    tags: ["React", "AWS S3", "WebCrypto API", "Express", "Docker"],
    gradient: "from-cyan-600 via-blue-600 to-indigo-700",
    featured: false,
    liveUrl: "https://example.com/demo5",
    githubUrl: "https://github.com",
    metrics: "Supports large files up to 10GB effortlessly"
  },
  {
    id: 6,
    title: "DesignCraft UI Component System",
    subtitle: "Accessible React & CSS Headless Design Kit",
    description: "A battle-tested component library with 40+ accessible UI primitives, full keyboard navigation support, and customizable token styling.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Storybook", "Rollup", "A11y"],
    gradient: "from-violet-600 via-indigo-700 to-blue-800",
    featured: false,
    liveUrl: "https://example.com/demo6",
    githubUrl: "https://github.com",
    metrics: "Downloaded 30k+ times on NPM mock registry"
  }
];

export const experienceData = [
  {
    role: "Senior Full Stack Engineer",
    company: "Nexus Tech Solutions",
    period: "2022 - Present",
    type: "Full-Time • Remote",
    description: "Led the migration of legacy monolith to micro-frontends with React & Vite. Architected high-concurrency Node.js microservices handling 2M+ monthly active requests.",
    achievements: [
      "Engineered an automated AI query layer that boosted user retention by 28%",
      "Mentored a team of 6 engineers and standardized coding & review guidelines",
      "Cut bundle sizes by 42% through code-splitting and asset optimization"
    ],
    tech: ["React", "TypeScript", "Node.js", "AWS", "GraphQL", "Docker"]
  },
  {
    role: "Frontend Engineer",
    company: "Aura Creative Lab",
    period: "2020 - 2022",
    type: "Full-Time • San Francisco, CA",
    description: "Spearheaded design system implementation across 4 client enterprise apps. Collaborated closely with UI/UX designers to translate Figma tokens into modular React components.",
    achievements: [
      "Achieved 99+ Google Lighthouse scores across performance and accessibility",
      "Integrated payment gateways and subscription management with Stripe",
      "Implemented comprehensive end-to-end testing reducing QA cycles by 35%"
    ],
    tech: ["React", "Next.js", "Redux", "Tailwind CSS", "Jest", "Cypress"]
  },
  {
    role: "Junior Web Developer",
    company: "Hyperlink Media",
    period: "2019 - 2020",
    type: "Full-Time • Austin, TX",
    description: "Built responsive client portals, landing pages, and interactive dashboards. Integrated third-party RESTful APIs and ensured cross-browser compatibility.",
    achievements: [
      "Delivered 15+ completed client projects ahead of projected milestones",
      "Modernized company codebases from vanilla JavaScript to React SPA"
    ],
    tech: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "REST APIs", "Git"]
  }
];

export const servicesData = [
  {
    icon: "code",
    title: "Modern Frontend Engineering",
    description: "Building responsive, blazing fast, and accessible user interfaces with React, modern state management, and pixel-perfect attention to detail."
  },
  {
    icon: "server",
    title: "Backend & API Architecture",
    description: "Designing resilient RESTful and GraphQL APIs, microservices, secure authentication, and robust database models with Node.js and PostgreSQL/MongoDB."
  },
  {
    icon: "sparkles",
    title: "AI Integration & Copilots",
    description: "Supercharging products with LLMs, vector search, embeddings, LangChain, and automated conversational AI interfaces."
  },
  {
    icon: "shield",
    title: "Performance & Security Audits",
    description: "Optimizing Core Web Vitals, code-splitting, bundle profiling, strict authentication, input validation, and secure cloud deployments."
  }
];

export const testimonialsData = [
  {
    quote: "Alex delivered our dashboard months ahead of schedule. The attention to performance, smooth animations, and clean architecture was exceptional.",
    author: "Sarah Jenkins",
    role: "VP of Product, FinScale",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "One of the most talented full-stack developers I've collaborated with. Alex bridges the gap between intricate backend logic and delightful frontend design effortlessly.",
    author: "David Chen",
    role: "CTO, CloudPulse AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "His code is clean, self-documenting, and remarkably scalable. He elevated our entire frontend development workflow and standard.",
    author: "Elena Rostova",
    role: "Lead Architect, Nexus Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  }
];

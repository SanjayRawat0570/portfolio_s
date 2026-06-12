export const profile = {
  name: "Sanjay Rawat",
  role: "Software Engineer",
  email: "sanjayrawat0570@gmail.com",
  phone: "+91 6263801708",
  // ── Update these with your real URLs ──
  github: "https://github.com/SanjayRawat0570",
  linkedin: "https://www.linkedin.com/in/sanjay-rawat-01831b259",
  leetcode: "https://leetcode.com/u/sanjayRawat/",
  resumeUrl: "/Sanjay_Rawat_Resume.pdf",
  summary:
    "AI Engineer specialising in multi-agent orchestration, RAG pipelines, and LLM-powered applications using LangChain, LangGraph, and the Claude API. Strong full-stack foundation in React, Next.js, FastAPI, and PostgreSQL, with hands-on experience shipping production-grade AI systems via Docker and CI/CD pipelines.",
};

export const stats = [
  { num: "800+", label: "DSA problems solved" },
  { num: "8.38", label: "CGPA" },
  { num: "2×", label: "Dev internships" },
  { num: "Knight", label: "LeetCode rank" },
];

export const skills = [
  {
    icon: "🤖",
    title: "AI & Generative AI",
    items: [
      "LLM Integration", "Prompt Engineering", "RAG", "LangChain", "LangGraph",
      "LangSmith", "AI Agents", "Multi-Agent Orchestration", "Vector DB", "Pydantic",
    ],
  },
  {
    icon: "💻",
    title: "Languages",
    items: ["C++", "TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    icon: "🎨",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "React Hook Form", "Zod", "Redux"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "Go", "JWT", "WebSockets"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Firebase", "FAISS", "Pinecone"],
  },
  {
    icon: "🚀",
    title: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "GitHub Actions", "AWS", "CI/CD", "Vercel", "Netlify", "Git", "Postman"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Tradegospel",
    location: "Remote",
    date: "Sep 2025 – Nov 2025",
    points: [
      "Developed a full-stack trading education platform to help new traders understand live stock markets and investment strategies.",
      "Implemented real-time stock data visualization to display live profit, loss, and historical trading performance.",
      "Built interactive dashboards showing user-wise earnings, losses, and complete transaction history using live APIs.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Vaishalitech",
    location: "Remote",
    date: "Jun 2025 – Sep 2025",
    points: [
      "Developed core admin panel features including order listing and creation using React, Tailwind CSS, and Redux.",
      "Built reusable and responsive UI components to ensure scalable and consistent design.",
      "Integrated REST APIs for real-time data handling and smooth admin workflows.",
    ],
  },
];

export const projects = [
  {
    title: "InsightLoop",
    tagline: "AI-Native Business Intelligence Platform",
    description:
      "A full-stack AI-powered BI platform where users connect data sources and query them in plain English. A 5-agent LangGraph pipeline — Query Writer, Data Analyst, Chart Selector, Narrative, and Report Compiler — is orchestrated via a state machine.",
    points: [
      "5-agent LangGraph state-machine pipeline",
      "Real-time agent trace streaming over WebSockets",
      "Celery-scheduled PDF reports with email & S3 storage",
    ],
    tech: ["Next.js 14", "FastAPI", "LangChain", "LangGraph", "Claude API", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/",
    live: "",
  },
  {
    title: "NexusAI",
    tagline: "Enterprise Support Agent Orchestrator",
    description:
      "An enterprise-grade multi-agent AI customer support system with intelligent query routing. An orchestrator agent classifies and forwards queries to specialized agents, exposed through REST APIs with CORS support and containerized with Docker.",
    points: [
      "Orchestrator agent with intelligent query routing",
      "REST APIs with CORS, fully containerized",
      "Structured logging & error handling for reliability",
    ],
    tech: ["Python", "FastAPI", "Multi-Agent Systems", "Docker"],
    github: "https://github.com/",
    live: "",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

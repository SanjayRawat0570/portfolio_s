export const profile = {
  name: "Sanjay Rawat",
  role: "AI Engineer",
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
      "Built full-stack trading education platform using React and Node.js/Express for learning live stock markets and investment strategies.",
      "Implemented real-time stock visualization with Chart.js and live APIs displaying profit/loss, trends, and technical indicators (RSI, Bollinger Bands, MACD).",
      "Developed interactive dashboards with earnings tracking, win rates, risk analytics, and responsive design for desktop, tablet, and mobile.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Vaishalitech",
    location: "Remote",
    date: "Jun 2025 – Sep 2025",
    points: [
      "Developed comprehensive admin dashboard with React and Redux managing order workflows including listing with filtering, creation, and full CRUD operations.",
      "Built reusable UI component library (forms, data tables, modals, notifications) following consistent design patterns for scalability.",
      "Integrated REST APIs with comprehensive error handling, loading states, and optimistic UI updates for seamless real-time synchronization.",
    ],
  },
];

export const certifications = [
  {
    title: "Developing Front-End Apps with React",
    issuer: "Coursera",
  },
  {
    title: "LeetCode Knight Rank",
    issuer: "Top 5% globally · 800+ problems solved",
  },
];

export const projects = [
  {
    title: "Enterprise RAG System",
    tagline: "Production-Ready RAG Platform",
    description:
      "A production-ready RAG platform with end-to-end workflow orchestration including document ingestion, semantic chunking, hybrid search, reranking, and LLM generation with citation extraction. Designed for 100% offline-first operation with an optional Gemini integration.",
    points: [
      "100% offline-first architecture with multi-provider LLM router (Claude, OpenAI, Ollama)",
      "Hybrid search with reranking, Redis caching, and scalability adapters for Qdrant/Weaviate",
      "Prometheus/Grafana monitoring, Jaeger tracing, and 56 pytest tests",
    ],
    tech: ["Python", "FastAPI", "Next.js 14", "Docker", "Prometheus", "Grafana", "Jaeger", "PostgreSQL", "Qdrant", "Redis"],
    github: "https://github.com/SanjayRawat0570/RAG_SERVER",
    live: "https://rag-frontend-smoky.vercel.app/",
  },
  {
    title: "Smart Coaching Platform",
    tagline: "AI Coaching Institute for JEE/NEET",
    description:
      "An AI coaching platform for JEE/NEET using 8 LangGraph agents for doubt resolution, adaptive tests, progress tracking, at-risk detection, parent reports, and rank prediction. Deployed entirely on free-tier services.",
    points: [
      "8 LangGraph agents covering doubt resolution, adaptive tests, and rank prediction",
      "6 RAG patterns (Agentic, HyDE, RAPTOR, CRAG, web fallback, CrossEncoder) with LLM fallback chain",
      "Multi-tenant system on Supabase + Qdrant Cloud; FastAPI on HuggingFace Spaces, Next.js on Vercel",
    ],
    tech: ["LangGraph", "Groq", "Gemini", "Supabase", "Qdrant Cloud", "FastAPI", "Next.js 14", "React 18"],
    github: "https://github.com/SanjayRawat0570/coaching_inst_server",
    live: "https://coaching-inst-ui.vercel.app/",
  },
  {
    title: "InsightLoop",
    tagline: "AI-Native Business Intelligence Platform",
    description:
      "An AI BI platform enabling non-technical users to query databases (PostgreSQL, MongoDB, APIs, CSV) in natural English using a 5-agent LangGraph pipeline, with real-time WebSocket streaming of agent execution steps.",
    points: [
      "5-agent LangGraph pipeline for natural-language database querying",
      "Real-time WebSocket streaming of agent execution steps with metrics",
      "Automated PDF report generation via Celery/S3; deployed on Vercel + Railway with auto-scaling",
    ],
    tech: ["Next.js 14", "FastAPI", "LangGraph", "Claude API", "PostgreSQL", "Redis", "Celery", "Docker"],
    github: "https://github.com/SanjayRawat0570",
    live: "https://insightloop-eta.vercel.app",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Awards" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

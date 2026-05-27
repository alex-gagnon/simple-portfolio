export interface Project {
    title: string;
    description: string;
    demo: string;
    github: string;
    stack: string;
    inProgress?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Pilot Regs",
    description: "FAA regulations are dense documents that pilots need fast access to during training and flight planning. Built a full-stack RAG application with cert-level metadata filtering, streaming SSE responses, and a custom FAR/AIM ingestion pipeline — turning a 20-minute manual search into a 30-second query.",
    demo: "https://pilotregs.com",
    github: "",
    stack: "Next.js · TypeScript · FastAPI · Claude API · pgvector · Supabase · Docker",
  },
  {
    title: "Personal AI Marketplace",
    description: "A personal collection of Claude AI skills, hooks, and plugins I'm building and experimenting with. Started as a spin-off of an enterprise AI tooling initiative at work — this is where I try things out.",
    demo: "",
    github: "https://github.com/alex-gagnon/personal-marketplace",
    stack: "Python · Claude API · Shell/Bash",
  },
  {
    title: "Weather MCP Server",
    description: "An MCP (Model Context Protocol) server that exposes real-time weather data as a tool for Claude and other AI agents. Built while learning the MCP spec — a practical starting point for understanding agentic tool integrations.",
    demo: "",
    github: "https://github.com/alex-gagnon/weather-mcp",
    stack: "Python · MCP · Anthropic API",
  },
  {
    title: "Midas",
    description: "My first AI-powered project — a personal finance review tool that uses AI to analyze and surface insights from financial data. Built to scratch my own itch and get hands-on with LLM integrations outside of a work context.",
    demo: "",
    github: "https://github.com/alex-gagnon/Midas",
    stack: "Python · AI/LLM",
  },
  {
    title: "This Portfolio",
    description: "Built and deployed this site using React, TypeScript, and Material-UI — automated via GitHub Actions CI/CD pipeline to a custom domain. Because engineers should dogfood their own deployment pipelines.",
    demo: "https://alex-gagnon.com",
    github: "https://github.com/alex-gagnon/simple-portfolio",
    stack: "React · TypeScript · Material-UI · GitHub Actions",
  },
];

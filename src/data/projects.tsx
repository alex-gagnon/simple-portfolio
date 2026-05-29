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
    description: "FAA regulations are dense documents that pilots need fast access to during training and flight planning. Built a full-stack RAG application with cert-level metadata filtering, streaming SSE responses, and a custom FAR/AIM ingestion pipeline, turning a 20-minute manual search into a 30-second query. Indexes the complete FAR documentation (thousands of pages of regulatory content) with plans to expand to the AIM. Built as a licensed pilot scratching my own itch, now exploring a subscription model.",
    demo: "https://pilotregs.com",
    github: "",
    stack: "Next.js · TypeScript · FastAPI · Claude API · pgvector · Supabase · Docker · Playwright",
  },
  {
    title: "Personal AI Marketplace",
    description: "A personal sandbox for experimenting with Claude skills, hooks, and MCP integrations. The groundwork that led me to build an enterprise version from scratch at Vestmark.",
    demo: "",
    github: "https://github.com/alex-gagnon/personal-marketplace",
    stack: "Python · Claude API · Shell/Bash",
  },
  {
    title: "Weather MCP Server",
    description: "An MCP server exposing real-time weather data as a tool for Claude and other AI agents. A practical exploration of agentic tool design and the MCP spec.",
    demo: "",
    github: "https://github.com/alex-gagnon/weather-mcp",
    stack: "Python · MCP · Anthropic API",
  },
  {
    title: "This Portfolio",
    description: "Built and deployed this site using React, TypeScript, and Material-UI, automated via GitHub Actions CI/CD pipeline to a custom domain. Because engineers should dogfood their own deployment pipelines.",
    demo: "https://alex-gagnon.com",
    github: "https://github.com/alex-gagnon/simple-portfolio",
    stack: "React · TypeScript · Material-UI · GitHub Actions · Playwright",
  },
];

export interface StatCard {
    stat: string;
    unit: string;
    label: string;
    detail: string;
}

export const HIGHLIGHTS: StatCard[] = [
    {
        stat: '~100',
        unit: 'hrs/month',
        label: 'Saved by AI Triage',
        detail: 'Automated 2–3 hours of nightly test analysis that previously required manual review.',
    },
    {
        stat: '700+',
        unit: 'API tests',
        label: 'Delivered in 4 months',
        detail: 'Surfaced 30 previously undetected bugs (5 of them critical) before they hit production.',
    },
    {
        stat: '40%',
        unit: 'increase',
        label: 'Deployment Frequency',
        detail: 'Python CI/CD test frameworks that gave teams the confidence to ship more often.',
    },
    {
        stat: '3',
        unit: 'AI tools shipped',
        label: 'MCP · RAG · Agents',
        detail: 'Built internal AI tooling (MCP servers, RAG pipelines, and monitoring agents) that replaced hours of manual engineering work.',
    },
];

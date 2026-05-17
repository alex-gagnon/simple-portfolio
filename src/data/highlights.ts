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
        detail: 'Surfaced 30 previously undetected bugs — 5 of them critical — before they hit production.',
    },
    {
        stat: '40%',
        unit: 'increase',
        label: 'Deployment Frequency',
        detail: 'Python CI/CD test frameworks that gave teams the confidence to ship more often.',
    },
    {
        stat: '11',
        unit: 'SDETs led',
        label: 'QE Marketplace',
        detail: 'Enterprise AI plugin ecosystem for automated QA workflows, adopted across engineering.',
    },
];

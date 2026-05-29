export interface Job {
    title: string;
    company: string;
    period: string;
    description: string;
}

export const EXPERIENCE: Job[] = [
    {
        title: 'Manager, QA Automation',
        company: 'Vestmark',
        period: 'Feb 2024 – Present',
        description: 'Manage and mentor a team of 11 engineers across multiple financial services products, owning automation strategy, roadmap development, and cross-functional alignment with leadership and stakeholders. Created the QE Marketplace, an enterprise repository of AI-powered automation plugins designed to help teams automate their workflows regardless of technical ability, with training sessions and demos across engineering to drive adoption. Led initiatives to redesign processes through AI-augmented workflows with human-in-the-loop review, and directed development of an AI-powered monitoring tool that automated hours of daily manual work, saving ~100 hours per month.',
    },
    {
        title: 'Team Lead, QA Automation',
        company: 'Vestmark',
        period: 'Feb 2023 – Feb 2024',
        description: 'Led an engineering team through a period of significant growth, driving automation coverage up 70% across three products with limited resources. Managed onboarding and training of contractors to reduce a 200+ item backlog. Established process standards, review workflows, and automation guidelines adopted across the team. Initiated cross-functional collaboration between multiple engineering groups to align automation initiatives with business goals, while also acting as Scrum Master and developing mentoring practices and career development paths for team members.',
    },
    {
        title: 'Senior QA Automation Engineer',
        company: 'Vestmark',
        period: 'Jun 2021 – Feb 2023',
        description: 'Architected scalable Python automation frameworks with integrated CI/CD pipelines (Jenkins, Docker, Gradle), increasing deployment frequency by 40%. Built a monitoring and reporting system using Grafana and InfluxDB for real-time trend analysis. Modularized tooling to streamline workflows and reduce maintenance overhead, and introduced centralized quality standards with SonarQube while collaborating with DevOps to integrate automation directly into deployment workflows.',
    },
    {
        title: 'Test Automation Software Engineer',
        company: 'Escher Group',
        period: 'Mar 2020 – May 2021',
        description: 'Standardized and built Python automation frameworks for point-of-sale and mobile device products, reducing production bugs by 10%. Led development of mobile device testing capabilities from the ground up. Built CI/CD pipelines on Bamboo and Azure Cloud saving 1,000+ developer hours annually, and engineered a full-stack internal monitoring application with Azure OAuth that automated historical data analysis, cutting manual labor by 500+ hours annually.',
    },
    {
        title: 'Software QA Engineer',
        company: 'Firebrand Technologies',
        period: 'Jul 2019 – Mar 2020',
        description: 'Joined as a manual tester, identified the complete absence of automation and performance testing, and self-taught C# and JMeter to independently design, build, and own both frameworks from scratch. Reduced manual effort by 1,200+ hours annually and leveraged performance data to drive infrastructure improvements with leadership. Sole owner of both frameworks, and began training team members on how to contribute and maintain the suite.',
    },
    {
        title: 'Software QA Specialist',
        company: 'Transparent Language',
        period: 'Mar 2018 – Jun 2019',
        description: 'Manual and exploratory testing across UI and database services, writing SQL queries to validate data integrity across multiple platforms. Built Python validation tests for blue/green MongoDB deployments that caught significant data loss during switchovers, and monitored RabbitMQ throughput to surface critical bugs.',
    },
    {
        title: 'Team Leader / Corporal, M1A2 Armor Crewman',
        company: 'United States Army',
        period: 'Jul 2010 – Nov 2013',
        description: 'Led a team of four in high-pressure environments, building leadership, adaptability, and decision-making skills that carry through everything I do today. Responsible for mission planning, team coordination, and maintaining operational readiness.',
    },
];

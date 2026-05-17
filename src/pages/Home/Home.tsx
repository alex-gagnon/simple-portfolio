import { Box, Button, Typography, Grid, Paper, Chip, IconButton, Tooltip, TextField, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Card, RevealSection } from '../../components';
import { PROJECTS } from '../../data/projects';
import "./Home.scss";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <Typography component='h2' variant='h4' sx={{
        color: '#f0c050',
        fontWeight: 'bold',
        mb: 4,
        pb: 1.5,
        borderBottom: '1px solid rgba(27, 160, 152, 0.3)',
    }}>
        {children}
    </Typography>
);

const experience = [
    {
        title: 'Manager, QA Automation',
        company: 'Vestmark',
        period: 'Feb 2024 – Present',
        bullets: [
            'Manage and mentor a team of 11 SDETs across multiple cloud-hosted financial services products.',
            'Leading an initiative to redesign test processes through an AI-augmented workflow with human-in-the-loop review.',
            'Created the QE Marketplace — an enterprise repository of AI-powered plugins (skills, hooks, agents, MCP servers) with training sessions across engineering to drive adoption.',
        ],
    },
    {
        title: 'Team Lead, QA Automation',
        company: 'Vestmark',
        period: 'Feb 2023 – Feb 2024',
        bullets: [
            'Directed an AI-powered nightly monitoring tool that automated 2–3 hours of daily manual triage, saving ~100 hours per month.',
            'Led UI automation suite overhaul catching ~120 defects. Built flake-detection tooling using historical test data.',
        ],
    },
    {
        title: 'Senior QA Automation Engineer',
        company: 'Vestmark',
        period: 'Jun 2021 – Feb 2023',
        bullets: [
            'Architected Python automation frameworks (Selenium, Locust, JMeter, pytest) with CI/CD pipelines (Jenkins, Docker), increasing deployment frequency by 40%.',
            'Delivered 700+ automated API tests in four months, uncovering ~30 previously undetected issues, 5 of them critical.',
        ],
    },
    {
        title: 'Test Automation Software Engineer',
        company: 'Escher Group',
        period: 'Mar 2020 – May 2021',
        bullets: [
            'Standardized Python automation frameworks for desktop and mobile, reducing production bugs by 10%.',
            'Built CI/CD pipelines on Bamboo and Azure saving 1,000+ developer hours annually. Engineered a full-stack monitoring app with Azure OAuth cutting developer labor by 500+ hours.',
        ],
    },
    {
        title: 'Software QA Engineer',
        company: 'Firebrand Technologies',
        period: 'Jul 2019 – Mar 2020',
        bullets: [
            'Self-taught C# and JMeter to independently build automation and performance frameworks from scratch, reducing manual effort by 1,200+ hours annually.',
        ],
    },
    {
        title: 'Software QA Specialist',
        company: 'Transparent Language',
        period: 'Mar 2018 – Jun 2019',
        bullets: [
            'Promoted from manual tester to database testing. Built Python validation tests for blue/green MongoDB deployments, catching significant data loss during switchovers.',
        ],
    },
];

const statCards = [
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

const fieldSx = {
    '& .MuiOutlinedInput-root': {
        color: '#e8eef4',
        backgroundColor: 'rgba(255,255,255,0.03)',
        '& fieldset': { borderColor: 'rgba(200,218,235,0.15)' },
        '&:hover fieldset': { borderColor: 'rgba(200,218,235,0.3)' },
        '&.Mui-focused fieldset': { borderColor: '#1ba098' },
    },
    '& .MuiInputLabel-root': { color: 'rgba(200,218,235,0.5)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#1ba098' },
};

const ContactForm = () => {
    const [fields, setFields] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        try {
            const res = await fetch('https://submit-form.com/0SwfHtWCf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(fields),
            });
            if (!res.ok) throw new Error('Submission failed');
            setSubmitted(true);
        } catch {
            setError('Something went wrong — try emailing admin@alex-gagnon.com directly.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <Paper sx={{
                p: 4,
                backgroundColor: 'rgba(27,160,152,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(27,160,152,0.3)',
                borderRadius: 2,
                textAlign: 'center',
            }}>
                <Typography sx={{ color: '#1ba098', fontSize: '1.5rem', mb: 1 }}>✓</Typography>
                <Typography sx={{ color: '#e8eef4', fontWeight: 600, mb: 1 }}>Message sent!</Typography>
                <Typography sx={{ color: 'rgba(200,218,235,0.65)', fontSize: '0.9rem' }}>
                    Thanks for reaching out — I'll get back to you soon.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 2,
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
            }}
        >
            {/* honeypot */}
            <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Name" name="name" required
                        value={fields.name} onChange={handleChange} sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" name="email" type="email" required
                        value={fields.email} onChange={handleChange} sx={fieldSx} />
                </Grid>
            </Grid>
            <TextField fullWidth label="Message" name="message" required multiline rows={5}
                value={fields.message} onChange={handleChange} sx={fieldSx} />

            {error && (
                <Typography sx={{ color: '#f87171', fontSize: '0.85rem' }}>{error}</Typography>
            )}

            <Button
                type="submit"
                variant="outlined"
                disabled={submitting}
                sx={{
                    alignSelf: 'flex-start',
                    color: '#1ba098',
                    borderColor: '#1ba098',
                    px: 4,
                    '&:hover': { backgroundColor: 'rgba(27,160,152,0.1)', borderColor: '#1ba098' },
                    '&.Mui-disabled': { borderColor: 'rgba(27,160,152,0.3)', color: 'rgba(27,160,152,0.4)' },
                }}
            >
                {submitting ? <CircularProgress size={20} sx={{ color: '#1ba098' }} /> : 'Send message'}
            </Button>
        </Paper>
    );
};

export const Home = () => {
    const skills = {
        "Languages": ["Python", "TypeScript", "JavaScript", "C#", "SQL", "Bash"],
        "Testing & Automation": ["pytest", "Selenium", "Locust", "JMeter", "Jest", "API testing"],
        "Infrastructure": ["Jenkins", "Docker", "Azure", "GitHub Actions", "Grafana", "MongoDB"],
        "AI & Developer Tooling": ["Anthropic API", "MCP Servers", "RAG", "Claude Desktop", "Cursor AI"],
        "Leadership": ["Team management", "Hiring", "Mentoring", "Agile/Scrum"]
    };

    return (
        <Box color='sleepyText.main' sx={{ display: 'flex', flexDirection: 'column', pb: 10 }}>

            {/* ── Hero ── */}
            <Box sx={{
                position: 'relative',
                pt: { xs: 10, md: 14, lg: 18 },
                pb: { xs: 8, md: 10 },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '40%',
                    left: { xs: '50%', lg: '35%' },
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '600px',
                    background: 'radial-gradient(ellipse at center, rgba(27, 160, 152, 0.1) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                },
            }}>
                <Typography component='h1' variant='h2' sx={{
                    mb: 2,
                    position: 'relative',
                    zIndex: 1,
                    fontSize: { xs: '2.2rem', md: '3rem', lg: '3.8rem', xl: '4.5rem' },
                    maxWidth: { xs: '100%', lg: '850px' },
                    lineHeight: 1.15,
                }}>
                    Hey there, I'm{' '}
                    <Box component='span' sx={{ fontWeight: 'bold', color: '#f0c050' }}>Alex Gagnon</Box>.
                </Typography>
                <Typography variant='body1' sx={{
                    fontWeight: 300,
                    lineHeight: 1.8,
                    mb: 5,
                    position: 'relative',
                    zIndex: 1,
                    fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
                    maxWidth: { xs: '100%', lg: '640px' },
                    color: 'rgba(200, 218, 235, 0.88)',
                }}>
                    I architect automation systems and AI-augmented workflows that make engineering teams faster.
                    Currently leading a team of 11 SDETs at Vestmark — building the tools that eliminate the toil
                    between developers and production.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, position: 'relative', zIndex: 1 }}>
                    <Button
                        variant='outlined'
                        href='#projects'
                        size='large'
                        color='sleepyText'
                        sx={{ fontSize: { xs: 15, lg: 17 } }}
                    >
                        View my work
                    </Button>
                    <Button
                        variant='outlined'
                        href='/Alex_Gagnon_Resume_Leader_Port.docx.pdf'
                        download="Alex_Gagnon_Resume_Engineering_Lead.pdf"
                        size='large'
                        sx={{
                            fontSize: { xs: 15, lg: 17 },
                            color: '#1ba098',
                            borderColor: '#1ba098',
                            '&:hover': { borderColor: '#1ba098', backgroundColor: 'rgba(27,160,152,0.08)' },
                        }}
                    >
                        Resume — Lead
                    </Button>
                    <Button
                        variant='outlined'
                        href='/Alex_Gagnon_Resume_IC_Port.docx.pdf'
                        download="Alex_Gagnon_Resume_Senior_IC.pdf"
                        size='large'
                        sx={{
                            fontSize: { xs: 15, lg: 17 },
                            color: '#1ba098',
                            borderColor: 'rgba(27,160,152,0.5)',
                            '&:hover': { borderColor: '#1ba098', backgroundColor: 'rgba(27,160,152,0.08)' },
                        }}
                    >
                        Resume — IC
                    </Button>
                </Box>
            </Box>

            {/* ── About + Highlights ── */}
            <Box id="about" sx={{ mb: 10 }}>
                <Grid container spacing={{ xs: 4, lg: 8 }}>
                    <Grid item xs={12} lg={6}>
                        <RevealSection>
                            <SectionHeading>About Me</SectionHeading>
                            <Typography variant='body1' sx={{ lineHeight: 1.9, fontSize: { xs: '1rem', lg: '1.05rem' } }}>
                                I've spent 8+ years chasing one question: how do you make software teams ship with more
                                confidence and less friction? That's led me from writing test frameworks from scratch at a
                                startup, to now directing automation strategy across a full QA organization.
                            </Typography>
                            <Typography variant='body1' sx={{ lineHeight: 1.9, fontSize: { xs: '1rem', lg: '1.05rem' }, mt: 2.5 }}>
                                These days I'm deep in the intersection of AI tooling and developer productivity —
                                building MCP servers, RAG pipelines, and agents that turn hours of manual work into minutes.
                            </Typography>
                            <Typography variant='body1' sx={{ lineHeight: 1.9, fontSize: { xs: '1rem', lg: '1.05rem' }, mt: 2.5 }}>
                                Outside of work I fly small planes — earned my PPL and working toward the instrument rating next.
                                I've also taken up bookbinding and blacksmithing: two crafts that scratch the same itch as
                                engineering, just with leather and steel instead of code.
                            </Typography>
                        </RevealSection>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <RevealSection delay={120}>
                            <SectionHeading>Highlights</SectionHeading>
                            <Grid container spacing={2}>
                                {statCards.map((card, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <RevealSection delay={i * 90}>
                                            <Paper sx={{
                                                p: 2.5,
                                                height: '100%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                                backdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.07)',
                                                borderTop: '2px solid rgba(27, 160, 152, 0.5)',
                                                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(27, 160, 152, 0.07)',
                                                    borderTop: '2px solid #1ba098',
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 8px 32px rgba(27, 160, 152, 0.15)',
                                                },
                                            }}>
                                                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.75, mb: 0.5 }}>
                                                    <Typography sx={{
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontSize: '2.2rem',
                                                        fontWeight: 700,
                                                        color: '#f0c050',
                                                        lineHeight: 1,
                                                    }}>
                                                        {card.stat}
                                                    </Typography>
                                                    <Typography sx={{ color: 'rgba(200,218,235,0.55)', fontSize: '0.85rem', fontWeight: 300 }}>
                                                        {card.unit}
                                                    </Typography>
                                                </Box>
                                                <Chip
                                                    label={card.label}
                                                    size="small"
                                                    sx={{
                                                        mb: 1.25,
                                                        backgroundColor: 'rgba(27, 160, 152, 0.15)',
                                                        color: '#1ba098',
                                                        fontSize: '0.72rem',
                                                        fontWeight: 600,
                                                        border: '1px solid rgba(27, 160, 152, 0.25)',
                                                    }}
                                                />
                                                <Typography variant='body2' sx={{
                                                    color: 'rgba(200, 218, 235, 0.65)',
                                                    lineHeight: 1.6,
                                                    fontSize: '0.82rem',
                                                }}>
                                                    {card.detail}
                                                </Typography>
                                            </Paper>
                                        </RevealSection>
                                    </Grid>
                                ))}
                            </Grid>
                        </RevealSection>
                    </Grid>
                </Grid>
            </Box>

            {/* ── Experience ── */}
            <Box id="experience" sx={{ mb: 10 }}>
                <RevealSection>
                    <SectionHeading>Experience</SectionHeading>
                </RevealSection>
                <Box sx={{ position: 'relative' }}>
                    {/* Vertical line */}
                    <Box sx={{
                        position: 'absolute',
                        left: { xs: 12, md: 20 },
                        top: 8,
                        bottom: 8,
                        width: '2px',
                        background: 'linear-gradient(to bottom, #1ba098, rgba(27,160,152,0.15))',
                        zIndex: 0,
                    }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {experience.map((job, i) => (
                            <RevealSection key={i} delay={i * 60}>
                                <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, position: 'relative', pb: 5 }}>
                                    {/* Dot */}
                                    <Box sx={{
                                        flexShrink: 0,
                                        width: { xs: 26, md: 42 },
                                        display: 'flex',
                                        justifyContent: 'center',
                                        pt: '5px',
                                        zIndex: 1,
                                    }}>
                                        <Box sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            backgroundColor: i === 0 ? '#1ba098' : 'rgba(27,160,152,0.4)',
                                            border: `2px solid ${i === 0 ? '#1ba098' : 'rgba(27,160,152,0.5)'}`,
                                            boxShadow: i === 0 ? '0 0 12px rgba(27,160,152,0.6)' : 'none',
                                            mt: '2px',
                                        }} />
                                    </Box>
                                    {/* Content */}
                                    <Box sx={{ flex: 1, pb: 1 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: { xs: 0.5, sm: 1.5 }, mb: 0.5 }}>
                                            <Typography sx={{ color: '#f0c050', fontWeight: 700, fontSize: { xs: '1rem', md: '1.05rem' } }}>
                                                {job.title}
                                            </Typography>
                                            <Typography sx={{ color: '#1ba098', fontSize: '0.9rem', fontWeight: 500 }}>
                                                {job.company}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ color: 'rgba(200,218,235,0.45)', fontSize: '0.8rem', mb: 1.5, fontFamily: "'Inter', sans-serif" }}>
                                            {job.period}
                                        </Typography>
                                        <Box component="ul" sx={{ m: 0, pl: 2 }}>
                                            {job.bullets.map((b, j) => (
                                                <Box component="li" key={j} sx={{
                                                    color: 'rgba(200,218,235,0.8)',
                                                    fontSize: '0.9rem',
                                                    lineHeight: 1.7,
                                                    mb: 0.75,
                                                    '&::marker': { color: '#1ba098' },
                                                }}>
                                                    {b}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </RevealSection>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ── Skills ── */}
            <Box sx={{ mb: 10 }}>
                <RevealSection>
                    <SectionHeading>Skills & Tools</SectionHeading>
                </RevealSection>
                <Grid container spacing={3}>
                    {Object.entries(skills).map(([category, items], i) => (
                        <Grid item xs={12} sm={6} md={4} lg={true} key={category}>
                            <RevealSection delay={i * 70}>
                                <Paper sx={{
                                    p: 2.5,
                                    height: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255, 255, 255, 0.07)',
                                    borderLeft: '3px solid #1ba098',
                                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(27, 160, 152, 0.08)',
                                        border: '1px solid rgba(27, 160, 152, 0.25)',
                                        borderLeft: '3px solid #1ba098',
                                    },
                                }}>
                                    <Typography variant='h6' sx={{ color: '#f0c050', fontWeight: 'bold', mb: 1.5, fontSize: '0.95rem' }}>
                                        {category}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                        {items.map((item, index) => (
                                            <Chip key={index} label={item} size='small' sx={{
                                                backgroundColor: 'rgba(200, 218, 235, 0.08)',
                                                color: 'rgba(200, 218, 235, 0.85)',
                                                fontSize: '0.8rem',
                                                border: '1px solid rgba(200, 218, 235, 0.15)',
                                            }} />
                                        ))}
                                    </Box>
                                </Paper>
                            </RevealSection>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ── Projects ── */}
            <Box id="projects" sx={{ mb: 10 }}>
                <RevealSection>
                    <SectionHeading>Projects</SectionHeading>
                </RevealSection>
                <Grid container spacing={3}>
                    {PROJECTS.map((project, i) => (
                        <Grid key={project.title} item xs={12} sm={6} lg={4}>
                            <RevealSection delay={i * 80}>
                                <Card
                                    title={project.title}
                                    description={project.description}
                                    demo={project.demo}
                                    github={project.github}
                                    stack={project.stack}
                                    inProgress={project.inProgress}
                                />
                            </RevealSection>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ── Contact ── */}
            <Box id="contact">
                <RevealSection>
                    <SectionHeading>Get In Touch</SectionHeading>
                    <Grid container spacing={6} alignItems="flex-start">
                        <Grid item xs={12} lg={5}>
                            <Typography variant='body1' sx={{ lineHeight: 1.9, fontSize: '1.05rem', mb: 4 }}>
                                Want to talk shop about automation, AI tooling, or QA strategy?
                                I'm always up for a good engineering conversation.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1.5 }}>
                                <Tooltip title="GitHub">
                                    <IconButton component="a" href="https://github.com/alex-gagnon"
                                        target="_blank" rel="noopener noreferrer"
                                        sx={{ color: '#1ba098', '&:hover': { color: '#f0c050' } }}>
                                        <GitHubIcon sx={{ fontSize: 26 }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="LinkedIn">
                                    <IconButton component="a" href="https://www.linkedin.com/in/agagnon313/"
                                        target="_blank" rel="noopener noreferrer"
                                        sx={{ color: '#1ba098', '&:hover': { color: '#f0c050' } }}>
                                        <LinkedInIcon sx={{ fontSize: 26 }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={7}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </RevealSection>
            </Box>

        </Box>
    );
};

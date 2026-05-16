import { Box, Button, Typography, Grid, Paper, Chip, List, ListItem, ListItemText, IconButton, Tooltip } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "./Home.scss";


export const Home = () => {
    const highlights = [
        "Engineered an AI monitoring tool that automated 2–3 hours of nightly test triage — saving ~100 hours per month.",
        "Delivered 700+ automated API tests in 4 months, surfacing 30 previously undetected bugs, 5 of them critical.",
        "Architected Python CI/CD test frameworks that increased deployment frequency by 40%.",
        "Built the QE Marketplace: an enterprise AI plugin ecosystem for automated QA workflows, adopted across engineering."
    ];

    const skills = {
        "Languages": ["Python", "TypeScript", "JavaScript", "C#", "SQL", "Bash"],
        "Testing & Automation": ["pytest", "Selenium", "Locust", "JMeter", "Jest", "API testing"],
        "Infrastructure": ["Jenkins", "Docker", "Azure", "GitHub Actions", "Grafana", "MongoDB"],
        "AI & Developer Tooling": ["Anthropic API", "MCP Servers", "RAG", "Claude Desktop", "Cursor AI"],
        "Leadership": ["Team management", "Hiring", "Mentoring", "Agile/Scrum"]
    };

    return (
        <Box color='sleepyText.main' sx={{ display: 'flex', flexDirection: 'column', pb: 6 }}>
            {/* Hero Section */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: '60vh',
                maxWidth: '860px',
                mx: 'auto',
                px: 3,
                mb: 6,
            }}>
                <Typography component='h1' variant='h2' sx={{ mb: 3 }}>
                    Hey there, I'm <span style={{ fontWeight: "bold" }}>Alex Gagnon</span>.
                </Typography>
                <Typography component='h2' variant='h5' sx={{ fontWeight: 300, lineHeight: 1.6, mb: 4 }}>
                    I architect automation systems and AI-augmented workflows that make engineering teams faster. Currently leading a team of 11 SDETs at Vestmark — building the tools that eliminate the toil between developers and production.
                </Typography>
                <Button variant='outlined' href='/projects' size='large' color='sleepyText' sx={{ fontSize: 18 }}>
                    View my work
                </Button>
            </Box>

            {/* About Me Section */}
            <Box sx={{ maxWidth: '860px', mx: 'auto', px: 3, mb: 6 }}>
                <Typography component='h2' variant='h4' sx={{ color: '#deb992', fontWeight: 'bold', mb: 3 }}>
                    About Me
                </Typography>
                <Typography variant='body1' sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                    I've spent 8+ years chasing one question: how do you make software teams ship with more confidence and less friction? That's led me from writing test frameworks from scratch at a startup, to now directing automation strategy across a full QA organization.
                </Typography>
                <Typography variant='body1' sx={{ lineHeight: 1.8, fontSize: '1.1rem', mt: 2 }}>
                    These days I'm deep in the intersection of AI tooling and developer productivity — building MCP servers, RAG pipelines, and agents that turn hours of manual work into minutes. When I'm not doing that, I'm probably studying for my private pilot certificate.
                </Typography>
            </Box>

            {/* Career Highlights Section */}
            <Box sx={{ maxWidth: '860px', mx: 'auto', px: 3, mb: 6 }}>
                <Typography component='h2' variant='h4' sx={{ color: '#deb992', fontWeight: 'bold', mb: 3 }}>
                    Highlights
                </Typography>
                <List sx={{ pl: 0 }}>
                    {highlights.map((highlight, index) => (
                        <ListItem key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5, p: 0 }}>
                            <Typography sx={{ mr: 2, color: '#1ba098', fontWeight: 'bold' }}>•</Typography>
                            <ListItemText primary={highlight} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Skills Section */}
            <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 3, mb: 6 }}>
                <Typography component='h2' variant='h4' sx={{ color: '#deb992', fontWeight: 'bold', mb: 3 }}>
                    Skills & Tools
                </Typography>
                <Grid container spacing={3}>
                    {Object.entries(skills).map(([category, items]) => (
                        <Grid item xs={12} sm={6} md={4} key={category}>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(27, 160, 152, 0.1)', borderLeft: '3px solid #1ba098' }}>
                                <Typography variant='h6' sx={{ color: '#deb992', fontWeight: 'bold', mb: 2 }}>
                                    {category}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {items.map((item, index) => (
                                        <Chip key={index} label={item} size='small' sx={{ backgroundColor: 'rgba(222, 185, 146, 0.2)', color: '#deb992', fontSize: '0.85rem' }} />
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Get In Touch Section */}
            <Box sx={{ maxWidth: '860px', mx: 'auto', px: 3, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography component='h2' variant='h4' sx={{ color: '#deb992', fontWeight: 'bold', mb: 2 }}>
                    Get In Touch
                </Typography>
                <Typography variant='body1' sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
                    Want to talk shop about automation, AI tooling, or QA strategy? I'm always up for a good engineering conversation.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Tooltip title="Email">
                        <IconButton
                            component="a"
                            href="mailto:alexgagnon227@gmail.com"
                            sx={{ color: '#1ba098', '&:hover': { color: '#deb992' } }}
                        >
                            <EmailIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="GitHub">
                        <IconButton
                            component="a"
                            href="https://github.com/alex-gagnon"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#1ba098', '&:hover': { color: '#deb992' } }}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/agagnon313/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#1ba098', '&:hover': { color: '#deb992' } }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

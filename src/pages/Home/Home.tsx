import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Card } from '../../components';
import { Hero } from '../../components/Hero/Hero';
import { Highlights } from '../../components/Highlights/Highlights';
import { ExperienceTimeline } from '../../components/ExperienceTimeline/ExperienceTimeline';
import { SkillsGrid } from '../../components/SkillsGrid/SkillsGrid';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';
import { RevealSection } from '../../components';
import { PROJECTS } from '../../data/projects';
import './Home.scss';

export const Home = () => (
    <Box color='sleepyText.main' sx={{ display: 'flex', flexDirection: 'column', pb: 10 }}>

        <Hero />

        {/* About + Highlights */}
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
                            Outside of work I fly small planes — earned my PPL and working toward the instrument rating
                            next. I've also taken up bookbinding and blacksmithing: two crafts that scratch the same itch
                            as engineering, just with leather and steel instead of code.
                        </Typography>
                    </RevealSection>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Highlights />
                </Grid>
            </Grid>
        </Box>

        <ExperienceTimeline />

        <SkillsGrid />

        {/* Projects */}
        <Box id="projects" sx={{ mb: 10 }}>
            <RevealSection>
                <SectionHeading>Projects</SectionHeading>
            </RevealSection>
            <Grid container spacing={3}>
                {PROJECTS.map((project, i) => (
                    <Grid key={project.title} item xs={12} sm={6} lg={4}>
                        <RevealSection delay={i * 80}>
                            <Card {...project} />
                        </RevealSection>
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* Contact */}
        <Box id="contact">
            <RevealSection>
                <SectionHeading>Get In Touch</SectionHeading>
                <Grid container spacing={6} alignItems="flex-start">
                    <Grid item xs={12} lg={5}>
                        <Typography variant='body1' sx={{ lineHeight: 1.9, fontSize: '1.05rem', mb: 4 }}>
                            Want to talk shop about automation, AI tooling, or QA strategy?
                            I'm always up for a good engineering conversation.
                        </Typography>
                        <SocialLinks iconSize={26} gap={1.5} />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </RevealSection>
        </Box>

    </Box>
);

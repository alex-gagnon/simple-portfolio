import React from 'react';
import { Box, Grid, SxProps, Typography } from '@mui/material';
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

const panelSx: SxProps = {
    background: 'rgba(6, 18, 32, 0.45)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: 3,
    p: { xs: 3, sm: 4, md: 5, lg: 6 },
    mb: { xs: 5, md: 7 },
};

export const Home = () => (
    <Box color='sleepyText.main' sx={{ display: 'flex', flexDirection: 'column', pb: 10 }}>

        <Hero />

        {/* About + Highlights */}
        <Box id="about" component="section" sx={panelSx}>
            <RevealSection>
                <Grid container spacing={{ xs: 4, lg: 8 }}>
                    <Grid item xs={12} lg={6}>
                        <SectionHeading>About Me</SectionHeading>
                        <Typography variant='body1'>
                            These days I'm deep in the intersection of AI tooling and developer productivity,
                            building MCP servers, RAG pipelines, and agents that turn hours of manual work into minutes.
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 2.5 }}>
                            I've spent 8+ years helping engineering teams ship with more confidence and less friction,
                            from writing test frameworks from scratch at a startup to directing automation strategy
                            across a full QA organization.
                        </Typography>
                        <Typography variant='body1' sx={{ mt: 2.5 }}>
                            Outside of work I fly small planes. I've earned my PPL and am working toward my instrument
                            rating. I've also taken up bookbinding and blacksmithing: two crafts that scratch the same itch
                            as engineering, just with leather and steel instead of code.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Highlights />
                    </Grid>
                </Grid>
            </RevealSection>
        </Box>

        {/* Experience */}
        <Box component="section" sx={panelSx}>
            <ExperienceTimeline />
        </Box>

        {/* Skills */}
        <Box component="section" sx={panelSx}>
            <SkillsGrid />
        </Box>

        {/* Projects */}
        <Box id="projects" component="section" sx={panelSx}>
            <RevealSection>
                <SectionHeading>Projects</SectionHeading>
            </RevealSection>
            <Grid container spacing={3}>
                {PROJECTS.map((project, i) => (
                    <Grid key={project.title} item xs={12} sm={6} lg={4} xl={3}>
                        <RevealSection delay={i * 80}>
                            <Card {...project} />
                        </RevealSection>
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* Contact */}
        <Box id="contact" component="section" sx={panelSx}>
            <RevealSection>
                <SectionHeading>Get In Touch</SectionHeading>
                <Grid container spacing={6} alignItems="flex-start">
                    <Grid item xs={12} lg={5}>
                        <Typography variant='body1' sx={{ mb: 4 }}>
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

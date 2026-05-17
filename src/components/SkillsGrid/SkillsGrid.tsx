import React from 'react';
import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { RevealSection } from '../RevealSection/RevealSection';
import { SKILLS } from '../../data/skills';

export const SkillsGrid = () => (
    <Box>
        <RevealSection>
            <SectionHeading>Skills & Tools</SectionHeading>
        </RevealSection>
        <Grid container spacing={3}>
            {Object.entries(SKILLS).map(([category, items], i) => (
                <Grid item xs={12} sm={6} md={4} lg={true} key={category}>
                    <RevealSection delay={i * 70}>
                        <Paper sx={{
                            p: { xs: 3, md: 4 },
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
                            <Typography variant='h6' sx={{
                                color: '#f0c050',
                                fontWeight: 'bold',
                                mb: 2,
                                fontSize: { xs: '1.1rem', md: '1.2rem', lg: '1.3rem' },
                            }}>
                                {category}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {items.map((item) => (
                                    <Chip key={item} label={item} sx={{
                                        backgroundColor: 'rgba(200, 218, 235, 0.08)',
                                        color: 'rgba(200, 218, 235, 0.9)',
                                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                                        border: '1px solid rgba(200, 218, 235, 0.15)',
                                        height: 32,
                                    }} />
                                ))}
                            </Box>
                        </Paper>
                    </RevealSection>
                </Grid>
            ))}
        </Grid>
    </Box>
);

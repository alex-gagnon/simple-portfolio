import React from 'react';
import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { RevealSection } from '../RevealSection/RevealSection';
import { SKILLS } from '../../data/skills';

export const SkillsGrid = () => (
    <Box sx={{ mb: 10 }}>
        <RevealSection>
            <SectionHeading>Skills & Tools</SectionHeading>
        </RevealSection>
        <Grid container spacing={3}>
            {Object.entries(SKILLS).map(([category, items], i) => (
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
                                {items.map((item) => (
                                    <Chip key={item} label={item} size='small' sx={{
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
);

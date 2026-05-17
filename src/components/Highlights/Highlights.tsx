import React from 'react';
import { Box, Grid, Paper, Chip, Typography } from '@mui/material';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { RevealSection } from '../RevealSection/RevealSection';
import { HIGHLIGHTS } from '../../data/highlights';

export const Highlights = () => (
    <RevealSection delay={120}>
        <SectionHeading>Highlights</SectionHeading>
        <Grid container spacing={2}>
            {HIGHLIGHTS.map((card, i) => (
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
                            <Chip label={card.label} size="small" sx={{
                                mb: 1.25,
                                backgroundColor: 'rgba(27, 160, 152, 0.15)',
                                color: '#1ba098',
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                border: '1px solid rgba(27, 160, 152, 0.25)',
                            }} />
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
);

import React from 'react';
import { Box, Typography } from '@mui/material';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { RevealSection } from '../RevealSection/RevealSection';
import { EXPERIENCE } from '../../data/experience';

export const ExperienceTimeline = () => (
    <Box id="experience">
        <RevealSection>
            <SectionHeading>Experience</SectionHeading>
        </RevealSection>
        <Box sx={{ position: 'relative' }}>
            <Box sx={{
                position: 'absolute',
                left: { xs: 12, md: 20 },
                top: 8,
                bottom: 8,
                width: '2px',
                background: 'linear-gradient(to bottom, #1ba098, rgba(27,160,152,0.15))',
                zIndex: 0,
            }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {EXPERIENCE.map((job, i) => (
                    <RevealSection key={i} delay={i * 60}>
                        <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, position: 'relative', pb: 5 }}>
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
                            <Box sx={{ flex: 1, pb: 1 }}>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: { xs: 0.5, sm: 1.5 }, mb: 0.5 }}>
                                    <Typography sx={{ color: '#f0c050', fontWeight: 700, fontSize: { xs: '1.05rem', md: '1.15rem' } }}>
                                        {job.title}
                                    </Typography>
                                    <Typography sx={{ color: '#1ba098', fontSize: '1rem', fontWeight: 500 }}>
                                        {job.company}
                                    </Typography>
                                </Box>
                                <Typography sx={{ color: 'rgba(200,218,235,0.5)', fontSize: '0.875rem', mb: 1.5 }}>
                                    {job.period}
                                </Typography>
                                <Typography variant='body1' sx={{ color: 'rgba(200,218,235,0.8)' }}>
                                    {job.description}
                                </Typography>
                            </Box>
                        </Box>
                    </RevealSection>
                ))}
            </Box>
        </Box>
    </Box>
);

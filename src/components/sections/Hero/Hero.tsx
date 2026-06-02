import React from 'react';
import { Box, Typography } from '@mui/material';

export const Hero = () => (
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
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.75rem', xl: '5.75rem' },
            maxWidth: { xs: '100%', lg: '900px' },
            lineHeight: 1.12,
        }}>
            Hey there,{' '}
            <Box component='span' sx={{ whiteSpace: 'nowrap' }}>
                I'm <Box component='span' sx={{ fontWeight: 'bold', color: '#f0c050' }}>Alex Gagnon</Box>.
            </Box>
        </Typography>
        <Typography variant='body1' sx={{
            fontWeight: 300,
            lineHeight: 1.8,
            mb: 5,
            position: 'relative',
            zIndex: 1,
            fontSize: { xs: '1.1rem', md: '1.3rem', lg: '1.5rem', xl: '1.65rem' },
            maxWidth: { xs: '100%', lg: '700px' },
            color: 'rgba(200, 218, 235, 0.88)',
        }}>
            I architect automation systems and AI-augmented workflows that make engineering teams faster.
            Currently leading a team of 11 SDETs at Vestmark, building the tools that eliminate the toil
            between developers and production.
        </Typography>
    </Box>
);

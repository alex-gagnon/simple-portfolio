import React from 'react';
import { Box, Typography } from '@mui/material';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const Footer = () => (
    <Box sx={{
        backgroundColor: '#051622',
        padding: '3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        marginTop: '4rem',
    }}>
        <SocialLinks iconSize={24} gap={2} />
        <Typography sx={{ color: 'rgba(200, 218, 235, 0.45)', fontSize: '0.9rem', marginTop: 1 }}>
            © 2026 Alex Gagnon
        </Typography>
    </Box>
);

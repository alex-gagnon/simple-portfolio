import React from 'react';
import { Box } from '@mui/material';
import { useScrolled } from '../../../hooks/useScrolled';

export const FloatingNav = () => {
    const scrolled = useScrolled(200);

    return (
        <Box
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            aria-label="Scroll to top"
            sx={{
                position: 'fixed',
                bottom: { xs: 20, md: 32 },
                right: { xs: 20, md: 32 },
                zIndex: 1200,
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                cursor: 'pointer',
                backgroundColor: 'rgba(6, 12, 20, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(27, 160, 152, 0.4)',
                color: '#1ba098',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                opacity: scrolled ? 1 : 0,
                transform: scrolled ? 'translateY(0)' : 'translateY(12px)',
                pointerEvents: scrolled ? 'auto' : 'none',
                transition: 'opacity 0.3s ease, transform 0.3s ease, border-color 0.2s ease, background-color 0.2s ease',
                '&:hover': {
                    backgroundColor: 'rgba(27, 160, 152, 0.15)',
                    borderColor: '#1ba098',
                },
            }}
        >
            ↑
        </Box>
    );
};

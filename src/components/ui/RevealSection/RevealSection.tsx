import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

interface RevealSectionProps {
    children: React.ReactNode;
    delay?: number;
    sx?: SxProps<Theme>;
    component?: React.ElementType;
}

export const RevealSection = ({ children, delay = 0, sx, component }: RevealSectionProps) => {
    const { ref, visible } = useScrollReveal();

    return (
        <Box
            ref={ref}
            component={component}
            sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
                '@media (prefers-reduced-motion: reduce)': {
                    transform: 'none !important',
                    transition: `opacity 0.4s ease ${delay}ms`,
                },
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};

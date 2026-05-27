import React from 'react';
import { Box, Link, Tooltip } from '@mui/material';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import { NAV_LINKS, SECTION_IDS } from '../../constants/nav';

export const FloatingNav = () => {
    const activeSection = useActiveSection(SECTION_IDS);
    const scrolled = useScrolled(200);

    const containerSx = {
        position: 'fixed' as const,
        right: 24,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1200,
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 0.5,
        backgroundColor: 'rgba(6, 12, 20, 0.6)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(27, 160, 152, 0.18)',
        borderRadius: '12px',
        padding: '10px 8px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    };

    const linkSx = (isActive: boolean) => ({
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 1.25,
        py: 0.5,
        borderRadius: '6px',
        textDecoration: 'none',
        fontSize: '0.78rem',
        fontWeight: isActive ? 700 : 400,
        color: isActive ? '#1ba098' : 'rgba(200, 218, 235, 0.55)',
        transition: 'color 0.2s ease, background-color 0.2s ease',
        '&:hover': {
            color: '#1ba098',
            backgroundColor: 'rgba(27, 160, 152, 0.1)',
        },
        '&::before': {
            content: '""',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isActive ? '#1ba098' : 'rgba(200, 218, 235, 0.3)',
            flexShrink: 0,
            transition: 'background-color 0.2s ease',
        },
    });

    const dividerSx = {
        width: '100%',
        height: '1px',
        backgroundColor: 'rgba(27, 160, 152, 0.15)',
        my: 0.25,
    };

    const topButtonSx = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 1.25,
        py: 0.5,
        borderRadius: '6px',
        textDecoration: 'none',
        fontSize: '0.78rem',
        fontWeight: 400,
        color: 'rgba(200, 218, 235, 0.55)',
        cursor: 'pointer',
        transition: 'color 0.2s ease, background-color 0.2s ease, opacity 0.3s ease',
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none',
        '&:hover': {
            color: '#1ba098',
            backgroundColor: 'rgba(27, 160, 152, 0.1)',
        },
    };

    return (
        <Box sx={containerSx}>
            {NAV_LINKS.map(({ label, href, sectionId }) => (
                <Tooltip key={sectionId} title={label} placement="left" arrow>
                    <Link href={href} sx={linkSx(activeSection === sectionId)}>
                        {label}
                    </Link>
                </Tooltip>
            ))}
            <Box sx={dividerSx} />
            <Tooltip title="Back to top" placement="left" arrow>
                <Box
                    sx={topButtonSx}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    role="button"
                    aria-label="Scroll to top"
                >
                    ↑ Top
                </Box>
            </Tooltip>
        </Box>
    );
};

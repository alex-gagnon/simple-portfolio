import React from 'react';
import { Box, Divider, Link, Typography } from '@mui/material';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { Logo } from '../Logo/Logo';
import { NAV_LINKS } from '../../constants/nav';

export const Footer = () => (
    <Box
        component="footer"
        sx={{
            backgroundColor: '#051622',
            padding: { xs: '3rem 1.5rem 2rem', md: '4rem 2rem 2.5rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            marginTop: '4rem',
        }}
    >
        {/* Logo */}
        <Link href="#" aria-label="Back to top" sx={{ lineHeight: 0, opacity: 0.9, '&:hover': { opacity: 1 } }}>
            <Logo size={64} />
        </Link>

        {/* Nav links */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 2, md: 4 } }}>
            {NAV_LINKS.map(({ label, href }) => (
                <Link
                    key={label}
                    href={href}
                    underline="none"
                    sx={{
                        color: 'rgba(200, 218, 235, 0.6)',
                        fontSize: '0.95rem',
                        letterSpacing: '0.04em',
                        transition: 'color 0.2s ease',
                        '&:hover': { color: '#1ba098' },
                    }}
                >
                    {label}
                </Link>
            ))}
        </Box>

        {/* Social links */}
        <SocialLinks iconSize={22} gap={2} />

        <Divider sx={{ width: '100%', maxWidth: 480, borderColor: 'rgba(27,160,152,0.12)' }} />

        {/* Bottom row */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: { xs: 1, sm: 3 } }}>
            <Typography sx={{ color: 'rgba(200, 218, 235, 0.35)', fontSize: '0.82rem' }}>
                © {new Date().getFullYear()} Alex Gagnon
            </Typography>
            <Link
                href="mailto:admin@alex-gagnon.com"
                underline="none"
                sx={{
                    color: 'rgba(200, 218, 235, 0.35)',
                    fontSize: '0.82rem',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#1ba098' },
                }}
            >
                admin@alex-gagnon.com
            </Link>
        </Box>
    </Box>
);

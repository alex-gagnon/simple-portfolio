import { AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography, Tooltip } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useScrolled } from '../../hooks/useScrolled';
import { useActiveSection } from '../../hooks/useActiveSection';

const NAV_LINKS = [
    { label: 'About', href: '#about', sectionId: 'about' },
    { label: 'Experience', href: '#experience', sectionId: 'experience' },
    { label: 'Projects', href: '#projects', sectionId: 'projects' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
];
const SECTION_IDS = NAV_LINKS.map(n => n.sectionId);
const buttonFontSize = 16;

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const scrolled = useScrolled();
    const activeSection = useActiveSection(SECTION_IDS);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position='sticky'
            sx={{
                top: 0,
                bgcolor: scrolled ? 'rgba(6, 12, 20, 0.75)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(27, 160, 152, 0.15)' : '1px solid transparent',
                boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
                transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
            }}
        >
            <Container maxWidth={false}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src="/logos/android-chrome-192x192.png" alt="Alex Gagnon" height={50} width={55} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={(e) => setAnchorElNav(e.currentTarget)}
                            sx={{ mr: 2 }}
                        >
                            <Typography>&#9776;</Typography>
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            disableScrollLock
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {NAV_LINKS.map(({ label, href }) => (
                                <MenuItem key={label} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href={href} underline="none" color="inherit">{label}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src="/logos/android-chrome-192x192.png" alt="Alex Gagnon" height={45} width={50} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {NAV_LINKS.map(({ label, href, sectionId }) => {
                            const isActive = activeSection === sectionId;
                            return (
                                <Button
                                    key={label}
                                    href={href}
                                    sx={{
                                        my: 2,
                                        display: 'block',
                                        fontSize: buttonFontSize,
                                        color: isActive ? '#1ba098' : 'rgba(200, 218, 235, 0.75)',
                                        fontWeight: isActive ? 700 : 400,
                                        position: 'relative',
                                        transition: 'color 0.2s ease',
                                        '&:hover': { color: '#1ba098' },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 6,
                                            left: '50%',
                                            transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                                            width: '60%',
                                            height: '2px',
                                            backgroundColor: '#1ba098',
                                            transition: 'transform 0.25s ease',
                                            transformOrigin: 'center',
                                        },
                                    }}
                                >
                                    {label}
                                </Button>
                            );
                        })}
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <Tooltip title="GitHub">
                            <IconButton
                                component="a"
                                href="https://github.com/alex-gagnon"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: '#1ba098', '&:hover': { color: '#f0c050' } }}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="LinkedIn">
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/agagnon313/"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: '#1ba098', '&:hover': { color: '#f0c050' } }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

import { AppBar, Box, Button, Container, Link, Menu, MenuItem, Toolbar, Tooltip, Typography, IconButton } from '@mui/material';
import React from 'react';
import { useScrolled } from '../../../hooks/useScrolled';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { Logo } from '../../ui/Logo/Logo';
import { SocialLinks } from '../../ui/SocialLinks/SocialLinks';
import { NAV_LINKS, SECTION_IDS } from '../../../constants/nav';
import { useMotion } from '../../../context/MotionContext';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
const buttonFontSize = 18;

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const scrolled = useScrolled();
    const activeSection = useActiveSection(SECTION_IDS);
    const { hoverEnabled, toggleHover } = useMotion();

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
                <Toolbar sx={{ py: 1.5 }}>
                    <Box component="a" href="/" sx={{ mr: 5, display: { xs: 'none', md: 'flex' }, lineHeight: 0 }}>
                        <Logo size={72} />
                    </Box>

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
                            PaperProps={{
                                sx: {
                                    backgroundColor: 'rgba(6, 12, 20, 0.95)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(27, 160, 152, 0.2)',
                                    color: '#e8eef4',
                                    mt: 0.5,
                                }
                            }}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {NAV_LINKS.map(({ label, href }) => (
                                <MenuItem key={label} onClick={handleCloseNavMenu}
                                    sx={{ ...(hoverEnabled && { '&:hover': { backgroundColor: 'rgba(27,160,152,0.12)' } }) }}>
                                    <Link href={href} underline="none"
                                        sx={{ color: '#e8eef4', width: '100%', fontSize: '1.1rem' }}>
                                        {label}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box component="a" href="/" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, lineHeight: 0 }}>
                        <Logo size={60} />
                    </Box>

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
                                        transition: hoverEnabled ? 'color 0.2s ease' : 'none',
                                        ...(hoverEnabled && { '&:hover': { color: '#1ba098' } }),
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

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <SocialLinks iconSize={30} />
                    </Box>

                    <Tooltip title={hoverEnabled ? 'Disable hover effects' : 'Enable hover effects'}>
                        <IconButton
                            data-testid='toggleHoverTheme'
                            onClick={toggleHover}
                            aria-label={hoverEnabled ? 'Disable hover effects' : 'Enable hover effects'}
                            size="small"
                            sx={{ ml: 1 }}
                        >
                            <AutoAwesomeIcon sx={{
                                fontSize: 22,
                                color: hoverEnabled ? '#f0c050' : 'rgba(200, 218, 235, 0.3)',
                                transition: 'color 0.2s ease',
                            }} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

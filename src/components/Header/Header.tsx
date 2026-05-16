import { AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography, Tooltip } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];
const buttonFontSize = 16;


export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (
        <AppBar position='relative' sx={{ bgcolor: 'transparent' }}>
            <Container maxWidth={false}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src="/logos/android-chrome-192x192.png" alt="Alex Gagnon" height={50} width={55}/>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Typography>&#9776;</Typography>
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
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
                        <img src="/logos/android-chrome-192x192.png" alt="Alex Gagnon" height={45} width={50}/>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {NAV_LINKS.map(({ label, href }) => (
                            <Button
                                key={label}
                                href={href}
                                color='sleepyButton'
                                sx={{ my: 2, display: 'block', fontSize: buttonFontSize }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <Tooltip title="GitHub">
                            <IconButton
                                component="a"
                                href="https://github.com/alex-gagnon"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{
                                    color: '#1ba098',
                                    '&:hover': {
                                        color: '#deb992'
                                    }
                                }}
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
                                sx={{
                                    color: '#1ba098',
                                    '&:hover': {
                                        color: '#deb992'
                                    }
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Email">
                            <IconButton
                                component="a"
                                href="mailto:alexgagnon227@gmail.com"
                                size="small"
                                sx={{
                                    color: '#1ba098',
                                    '&:hover': {
                                        color: '#deb992'
                                    }
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

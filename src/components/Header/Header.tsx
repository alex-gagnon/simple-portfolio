import { AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography, Tooltip } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const pages = ['Projects'];
const buttonFontSize = 18;


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
                        <MenuItem key='home' onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" color="#1ba098">
                                <Link href='/'>Home</Link>
                            </Typography>
                        </MenuItem>

                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <Link href={page.toLowerCase()}>{page}</Link>
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
                        <Button
                                key='home'
                                onClick={handleCloseNavMenu}
                                href='/'
                                color='sleepyButton'
                                sx={{ my: 2, display: 'block', fontSize: buttonFontSize }}
                            >
                                Home
                        </Button>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            href={page.toLowerCase()}
                            color='sleepyButton'
                            sx={{ my: 2, display: 'block', fontSize: buttonFontSize }}
                        >
                            {page}
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

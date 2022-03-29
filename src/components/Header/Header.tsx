import { ThemeProvider } from '@emotion/react';
import { AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../../theme';


const pages = ['Projects']


export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{ bgcolor: 'sleepy.dark' }}>
                <Container maxWidth={false}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                        LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuItem />
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
                        LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                    key='home'
                                    onClick={handleCloseNavMenu}
                                    href='/'
                                    color='sleepyButton'
                                    sx={{ my: 2, display: 'block' }}
                                >
                                    Home
                            </Button>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                href={page.toLowerCase()}
                                color='sleepyButton'
                                sx={{ my: 2, display: 'block' }}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#051622',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                marginTop: '4rem'
            }}
        >
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Tooltip title="GitHub">
                    <IconButton
                        component="a"
                        href="https://github.com/alex-gagnon"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#1ba098',
                            '&:hover': {
                                color: '#f0c050'
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
                        sx={{
                            color: '#1ba098',
                            '&:hover': {
                                color: '#f0c050'
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
                        sx={{
                            color: '#1ba098',
                            '&:hover': {
                                color: '#f0c050'
                            }
                        }}
                    >
                        <EmailIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <Typography
                sx={{
                    color: 'rgba(200, 218, 235, 0.45)',
                    fontSize: '0.9rem',
                    marginTop: 1
                }}
            >
                © 2026 Alex Gagnon
            </Typography>
        </Box>
    );
};

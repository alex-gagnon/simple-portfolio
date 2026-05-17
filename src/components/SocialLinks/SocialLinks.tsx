import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconSx = { color: '#1ba098', '&:hover': { color: '#f0c050' } };

interface Props {
    iconSize?: number;
    gap?: number;
}

export const SocialLinks = ({ iconSize = 24, gap = 1 }: Props) => (
    <Box sx={{ display: 'flex', gap }}>
        <Tooltip title="GitHub">
            <IconButton component="a" href="https://github.com/alex-gagnon"
                target="_blank" rel="noopener noreferrer" sx={iconSx}>
                <GitHubIcon sx={{ fontSize: iconSize }} />
            </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
            <IconButton component="a" href="https://www.linkedin.com/in/agagnon313/"
                target="_blank" rel="noopener noreferrer" sx={iconSx}>
                <LinkedInIcon sx={{ fontSize: iconSize }} />
            </IconButton>
        </Tooltip>
    </Box>
);

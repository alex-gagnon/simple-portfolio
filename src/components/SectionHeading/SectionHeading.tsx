import React from 'react';
import { Typography } from '@mui/material';

interface Props { children: React.ReactNode }

export const SectionHeading = ({ children }: Props) => (
    <Typography component='h2' variant='h4' sx={{
        color: '#f0c050',
        fontWeight: 'bold',
        mb: 4,
        pb: 1.5,
        borderBottom: '1px solid rgba(27, 160, 152, 0.3)',
    }}>
        {children}
    </Typography>
);

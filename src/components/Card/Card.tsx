import React, { FC } from 'react';
import {
    Card as MuiCard,
    CardContent,
    CardActions,
    CardHeader,
    Chip,
    Button,
    Box,
    Typography,
} from '@mui/material';

export interface Project {
    title: string;
    description: string;
    demo: string;
    github: string;
    stack: string;
    inProgress?: boolean;
}

export const Card: FC<Project> = ({
    title,
    description,
    demo,
    github,
    stack,
    inProgress,
}: Project) => {
    const stackItems = stack.split(' · ');

    return (
        <MuiCard
            sx={{
                backgroundColor: '#1a3a52',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                },
            }}
        >
            <CardHeader
                title={
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#deb992',
                            fontWeight: 600,
                        }}
                    >
                        {title}
                    </Typography>
                }
                action={
                    inProgress ? (
                        <Chip
                            label="In Progress"
                            size="small"
                            sx={{
                                backgroundColor: '#ff9800',
                                color: 'white',
                                fontWeight: 500,
                            }}
                        />
                    ) : undefined
                }
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.6,
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardContent>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {stackItems.map((item) => (
                        <Chip
                            key={item}
                            label={item}
                            size="small"
                            sx={{
                                backgroundColor: 'rgba(219, 185, 146, 0.2)',
                                color: '#deb992',
                                border: '1px solid rgba(219, 185, 146, 0.3)',
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
            <CardActions sx={{ gap: 1, pt: 0 }}>
                {demo && (
                    <Button
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                            color: '#1ba098',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'rgba(27, 160, 152, 0.1)',
                            },
                        }}
                    >
                        Demo
                    </Button>
                )}
                {github && (
                    <Button
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                            color: '#1ba098',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'rgba(27, 160, 152, 0.1)',
                            },
                        }}
                    >
                        Github
                    </Button>
                )}
            </CardActions>
        </MuiCard>
    );
};

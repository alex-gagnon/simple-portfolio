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
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(27, 160, 152, 0.35)',
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
                                maxWidth: 'none',
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

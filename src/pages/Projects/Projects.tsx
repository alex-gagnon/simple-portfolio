import { Box, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Card, Project } from '../../components';

interface Props {
    projects: Project[];
}

export const Projects: FC<Props> = ({ projects }: Props) => {
    return (
        <Box sx={{ pt: 4, pb: 6 }}>
            <Typography
                variant="h4"
                sx={{
                    color: '#deb992',
                    fontWeight: 700,
                    mb: 4,
                }}
            >
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project: Project) => (
                    <Grid key={project.title} item xs={12} sm={6} lg={4}>
                        <Card
                            title={project.title}
                            description={project.description}
                            demo={project.demo}
                            github={project.github}
                            stack={project.stack}
                            inProgress={project.inProgress}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};


import { Box, ThemeProvider } from '@mui/material'
import React, { FC } from 'react'
import {ProjectCard, Project} from '../../components'
import { theme } from '../../theme'


interface Props {
    projects: Project[]
}


export const Projects: FC<Props> = ({ projects }: Props) => {
    const renderProjects = () => {
        return (
            <ThemeProvider theme={theme}>
                <Box color='sleepy.main'>
                    {projects.map((project: Project) => <ProjectCard
                            key={project.title}
                            title={project.title} 
                            description={project.description} 
                            demo={project.demo} 
                            github={project.github} 
                            stack={project.stack} />
                    )}
                </Box>
            </ThemeProvider>
        )
    }

    return (
        <>
        {renderProjects()}
        </>
    )
}

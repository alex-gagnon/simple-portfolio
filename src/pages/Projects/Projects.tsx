import { Box } from '@mui/material'
import React, { FC } from 'react'
import {Card, Project} from '../../components'


interface Props {
    projects: Project[]
}


export const Projects: FC<Props> = ({ projects }: Props) => {
    const renderProjects = () => {
        return (
            <Box color='sleepyText.main'>
                {projects.map((project: Project) => <Card
                        key={project.title}
                        title={project.title} 
                        description={project.description} 
                        demo={project.demo} 
                        github={project.github} 
                        stack={project.stack} />
                )}
            </Box>
    )
    }

    return (
        <>
        {renderProjects()}
        </>
    )
}

import { Button } from '@mui/material';
import React, { FC } from 'react';



export interface Project{
    title: string,
    description: string,
    demo: string,
    github: string,
    stack: string
}


export const ProjectCard: FC<Project> = ({title, description, demo, github, stack}: Project) => {
    return (
        <div className='project-card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button href={demo} color="sleepyButton">Demo </Button>

            <Button href={github} color="sleepyButton">Github </Button>
            <p>{stack}</p>
        </div>
    )
}

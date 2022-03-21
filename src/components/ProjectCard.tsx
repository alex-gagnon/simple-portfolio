import { Button, Link } from '@mui/material';
import React from 'react';
import { TEXT_COLOR } from '../data/constants';



export interface Project{
    title: string,
    description: string,
    demo: string,
    github: string,
    stack: string
}


export const ProjectCard = ({title, description, demo, github, stack}: Project) => {
    return (
        <>
            <div className='project-card'>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button variant='contained'><Link href={demo} color={TEXT_COLOR}>Demo </Link></Button>

                <Button variant='contained'><Link href={github} color={TEXT_COLOR}>Github </Link></Button>
                <p>{stack}</p>
            </div>
        </>
    )
}

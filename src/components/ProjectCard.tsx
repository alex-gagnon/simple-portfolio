import React from 'react';


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
                <button><a href="{demo}">Demo </a></button>

                <button><a href="{github}">Github </a></button>
                <p>{stack}</p>
            </div>
        </>
    )
}

import React, { Component, FC } from 'react'
import {ProjectCard, Project} from '../components/ProjectCard'


interface Props {
    projects: Project[]
}


export const Automation: FC<Props> = ({ projects }: Props) => {
    const renderProjects = () => {
        return projects.map((project: Project) => <ProjectCard
                    key={project.title}
                    title={project.title} 
                    description={project.description} 
                    demo={project.demo} 
                    github={project.github} 
                    stack={project.stack} />
                )
    }

    return (
        <>
        {renderProjects()}
        </>
    )
}

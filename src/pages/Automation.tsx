import React, { Component } from 'react'
import {ProjectCard, Project} from '../components/ProjectCard'
import { projects } from '../data/projects'


export default class Automation extends Component {

    renderProjects = () => {
        return projects.map((project: Project) => <ProjectCard
                    key={project.title}
                    title={project.title} 
                    description={project.description} 
                    demo={project.demo} 
                    github={project.github} 
                    stack={project.stack} />
                )
    }
    render() {
        return (
            <>
            {this.renderProjects()}
            </>
        )
    }
}

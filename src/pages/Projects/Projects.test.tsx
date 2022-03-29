import React from 'react';
import { render, screen } from '@testing-library/react';
import { Projects } from './Projects';
import { PROJECTS } from '../../data/projects';
import { MockTheme } from '../../MockTheme';


test("title text is displayed", () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    )
    const text = screen.getByText("title tbd")
    expect(text).toBeInTheDocument()
})

test("description text is displayed", () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    )
    const text = screen.getByText("description tbd")
    expect(text).toBeInTheDocument()
})

test("stack text is displayed", () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    )
    const text = screen.getByText("stack tbd")
    expect(text).toBeInTheDocument()
})

test('Demo button is displayed', () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    )
    const btn = screen.getByText("Demo")
    expect(btn).toBeInTheDocument()
})

test('Github button is displayed', () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    )
    const btn = screen.getByText("Github")
    expect(btn).toBeInTheDocument()
})

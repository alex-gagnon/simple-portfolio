import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import { Projects } from './Projects';
import { PROJECTS } from '../../data/projects';


beforeEach(() => {
    render(<Projects projects={PROJECTS} />)
})

test("title text is displayed", () => {
    const text = screen.getByText("title tbd")
    expect(text).toBeInTheDocument()
})

test("description text is displayed", () => {
    const text = screen.getByText("description tbd")
    expect(text).toBeInTheDocument()
})

test("stack text is displayed", () => {
    const text = screen.getByText("stack tbd")
    expect(text).toBeInTheDocument()
})

test('Demo button is displayed', () => {
    const btn = screen.getByText("Demo")
    expect(btn).toBeInTheDocument()
})

test('Github button is displayed', () => {
    const btn = screen.getByText("Github")
    expect(btn).toBeInTheDocument()
})

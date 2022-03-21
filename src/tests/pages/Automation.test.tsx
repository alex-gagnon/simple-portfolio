import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import { Automation } from '../../pages/Automation';
import { PROJECTS } from '../../data/projects';


test('renders without crashing', () => {
  shallow(<Automation projects={PROJECTS} />)
})

test("title text is displayed", () => {
    render(<Automation projects={PROJECTS} />)
    const text = screen.getByText("title tbd")
    expect(text).toBeInTheDocument()
})

test("description text is displayed", () => {
    render(<Automation projects={PROJECTS} />)
    const text = screen.getByText("description tbd")
    expect(text).toBeInTheDocument()
})

test("stack text is displayed", () => {
    render(<Automation projects={PROJECTS} />)
    const text = screen.getByText("stack tbd")
    expect(text).toBeInTheDocument()
})

test('Demo button is displayed', () => {
    render(<Automation projects={PROJECTS} />)
    const btn = screen.getByText("Demo")
    expect(btn).toBeInTheDocument()
})

test('Github button is displayed', () => {
    render(<Automation projects={PROJECTS} />)
    const btn = screen.getByText("Github")
    expect(btn).toBeInTheDocument()
})

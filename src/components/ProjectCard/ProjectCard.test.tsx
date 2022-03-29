import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import { MockTheme } from '../../MockTheme';


const testProjectCard = {
    title: 'test title',
    description: 'test description',
    demo: 'test demo',
    github: 'test github',
    stack: 'test stack'
}

describe('<ProjectCard />', () => {
    test('renders title', () => {
    render(
        <MockTheme>
          <ProjectCard {...testProjectCard} />
        </MockTheme>
    )
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent(testProjectCard.title)
  });

  test('renders description', () => {
    render(
        <MockTheme>
          <ProjectCard {...testProjectCard} />
        </MockTheme>
    )
    const text = screen.getByText(testProjectCard.description)
    expect(text).toBeInTheDocument()
  });

  test('renders demo', () => {
    render(
        <MockTheme>
          <ProjectCard {...testProjectCard} />
        </MockTheme>
    )
    const text = screen.getByText('Demo')
    expect(text).toBeInTheDocument()
  });

  test('renders github', () => {
    render(
        <MockTheme>
          <ProjectCard {...testProjectCard} />
        </MockTheme>
    )
    const text = screen.getByText('Github')
    expect(text).toBeInTheDocument()
  });

  test('renders stack', () => {
    render(
        <MockTheme>
          <ProjectCard {...testProjectCard} />
        </MockTheme>
    )
    const text = screen.getByText(testProjectCard.stack)
    expect(text).toBeInTheDocument()
  });
})
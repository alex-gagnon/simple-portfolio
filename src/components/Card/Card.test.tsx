import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { MockTheme } from '../../MockTheme';


const testCard = {
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
          <Card {...testCard} />
        </MockTheme>
    )
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent(testCard.title)
  });

  test('renders description', () => {
    render(
        <MockTheme>
          <Card {...testCard} />
        </MockTheme>
    )
    const text = screen.getByText(testCard.description)
    expect(text).toBeInTheDocument()
  });

  test('renders demo', () => {
    render(
        <MockTheme>
          <Card {...testCard} />
        </MockTheme>
    )
    const text = screen.getByText('Demo')
    expect(text).toBeInTheDocument()
  });

  test('renders github', () => {
    render(
        <MockTheme>
          <Card {...testCard} />
        </MockTheme>
    )
    const text = screen.getByText('Github')
    expect(text).toBeInTheDocument()
  });

  test('renders stack', () => {
    render(
        <MockTheme>
          <Card {...testCard} />
        </MockTheme>
    )
    const text = screen.getByText(testCard.stack)
    expect(text).toBeInTheDocument()
  });
})
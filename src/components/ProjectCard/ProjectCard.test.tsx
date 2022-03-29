import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';


const testProjectCard = {
    title: 'test title',
    description: 'test description',
    demo: 'test demo',
    github: 'test github',
    stack: 'test stack'
}

beforeEach(() => {
    render(<ProjectCard {...testProjectCard} />)
})

test('renders title', () => {
  const text = screen.getByText(testProjectCard.title)
  expect(text).toBeInTheDocument()
});

test('renders description', () => {
  const text = screen.getByText(testProjectCard.description)
  expect(text).toBeInTheDocument()
});

test('renders demo', () => {
  const text = screen.getByText('Demo')
  expect(text).toBeInTheDocument()
  expect(text.closest('a')).toHaveAttribute('href', testProjectCard.demo)
});

test('renders github', () => {
  const text = screen.getByText('Github')
  expect(text).toBeInTheDocument()
  expect(text.closest('a')).toHaveAttribute('href', testProjectCard.github)
});

test('renders stack', () => {
  const text = screen.getByText(testProjectCard.stack)
  expect(text).toBeInTheDocument()
});

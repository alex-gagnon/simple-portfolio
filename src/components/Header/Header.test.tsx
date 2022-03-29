import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';


beforeEach(() => {
    render(<Header />)
})

test('renders logo', () => {
  const logoText = screen.getAllByText(/logo/i)
  expect(logoText).toHaveLength(2)
});

test('renders home', () => {
  const logoText = screen.getAllByText(/home/i)
  expect(logoText).toHaveLength(2)
});

test('renders projects', () => {
  const logoText = screen.getAllByText(/projects/i)
  expect(logoText).toHaveLength(2)
});

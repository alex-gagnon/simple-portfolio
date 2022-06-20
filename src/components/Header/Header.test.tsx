import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MockTheme } from '../../MockTheme';


test('renders home', () => {
  render(
    <MockTheme>
      <Header />
    </MockTheme>
  )
  const logoText = screen.getAllByText(/home/i)
  expect(logoText).toHaveLength(2)
});

test('renders projects', () => {
  render(
    <MockTheme>
      <Header />
    </MockTheme>
  )
  const logoText = screen.getAllByText(/projects/i)
  expect(logoText).toHaveLength(2)
});

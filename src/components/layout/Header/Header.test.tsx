import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MockTheme } from '../../../MockTheme';

test('renders nav links', () => {
  render(
    <MockTheme>
      <Header />
    </MockTheme>
  );
  expect(screen.getAllByText(/about/i).length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByText(/projects/i).length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByText(/contact/i).length).toBeGreaterThanOrEqual(1);
});

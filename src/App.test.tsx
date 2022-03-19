import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site under construction text.', () => {
  render(<App />);
  const text = screen.getByText(/site under construction/i);
  expect(text).toBeInTheDocument();
});
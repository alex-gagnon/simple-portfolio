import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../../pages/Home';


test('contains site under construction text', () => {
  render(<Home about='test about me' />);
  const text = screen.getByText('test about me');
  expect(text).toBeInTheDocument();
});

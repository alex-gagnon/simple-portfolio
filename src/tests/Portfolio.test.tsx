import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import Portfolio from '../Portfolio';


test('renders without crashing', () => {
  shallow(<Portfolio />)
})

test('renders Home page first', () => {
  render(<Portfolio />);
  const text = screen.getByText(/site under construction/i);
  expect(text).toBeInTheDocument();
});

test('renders placeholder navbar', () => {
  render(<Portfolio />)
  const text = screen.getByText(/Navbar placeholder/i)
  expect(text).toBeInTheDocument()
})

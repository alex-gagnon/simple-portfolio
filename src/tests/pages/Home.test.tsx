import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import Home from '../../pages/home';


test('contains site under construction text', () => {
  render(<Home />);
  const text = screen.getByText(/site under construction/i);
  expect(text).toBeInTheDocument();
});

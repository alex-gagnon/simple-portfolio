import React from 'react';
import Portfolio from './Portfolio';
import { MockTheme } from './MockTheme';
import { render } from '@testing-library/react';


test('renders without crashing', () => {
  render(
    <MockTheme>      
      <Portfolio />
    </MockTheme>
  )
})

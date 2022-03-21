import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import Portfolio from '../Portfolio';


test('renders without crashing', () => {
  shallow(<Portfolio />)
})

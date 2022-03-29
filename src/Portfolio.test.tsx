import React from 'react';
import { shallow } from 'enzyme'
import Portfolio from './Portfolio';


test('renders without crashing', () => {
  shallow(<Portfolio />)
})

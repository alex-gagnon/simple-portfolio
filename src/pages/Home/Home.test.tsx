import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { MockTheme } from '../../MockTheme';

const homeProps = {
  title: 'test title',
  heading: 'test heading',
  subtitle: 'test subtitle',
  text: 'test text'
}


test('renders about info', () => {
    render(
    <MockTheme>
        <Home {...homeProps} />
    </MockTheme>
    )
    const titleText = screen.getByText('test title');
    const headingText = screen.getByText('test heading')
    const subtitleText = screen.getByText('test subtitle')
    const textText = screen.getByText('test text')
    const arr = [titleText, headingText, subtitleText, textText]
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toBeInTheDocument()
    }
});

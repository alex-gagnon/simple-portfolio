import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { MockTheme } from '../../MockTheme';


test('renders about info', () => {
    render(
        <MockTheme>
            <Home />
        </MockTheme>
    )
    const nameText = screen.getByText('Alex Gagnon');
    expect(nameText).toBeInTheDocument()
});

test('renders About Me section', () => {
    render(
        <MockTheme>
            <Home />
        </MockTheme>
    )
    const aboutHeading = screen.getByText('About Me');
    expect(aboutHeading).toBeInTheDocument()
});

test('renders Highlights section', () => {
    render(
        <MockTheme>
            <Home />
        </MockTheme>
    )
    const highlightsHeading = screen.getByText('Highlights');
    expect(highlightsHeading).toBeInTheDocument()
});

test('renders Skills & Tools section', () => {
    render(
        <MockTheme>
            <Home />
        </MockTheme>
    )
    const skillsHeading = screen.getByText('Skills & Tools');
    expect(skillsHeading).toBeInTheDocument()
});

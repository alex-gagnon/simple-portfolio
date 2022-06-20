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

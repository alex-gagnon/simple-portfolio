import React from 'react';
import { render, screen } from '@testing-library/react';
import { Highlights } from './Highlights';
import { MockTheme } from '../../../MockTheme';
import { HIGHLIGHTS } from '../../../data/highlights';

const renderHighlights = () => render(
    <MockTheme>
        <Highlights />
    </MockTheme>
);

describe('Highlights', () => {
    it('renders the section heading', () => {
        renderHighlights();
        expect(screen.getByText('Highlights')).toBeInTheDocument();
    });

    it('renders all stat values', () => {
        renderHighlights();
        HIGHLIGHTS.forEach(({ stat }) => {
            expect(screen.getByText(stat)).toBeInTheDocument();
        });
    });

    it('renders all labels', () => {
        renderHighlights();
        HIGHLIGHTS.forEach(({ label }) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
    test('renders image with alt text', () => {
        render(<Logo />);
        const img = screen.getByAltText('Alex Gagnon Logo');
        expect(img).toBeInTheDocument();
    });

    test('uses default size of 50', () => {
        render(<Logo />);
        const img = screen.getByAltText('Alex Gagnon Logo');
        expect(img).toHaveAttribute('height', '50');
    });

    test('uses custom size when provided', () => {
        render(<Logo size={80} />);
        const img = screen.getByAltText('Alex Gagnon Logo');
        expect(img).toHaveAttribute('height', '80');
    });
});

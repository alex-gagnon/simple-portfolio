import React from 'react';
import { render } from '@testing-library/react';
import { AuroraBackground } from './AuroraBackground';

describe('AuroraBackground', () => {
    test('renders with aria-hidden', () => {
        const { container } = render(<AuroraBackground />);
        const el = container.querySelector('.aurora');
        expect(el).toBeInTheDocument();
        expect(el).toHaveAttribute('aria-hidden', 'true');
    });

    test('renders all four blobs', () => {
        const { container } = render(<AuroraBackground />);
        const blobs = container.querySelectorAll('.aurora__blob');
        expect(blobs).toHaveLength(4);
    });
});

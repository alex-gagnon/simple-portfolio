import React from 'react';
import { render, screen } from '@testing-library/react';
import { RevealSection } from './RevealSection';
import { MockTheme } from '../../../MockTheme';

describe('RevealSection', () => {
    test('renders children', () => {
        render(<MockTheme><RevealSection><p>Hello</p></RevealSection></MockTheme>);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    test('renders with a custom component type', () => {
        render(
            <MockTheme>
                <RevealSection component="section"><span>content</span></RevealSection>
            </MockTheme>
        );
        expect(screen.getByText('content')).toBeInTheDocument();
    });
});

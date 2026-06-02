import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionHeading } from './SectionHeading';
import { MockTheme } from '../../../MockTheme';

describe('SectionHeading', () => {
    test('renders children as a heading', () => {
        render(<MockTheme><SectionHeading>Skills</SectionHeading></MockTheme>);
        expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
    });

    test('renders arbitrary text content', () => {
        render(<MockTheme><SectionHeading>Experience</SectionHeading></MockTheme>);
        expect(screen.getByText('Experience')).toBeInTheDocument();
    });
});

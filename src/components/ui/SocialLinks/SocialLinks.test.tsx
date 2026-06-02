import React from 'react';
import { render, screen } from '@testing-library/react';
import { SocialLinks } from './SocialLinks';
import { MockTheme } from '../../../MockTheme';

describe('SocialLinks', () => {
    test('renders GitHub link', () => {
        render(<MockTheme><SocialLinks /></MockTheme>);
        const link = screen.getByRole('link', { name: /github/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://github.com/alex-gagnon');
    });

    test('renders LinkedIn link', () => {
        render(<MockTheme><SocialLinks /></MockTheme>);
        const link = screen.getByRole('link', { name: /linkedin/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/agagnon313/');
    });

    test('links open in new tab', () => {
        render(<MockTheme><SocialLinks /></MockTheme>);
        const links = screen.getAllByRole('link');
        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });
});

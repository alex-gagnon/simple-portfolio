import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { MockTheme } from '../../../MockTheme';
import { NAV_LINKS } from '../../../constants/nav';

const renderFooter = () => render(
    <MockTheme>
        <Footer />
    </MockTheme>
);

describe('Footer', () => {
    it('renders all nav links', () => {
        renderFooter();
        NAV_LINKS.forEach(({ label }) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });

    it('renders copyright with current year', () => {
        renderFooter();
        expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
    });

    it('renders contact email link', () => {
        renderFooter();
        expect(screen.getByText('admin@alex-gagnon.com')).toBeInTheDocument();
    });
});

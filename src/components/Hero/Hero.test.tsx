import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme';
import { MemoryRouter } from 'react-router-dom';

const renderHero = () => render(
    <MemoryRouter><ThemeProvider theme={theme}><Hero /></ThemeProvider></MemoryRouter>
);

describe('Hero', () => {
    it('renders name', () => {
        renderHero();
        expect(screen.getByText('Alex Gagnon')).toBeInTheDocument();
    });

    it('renders view my work link', () => {
        renderHero();
        expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute('href', '#projects');
    });

    it('renders both resume download buttons', () => {
        renderHero();
        expect(screen.getByRole('link', { name: /resume - lead/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /resume - ic/i })).toBeInTheDocument();
    });
});

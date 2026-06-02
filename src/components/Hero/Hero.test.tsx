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

});

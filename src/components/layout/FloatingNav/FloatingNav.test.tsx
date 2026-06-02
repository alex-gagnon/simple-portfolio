import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FloatingNav } from './FloatingNav';
import { MockTheme } from '../../../MockTheme';

describe('FloatingNav', () => {
    test('renders scroll-to-top button', () => {
        render(<MockTheme><FloatingNav /></MockTheme>);
        expect(screen.getByRole('button', { name: 'Scroll to top' })).toBeInTheDocument();
    });

    test('calls window.scrollTo on click', () => {
        const scrollTo = vi.fn();
        window.scrollTo = scrollTo;
        render(<MockTheme><FloatingNav /></MockTheme>);
        fireEvent.click(screen.getByRole('button', { name: 'Scroll to top' }));
        expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';
import { MockTheme } from '../../../MockTheme';

const Bomb = () => { throw new Error('test error'); };

describe('ErrorBoundary', () => {
    beforeEach(() => {
        vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('renders children when there is no error', () => {
        render(
            <MockTheme>
                <ErrorBoundary>
                    <div>safe content</div>
                </ErrorBoundary>
            </MockTheme>
        );
        expect(screen.getByText('safe content')).toBeInTheDocument();
    });

    it('shows fallback UI when a child throws', () => {
        render(
            <MockTheme>
                <ErrorBoundary>
                    <Bomb />
                </ErrorBoundary>
            </MockTheme>
        );
        expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
});

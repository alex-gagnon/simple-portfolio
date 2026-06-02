import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkillsGrid } from './SkillsGrid';
import { MockTheme } from '../../../MockTheme';
import { SKILLS } from '../../../data/skills';

describe('SkillsGrid', () => {
    test('renders section heading', () => {
        render(<MockTheme><SkillsGrid /></MockTheme>);
        expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
    });

    test('renders all skill categories', () => {
        render(<MockTheme><SkillsGrid /></MockTheme>);
        Object.keys(SKILLS).forEach(category => {
            expect(screen.getByText(category)).toBeInTheDocument();
        });
    });

    test('renders skill chips', () => {
        render(<MockTheme><SkillsGrid /></MockTheme>);
        expect(screen.getByText('Python')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('Docker')).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Projects } from './Projects';
import { PROJECTS } from '../../data/projects';
import { MockTheme } from '../../MockTheme';

test('Pilot Regs title is displayed', () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    );
    const text = screen.getByText('Pilot Regs');
    expect(text).toBeInTheDocument();
});

test('Pilot Regs description text is displayed', () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    );
    const text = screen.getByText(
        /FAA regulations are dense documents that pilots need fast access to/
    );
    expect(text).toBeInTheDocument();
});

test('Pilot Regs stack items are displayed', () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    );
    const pythonChips = screen.getAllByText('Python');
    expect(pythonChips.length).toBeGreaterThan(0);
    expect(screen.getByText('RAG')).toBeInTheDocument();
    expect(screen.getByText('Vector Search')).toBeInTheDocument();
    expect(screen.getByText('FastAPI')).toBeInTheDocument();
});

test('Demo button is displayed for projects with demo URLs', () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    );
    const demoButtons = screen.getAllByText('Demo');
    expect(demoButtons.length).toBeGreaterThan(0);
});

test('Projects page title is displayed', () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    );
    const title = screen.getByText('Projects');
    expect(title).toBeInTheDocument();
});

test('Multiple projects are rendered', () => {
    render(
        <MockTheme>
            <Projects projects={PROJECTS} />
        </MockTheme>
    );
    expect(screen.getByText('Personal AI Marketplace')).toBeInTheDocument();
    expect(screen.getByText('Weather MCP Server')).toBeInTheDocument();
    expect(screen.getByText('Midas')).toBeInTheDocument();
    expect(screen.getByText('This Portfolio')).toBeInTheDocument();
});

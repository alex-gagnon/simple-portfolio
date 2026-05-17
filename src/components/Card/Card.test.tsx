import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { MockTheme } from '../../MockTheme';

const testCardWithButtons = {
    title: 'test title',
    description: 'test description',
    demo: 'https://example.com',
    github: 'https://github.com/example',
    stack: 'React · TypeScript · MUI',
};

const testCardNoButtons = {
    title: 'test title no buttons',
    description: 'test description',
    demo: '',
    github: '',
    stack: 'Python · FastAPI',
};

const testCardInProgress = {
    title: 'test title in progress',
    description: 'test description',
    demo: 'https://example.com',
    github: 'https://github.com/example',
    stack: 'React · TypeScript',
    inProgress: true,
};

describe('<Card />', () => {
    test('renders title', () => {
        render(
            <MockTheme>
                <Card {...testCardWithButtons} />
            </MockTheme>
        );
        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent(testCardWithButtons.title);
    });

    test('renders description', () => {
        render(
            <MockTheme>
                <Card {...testCardWithButtons} />
            </MockTheme>
        );
        const text = screen.getByText(testCardWithButtons.description);
        expect(text).toBeInTheDocument();
    });

    test('renders demo button when demo URL is provided', () => {
        render(
            <MockTheme>
                <Card {...testCardWithButtons} />
            </MockTheme>
        );
        const text = screen.getByText('Demo');
        expect(text).toBeInTheDocument();
    });

    test('does not render demo button when demo URL is empty', () => {
        render(
            <MockTheme>
                <Card {...testCardNoButtons} />
            </MockTheme>
        );
        const buttons = screen.queryAllByText('Demo');
        expect(buttons).toHaveLength(0);
    });

    test('renders github button when github URL is provided', () => {
        render(
            <MockTheme>
                <Card {...testCardWithButtons} />
            </MockTheme>
        );
        const text = screen.getByText('Github');
        expect(text).toBeInTheDocument();
    });

    test('does not render github button when github URL is empty', () => {
        render(
            <MockTheme>
                <Card {...testCardNoButtons} />
            </MockTheme>
        );
        const buttons = screen.queryAllByText('Github');
        expect(buttons).toHaveLength(0);
    });

    test('renders stack items as chips', () => {
        render(
            <MockTheme>
                <Card {...testCardWithButtons} />
            </MockTheme>
        );
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('MUI')).toBeInTheDocument();
    });

    test('renders "In Progress" badge when inProgress is true', () => {
        render(
            <MockTheme>
                <Card {...testCardInProgress} />
            </MockTheme>
        );
        expect(screen.getByText('In Progress')).toBeInTheDocument();
    });

    test('does not render "In Progress" badge when inProgress is false', () => {
        render(
            <MockTheme>
                <Card {...testCardWithButtons} />
            </MockTheme>
        );
        const badges = screen.queryAllByText('In Progress');
        expect(badges).toHaveLength(0);
    });
});

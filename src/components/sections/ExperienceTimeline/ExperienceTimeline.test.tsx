import { render, screen } from '@testing-library/react';
import { ExperienceTimeline } from './ExperienceTimeline';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../../theme';
import { EXPERIENCE } from '../../../data/experience';

const renderTimeline = () => render(
    <ThemeProvider theme={theme}><ExperienceTimeline /></ThemeProvider>
);

describe('ExperienceTimeline', () => {
    it('renders the section heading', () => {
        renderTimeline();
        expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('renders all job entries', () => {
        renderTimeline();
        EXPERIENCE.forEach(job => {
            expect(screen.getByText(job.title)).toBeInTheDocument();
            expect(screen.getAllByText(job.company).length).toBeGreaterThan(0);
        });
    });

    it('renders current role first', () => {
        renderTimeline();
        const titles = screen.getAllByText(/Manager|Lead|Engineer|Specialist|Leader/);
        expect(titles[0]).toHaveTextContent('Manager, QA Automation');
    });

    it('includes the Army entry', () => {
        renderTimeline();
        expect(screen.getByText('United States Army')).toBeInTheDocument();
    });
});

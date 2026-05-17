import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from './ContactForm';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme';

const renderForm = () => render(
    <ThemeProvider theme={theme}><ContactForm /></ThemeProvider>
);

describe('ContactForm', () => {
    it('renders all fields and submit button', () => {
        renderForm();
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('updates field values on change', () => {
        renderForm();
        const nameInput = screen.getByLabelText(/name/i);
        fireEvent.change(nameInput, { target: { name: 'name', value: 'Test User' } });
        expect(nameInput).toHaveValue('Test User');
    });

    it('shows success state after successful submission', async () => {
        global.fetch = vi.fn().mockResolvedValueOnce({ ok: true });
        renderForm();

        fireEvent.change(screen.getByLabelText(/name/i), { target: { name: 'name', value: 'Alex' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { name: 'email', value: 'a@b.com' } });
        fireEvent.change(screen.getByLabelText(/message/i), { target: { name: 'message', value: 'Hello' } });
        fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form')!);

        await waitFor(() => expect(screen.getByText(/message sent/i)).toBeInTheDocument());
    });

    it('shows error message on failed submission', async () => {
        global.fetch = vi.fn().mockResolvedValueOnce({ ok: false });
        renderForm();

        fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form')!);

        await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument());
    });
});

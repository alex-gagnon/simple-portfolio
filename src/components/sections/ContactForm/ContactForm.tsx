import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';

const FORMSPARK_URL = import.meta.env.VITE_FORMSPARK_URL as string;

const fieldSx = {
    '& .MuiOutlinedInput-root': {
        color: '#e8eef4',
        backgroundColor: 'rgba(255,255,255,0.03)',
        '& fieldset': { borderColor: 'rgba(200,218,235,0.15)' },
        '&:hover fieldset': { borderColor: 'rgba(200,218,235,0.3)' },
        '&.Mui-focused fieldset': { borderColor: '#1ba098' },
    },
    '& .MuiInputLabel-root': { color: 'rgba(200,218,235,0.5)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#1ba098' },
};

interface Fields { name: string; email: string; message: string }
const emptyFields: Fields = { name: '', email: '', message: '' };

export const ContactForm = () => {
    const [fields, setFields] = useState<Fields>(emptyFields);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const validate = (): string | null => {
        if (!fields.name.trim()) return 'Name is required.';
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(fields.email.trim())) return 'A valid email address is required.';
        if (!fields.message.trim()) return 'Message is required.';
        if (fields.message.length > 2000) return 'Message must be 2000 characters or fewer.';
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) { setError(validationError); return; }
        setSubmitting(true);
        setError(null);
        try {
            const res = await fetch(FORMSPARK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(fields),
            });
            if (!res.ok) throw new Error('Submission failed');
            setSubmitted(true);
        } catch (err) {
            console.error('ContactForm submission error:', err);
            setError('Something went wrong — try emailing admin@alex-gagnon.com directly.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <Paper sx={{
                p: 4,
                backgroundColor: 'rgba(27,160,152,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(27,160,152,0.3)',
                borderRadius: 2,
                textAlign: 'center',
            }}>
                <Typography sx={{ color: '#1ba098', fontSize: '1.5rem', mb: 1 }}>✓</Typography>
                <Typography sx={{ color: '#e8eef4', fontWeight: 600, mb: 1 }}>Message sent!</Typography>
                <Typography sx={{ color: 'rgba(200,218,235,0.65)', fontSize: '0.9rem' }}>
                    Thanks for reaching out — I'll get back to you soon.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper component="form" onSubmit={handleSubmit} sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 2,
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
        }}>
            <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Name" name="name" required
                        value={fields.name} onChange={handleChange} sx={fieldSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" name="email" type="email" required
                        value={fields.email} onChange={handleChange} sx={fieldSx} />
                </Grid>
            </Grid>
            <TextField fullWidth label="Message" name="message" required multiline rows={5}
                value={fields.message} onChange={handleChange} sx={fieldSx} />
            {error && (
                <Typography sx={{ color: '#f87171', fontSize: '0.85rem' }}>{error}</Typography>
            )}
            <Button type="submit" variant="outlined" disabled={submitting} sx={{
                alignSelf: 'flex-start',
                color: '#1ba098',
                borderColor: '#1ba098',
                px: 4,
                '&:hover': { backgroundColor: 'rgba(27,160,152,0.1)', borderColor: '#1ba098' },
                '&.Mui-disabled': { borderColor: 'rgba(27,160,152,0.3)', color: 'rgba(27,160,152,0.4)' },
            }}>
                {submitting ? <CircularProgress size={20} sx={{ color: '#1ba098' }} /> : 'Send message'}
            </Button>
        </Paper>
    );
};

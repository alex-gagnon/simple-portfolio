import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props { children: React.ReactNode }
interface State { hasError: boolean }

export class ErrorBoundary extends React.Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                    <Typography sx={{ color: 'rgba(200,218,235,0.65)' }}>
                        Something went wrong. Please refresh the page.
                    </Typography>
                </Box>
            );
        }
        return this.props.children;
    }
}

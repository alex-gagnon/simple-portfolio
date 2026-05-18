import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';


export const MockTheme = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
  
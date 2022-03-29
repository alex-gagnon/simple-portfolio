
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';


export const MockTheme = ({children}: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
  
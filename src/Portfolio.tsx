import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { FloatingNav } from './components/FloatingNav/FloatingNav';
import { theme } from './theme';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AuroraBackground, HexGrid } from './components';


const Portfolio = () => {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <AuroraBackground />
                <HexGrid />
                <Header />
                <FloatingNav />
                <Container component="main" maxWidth={false} sx={{
                    position: 'relative', zIndex: 1,
                    px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 7 },
                    maxWidth: { xs: '100%', xl: '1900px' },
                    mx: 'auto',
                }}>
                    <CssBaseline />
                    <Outlet />
                </Container>
                <Footer />
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default Portfolio;

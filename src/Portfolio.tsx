import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { ErrorBoundary } from './components/ui/ErrorBoundary/ErrorBoundary';
import { FloatingNav } from './components/layout/FloatingNav/FloatingNav';
import { theme } from './theme';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AuroraBackground, HexGrid } from './components';
import { MotionProvider } from './context/MotionContext';


const Portfolio = () => {
    return (
        <ErrorBoundary>
            <MotionProvider>
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
            </MotionProvider>
        </ErrorBoundary>
    );
}

export default Portfolio;

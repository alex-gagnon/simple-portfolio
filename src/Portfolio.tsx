import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { theme } from './theme';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './Portfolio.scss';
import { AuroraBackground, HexGrid } from './components';


const Portfolio = () => {
    return (
        <ThemeProvider theme={theme}>
            <AuroraBackground />
            <HexGrid />
            <Header />
            <Container component="main" maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 5, lg: 8 } }}>
                <CssBaseline />
                <Outlet />
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default Portfolio;

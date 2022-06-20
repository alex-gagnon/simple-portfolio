import { Header } from './components/Header/Header';
import { theme } from './theme';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './Portfolio.scss';
import { ParticlesComponent } from './components';


const Portfolio = () => {
    return (
        <ThemeProvider theme={theme}>
            <ParticlesComponent />
            <Header />
            <Container component="main" maxWidth="lg" sx={{ position: 'relative' }}>
                <CssBaseline />
                <Outlet />
            </Container>
        </ThemeProvider>
    );
}

export default Portfolio;
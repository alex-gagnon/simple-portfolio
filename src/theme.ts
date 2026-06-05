import { createTheme } from "@mui/material/styles";


const { palette } = createTheme()

export const theme = createTheme({
    typography: {
        htmlFontSize: 16,
        fontFamily: "'Inter', sans-serif",
        h1: { fontFamily: "'Playfair Display', serif" },
        h2: { fontFamily: "'Playfair Display', serif" },
        h3: { fontFamily: "'Playfair Display', serif" },
        h4: { fontFamily: "'Playfair Display', serif" },
        h5: { fontFamily: "'Playfair Display', serif" },
        h6: { fontFamily: "'Playfair Display', serif" },
        body1: {
            fontSize: '1.125rem', // 18px
            lineHeight: 1.85,
        },
        body2: {
            fontSize: '1rem', // 16px
        },
    },
    palette: {
        text: {
            primary: '#e8eef4',   // 15:1 contrast on the dark background
            secondary: '#9db4c8', // ~9:1 — used for captions, helper text, etc.
        },
        sleepyText: palette.augmentColor({
            color: {
                main: '#e8eef4'
            }
        }),

        sleepyBackground: {
            main: '#0C2B46',
            secondary: '#051622'
        },

        sleepyButton: palette.augmentColor({
            color: {
                main: '#1ba098'
            }
        })
    }
})


declare module "@mui/material/styles" {
    interface Palette {
        sleepyText: {
            main: string
        };

        sleepyBackground: {
            main: string
        }
        
        sleepyButton: {
            main: string
        };
    }

    interface PaletteOptions {
        sleepyText: {
            main: string
        };

        sleepyBackground: {
            main: string
            secondary?: string
        }
        
        sleepyButton: {
            main: string
        };
    }
}


declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides {
        sleepyBackground: true
        sleepyButton: true;
        sleepyText: true;
    }
}

declare module '@mui/material/Box' {
    interface BoxPropsColorOverrides {
        sleepyBackground: true
        sleepyButton: true;
        sleepyText: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        sleepyBackground: true
        sleepyButton: true;
        sleepyText: true;
    }
}
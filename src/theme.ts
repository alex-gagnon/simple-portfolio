import { createTheme } from "@mui/material/styles";


const { palette } = createTheme()

export const theme = createTheme({
    palette: {
        sleepyText: palette.augmentColor({
            color: {
                main: '#deb992'
            } 
        }),

        sleepyBackground: {
            main: '#051622',
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
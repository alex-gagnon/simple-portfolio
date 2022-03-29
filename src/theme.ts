import { createTheme } from "@mui/material/styles";


const { palette } = createTheme()

export const theme = createTheme({
    palette: {
        sleepy: palette.augmentColor({
            color: {
                dark: '#051622',
                main: '#deb992',
                contrastText: '#1ba098'
            } 
        }),

        sleepyButton: palette.augmentColor({
            color: {
                main: '#1ba098'
            }
        })
    }
})


declare module "@mui/material/styles" {
    interface Palette {
        sleepy: { 
            dark: string
            main: string
            contrastText: string
        };
        
        sleepyButton: {
            main: string
        };
    }

    interface PaletteOptions {
        sleepy: {
            dark: string
            main: string
            contrastText: string
        };
        
        sleepyButton: {
            main: string
        };
    }
}

declare module "@mui/material/Box" {
    interface BoxPropsColorOverrides {
        sleepy: true;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        sleepyButton: true;
    }
}
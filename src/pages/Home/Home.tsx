import { Box, ThemeProvider } from "@mui/material";
import React, { FC } from "react"
import { theme } from "../../theme";


interface AboutProps {
    title: string;
    heading: string;
    subtitle: string;
    text: string;
}

export const Home: FC<AboutProps> = ({title, heading, subtitle, text}) => {
    return (
    <ThemeProvider theme={theme}>
        <Box color='sleepy.main'>
            <div className="about-me title primary_text">
                {title}
            </div>
            <div className="about-me heading primary_text">
                {heading}
            </div>
            <div className="about-me subtitle primary_text">
                {subtitle}
            </div>
            <div className="about-me text primary_text">
                {text}
            </div>
        </Box>
    </ThemeProvider>
    )
}

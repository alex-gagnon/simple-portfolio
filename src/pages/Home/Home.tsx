import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./Home.scss";


export const Home = () => {
    return (
        <Box minHeight='80vh' color='sleepyText.main' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box minHeight='25vh' sx={{ display: 'inherit', flexDirection: 'inherit', justifyContent: 'space-between', alignItems: 'inherit' }}>
                <Typography component='h1' variant='h2'>
                    Hey there, I'm <span style={{ fontWeight: "bold" }}>Alex Gagnon</span>.
                </Typography>
                <Typography component='h2' variant='h3'>
                    I'm a software engineer that specializes in developing automation frameworks in Python for UI and Integration level testing.
                </Typography>
                <Button variant='outlined' href='/projects' size='large' color='sleepyText' sx={{ fontSize: 18 }}>
                    View my work
                </Button>
            </Box>
        </Box>
    )
}

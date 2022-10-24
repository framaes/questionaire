import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
export default function Appbar() {

    const navigate = useNavigate()

    const path = useLocation().pathname

    const handleClick = () => {
        navigate("/")
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Blockchain questionaire
                    </Typography>
                    {!(path === "/" || path === "/SignUp") &&
                        <Button variant="contained" onClick={handleClick}>Logout</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

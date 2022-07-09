import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button,Box} from '@mui/material'
import logo from "../assets/images/image10.png"
import "./navbar.css"

const mystyle = {
    background:"transparent",
    border:"none",
    boxShadow:"none"
}

export default function Navbar() {
  return (
    <AppBar style={mystyle} position="static">
        <Toolbar>
            <Box sx={{flexGrow:"1"}}>
                <img src={logo} alt="logo" />
            </Box>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">About</Button>
                <Button color="inherit">Product</Button>
                <Button color="inherit">Roadmap</Button>
                <Button variant="contained">Login</Button>
          
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

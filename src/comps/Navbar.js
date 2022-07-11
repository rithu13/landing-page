import { Box, Button, Stack, Typography, Paper } from '@mui/material'
import logo from '../assets/logo.png'
import React from 'react'

const Navbar = () => {
  return (
    <Stack sx={{ justifyContent: 'space-between', padding: '1rem 1.5rem' }} direction={'row'}>
      <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ width: '200px' }} src={logo}></img>
      </Stack>

      <Stack direction={'row'}>
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <li><a href="#about">About</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <Paper elevation={5} onClick={() => { }} sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#6714E5', padding: '0.5rem 1rem', borderRadius: '10px', cursor: 'pointer', "&:hover": {
            opacity: 1,
            backgroundColor: "#5a2cbb",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
          },
          "&:active": {
            boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
          },
        }}>
          <Typography>Login/Register</Typography>
          <Typography variant='caption'>(Coming Soon)</Typography>
        </Paper>
      </Stack>
    </Stack>
  )
}

export default Navbar
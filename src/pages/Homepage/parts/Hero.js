import React from 'react'
import { Box, Typography } from '@mui/material'
import Navbar from '../../../comps/Navbar'

const Hero = () => {
  return (
    <Box className="container" sx={{width: '100%', height: '100vh'}}>
      <Navbar />
      <Box sx={{width: '100%', height: '100% ', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography align='center' variant='h4' sx={{fontSize: '66px', fontWeight: 700, mt: 12}}>Time to Colonize</Typography>
        <Typography align='center' variant='h4' sx={{fontSize: '66px', fontWeight: 700}}>the world of <span style={{fontSize: '66px',color: '#D03434'}}>Web3.0</span></Typography>
        <Typography align='center' variant='h4' sx={{fontSize: '66px', fontWeight: 700, mb: 12}}>with different communities</Typography>

        <a style={{background: '#5a2cbb', padding: '0.5rem 1rem', borderRadius: '25px', marginLeft: 'auto', marginRight:'auto'}}>Get Early Access</a>
      </Box>
    </Box>
  )
}

export default Hero
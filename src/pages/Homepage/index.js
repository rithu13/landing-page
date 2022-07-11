import { Box } from '@mui/material'
import React from 'react'
import About from './parts/About'
import Hero from './parts/Hero'
import Product from './parts/Product'

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Product />
    </Box>
  )
}

export default Homepage

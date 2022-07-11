import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import icon from '../assets/1.png'

const ProductCard = ({item}) => {
  return (
    <Paper className='card' sx={{bgcolor: 'transparent', color: 'white'}}>
      <Box sx={{m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, height: '320px', overflow: 'hidden'}}>
        <Box className='cardCont' sx={{height: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center' , '&:hover': {display: 'none'}}} >
          <img style={{height: '200px'}} src={item.icon} />
          <Typography sx={{mt: 2}} variant='h6'>{item.title}</Typography>
        </Box>
        

        <Box sx={{height: '320px', mt: 6}}>
          <Typography>{item.description}</Typography>
        </Box>
      </Box>
    </Paper>
  )
}

export default ProductCard
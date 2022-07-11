import { Box, Container, Grid, IconButton, Typography,  } from '@mui/material'
import React from "react";
import linkedin from "../linkedin.svg";
import twitter from "../twitter.svg";
import insta from "../insta.svg";
import telegram from "../telegram.svg";
import medium from "../medium.svg";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <Container sx={{mb: 2}} id={'contact'}>
        <Grid container style={{ display: "flex", justifyContent: "center"}}>
          <Grid sx={{display: "flex", alignItems: 'center', justifyContent: 'center' , borderRight: '1px solid #6F14E3'}} item xs={12} md={4}>
            <img style={{width: '250px'}} src={logo}/>
          </Grid>
          <Grid sx={{display: "flex", flexDirection: 'column' ,alignItems: 'center', borderRight: '1px solid #6F14E3', pt: 3, pb: 3 }} item xs={12} md={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton sx={{mr: -3}}>
                <img src={linkedin} alt="" />
              </IconButton>
              <IconButton sx={{mr: -2}}>
                <img src={twitter} alt="" />
              </IconButton>
              <IconButton sx={{mr: -2}}>
                <img src={medium} alt="" />
              </IconButton>
              <IconButton sx={{mr: -3}}>
                <img src={insta} alt="" />
              </IconButton>
              <IconButton sx={{mr: -3}}>
                <img src={telegram} alt="" />
              </IconButton>
            </div>
          </Grid>
          <Grid sx={{display: "flex",flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} item xs={12} md={4}>
            <Typography variant='body2'>For Partnerships</Typography>
            <Typography variant='h5'>info@rariko.io</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{bgcolor: 'black', p: 2}}>
        <Typography variant='body2' align='center'>Ⓒ All rights reserved 2022</Typography>
      </Box>
    </>
  )
}

export default Footer
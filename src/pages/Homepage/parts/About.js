import { Box, Grid, Typography } from '@mui/material'
import phone from '../../../assets/phone.png'
import React from 'react'
import { Container } from '@mui/system'

const About = () => {
  return (
    <Container id={'about'}>
      <Box sx={{width: 'fit-content',margin: '0 auto',mt: 4}}>
      <Typography sx={{fontSize: 40, fontWeight: 700 , width: 'fit-content', margin: '0 auto'}} align='center'>What is Rari<span style={{color: '#D03434', fontSize: 40}}>ko</span></Typography>
        <Box sx={{borderBottom: '1px solid white', mt: -1.2}}></Box>
      </Box>
      
      <Grid sx={{pt: 10}} container>
        <Grid sx={{display: 'flex', flexDirection: 'column',justifyContent: 'flex-start'}} item md={6} xs={12}>
          <Typography sx={{fontSize: 25, mb: 3}}>Rariko is a decentralized social messaging platform that allows users to create an identity, socialize with fellow blockchain sapiens and access all their favorite communities in few clicks.</Typography>
          <Typography sx={{fontSize: 25}}>We are introducing safer and simpler community management tools. Finally a platform built for real users not for bots and scammers.</Typography>

          <a style={{background: '#5a2cbb', padding: '0.5rem 1rem', borderRadius: '25px', marginRight:'auto', marginTop: '2rem'}}>Explore</a>
        </Grid>
        <Grid sx={{display: 'flex', justifyContent: 'center', pb: 10}} item md={6} xs={12}>
          <img style={{width: '60%'}} src={phone}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
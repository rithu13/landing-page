import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import ProductCard from '../../../comps/ProductCard'
import icon1 from '../../../assets/1.png'
import icon2 from '../../../assets/2.png'
import icon3 from '../../../assets/3.png'
import icon4 from '../../../assets/4.png'
import icon5 from '../../../assets/5.png'
import icon6 from '../../../assets/6.png'
import icon7 from '../../../assets/7.png'
import icon8 from '../../../assets/8.png'

const productHighlights = [
  {
    title: "Anonymous Profiles",
    icon: icon1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a."
  },
  {
    title: "Digital Identities",
    icon: icon2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a."
  },
  {
    title: "Multi-chain Support",
    icon: icon3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a."
  },
  {
    title: "Automated community access",
    icon: icon4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a."
  },
  {
    title: "Governance tools",
    icon: icon5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a."
  },
  {
    title: "Community Discoverability",
    icon: icon6,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a."
  },
  {
    title: "Peer to Peer NFT trades Payments",
    icon: icon7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a."
  },
  {
    title: "Socialize & Earn (S&E)",
    icon: icon8,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at orci, diam amet. Commodo in quis gravida a."
  }
]

const Product = () => {
  return (
    <Container id={'product'}>
      <Box sx={{width: 'fit-content',margin: '0 auto',mt: 4}}>
      <Typography sx={{fontSize: 40, fontWeight: 700 , width: 'fit-content', margin: '0 auto'}} align='center'>Product Highlights</Typography>
        <Box sx={{borderBottom: '1px solid white', mt: -1.2}}></Box>
      </Box>

      <Grid sx={{pt: 10, pb: 10}} container spacing={4}>
        {productHighlights.map((item) => (
          <Grid item md={6} xs={12}>
            <ProductCard item={item}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Product
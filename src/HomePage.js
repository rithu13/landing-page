import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, makeStyles } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CardMedia from '@mui/material/CardMedia';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Drawer, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { ToastContainer, toast } from 'react-toastify';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { lineHeight, textAlign } from "@mui/system";
import Navbar from "./components/Navbar";
import "./homepage.css";
import axios from "axios";

import * as roadmap from "./HomePage.module.css";
import curve from "./assets/images/curve.png";
import bgimg from "./assets/images/bgimg.png"
import image10 from "./assets/images/image10.png"
import phoneimg from "./assets/images/phoneimg.png"
import two from "./assets/images/two.png"
import three from "./assets/images/three.png"
import timeline from "./assets/images/timelinebg.svg";
import linkedin from "./assets/images/linkedin.svg";
import twitter from "./assets/images/twitter.svg";
import insta from "./assets/images/insta.svg";
import telegram from "./assets/images/telegram.svg";
import medium from "./assets/images/medium.svg";
import desktop from "./assets/images/Group 33941.png";
import vector1 from "./assets/images/anon.png";
import vector2 from "./assets/images/Saly-44.png";
import vector3 from "./assets/images/Saly-26.png";
import vector4 from "./assets/images/business.png";
import vector5 from "./assets/images/Image.png";

// /* Inline #4 | http://localhost:3000/demo/corona-react-free/template/demo_1/preview/homepage */

// .page-body-wrapper {
//   /* min-height: calc(100vh - 70px); */
//   /* width: calc(100% - 244px); */
// }

// .content-wrapper {
//   /* background: #000000; */
// }

// /* Inline #80 | http://localhost:3000/demo/corona-react-free/template/demo_1/preview/homepage */

// @media (min-width: 600px) {
//   .css-k3kfax-MuiContainer-root {
//     /* padding-left: 24px; */
//     /* padding-right: 24px; */
//   }
// }

// /* Inline #79 | http://localhost:3000/demo/corona-react-free/template/demo_1/preview/homepage */

// .css-k3kfax-MuiContainer-root {
//   /* margin-top: 200px; */
// }


//import boxes from "./Group 160.png";

//post

//
const drawerWidth = {
  fontSize: '20px',
  '@media (min-width: 780px)': {
    fontSize: '15px'
  }
}



const ButtonBootstrap = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: 18,
  background:
    "linear-gradient(135deg, #7240FF 0%, #6F14E3 15.1%, #5713E6 68.64%, #5F11DF 81.77%, #5D0BC5 100%)",
  color: "white",
  padding: "8px 40px",
  border: "0px",
  borderRadius: "10px",
  fontWeight: theme.typography.fontWeightRegular,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    opacity: 1,
    backgroundColor: "#5a2cbb",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
  },
  "&:active": {
    boxShadow: "0 0 0 0.2rem rgba(90, 44, 187,0.5)",
  },
}));
const notifySuccess = (e) => {
  toast.success(e ? e : "You are Successfully Registered", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
const notifyError = (e) => {
  toast.error(e, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
}

const HomePage = () => {
  const baseURL = "http://localhost:8800";
  //const post_email = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //const [drawerOpen, setDrawerOpen] = useState(false);

  const setClearMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  async function postData() {
    if (email.length == 0) {
      notifyError("Please enter your email")
      return
    }
    let postData = {
      email: email,
    };
    console.log(email);

    axios
      .post(`${baseURL}/subscribe`, postData)
      .then((res) => {
        notifySuccess("Thank you for subscribing")
        setClearMessage("Thank you for subscribing");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        notifyError("Please try after sometimes")
        setClearMessage("Error.Please Try Again");
      });


  }

  return (
    <div
      style={{
        margin: "0",
        padding:"0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#0e031a"
      }}
    >
      <ToastContainer style={{ fontSize: "16px" }} theme="dark" />
      <Container
        sx={{
          margin: 0,
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100% !important",
          boxSizing: "border-box",
        }}

      >
          
          <Box
            sx={{
              background: `url(${bgimg})`,
              backgroundSize: "cover",
              position:" absolute",
              width: "100%",
              height:{xs:"300px", lg:"756px"},
              left:" 0px",
              top:" 0px",
            }}
          > 
            <Box className="fadebottom"></Box>
            {/* <Navbar/> */}
            <Box className="header"
              sx={{
                textAlign:"center",
                width: "100vw",
                height:{xs:"200px", lg:"756px"},
                padding:"70px 0px",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
              
            >
              <h1>Time to colonise <br/> the world of <span>Web 3.0</span><br/> with the 
              different communites.</h1>
              <Button variant="contained"       
                sx={{ padding: { xs: "5px", lg: "10px 50px" }, 
                      fontSize:{xs:"13px",lg:"40px"}, 
                      borderRadius:"50px", 
                      fontWeight:"400",
                      backgroundColor:"#6F14E3"
                }}
                
              >
                Get Early Access</Button>
            </Box>
            
          </Box>

        {/* second part   */}
          <Box
          className="white-box"
          style={{backgroundColor:"#0e031a", width: "100vw", marginTop:"72%"}}
        >
          <Box>
            <Stack>
              <Typography
                variant="h2"
                textAlign="center"
                sx={{
                  position:"relative",
                  margin: "0px",
                  fontSize: {xs:"20px",lg:"35px"},
                  marginLeft: "20px",
                  marginTop: "50px",
                  fontWeight: "800",
                  paddingBottom: "60px",
                }}
                m={{ xs: "0px" }}
                pb={{ xs: "10px" }}
              >
                <span
                  style={{
                    color: "white",
                    margin: "0px",
                    paddingBottom: "8px",
                    paddingLeft: "50px",
                    fontsize: "80px",
                    fontWeight: "700",
                    width: "200px",
                    textAlign: "right",
                    borderBottom: "2px solid white",
                    fontFamily:"Roboto",
                    lineHeight:"99px",
                    
                  }}
                >
               What is Rari
                </span>
                <span
                  style={{
                    color: "#BD2222",                
                    margin: "0px",
                    paddingBottom: "8px",
                    fontsize: "45px",
                    fontWeight: "700",
                    borderBottom: "2px solid white",
                  }}
                >
                  ko
                </span>
                <span
                  style={{
                    color: "black",
                    margin: "0px",
                    padding: "8px",
                    paddingRight: "50px",
                    fontsize: "45px",
                    fontWeight: "700",
                    borderBottom: "2px solid white",
                    width:{lg:"auto", xs:"100px"}
                  }}
                >
                  
                </span>
              </Typography>
              <Grid container style={{ marginBottom: 150, display:"flex", alignItems:"center"}}>
                <Grid item lg={6.5} xs={12} md={12} my={"30px"} pl={{ xs: "7vw", lg: "7vw" }} mr={{ xs: "5vw", lg: "0px" }}>
                  <Stack justifyContent="center">
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: "300",
                        
                        display: "flex",
                        alignItems: "center", 
                        justifyContent:"center",                       
                        color: "white",
                        fontFamily:"Roboto"
                      }}
                    >
                      Rariko is a decentralized social messaging platform
                       that allows users to create an identity, socialize
                        with fellow blockchain sapiens and access all
                         their favorite communities in few clicks.
                    </p>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: "300",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        fontFamily:"Roboto"
                      }}
                    >
                     We are introducing a safer and simpler community management
                      tools. Finally a platform built 
                     for real users not for bots and scammers.
                    </p>
                    
                  </Stack>
                </Grid>
                <Grid item lg={5.5} xs={12} md={12}>
                  <div
                    className="image-container"
                  >
                    <img
                      src={three}
                      alt="desktop"
                    />   
                  </div>
                   
                </Grid>
              </Grid>
            </Stack>
          </Box>


          
          <Grid
            container
            sx={{ margin: "0 auto", width: "100%", paddingBottom: "40px" }}
          >
            <Grid item xs={12} md={12}>
              <Typography
                variant="h2"
                textAlign="center"
                style={{
                  margin: "0px",
                  fontSize: "35px",
                  // marginLeft: "16px",
                  fontWeight: "800",
                  textAlign: "center",
                  paddingBottom: "20px",
                  paddingTop: "30px",
                }}
                m={{ xs: "0px" }}
                pb={{ xs: "10px" }}
              >
                <span
                  style={{
                    color: "white",
                    margin: "0px",
                    fontsize: "45px",
                    paddingBottom: "8px",
                    paddingLeft: "50px",
                    fontWeight: "700",
                    borderBottom: "2px solid white",
                  }}
                >
                 Product Highlights
                </span>
                <span
                  style={{
                    color: "red",
                    margin: "0px",
                    paddingBottom: "8px",
                    fontsize: "45px",
                    fontWeight: "700",
                    borderBottom: "2px solid white",
                  }}
                >
                 
                </span>
                <span
                  style={{
                    color: "black",
                    margin: "0px",
                    padding: "8px",
                    paddingRight: "50px",
                    fontsize: "45px",
                    fontWeight: "700",
                    borderBottom: "2px solid white",
                  }}
                >
                 
                </span>
              </Typography>
            </Grid>
            
          <Box className="product-highlights" 
            sx={{ padding: { xs: "0px", lg: "80px" } }}
          >  
            <Grid
              item
              xs={10}
              md={12}
              lg={3}
            >
              <div className="services-box">
                <img
                  src={vector1}
                  alt=""
                />
                <h1>Anonyomous Profiles</h1>
              </div>
            </Grid>
            <Grid
              item
              xs={10}
              md={12}
              lg={3}
              
            >
              <div className="services-box" style= {{background:"#689CD8"}}>
                <img src={vector2} alt="Connect" />
                <h1>Connect</h1>
              </div>
            </Grid>
            <Grid
              item
              xs={10}
              md={12}
              lg={3}
              
            >
              <div className="services-box" style= {{background:"#D868A4"}}>
                <img src={vector3} alt="communities" />
                <h1>communities</h1>
              </div>
            </Grid>
            <Container
              sx={{
                width:{ lg:"1400px !important"},
                display: { xs: "block", lg: "flex" },
                justifyContent: "space-between",
                margin: "0px auto",
                padding:{lg:"30px 0 0 0", xs:"0px"}
              }}
            >
              <Container
                xs={12}
                md={12}
                lg={5}
                
              >
                <Container className="services-box row">
                  <img src={vector4} className="col-sm-6" alt="" />
                  <h1>Government Tools</h1>
                </Container>
              </Container>
              <Container
                xs={12}
                md={12}
                lg={5}
                
              >
                <Container className="services-box row">
                  <img className="col-sm-6" src={vector5} alt=""  />
                  <h1>
                    Socialize and Earn (S&E)
                  </h1>
                </Container>
              </Container>
            </Container>
            </Box>
          </Grid>
         
        </Box>
          

<div style={{background: "radial-gradient(88.28% 88.28% at 24.34% 11.72%, #040130 0%, #111111 45.31%, #101010 100%"
}}>
 <Box sx={{ width: "100vw" }}
   display={{ xs: 'none', lg: 'flex' }}
 >
      
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
   <div style={{background: "radial-gradient(88.28% 88.28% at 24.34% 11.72%, #040130 0%, #111111 45.31%, #101010 100%"
}}>
     <path
       fill="#0e031a"
       fill-opacity="1"
       d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,69.3C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
     ></path>
      </div>
   </svg>
  
 </Box>

 <Box sx={{display:"block",
  justifyContent:"center",
  alignItems:"center"}}> 
   <div className="roadmap">
    <h1>Roadmap</h1>
   </div>
   <div className="timeline-img">
    <img src={timeline} alt="timeline"/>
   </div>
 </Box>
</div> 

<Container
  className="footer"
   sx={{
     display: { lg: "flex", xs: "block" },
     justifyContent: "center",
     width: "100%",
     height: { lg: "35vh", xs: "auto" },
     backgroundColor:"#0e031a",
     margin:"0"
   }}
 >
   <Grid container style={{ display: "flex", justifyContent: "center" }}>
     <Grid item xs={12} md={8}>
       <div
         style={{
           display: "flex",
           justifyContent: "center",
           alignItems: "baseline",
           marginTop: "2.5rem",
         }}
       >
         <h2
           style={{
             margin: "0px",
             fontSize: "60px",
             marginLeft: "16px",
             fontWeight: "800",
           }}
         >
           <span style={{ color: "white", margin: "0px" }}>Rari</span>
           <span style={{ color: "red", margin: "0px" }}>ko</span>
         </h2>
       </div>
     </Grid>
   </Grid>
   <Container
     sx={{
       height: "150px",
       width: "6px",
       backgroundColor: "#9100FF",
       margin: "0px 10px",
       padding: { lg: "0px", xs: "0px" },
       display: { lg: 'flex', xs: 'none' }
     }}
   ></Container>
   <Grid
     container
     style={{
       display: "flex",
       justifyContent: "center",
       marginTop: "2.5rem",
     }}
   >
     <Grid item xs={12} md={8}>
       <Typography
         variant="h6"
         sx={{ textAlignLast: 'center' }}>Find us at:</Typography>
       <div
         style={{
           display: "flex",
           justifyContent: "center",
           marginRight: "30px",
         }}
       >
         <img src={linkedin} alt="" />
         <img src={twitter} alt="" />
         <img src={medium} alt="" />
         <img src={insta} alt="" />
         <img src={telegram} alt="" />
       </div>
     </Grid>
   </Grid>
   <Container
     sx={{
       height: "150px",
       width: "6px",
       backgroundColor: "#9100FF",
       margin: "0px 10px",
       padding: { lg: "0px", xs: "0px" },
       display: { lg: 'flex', xs: 'none' }
     }}
   ></Container>
   <Grid container style={{ display: "flex", justifyContent: "center" }}>
     <Grid item md={8}>
       <Typography
         variant="h2"
         sx={{
           margin: "0px",
           fontSize: "20px",
           marginLeft: { lg: "125px", xs: "0px" },
           fontWeight: "800",
           paddingBottom: "15px",
         }}
       >
         <span style={{ color: "white", margin: "0px" }}>Rari</span>
         <span style={{ color: "red", margin: "0px" }}>ko</span>
         <span style={{ color: "white", margin: "0px", padding: "8px" }}>
           Subscribe
         </span>
       </Typography>
     </Grid>
     <Grid item md={8}>
       <FormControl
         sx={{ width: "30ch", marginBottom: "10px", marginLeft: { xs: "0px", lg: "45px" } }}
       >
         <OutlinedInput
           placeholder="Email"
           id="subscribe"
           sx={{
             color: "white",
             backgroundColor: "rgba(100,100,100,0.3)",
             borderRadius: "15px",
           }}
           // ref={post_email}
           onChange={(e) => setEmail(e.target.value)}
           value={email}
         />
       </FormControl>
       <Container
         sx={{
           display: "flex",
           justifyContent: "center",
           flexDirection: "column",
           width: "100%",
           height: "auto",
           padding: "10px",
           marginLeft: { xs: "0px", lg: "85px" },
         }}
       >
         <ButtonBootstrap onClick={postData}>Send</ButtonBootstrap>
         {/* <button onClick={postData}>Subscribe</button> */}
         {message.length !== 0 && (
           <div className="">
             <p
               style={{
                 padding: "10px 20px",
                 textAlign: "center",
                 width: "100%",
                 margin: "10px auto",
                 backgroundColor: "rgba(255,255,255,0.1)",
                 color: "pink",
                 borderRadius: "5px",
               }}
             >
               {message}
             </p>
           </div>
         )}
       </Container>
     </Grid>
   </Grid>
 </Container>

        
      </Container>
      
      {/* <div style={{textAlign:"center", fontSize: "20px" ,paddingTop:"10px",paddingBottom:"10px"}}>Ⓒ All rights reserved 2022</div> */}
    </div>
  );
};

export default HomePage;

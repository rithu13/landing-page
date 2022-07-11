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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as roadmap from "./HomePage.module.css";
import curve from "./curve.png";
import bgimg from "./assets/bgimg.png"
import image10 from "./image10.png"
import phoneimg from "./phoneimg.png"
import two from "./two.png"
import three from "./three.png"
import timeline from "./timelinebg.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import insta from "./insta.svg";
import telegram from "./telegram.svg";
import medium from "./medium.svg";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { ToastContainer, toast } from 'react-toastify';
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
import desktop from "./Group 33941.png";
import vector1 from "./anon.png";
import vector2 from "./Saly-44.png";
import vector3 from "./Saly-26.png";
import vector4 from "./business.png";
import vector5 from "./Image.png";
import { lineHeight, textAlign } from "@mui/system";
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setClearMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };
  let drawer = (
    <div >

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          marginLeft: "40px",
          paddingLeft: "-40px"
        }}
      >
        <img
          style={{
            position: " absolute",
            width: "464px",
            height: "104px",
            left: "79px",
            top: "56px"
          }}
          src={image10}

        />
        {/* <h2
          style={{
            margin: "0px",
            fontSize: "54px",
            marginLeft: "16px",
            fontWeight: "800",
          }}
        >
          <span style={{ color: "white", margin: "0px" }}>Rari</span>
          <span style={{ color: "red", margin: "0px" }}>ko</span>
        </h2> */}
      </div>
      <Box
        sx={{
          // display: "flex",
          // display: { xs: 'none', lg: 'block' },
          justifyContent: "space-between",
          alignItems: "center",
          width: { lg: "90vw !important", xs: "100vw !important" },
          position: "fixed",
          position: "-webkit-sticky",
          top: "0",
          zIndex: 100,
        }}
        display={{ lg: "flex", xs: "block" }}
      >
        <Container
          sx={{
            display: { xs: 'block', lg: 'none' },
          }}
        >
          <Typography
            variant="h1" sx={{ color: 'white', position: 'absolute', right: 0, marginTop: '-100px', marginRight: drawerOpen ? '8px' : '30px' }}> {drawerOpen == false ? <MenuIcon onClick={() => { setDrawerOpen(true) }} sx={{ color: 'white', fontSize: '2.5rem' }} /> : <CloseIcon onClick={() => { setDrawerOpen(false) }} sx={{ color: 'white', fontSize: '2.5rem' }} />}</Typography>
        </Container>

        <Container
          sx={{
            display: { xs: drawerOpen ? 'grid' : 'none', lg: 'flex' },
            justifyContent: { lg: "space-between", xs: "space-around" },
            alignItems: "center",
            flex: "0.2",
            marginRight: 'unset'
            // display: { xs: 'none', lg: 'block' },
          }}
        >
          <Box component="span"
            // sx={{
            //   color: "white",
            //   fontSize: { lg: "20px", xs: "25px" },
            //   cursor: "pointer",
            //   padding: { lg: "10px", xs: "5px" },
            //   textAlign: { lg: "unset", xs: "center" },
            // }}
            style={{
              position: "absolute",
              width: "94px",
              height: "42px",
              left: "745px",
              top: "35px",

              fontFamily: 'Roboto',
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "45px",

              /* White */

              color: "#FFFFFF",


              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            About
          </Box>
          <Box component="span"
            // sx={{
            //   color: "white",
            //   fontSize: { lg: "20px", xs: "25px" },
            //   cursor: "pointer",
            //   padding: { lg: "10px", xs: "5px" },
            //   textAlign: { lg: "unset", xs: "center" },
            // }}
            style={{
              position: "absolute",
              width: "122px",
              height: "42px",
              left: "862px",
              top: "35px",

              fontFamily: 'Roboto',
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "45px",

              /* White */

              color: "#FFFFFF",


              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            Product
          </Box>
          <Box component="span"
            //   sx={{
            //     color: "white",
            //     fontSize: { lg: "20px", xs: "25px" },
            //     cursor: "pointer",
            //     padding: { lg: "10px", xs: "5px" },
            //     textAlign: { lg: "unset", xs: "center" },
            //   }}
            //
            style={{
              position: "absolute",
              width: "152px",
              height: "42px",
              left: "1005px",
              top: "35px",

              fontFamily: 'Roboto',
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "45px",

              /* White */

              color: "#FFFFFF",


              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            Roadmap
          </Box>

          <span
            style={{
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <ButtonBootstrap style={{
              position: " absolute",
              width: "170px",
              height: "52px",
              left: "1172px",
              top: "31px",

              background: "#6714E5",
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px"
            }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Box component="span"
                  sx={{
                    fontSize: { lg: "20px", xs: "25px" },
                  }}
                >
                  Login/Register
                </Box>
                <Box component="span"
                  sx={{
                    fontSize: { lg: "15px", xs: "15px" },
                    fontWeight: "525",
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
                  }}
                >
                  (Coming Soon)
                </Box>

              </div>
            </ButtonBootstrap>
          </span>
        </Container>

      </Box>
    </div>
  )
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
        margin: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

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
        <Box >
          <Box
            sx={{
              background: `url(${bgimg})`,
              position: " absolute",
              width: "1440px",
              height: "756px",
              left: " 0px",
              top: " 0px",

              // backgroundRepeat: "no-repeat",
              // backgroundPosition: "bottom",
              // backgroundSize: "cover",
              // height: "40rem",
              // transform: "translate(0,-0px)",
              // margin: "0 auto",
              // padding: "0px",
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
            }}
          >
            {drawer}
            <Drawer
              variant="temporary"
              sx={{
                display: { xs: 'block', lg: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', height: '100%', backgroundColor: "#142534" },
              }}
              open={drawerOpen}
            >
              {drawer}
            </Drawer>
            <Box
              sx={{
                display: "flex",
                width: "100vw",
                justifyContent: "space-between",
                margin: "80px 0px",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

              }}
            >
              <Box
                sx={{
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",

                }}
                display={{ lg: 'flex', xs: "block" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "800px",
                    height: "180px",
                    left: "120px",
                    top: "236px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "64px",
                    lineHeight: "70px",

                    /* or 109% */
                    letterSpacing: "1em",
                  }}
                >
                  <Typography
                    style={{
                      position: "absolute",
                      width: "989px",
                      height: "209px",
                      right: "220px",
                      top: "230px",
                      fontFamily: "Roboto",

                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "66px",
                      lineHeight: "99px",
                      textAlign: "center",
                      color: "#fff",

                    }}

                  >





                    Time to colonize
                  </Typography>
                  <Typography
                    style={{
                      position: "absolute",
                      width: "989px",
                      height: "209px",
                      right: "226px",
                      top: "320px",
                      fontFamily: "Roboto",

                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "66px",
                      lineHeight: "99px",
                      textAlign: "center",
                      color: "#fff"
                    }}

                  >





                    the world of

                    <Box component="span"
                      sx={{

                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "66px",
                        color: "#D03434",
                        // fontSize: "60px",
                        marginTop: "5px",
                        paddingLeft: "17px",
                      }}
                      fontSize={{ lg: "60px", xs: "22px" }}
                    >

                      WEB 3.0
                    </Box>

                  </Typography>
                  <Typography
                    style={{
                      position: "absolute",
                      width: "989px",
                      height: "209px",
                      right: "226px",
                      top: "410px",
                      fontFamily: "Roboto",

                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "66px",
                      lineHeight: "99px",
                      textAlign: "center",
                      color: "#fff",
                      textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #FF66DA"
                    }}

                  >





                    with different communities
                  </Typography>
                  <Container style={{ marginTop: "280px", marginLeft: "40px", width: "285px", height: "63px" }}>
                    <ButtonBootstrap style={{
                      position: "absolute",
                      width: "475.2px",
                      height: "88px",
                      left: "490px",
                      top: " 600px",

                      /* Select Gradient */

                      background: "linear-gradient(135deg, #6F14E3 0%, #5713E6 77.08%, #5F11DF 100%)",
                      borderRadius: "46px"
                    }}>
                      <a
                        href="#subscribe"
                        style={{
                          align: "center", verticalAlign: "center", letterSpacing: "1.6%",
                          textDecoration: "none", color: "white", fontFamily: 'Roboto',
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "41px",
                          lineHeight: "62px "
                        }}
                      >

                        Get Early Access
                      </a>
                    </ButtonBootstrap>
                  </Container>
                </div>
                {/* <CardMedia image={boxes}
                  sx={{
                    height: { lg: "360px", xs: 160 },
                    width: { lg: "400px", xs: 200 },
                    marginLeft: { lg: "0px", xs: "22%" }
                  }}
                /> */}
                {/* <img src={boxes} alt="image" height="360" width="500" /> */}
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="white-box"
          style={{ backgroundColor: "#0e031a", width: "100vw", marginTop: "68%" }}
        >
          <Box>
            <Stack>
              <Typography

                variant="h2"
                textAlign="center"
                sx={{
                  position: "relative",
                  margin: "0px",
                  fontSize: "35px",
                  marginLeft: "20px",
                  marginTop: "50px",
                  fontWeight: "800",
                  // textDecoration: "underline",
                  paddingBottom: "60px",

                }}
                m={{ xs: "0px" }}
                pb={{ xs: "10px" }}
              // style={{
              //   margin: "0px",
              //   fontSize: "40px",
              //   marginLeft: "16px",
              //   marginTop: "50px",
              //   fontWeight: "800",
              //   // textDecoration: "underline",
              //   paddingBottom: "60px",
              // }}
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
                    fontFamily: "Roboto",
                    lineHeight: "99px",


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
                    borderBottom: "2px solid white  ",
                  }}
                >

                </span>
              </Typography>
              <Grid container style={{ marginBottom: 150 }}>
                <Grid item lg={6.5} xs={12} md={12} my={"30px"} pl={{ xs: "7vw", lg: "7vw" }} mr={{ xs: "5vw", lg: "0px" }}>
                  <Stack justifyContent="center">
                    <p

                      justifyContent="center"
                      style={{
                        // marginLeft: "7vw",
                        fontSize: "30px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "50px",

                        /* or 179% */
                        display: "flex",
                        alignItems: "center",

                        /* Gray */
                        color: "white",
                        fontFamily: "Roboto"
                      }}
                    >
                      Rariko is a decentralized social messaging platform
                      that allows users to create an identity, socialize
                      with fellow blockchain sapiens and access all
                      their favorite communities in few clicks.
                    </p>
                    <p
                      style={{
                        // marginLeft: "7vw",
                        fontSize: "30px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "50px",

                        /* or 179% */
                        display: "flex",
                        alignItems: "center",

                        /* Gray */
                        color: "white",
                        fontFamily: "Roboto"
                      }}
                    >
                      We are introducing a safer and simpler community management
                      tools. Finally a platform built
                      for real users not for bots and scammers.
                    </p>
                    <ButtonBootstrap
                      style={{
                        position: "absolute",
                        width: "204px",
                        height: "65px",
                        left: "90px",
                        top: "1370px",

                        /* Select Gradient */

                        background: "linear-gradient(135deg, #6F14E3 0%, #5713E6 77.08%, #5F11DF 100%)",
                        borderRadius: "10px"
                      }}
                    // sx={{
                    //   height: "50px",
                    //   width: "95px",
                    //   alignSelf: { lg: "center", xs: "center"},
                    // }}
                    >
                      <p style={{
                        position: "absolute",
                        width: "95px",
                        height: "50px",
                        top: "8px",


                        fontFamily: 'Roboto',
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "28px",
                        lineHeight: "50px",
                        /* identical to box height, or 179% */

                        display: "flex",
                        alignItems: "center"
                      }}>
                        Explore</p>
                    </ButtonBootstrap>
                  </Stack>
                </Grid>
                <Grid item lg={7} xs={12} md={12}>
                  <Box
                    sx={{ width: "100%", position: "relative" }}
                    height={{ xs: "7vh", lg: "70vh" }}
                    mt={{ xs: "100px", lg: "0px" }}
                    style={{ paddingLeft: "70%", marginTop: "-70%" }}
                  >
                    <img
                      src={three}
                      alt="desktop"
                      style={{ width: "800px", height: "600px", paddingLeft: "250px", paddingTop: "30px" }}

                    ></img>
                  </Box>

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

            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{
                padding: "20px",
                marginLeft: "100px",
              }}
              ml={{ xs: "0px", lg: "100px" }}
              p={{ xs: "10px", lg: "20px" }}
            >
              <div
                className="services-box"
                style={{
                  border: "1px solid white",
                  //background: "#5F4AE0",
                  width: "336px",
                  height: "336px",
                  //  borderRadius: "16px",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "linear-gradient(135deg, #6F14E3 0%, #5713E6 77.08%, #5F11DF 100%)",
                  backdropFilter: "blur(4px)",
                  /* Note: backdrop-filter has minimal browser support */

                  borderRadius: "20px"
                }}
              >
                <img
                  src={vector1}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Anonyomous Profiles
                </h1>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{ padding: "20px", marginLeft: "70px" }}
              ml={{ xs: "0px", lg: "70px" }}
              p={{ xs: "10px", lg: "20px" }}
            >
              <div
                className="services-box"
                style={{
                  border: "1px solid white",
                  background: "#689CD8",
                  //  height: "15rem",
                  borderRadius: "16px",
                  // height: "20rem",
                  borderRadius: "16px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "336px",
                  height: "336px"
                }}
              >
                <img src={vector2} alt="" />
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Connect
                </h1>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{ padding: "20px", marginLeft: "65px" }}
              ml={{ xs: "0px", lg: "65px" }}
              p={{ xs: "10px", lg: "20px" }}
            >
              <div
                className="services-box"
                style={{
                  border: "1px solid white",
                  background: "#D868A4",
                  //height: "15rem",
                  borderRadius: "16px",
                  //height: "20rem",
                  borderRadius: "16px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "336px",
                  height: "336px"
                }}
              >
                <img src={vector3} alt="" />
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  communities
                </h1>
              </div>
            </Grid>
            <Container
              sx={{
                width: "1400px !important",
                display: { xs: "block", lg: "flex" },
                justifyContent: "space-between",
                margin: "0px auto",
              }}
            // display={{ xs: "block", lg: "flex" }}
            // className="row"
            // p={{ xs: "10px", lg: "20px" }}
            >
              <Container
                xs={12}
                md={12}
                lg={5}
                sx={{ padding: { xs: "0px", lg: "20px" }, width: "100%", height: "20rem" }}

              >
                <Container
                  className="services-box row"
                  sx={{
                    border: "1px solid white",
                    background: "#282828",
                    // height: "18rem",
                    borderRadius: "16px",
                    // height: "unset",
                    borderRadius: "16px",
                    padding: "10px",
                    display: { xs: "block", lg: "flex" },
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "554px",
                    height: "308px"
                  }}
                >
                  <img src={vector4} className="col-sm-6" alt="" />
                  <Typography
                    variant="h1"
                    className="col-sm-6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: { xs: "25px", lg: "42px" },
                      fontWeight: 500,
                      textAlign: "center"
                    }}
                  >
                    Governance tools
                  </Typography>
                </Container>
              </Container>
              <Container
                xs={12}
                md={12}
                lg={5}
                sx={{ padding: { xs: "0px", lg: "20px" }, marginTop: { xs: "65px", lg: "0px" }, width: "100%", height: "20rem" }}
              >
                <Container
                  className="services-box row"
                  sx={{
                    border: "1px solid white",
                    background: "#282828",
                    // height: "18rem",
                    borderRadius: "16px",
                    // height: "unset",
                    borderRadius: "16px",
                    padding: "10px",
                    display: { xs: "block", lg: "flex" },
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "554px",
                    height: "308px"
                  }}
                >
                  <img className="col-sm-6" src={vector5} alt="" style={{ marginBottom: "50px", marginTop: "-50px" }} />
                  <Typography
                    variant="h1"
                    className="col-sm-6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: { xs: "25px", lg: "42px" },
                      fontWeight: 500,
                      marginTop: { xs: "-30px", lg: "0px" },
                      textAlign: "center"
                    }}
                  >
                    Socialize and Earn (S&E)
                  </Typography>
                </Container>
              </Container>
            </Container>
          </Grid>
        </Box>
      </Container>
      <div style={{
        background: "radial-gradient(88.28% 88.28% at 24.34% 11.72%, #040130 0%, #111111 45.31%, #101010 100%"
      }}>
        <Box sx={{ width: "100vw" }}
          display={{ xs: 'none', lg: 'flex' }}
        >

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <div style={{
              background: "radial-gradient(88.28% 88.28% at 24.34% 11.72%, #040130 0%, #111111 45.31%, #101010 100%"
            }}>
              <path
                fill="#0e031a"
                fill-opacity="1"
                d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,69.3C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </div>
          </svg>

        </Box>

        <Box
          sx={{
            position: "relative",
            padding: "0px",
            transform: "translate(0,-10rem)",
            background: `url(${timeline})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            width: "100vw",
            // height: "100rem",

            // backgroundColor: "radial-gradient(88.28% 88.28% at 24.34% 11.72%, #040130 0%, #111111 45.31%, #101010 100%"
            // margin: 10
          }}
          height={{ xs: "70vh", lg: "100rem" }}
          m={{ xs: "10px", lg: "10px" }}
          mt={{ xs: "180px", lg: "100px" }}
        >


          <Typography
            variant="h2"
            //   sx={{ paddingTop:"-200px",marginTop: "-px", textAlign: "center", fontSize: 40, fontWeight: 500 }}
            //   mt={{ xs: "0px", lg: "-90px" }}
            //
            style={{


            }}>
            <span style={{
              position: "relative",
              width: "118px",
              height: "112px",
              left: "550px",
              top: "-100px",



              color: "white", borderBottom: "2px solid white"
            }}>
              Roadmap
            </span>
          </Typography>

        </Box>
      </div>   {/* <Box
        className="white-box"
        style={{ backgroundColor: "white", width: "100vw", height: "100px" }}
      >
        <Box>
          <Stack>
            <Typography
              variant="h2"
              textAlign="center"
              style={{
                margin: "0px",
                fontSize: "45px",
                marginLeft: "50px",
                fontWeight: "800",
                paddingTop: "10px",
              }}
            >
              <span
                style={{
                  color: "#7240FF",
                  textDecoration: "underline",
                  margin: "0px",
                  padding: "8px",
                  fontsize: "45px",
                  fontWeight: "700",
                }}
              >
                Download
              </span>
              <span
                style={{
                  color: "black",
                  margin: "0px",
                  fontsize: "45px",
                  fontWeight: "700",
                }}
              >
                Rari
              </span>
              <span
                style={{
                  color: "red",
                  margin: "0px",
                  fontsize: "45px",
                  fontWeight: "700",
                }}
              >
                ko
              </span>
              <span
                style={{
                  color: "black",
                  margin: "0px",
                  padding: "8px",
                  fontsize: "45px",
                  fontWeight: "700",
                }}
              >
                Whitepaper
              </span>
            </Typography>
          </Stack>
        </Box>
      </Box> */}
      <Container
        sx={{

          maxWidth: "1500% !important",

          display: { lg: "flex", xs: "block" },
          justifyContent: "center",
          width: "100vw",
          height: { lg: "35vh", xs: "auto" },
          backgroundColor: "#0e031a",
          marginLeft: "-135px"

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
              {/* <img
                src={require("./RarikoLogoFinal.png")}
                height="80"
                width="80"
              /> */}
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
      <div style={{ textAlign: "center", fontSize: "20px", paddingTop: "10px", paddingBottom: "10px" }}>Ⓒ All rights reserved 2022</div>
    </div>
  );
};

export default HomePage;

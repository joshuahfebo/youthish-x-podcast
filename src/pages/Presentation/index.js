/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Silk from "components/ReactBits/Silk/Silk";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import TextType from "components/ReactBits/TextType/TextType";
// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
//Import useState and useEffect
import { useState, useEffect } from "react";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//Icons
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Images
import bg0 from "assets/images/newbg.jpg";
import bg1 from "assets/images/newbg1.jpg";
import bg2 from "assets/images/newbg2.jpg";
import bg3 from "assets/images/newbg3.jpg";
import bg4 from "assets/images/newbg4.jpg";
import bg5 from "assets/images/newbg5.jpg";
//Social media Icons
const socialIcons = {
  facebook: faFacebook,
  instagram: faInstagram,
  twitter: faTwitter,
  tiktok: faTiktok,
  youtube: faYoutube,
};

function Presentation() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length); // switch image
      console.log(index);
    }, 15000); // change image every 10s

    return () => clearInterval(interval);
  }, []);
  const bgImages = [bg0, bg1, bg2, bg3, bg4, bg5];
  return (
    <>
      {/* Define the animations globally */}
      <style>{`
      html,body {
  overflow-x: hidden; /* prevents horizontal scroll */
  scroll-behavior: smooth;
  background-color: #1a160bff;
   width: 100%;
  max-width: 100%;
}
  .cursor{
  color: #ffbb00ff;
  font-weight: bold;
  }
  .icon-shadow {
  text-shadow: -1px -1px 0 #c5a859ff,
               1px -1px 0 #c5a859ff,
              -1px  1px 0 #c5a859ff,
               1px  1px 0 #c5a859ff;
}
  @keyframes curtainLeft {
    0%   { transform: translateX(0); }
    60%  { transform: translateX(0); }
    85%  { transform: translateX(-70%) rotate(-0.3deg); }
    92%  { transform: translateX(-85.5%) rotate(-0.5deg); }
    100% { transform: translateX(-100%) rotate(-0.3deg); }
  }

  @keyframes curtainRight {
    0%   { transform: translateX(0); }
    60%  { transform: translateX(0); }
    85%  { transform: translateX(89%) rotate(0.3deg); }
    92%  { transform: translateX(95%) rotate(0.5deg); }
    100% { transform: translateX(100%) rotate(0.3deg); }
  }
//     @keyframes waveLeft {
//   0%   { transform: translateX(-90.5%) skewY(0deg); }
//   20%  { transform: translateX(-90%) skewY(0.05deg); }
//   40%  { transform: translateX(-91%) skewY(0deg); }
//   60%  { transform: translateX(-93%) skewY(-0.05deg); }
//   80%  { transform: translateX(-95%) skewY(0deg); }
//   83%  { transform: translateX(-98%) skewY(0.05deg); }
//   100% { transform: translateX(-100%) skewY(0deg); }
// }

// @keyframes waveRight {
//   0%   { transform: translateX(89%) skewY(0deg); }
//   20%  { transform: translateX(90%) skewY(-0.05deg); }
//   40%  { transform: translateX(92%) skewY(0deg); }
//   60%  { transform: translateX(94%) skewY(0.05deg); }
//   80%  { transform: translateX(96%) skewY(0deg); }
//   83%  { transform: translateX(97%) skewY(-0.05deg); }
//   85%  { transform: translateX(98%) skewY(0.01deg); }
//   100% { transform: translateX(100%) skewY(0deg); }
// }
`}</style>

      <DefaultNavbar
        transparent
        brand="#YouthishFoundation"
        colour="black"
        routes={routes}
        action={{
          type: "internal",
          route: "/presentation",
          label: "Home",
          color: "dark",
        }}
        sticky
      />
      <MKBox
        minHeight={{ xs: "60vh", md: "75vh", lg: "90vh" }}
        width="100%"
        sx={{
          position: "relative",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        {/* <MKBox
          component="img"
          src={bgImages[index]}
          alt="Background"
          loading="eager"
          fetchpriority="high"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // ✅ stretches perfectly
            zIndex: -1,
          }}
          className="fade-in"
        /> */}
        {/* Background Silk */}
        <MKBox
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            objectFit: "cover", // ✅ stretches perfectly
            // overflow: "hidden",
          }}
        >
          <Silk speed={3} scale={1} color="#ffaa49ff" noiseIntensity={1.5} rotation={0} />
        </MKBox>
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              opacity={0.8}
              fontWeight="bold"
              variant="h1"
              color="black"
              mt={-6}
              mb={1}
              sx={({ breakpoints }) => ({
                fontSize: "14rem",
                fontFamily: "'Mea Culpa', cursive",
                [breakpoints.down("lg")]: {
                  fontSize: "9rem",
                },
                [breakpoints.down("md")]: {
                  fontSize: "8.2rem",
                },
                [breakpoints.down("sm")]: {
                  paddingTop: "90px",
                  fontSize: "7rem",
                },
                textShadow: `
      -1px -1px 0 #c5a859ff,
       1px -1px 0 #c5a859ff,
      -1px  1px 0 #c5a859ff,
       1px  1px 0 #c5a859ff
    `,
              })}
            >
              youthish
              <br />
              <MKTypography
                textAlign="center"
                opacity={0.9}
                fontWeight="bold"
                variant="h1"
                color="black"
                mt={-6}
                mb={1}
                sx={({ breakpoints }) => ({
                  paddingTop: "16px",
                  fontSize: "7rem",
                  fontFamily: "'Mea Culpa', cursive",
                  [breakpoints.down("lg")]: {
                    fontSize: "4.12rem",
                  },
                  [breakpoints.down("md")]: {
                    fontSize: "3.399668325041459rem",
                  },
                  [breakpoints.down("sm")]: {
                    fontSize: "2.8rem",
                  },
                })}
              >
                - foundation -
              </MKTypography>
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 5, lg: 12 }}
              mt={1}
              sx={({ breakpoints }) => ({
                fontSize: "1.7rem",
                [breakpoints.down("lg")]: {
                  fontSize: "1.7rem",
                },
                [breakpoints.down("md")]: {
                  fontSize: "1.5rem",
                },
                [breakpoints.down("sm")]: {
                  fontSize: "1rem",
                },
                "@media (max-height: 800px)": {
                  fontSize: "1.3rem", // shrink big text on short screens
                },
              })}
              fontWeight="medium"
              opacity={0.8}
            >
              The&nbsp;
              <MKTypography
                color="black"
                textAlign="center"
                fontWeight="bold"
                display="inline"
                sx={({ breakpoints }) => ({
                  fontSize: "1.7rem",
                  [breakpoints.down("lg")]: {
                    fontSize: "1.7rem",
                  },
                  [breakpoints.down("md")]: {
                    fontSize: "1.5rem",
                  },
                  [breakpoints.down("sm")]: {
                    fontSize: "1rem",
                  },
                  "@media (max-height: 800px)": {
                    fontSize: "1.3rem", // shrink big text on short screens
                  },
                  color: "#ffbb00ff",
                })}
              >
                #No.2&nbsp;
              </MKTypography>
              largest youth&nbsp;
              <TextType
                textColors={["#ffbb00ff", "#ffbb00ff", "#ffbb00ff"]}
                text={["empowerment", "developmental", "fun"]}
                typingSpeed={150}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="𝕀"
                cursorClassName="cursor"
              />
              &nbsp;organization in the country!
            </MKTypography>
            <MKBox
              sx={({ breakpoints }) => ({
                [breakpoints.down("lg")]: {
                  paddingBottom: "50px",
                },
                [breakpoints.down("md")]: {
                  paddingBottom: "30px",
                },
                [breakpoints.down("sm")]: {
                  paddingBottom: "20px",
                },
                "@media (max-height: 800px)": {
                  paddingBottom: "70px", // extra breathing room only on short screens
                },
              })}
            >
              <MKTypography
                textAlign="center"
                variant="h6"
                color="black"
                mt={8}
                mb={1}
                sx={{ paddingTop: "0px" }}
                opacity={0.8}
              >
                Find us on these platforms
              </MKTypography>
              <MKBox
                display="flex"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                // sx={{ paddingBottom: "90px" }}
              >
                {Object.keys(socialIcons).map((platform, idx) => (
                  <MKTypography
                    key={idx}
                    component="a"
                    variant="body1"
                    color="black"
                    opacity={0.8}
                    href={`https://${platform}.com`} // optional: link to platform
                    mr={3}
                  >
                    <FontAwesomeIcon
                      icon={socialIcons[platform]}
                      size="2x"
                      className="icon-shadow"
                    />
                  </MKTypography>
                ))}
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette, functions }) => functions.rgba(palette.black.main, 0.6), // semi-transparent "info" color
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Download />
        <DesignBlocks />
        <Pages />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;

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
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg.webp";
import Logo from "assets/images/podcast3.png";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/presentation",
          label: "HOME",
          color: "dark",
        }}
        transparent
        light
        brand="#IAMPODCAST"
      />

      {/* HERO SECTION */}
      <MKBox
        minHeight="75vh"
        sx={{
          position: "relative",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image (LCP-friendly) */}
        <Box
          component="img"
          src={bgImage}
          alt="Background"
          loading="eager"
          fetchpriority="high"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))}`,
            zIndex: -1,
          }}
        />

        {/* Hero Content */}
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKBox
              component="img"
              src={Logo}
              alt="I AM PODCAST Logo"
              loading="lazy"
              zIndex={2}
              sx={{
                maxWidth: { xs: "70%", md: "300px" },
                height: "auto",
                mx: "auto",
                display: "block",
              }}
            />
            <MKTypography variant="body1" color="white" mt={2} mb={3} fontWeight="bold">
              The #No.1 Youth Podcast streamers in Tz
            </MKTypography>
            <MKButton
              variant="gradient"
              color="light"
              size="large"
              component="a"
              href="/"
              sx={{ mb: 2 }}
            >
              VOTE NOW!
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              {["facebook", "instagram", "twitter", "google-plus"].map((platform, idx) => (
                <MKTypography key={idx} component="a" variant="body1" color="white" href="#" mr={3}>
                  <i className={`fab fa-${platform}`} />
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
        </Container>
      </MKBox>

      {/* CONTENT CARD */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          background: "transparent",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {" "}
        <style>
          {`
          html,body{
            background-image: radial-gradient(circle at top right, #0f0e0fff, #2b1055 60%, #5248aaff);
          }
        `}
        </style>
        <Information />
        <Team />
        <Newsletter />
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;

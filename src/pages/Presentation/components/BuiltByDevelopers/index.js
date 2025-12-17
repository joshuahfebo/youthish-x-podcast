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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/bg3.jpg";
import DomeGallery from "components/ReactBits/DomeGallery/DomeGallery";
import img1 from "assets/images/event_imgs/img1.jpg";
import img2 from "assets/images/event_imgs/img2.jpg";
import img3 from "assets/images/event_imgs/img3.jpg";
import img4 from "assets/images/event_imgs/img4.jpg";
import img5 from "assets/images/event_imgs/img5.jpg";
import img6 from "assets/images/event_imgs/img6.jpg";
import img7 from "assets/images/event_imgs/img7.jpg";
import img8 from "assets/images/event_imgs/img8.jpg";
function BuiltByDevelopers() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Events
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1} sx={{ fontSize: "3rem" }}>
            Youthish foundation&apos;s events
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Be part of one of the most influential youth programs in the country which promote youth
            innovation , bonding and networking
          </MKTypography>
          <MKTypography
            component="a"
            href="https://www.instagram.com/youthishfoundation/?hl=en"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="info"
            fontWeight="bold"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Join now <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
          <MKTypography color="white" variant="h3" textAlign="center" mb={4}>
            Feel free to explore our world of events and memories
          </MKTypography>
          <div
            style={{
              width: "90vw",
              height: "60vh",
              display: "flex", // ✅ make it a flex container
              alignItems: "center", // vertically center
              justifyContent: "center", // horizontally center
              margin: "0 auto", // ensure horizontal centering if needed
              borderRadius: "32px", // ✅ rounded corners
              overflow: "hidden", // ✅ clips DomeGallery to the radius
              background: "rgba(255,255,255,0.08)", // optional glass base
              backdropFilter: "blur(14px)", // optional glassmorphism pop
              border: "1px solid rgba(255,255,255,0.25)", // subtle edge
            }}
          >
            <DomeGallery
              images={[img1, img2, img3, img4, img5, img6, img7, img8]}
              fit={0.7}
              minRadius={450}
              imageBorderRadius={"20px"}
              grayscale={false}
              maxVerticalRotationDeg={8}
            />
          </div>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;

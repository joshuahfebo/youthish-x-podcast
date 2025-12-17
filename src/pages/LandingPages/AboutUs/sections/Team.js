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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
function Team() {
  return (
    <MKBox
      borderRadius="xl"
      component="section"
      position="relative"
      py={{ xs: 6, md: 10 }}
      px={{ xs: 2, lg: 0 }}
      sx={{
        background: "radial-gradient(circle at top left, #5f2c82, #2b1055 60%, #0f0c29)",
        overflow: "hidden",
      }}
    >
      {/* subtle glass overlay */}
      <MKBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={{
          backdropFilter: "blur(18px)",
          background: "rgba(255,255,255,0.04)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} textAlign={{ xs: "center", md: "left" }} mb={6}>
            <MKTypography variant="h2" color="white" fontWeight="bold" gutterBottom>
              The Executive Team
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.75}>
              Ideas don’t spread themselves — people do.
            </MKTypography>
          </Grid>
        </Grid>

        {/* Cards */}
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <HorizontalTeamCard
              name="Larry Emmanuel ~ [HIM]"
              position={{ color: "info", label: "Lead Podcaster & Streamer" }}
              description="The main man behind the exquisite sequel podcast titled IAMPODCAST."
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <HorizontalTeamCard
              name="Daniel Lema"
              position={{ color: "info", label: "Co-founder" }}
              description="Believes ideas deserve seriousness — and podcasts are the sharpest medium."
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <HorizontalTeamCard
              name="Dennis Nittu"
              position={{ color: "info", label: "Co-founder & Aid" }}
              description="Larry’s trusted co-founder, ensuring vision turns into execution."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;

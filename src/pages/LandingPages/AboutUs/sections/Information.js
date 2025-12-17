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
// Material Kit 2 React components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import GlassInfoCard from "./GlassInfoCard";
function Information() {
  return (
    <MKBox
      borderRadius="xl"
      component="section"
      py={{ xs: 8, md: 12 }}
      sx={{
        background: "radial-gradient(circle at top right, #1a181bff, #2b1055 60%, #0f0c29)",
        position: "relative",
        overflow: "hidden",
        marginBottom: "6rem",
      }}
      zIndex={2}
    >
      {/* Glass overlay */}
      <MKBox
        position="absolute"
        inset={0}
        sx={{
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.05)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Section header */}
        <Grid container justifyContent="center" mb={8}>
          <Grid item xs={12} md={8} textAlign="center">
            <MKTypography variant="h2" color="white" fontWeight="bold" mb={2}>
              What is IAMPODCAST?
            </MKTypography>

            <MKTypography variant="body1" color="white" opacity={0.8}>
              A bold conversation hub where influence, creativity, and raw truth collide — hosted by
              Larry Emmanuel.
            </MKTypography>
          </Grid>
        </Grid>

        {/* Info cards */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <GlassInfoCard
                  icon="mic"
                  title="Unfiltered Conversations"
                  description="Real talks with creators, thinkers, and voices shaping today’s culture — no scripts, no filters."
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <GlassInfoCard
                  icon="public"
                  title="Youth & Digital Culture"
                  description="Exploring trends, influence, and impact in the modern digital generation."
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <GlassInfoCard
                  icon="groups"
                  title="Creator Spotlight"
                  description="Shining light on upcoming and established creators making waves online."
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <GlassInfoCard
                  icon="bolt"
                  title="More Than a Podcast"
                  description="IAMPODCAST is evolving into a platform — conversations today, movements tomorrow."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Information;

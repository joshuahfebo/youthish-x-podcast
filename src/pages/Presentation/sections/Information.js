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
// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                //icon="fa-solid fa-handshake"
                color={"dark"}
                title={
                  <>
                    For a Better
                    <br />
                    Kesho!
                  </>
                }
                description="Join Youthish foundation today to help make Tanzania a better place for youth."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Join Today!",
                }}
              />
              <RotatingCardBack
                image={bgBack}
                title={
                  <>
                    Vote for your
                    <br />
                    favourite tiktoker
                  </>
                }
                color={"secondary"}
                description="Youthish is currently hosting a Best Tiktoker competition along side I AM PODCAST, place your votes for you to see who gets to win!!!"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "VOTE NOW!",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="balance"
                  color="success"
                  title="Equality"
                  description="Youthish supports equality for everyone, we believe that we all are different, of different ethnicity, race, gender, religion but these differences do not define who we are! That is why youthish provides opportunities for yourth to show and express their opinions."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="error"
                  icon="calendar_month"
                  title="Sceduled events!"
                  description="One of the nations' most popular youth building organization alawys has your back, We are here to help out as much as we can with loads of events of different kinds ranging from Charity sports matches, Bashes , Food Bazars, Competitions and many more!"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="warning"
                  icon="color_lens"
                  title="Arts & Flair"
                  description="Youthish embraces alot of talents, with arts and flair being one of the biggest talents of the modern 21st century, so youthish foundation hosts events like Dress to impress -offs and Gallery auctions just to show that there's much more in youth than what most people assume!"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color={"success"}
                  icon="sports_soccer"
                  title="Sports and fun"
                  description="Youthish hosts charity matches for any group of people and this is so as to improve and motivate youth in sports and promote charity at the same time, to make better lives for the youth!"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Networking"
                  description="Regardless of the time of the day, month, or even year, Youthish provides a connection suitable for youth in such a way that they can use this connection even later on !"
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

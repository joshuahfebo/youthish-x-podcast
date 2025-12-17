/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function HorizontalTeamCard({ name, position, description }) {
  return (
    <MKBox
      p={3}
      borderRadius="24px"
      sx={{
        height: "100%",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        transition: "all 0.35s ease",
        "&:hover": {
          transform: "translateY(-6px) scale(1.01)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
        },
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Text */}
        <Grid item xs={12}>
          <MKTypography variant="h5" color="white" fontWeight="bold" mb={0.5}>
            {name}
          </MKTypography>

          <MKTypography
            variant="caption"
            color={position.color}
            fontWeight="medium"
            sx={{
              display: "inline-block",
              px: 1.5,
              py: 0.5,
              borderRadius: "12px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            {position.label}
          </MKTypography>

          <MKTypography variant="body2" color="white" opacity={0.8} mt={2} lineHeight={1.6}>
            {description}
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;

import React from "react";
// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import PropTypes from "prop-types";
// Material Kit 2 React components
import MKBox from "components/MKBox";
function GlassInfoCard({ icon, title, description }) {
  return (
    <MKBox
      p={3}
      borderRadius="24px"
      sx={{
        height: "100%",
        background: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        transition: "all 0.35s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
        },
      }}
    >
      <DefaultInfoCard icon={icon} title={title} description={description} />
    </MKBox>
  );
}
export default GlassInfoCard;
GlassInfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

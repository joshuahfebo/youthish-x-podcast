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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ time, color, count, title, description, ...rest }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={time} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant="h3" mt={2} mb={1} sx={{ color: "#c5a859ff" }}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" sx={{ color: "#ccc6b5ff" }}>
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  description: "",
  title: "",
  time: 1,
  color: "warning",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.number,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
};

export default DefaultCounterCard;

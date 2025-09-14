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

import { useState } from "react";
import { useEffect } from "react";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function RotatingCard({ children }) {
  const [rotate, setRotate] = useState(false);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (!entered) {
      const interval = setInterval(() => {
        setRotate((prev) => !prev); // Toggle rotate state
      }, 4000); // 5000ms = 5 seconds

      return () => clearInterval(interval); // Clean up on unmount
    }
  }, [entered]);
  // const rotate0 = () => {
  //   setRotate(false)
  // };
  // const rotate180 = () =>{
  //    setRotate(true)

  // };

  return (
    <MKBox
      sx={{ perspective: "50rem" }}
      onMouseEnter={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
    >
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          position: "relative",
          transform: rotate ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
          transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        }}
      >
        {children}
      </Card>
    </MKBox>
  );
}

// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RotatingCard;

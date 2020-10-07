import React, { useState, useEffect } from "react";
import styled from "styled-jss";
import propTypes from "prop-types";

const StyledPop = styled("div")({});

const Pop = ({ children, open, anchorEl, ...props }) => {
  useEffect(() => {
    if (anchorEl !== null) {
      
    }
  }, [anchorEl]);

  return (
    <StyledPop>
      {children}
    </StyledPop>
  );
};

Pop.propTypes = {
  anchorEl: propTypes.node,
};

Pop.default = {
  anchorEl: null,
};

export default Pop;

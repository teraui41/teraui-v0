import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-jss";

const StyledCollapse = styled("div")(({ theme, open }) => ({
  opacity: open ? 1 : 0,
  overflow: "hidden",
  height: open ? "auto" : 0,
  transition: "all .2s ease",  
}));

const Collapse = ({ open, children }) => {
  return <StyledCollapse open={open}>{children}</StyledCollapse>;
};

export default Collapse;

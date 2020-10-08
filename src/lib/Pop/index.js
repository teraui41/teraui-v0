import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-jss";
import propTypes from "prop-types";

const StyledPop = styled("div")({
  zIndex: 1000,
  overflow: 'hidden',
  position: "absolute",
  transition: "all .1s ease",
  height: ({ height }) => height,
  opacity: ({ open }) => open ? 1: 0,
  padding: ({ theme }) => theme.getSpacing(1),
  top: ({ theme, position }) => position.top - theme.getSpacing(2),
  left: ({ theme, position }) => position.left,
});

const onClose = (setHeight, handleGetClientHeight) => {
  setHeight(handleGetClientHeight());
  setTimeout(() => {
    setHeight(0);
  }, 100);
};

const onOpen = (setHeight) => {
  setTimeout(() => {
    setHeight("auto");
  }, 100);
};

const getClientHeight = (refEle) => () => {
  return refEle ? refEle.current.clientHeight : 0;
};

const Pop = ({ children, open, anchorEl, ...props }) => {
  const refEle = useRef(null);
  const [height, setHeight] = useState(0);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const setHeightHandler = useCallback(() => {
    const handleGetClientHeight = getClientHeight(refEle);
    setHeight(handleGetClientHeight());
    open ? onOpen(setHeight) : onClose(setHeight, handleGetClientHeight);
  }, [refEle, open]);

  useEffect(() => {
    if (anchorEl !== null) {
      const { offsetLeft: left, offsetTop: top } = anchorEl.current;
      setPosition({ left, top });
    }
    setHeightHandler();
  }, [anchorEl, setHeightHandler]);

  return (
    <StyledPop position={position} open={open} height={height}>
      <div ref={refEle}>{children}</div>
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

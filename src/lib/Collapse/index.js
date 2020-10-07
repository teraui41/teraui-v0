import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-jss";

const styles = {
  collapse: {
    overflow: "hidden",
    transition: "all .2s ease",
  },
};

const StyledContent = styled("div")(({ theme, open, height }) => ({
  height,
  overflow: "hidden",
  transition: "all .2s ease",
}));

const getClientHeight = (refEle) => () => {
  return refEle ? refEle.current.clientHeight : 0;
}

const onOpen = (setHeight) => {
  setTimeout(() => {
    setHeight('auto');
  }, 100);
}

const onClose = (setHeight, handleGetClientHeight) => {
  setHeight(handleGetClientHeight());
  setTimeout(() => {
    setHeight(0);
  }, 100);
}

const Collapse = ({ open, children }) => {
  const refEle = useRef(null);
  const [height, setHeight] = useState(0);

  const handleGetClientHeight = getClientHeight(refEle);

  useEffect(() => {
    setHeight(handleGetClientHeight());
    open ? onOpen(setHeight) : onClose(setHeight, handleGetClientHeight);

  }, [refEle, open]);

  return (
    <StyledContent open={open} height={height}>
      <div ref={refEle} >{children}</div>
    </StyledContent>
  );
};

export default Collapse;

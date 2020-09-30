import React from 'react';
import styled from 'styled-jss';

const StyledGrid = styled('div')(({style}) => ({
  width: '100%',
  ...style
}));

export const Grid = ({ children, ...props }) => {
  return <StyledGrid style={props}>{children}</StyledGrid>;
}

export default Grid;


import React from 'react';
import styled from 'styled-jss';

const StyledContainer = styled('div')(({style}) => ({
  width: '100%',
  ...style
}));

export const Container = ({ children, ...props }) => {
  return <StyledContainer style={props}>{children}</StyledContainer>;
}

export default Container;


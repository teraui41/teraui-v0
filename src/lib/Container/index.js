import React from 'react'
import styled from 'styled-jss'

const StyledContainer = styled('main')(({ style }) => ({
  ...style
}));

const Container = ({ children, ...props }) => {
return <StyledContainer style={props}>{children}</StyledContainer>
}

export default Container;

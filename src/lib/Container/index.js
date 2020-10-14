import React from 'react'
import styled from 'styled-jss'

const StyledContainer = styled('main')(({ theme, style }) => ({
  position: 'relative',
  backgroundColor: theme.colors.grey0,
  ...style
}));

const Container = ({ children, ...props }) => {
return <StyledContainer style={props}>{children}</StyledContainer>
}

export default Container;

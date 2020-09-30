import React from 'react'
import styled from 'styled-jss'

const StyledAppBar = styled('div')({
  
});

const AppBar = ({ children, ...props }) => {
  return (
  <StyledAppBar>{children}</StyledAppBar>
  )
}

export default AppBar;

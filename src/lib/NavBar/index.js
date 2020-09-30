import React from 'react';
import styled from 'styled-jss';
import propTypes from 'prop-types';

const StyledNavBar = styled('header')(({ style, theme }) => ({
  height: 60,
  marginLeft: 250,
  width: 'calc(100% - 250px)',
  backgroundColor: theme.colors.primary,
}));

export const NavBar = ({ children, ...props}) => {
  return <StyledNavBar style={props} ></StyledNavBar>
}

NavBar.propTypes = {
  style: propTypes.object
}

NavBar.defaultProps = {
  style: {}
}

export default NavBar;

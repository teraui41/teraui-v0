import styled from 'styled-jss';
import propTypes from 'prop-types';

const StyledNavBar = styled('header')(({ style, theme }) => ({
  height: 80,
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

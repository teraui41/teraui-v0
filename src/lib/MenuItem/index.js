import React from "react";
import styled from "styled-jss";
import propTypes from "prop-types";
import Icon from "../Icon";
import Typography from "../Typography";

const MenuIcon = styled(Icon)(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.grey2
}));

const StyledMenuContainer = styled("div")({
  display: 'flex',
  cursor: 'pointer',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
  '&:hover': {
    backgroundColor: ({ theme }) => theme.colors.grey4
  }
});

const MenuText = styled(Typography)({
  color: ({ theme }) => `${theme.colors.grey2}`
});

const MenuExtent = styled(Icon)(({ theme, hasChild, open }) => ({
  color: theme.colors.grey2,
  opacity: hasChild ? 1 : 0,
  transition: 'all .2s ease',
  transform: open ? 'rotate(90deg)': 'rotate(0deg)',
}));

const MenuItem = ({ children, text, icon, open, hasChild, ...props }) => {
  return (
    <StyledMenuContainer {...props}>
      <MenuIcon icon={icon} />
      <MenuText variant='content'>{text}</MenuText>
      <MenuExtent open={open} hasChild={hasChild} icon='fa-angle-right' />
    </StyledMenuContainer>
  );
};

MenuItem.propTypes = {
  icon: propTypes.string,
  text: propTypes.string,
  hasChild: propTypes.bool,
};

MenuItem.defaultProps = {
  icon: '',
  text: '',
  hasChild: false
}

export default MenuItem;

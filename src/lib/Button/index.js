import React from 'react';
import styled from 'styled-jss'
import propTypes from "prop-types";

// 基本樣式
const basicStyle = (theme) => ({
  border: 'none',
  outline: 'none',
  borderRadius: theme.radius,
  paddingTop: theme.getSpacing(1),
  paddingLeft: theme.getSpacing(2),
  paddingRight: theme.getSpacing(2),
  paddingBottom: theme.getSpacing(1),
});

const textStyle = (theme) => ({
  color: theme.colors.primary,
  backgroundColor: theme.colors.transparent,

});

const filledStyle = (theme) => ({
  color: theme.colors.white,
  backgroundColor: theme.colors.primary,
});

const outlineStyle = (theme) => ({
  color: theme.colors.primary,
  border: `1px solid ${theme.colors.primary}`,
  backgroundColor: theme.colors.transparent,
});

const switchTheme = (theme, type) => {
  switch (type) {
    case 'outline':
      return outlineStyle(theme);
    case 'text':
      return textStyle(theme);
    case 'filled':
    default:
      return filledStyle(theme);
  }
}

const StyledButton = styled('button')(({ theme, type, style }) => ({
  ...basicStyle(theme),
  ...switchTheme(theme, type),
  ...style,
}));

const Button = props => <StyledButton {...props} />;

Button.propTypes = {
  /**
   * Click event
   */
  onClick: propTypes.func,
  /**
   * Styling object
   */
  style: propTypes.object,
  /**
   * Style type
   */
  type: propTypes.oneOf(['filled', 'outline', 'text']),
};

Button.defaultProps = {
  type: 'filled',
  style: {},
  onClick: () => false,
};

export default Button;

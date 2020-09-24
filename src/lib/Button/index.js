import styled from 'styled-jss'
import propTypes from "prop-types";

const Button = styled('input')(({theme}) => ({
    paddingTop: theme.getSpacing(1),
    paddingLeft: theme.getSpacing(2),
    paddingRight: theme.getSpacing(2),
    paddingBottom: theme.getSpacing(1),
    marginTop: theme.getSpacing(2),
    backgroundColor: theme.colors.primary,
}));

Button.propTypes = {
  value: propTypes.string,
  onClick: propTypes.func,
};

Button.defaultProps = {
  value: "",
  onClick: () => false,
};

export default Button;

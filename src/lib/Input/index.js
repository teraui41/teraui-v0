import React, { Fragment } from "react";
import styled from "styled-jss";
import propTypes from "prop-types";
import isEmpty from 'lodash/isEmpty';
import FromLabel from '../FromLabel';
import FormGroup from '../FormGroup';
import breakpoint from "../constant/breakpoint";

const StyledInput = styled("input")({
  flex: 1,
  outline: "none",
  borderRadius: ({ theme }) => theme.radius,
  fontSize: ({ theme }) => theme.typography.content.fontSize,
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
  border: ({ theme, errorMessage }) => `1px solid ${ isEmpty(errorMessage) ? theme.colors.grey1: theme.colors.danger}`,
  "&:active, &:focus": {
    border: ({ theme }) => `1px solid ${theme.colors.primary}`,
  },
  color: ({ theme, disabled }) => disabled ? theme.colors.grey2: theme.colors.black,
  backgroundColor: ({ theme, disabled }) => disabled ? theme.colors.grey0: theme.colors.white,
});



const StyedErrorMessage = styled("div")({
  color: ({ theme }) => theme.colors.danger,
  paddingLeft: ({ theme }) => theme.getSpacing(1),
  [breakpoint.mediaLG]: {
    paddingLeft: ({ theme }) => theme.getSpacing(15),
  },
});

const Input = ({
  label,
  value,
  required,
  onChange,
  errorMessage,
  ...props
}) => {
  return (
    <Fragment>
      <FormGroup>
        <FromLabel required={required}>{label}</FromLabel>
        <StyledInput value={value} onChange={onChange} errorMessage={errorMessage} {...props} />
      </FormGroup>
      <StyedErrorMessage errorMessage={errorMessage}>
        {errorMessage}
      </StyedErrorMessage>
    </Fragment>
  );
};

Input.propTypes = {
  label: propTypes.string,
  onChange: propTypes.func,
  required: propTypes.bool,
  errorMessage: propTypes.string,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.instanceOf(Date),
  ]),
};

Input.defaultProps = {
  label: "",
  value: "",
  required: false,
  errorMessage: "",
  onChange: () => false,
};

export default Input;

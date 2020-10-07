import React, { Fragment } from "react";
import styled from "styled-jss";
import propTypes from "prop-types";
import isEmpty from 'lodash/isEmpty';
import breakpoint from "../constant/breakpoint";

const StyledLabel = styled("label")({
  minWidth: 80,
  position: "relative",
  color: ({ theme }) => theme.colors.grey4,
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(1)}px`,
  "&::after": {
    position: "absolute",
    content: ({ required }) => (required ? '"*"' : '""'),
    color: ({ theme }) => theme.colors.danger,
    marginLeft: 2,
  },
  [breakpoint.mediaLG]: {
    padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
    "&::after": {
      left: 2,
    },
  },
});

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

const StyledFormGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-star",
  [breakpoint.mediaLG]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    boxSizing: "border-box",
    justifyContent: "center",
  },
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
      <StyledFormGroup>
        <StyledLabel required={required}>{label}</StyledLabel>
        <StyledInput value={value} onChange={onChange} errorMessage={errorMessage} {...props} />
      </StyledFormGroup>
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

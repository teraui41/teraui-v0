import React from "react";
import styled from "styled-jss";
import propTypes from "prop-types";

const StyledLabel = styled("label")({
  color: ({ theme }) => theme.colors.grey4,
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
});

const StyledInput = styled("input")({
  flex: 1,
  outline: 'none',
  borderRadius: ({ theme }) => theme.radius,
  fontSize: ({ theme }) => theme.typography.content.fontSize,
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
  border: ({ theme }) => `1px solid ${theme.colors.grey1}`,
  '&:active, &:focus': {
    border: ({ theme }) => `1px solid ${theme.colors.primary}`,
  }
});

const StyledFormGroup = styled("div")({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Input = ({ label, value, onChange, ...props }) => {
  return (
    <StyledFormGroup>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput value={value} onChange={onChange} {...props}/>
    </StyledFormGroup>
  );
};

Input.propTypes = {
  label: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.instanceOf(Date),
  ]),
};

Input.defaultProps = {
  label: "",
  value: '',
  onChange: () => false,
};

export default Input;

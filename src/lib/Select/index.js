import React, { useState, Fragment } from "react";
import isEmpty from 'lodash/isEmpty';
import styled from "styled-jss";
import propTypes from "prop-types";
import Pop from "../Pop";
import FormGroup from "../FormGroup";
import FromLabel from "../FromLabel";
import ErrorMessage from "../ErrorMessage";

const StyledSelect = styled("div")({
  flex: 1,
  outline: "none",
  borderRadius: ({ theme }) => theme.radius,
  fontSize: ({ theme }) => theme.typography.content.fontSize,
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
  border: ({ theme, errorMessage }) =>
    `1px solid ${
      isEmpty(errorMessage) ? theme.colors.grey1 : theme.colors.danger
    }`,
  "&:active, &:focus": {
    border: ({ theme }) => `1px solid ${theme.colors.primary}`,
  },
  color: ({ theme, disabled }) =>
    disabled ? theme.colors.grey2 : theme.colors.black,
  backgroundColor: ({ theme, disabled }) =>
    disabled ? theme.colors.grey0 : theme.colors.white,
});

const Options = styled("div")({});

const Select = ({ items, label, required, errorMessage, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <FormGroup>
        <FromLabel required={required}>{label}</FromLabel>
        <StyledSelect></StyledSelect>
        <Pop open={open}>
          <Options>Items 1</Options>
        </Pop>
      </FormGroup>
      <ErrorMessage errorMessage={errorMessage}>
        {errorMessage}
      </ErrorMessage>
    </Fragment>
  );
};

Select.propTypes = {
  label: propTypes.string,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  items: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.oneOfType([propTypes.number, propTypes.string]),
    })
  ),
};

Select.defaultProps = {
  label: "",
  items: [],
  disabled: false,
  onChange: () => false,
};

export default Select;

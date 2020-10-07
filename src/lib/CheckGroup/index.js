import React, { Fragment } from "react";
import isNumber from 'lodash/isNumber';
import styled from "styled-jss";
import propTypes from "prop-types";
import FromLabel from "../FromLabel";
import FormGroup from "../FormGroup";
import breakpoint from "../constant/breakpoint";

const StyledCheck = styled("label")({
  position: "relative",
  display: "flex",
  paddingLeft: 30,
  opacity: ({ disabled }) => disabled ? 0.5 : 1,
  marginBottom: ({ theme }) => theme.getSpacing(1),
  paddingRight: ({ theme }) => theme.getSpacing(1),
  alignItems: "center",
  "&:before": {
    position: "absolute",
    content: '""',
    left: 0,
    width: 8,
    height: 8,
    margin: ({ theme }) => theme.getSpacing(1),
    border: ({ theme, checked }) =>
      `5px solid ${checked ? theme.colors.primary : theme.colors.grey1}`,
  },
  [breakpoint.mediaLG]: {
    marginBottom: ({ theme }) => theme.getSpacing(0),
  },
});

const CheckItems = ({ items, name, disabled, onChange, values: currentValues }) => {
  return items.map((item, index) => {
    const itemValue = isNumber(item.value) ? item.value.toString() : item.value;
    const checked = currentValues.includes(itemValue);
    const ID = `${name}_${item.value}_${index}`;

    return (
      <Fragment key={`radios_${index}`}>
        <StyledCheck htmlFor={ID} checked={checked} disabled={disabled}>
          {item.label}
        </StyledCheck>
        <input
          type='checkbox'
          id={ID}
          name={name}
          value={item.value}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          style={{ display: "none" }}
        />
      </Fragment>
    );
  });
};

const CheckGroup = ({
  name,
  items,
  label,
  values,
  onChange,
  required,
  disabled,
  ...props
}) => {
  return (
    <FormGroup>
      <FromLabel required={required}>{label}</FromLabel>
      <CheckItems values={values} items={items} name={name} disabled={disabled} onChange={onChange} />
    </FormGroup>
  );
};

CheckGroup.propTypes = {
  label: propTypes.string,
  disabled: propTypes.bool,
  items: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.oneOfType([propTypes.number, propTypes.string]),
    })
  ),
  values: propTypes.arrayOf(
    propTypes.oneOfType([propTypes.number, propTypes.string])
  ),
  onChange: propTypes.func,
};

CheckGroup.defaultProps = {
  label: "",
  items: [],
  values: [],
  disabled: false,
  onChange: () => false,
};

export default CheckGroup;

import React, { Fragment } from "react";
import styled from "styled-jss";
import propTypes from "prop-types";
import FromLabel from "../FromLabel";
import FormGroup from "../FormGroup";
import breakpoint from "../constant/breakpoint";

const StyledRadio = styled("label")({
  position: "relative",
  display: "flex",
  paddingLeft: 30,
  paddingRight: ({ theme }) => theme.getSpacing(1),
  alignItems: "center",
  "&:before": {
    position: "absolute",
    content: '""',
    left: 0,
    width: 8,
    height: 8,
    borderRadius: 10,
    margin: ({ theme }) => theme.getSpacing(1),
    border: ({ theme, checked }) =>
      `5px solid ${checked ? theme.colors.primary : theme.colors.grey1}`,
  },
  [breakpoint.mediaMD]: {
    marginBottom: ({ theme }) => theme.getSpacing(1)
  }
});

const RadioItems = ({ items, name, onChange, value: currentValue }) => {
  return items.map((item, index) => {
    const checked = currentValue === item.value;
    const ID = `${name}_${item.value}_${index}`;

    return (
      <Fragment key={`radios_${index}`}>
        <StyledRadio htmlFor={ID} checked={checked}>
          {item.label}
        </StyledRadio>
        <input
          type='radio'
          id={ID}
          name={name}
          value={item.value}
          onChange={onChange}
          checked={checked}
          style={{ display: "none" }}
        />
      </Fragment>
    );
  });
};

const RadioGroup = ({
  items,
  onChange,
  label,
  required,
  name,
  value,
  ...props
}) => {
  return (
    <FormGroup>
      <FromLabel required={required}>{label}</FromLabel>
      <RadioItems value={value} items={items} name={name} onChange={onChange} />
    </FormGroup>
  );
};

RadioGroup.propTypes = {
  label: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.oneOfType([propTypes.number, propTypes.string]),
    })
  ),
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  onChange: propTypes.func,
};

RadioGroup.defaultProps = {
  label: "",
  value: "",
  items: [],
  onChange: () => false,
};

export default RadioGroup;

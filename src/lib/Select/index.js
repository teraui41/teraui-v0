import React, { useState, Fragment, useRef } from "react";
import isEmpty from "lodash/isEmpty";
import styled from "styled-jss";
import propTypes from "prop-types";
import Pop from "../Pop";
import Icon from "../Icon";
import Card from "../Card";
import CardBody from "../CardBody";
import FormGroup from "../FormGroup";
import FormLabel from "../FormLabel";
import Typography from "../Typography";
import ErrorMessage from "../ErrorMessage";

const getBorderStyle = ({ theme, errorMessage, open }) => {
  if (!isEmpty(errorMessage)) {
    return theme.colors.danger;
  }

  if (open) {
    return theme.colors.primary;
  }

  console.log("TCL: getBorderStyle -> theme.colors.grey1", theme.colors.grey1);
  return theme.colors.grey1;
};

const StyledSelect = styled("div")({
  flex: 1,
  display: "flex",
  cursor: "pointer",
  position: 'relative',
  justifyContent: "space-between",
  borderRadius: ({ theme }) => theme.radius,
  fontSize: ({ theme }) => theme.typography.content.fontSize,
  border: ({ theme, errorMessage, open }) =>
    `1px solid ${getBorderStyle({ open, theme, errorMessage })}`,
  color: ({ theme, disabled }) =>
    disabled ? theme.colors.grey2 : theme.colors.black,
  backgroundColor: ({ theme, disabled }) =>
    disabled ? theme.colors.grey0 : theme.colors.white,
});

const StyledTypography = styled(Typography)({
  position: 'absolute',
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
})

const Options = styled("div")({
  cursor: "pointer",
  padding: ({ theme }) => theme.getSpacing(2),
  "&:hover": {
    backgroundColor: ({ theme }) => theme.colors.primary,
    color: ({ theme }) => theme.colors.white,
  },
});

const OptionBox = styled("div")({
  overflow: "hidden",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.17)",
  borderRadius: ({ theme }) => theme.radius,
  backgroundColor: ({ theme }) => theme.colors.white,
  border: ({ theme }) => `1px solid ${theme.colors.grey1}`,
});

const StyledInput = styled('input')({
  opacity: 0,
  cursor: "pointer",
  padding: ({ theme }) => `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
})

const StyledIcon = styled(Icon)({
  right: 0,
  position: 'absolute',
  padding: ({ theme }) => `${theme.getSpacing(1)}px`,
})

const handleClick = (open, setOpen) => () => {
  setOpen(!open);
};

const handleSelectItem = ({ setValue, setSelectedItem, setOpen, onChange }) => (
  item
) => (e) => {
  setOpen(false);
  setSelectedItem(item);
  onChange(e);
};

const handleOnBlur = (setOpen) => () => {
  setOpen(false);
};

const Select = ({
  items,
  label,
  required,
  onChange,
  placeholder,
  errorMessage,
  ...props
}) => {
  const menuEle = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});

  const onSelectClick = handleClick(open, setOpen);
  const onSelectItem = handleSelectItem({
    setSelectedItem,
    setOpen,
    onChange,
    setValue,
  });
  const onBlurClick = handleOnBlur(setOpen);
  return (
    <Fragment>
      <FormGroup>
        <FormLabel required={required}>{label}</FormLabel>
        <div ref={menuEle} onClick={onSelectClick}>
          <StyledSelect open={open} errorMessage={errorMessage}>
            <StyledTypography>{selectedItem.label || placeholder}</StyledTypography>
            <StyledIcon icon='fa-angle-down' size={12} />
            <StyledInput
              type='text'
              value={value}
              onChange={onChange}
              onBlur={onBlurClick}
            />
          </StyledSelect>
        </div>
        <Pop open={open} anchorEl={menuEle}>
          <OptionBox>
            {items.map((item, index) => {
              const key = `select_item_${item.label}_${item.vale}_${index}`;
              return (
                <Options key={key} onClick={onSelectItem(item)}>
                  {item.label}
                </Options>
              );
            })}
          </OptionBox>
        </Pop>
      </FormGroup>
      <ErrorMessage errorMessage={errorMessage}>{errorMessage}</ErrorMessage>
    </Fragment>
  );
};

Select.propTypes = {
  label: propTypes.string,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  placeholder: propTypes.string,
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
  placeholder: '請選擇...',
  disabled: false,
  onChange: () => false,
};

export default Select;

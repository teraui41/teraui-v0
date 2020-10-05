import React from "react";
import styled from "styled-jss";
import propTypes from "prop-types";
import Icon from "../Icon";
import Typography from "../Typography";
import { useEffect } from 'react';

const ICON_MAP = {
  info: "fa-info-circle",
  success: "fa-check-circle",
  warning: "fa-exclamation-circle",
  danger: "fa-exclamation-triangle",
};

const getIconColor = (theme) => ({
  info: theme.colors.info,
  success: theme.colors.success,
  danger: theme.colors.danger,
  warning: theme.colors.warning,
});

const StyledIcon = styled(Icon)(({ theme, type }) => ({
  marginRight: theme.getSpacing(1),
  color: getIconColor(theme)[type],
}));

const StyledMessageContainer = styled("div")({
  justifyContent: "center",
  position: "fixed",
  display: "flex",
  width: "100vw",
  left: 0,
  top: 0,
});

const activeStyle = (active) => {
  console.log("TCL: activeStyle -> active", active)
  return active ? { 
    top: 20,
    opacity: 1
  }: {};
}

const StyledMessage = styled("span")(({ theme, active }) => ({
  top: 0,
  opacity:0,
  zIndex: 1000,
  minWidth: 300,
  margin: "auto",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  transition: 'all .3s ease',
  justifyContent: "flex-star",
  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.17)",
  borderRadius: theme.radius,
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.grey1}`,
  padding: `${theme.getSpacing(1)}px ${theme.getSpacing(2)}px`,
  ...activeStyle(active),
 
}));

const Message = ({ open, type, content, onClose, duration, ...props }) => {

  useEffect(() => {
    if(open) {
      setTimeout(() => {
        onClose();
      },duration);
    }
  }, [open])

  return (
    <StyledMessageContainer>
      <StyledMessage {...props} active={open} >
        <StyledIcon type={type} icon={ICON_MAP[type]} />
        <Typography>{content}</Typography>
      </StyledMessage>
    </StyledMessageContainer>
  );
};

Message.propTypes = {
  open: propTypes.bool,
  content: propTypes.string,
  duration: propTypes.number,
  type: propTypes.oneOf(["info", "success", "danger", "warning"]),
};

Message.defaultProps = {
  open: false,
  content: "",
  type: "info",
  duration: 2500,
};

export default Message;

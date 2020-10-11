import React, { Fragment } from "react";
import styled from "styled-jss";
import propTypes from "prop-types";
import isEmpty from 'lodash/isEmpty';
import Typography from "../Typography";

const StyledPath = styled("a")({
  display: "inline-block",
  textDecoration: "none",
  color: ({ theme, href }) => isEmpty(href) ? theme.colors.grey4: theme.colors.primary,
});

const StyledSeparate = styled("span")({
  display: ({ hidden }) => (hidden ? "none" : "inline-block"),
  padding: ({ theme }) => theme.getSpacing(0.5),
  color: ({ theme }) => theme.colors.grey2,
});

const Paths = ({ paths }) => {
  return paths.map((item, index) => {
    const showSeparator = index === paths.length - 1;
    return (
      <Fragment>
        <StyledPath href={item.path}>
          <Typography>{item.text}</Typography>
        </StyledPath>
        <StyledSeparate hidden={showSeparator}>/</StyledSeparate>
      </Fragment>
    );
  });
};

const Breadcrumbs = ({ paths, ...props }) => {
  return (
    <Fragment>
      <Paths paths={paths} />
    </Fragment>
  );
};

Breadcrumbs.propTypes = {
  paths: propTypes.arrayOf(
    propTypes.shape({
      text: propTypes.string,
      path: propTypes.string,
    })
  ),
};

Breadcrumbs.defaultProps = {
  paths: [],
};

export default Breadcrumbs;

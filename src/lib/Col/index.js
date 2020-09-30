import React from 'react';
import styled from 'styled-jss';
import propTypes from 'prop-types';

const GRID_NUMBER = 24;

const mediaXS = "@media only screen and (min-width: 360px)";
const mediaSM = "@media only screen and (min-width: 480px)";
const mediaMD = "@media only screen and (min-width: 768px)";
const mediaLG = "@media only screen and (min-width: 1280px)";

const StyledCol = styled('div')({
  flexGrow: 0,
  boxSizing: 'border-box',
  maxWidth: ({lg}) =>`${100 * lg / GRID_NUMBER}%`,
  flexBasis: ({lg}) =>`${100 * lg / GRID_NUMBER}%`,
  [mediaXS]: {
    maxWidth: ({xs}) => `${100 * xs / GRID_NUMBER}%`,
    flexBasis: ({xs}) => `${100 * xs / GRID_NUMBER}%`,
  },
  [mediaSM]: {
    maxWidth: ({sm}) =>`${100 * sm / GRID_NUMBER}%`,
    flexBasis: ({sm}) =>`${100 * sm / GRID_NUMBER}%`,
  },
  [mediaMD]: {
    maxWidth: ({md}) =>`${100 * md / GRID_NUMBER}%`,
    flexBasis: ({md}) =>`${100 * md / GRID_NUMBER}%`,
  },
  [mediaLG]: {
    maxWidth: ({lg}) =>`${100 * lg / GRID_NUMBER}%`,
    flexBasis: ({lg}) =>`${100 * lg / GRID_NUMBER}%`,
  },
  height: '100%',
})

const Col = ({ children, ...props }) => {
return <StyledCol {...props} >{children}</StyledCol>
}

Col.propTypes = {
  /** 極小裝置 360px */
  xs: propTypes.number,
  /** 手機 480px */
  sm: propTypes.number,
  /** 平板 768px */
  md: propTypes.number,
  /** 電腦 1280px */
  lg: propTypes.number,
}

Col.defaultProps = {
  xs: GRID_NUMBER,
  sm: GRID_NUMBER,
  md: GRID_NUMBER,
  lg: GRID_NUMBER,
}

export default Col;

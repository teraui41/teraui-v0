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
  children: propTypes.node,
  xs: propTypes.number,
  sm: propTypes.number,
  md: propTypes.number,
  lg: propTypes.number,
}

Col.defaultProps = {
  children: null,
  xs: GRID_NUMBER,
  sm: GRID_NUMBER,
  md: GRID_NUMBER,
  lg: GRID_NUMBER,
}

export default Col;

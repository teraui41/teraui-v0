import React from 'react';
import styled from 'styled-jss';
import propTypes from 'prop-types';

const StyledRow = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
}))

const Row = ({ children }) => {
return <StyledRow >{children}</StyledRow>
}

Row.propTypes = {
  children: propTypes.node,
}

Row.defaultProps = {
  children: null,
}

export default Row;

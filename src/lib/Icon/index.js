import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import styled from 'styled-jss';
import propTypes from 'prop-types';

const StyledIcon = styled('span')(({ size: fontSize, style }) => ({
  fontSize,
  ...style
}));

const Icon = ({icon, ...props}) => {
  return (
    <StyledIcon {...props}>
      <i className={`fas ${icon}`}></i>
    </StyledIcon>
  )
}

Icon.propTypes = {
  icon: propTypes.string,
  size: propTypes.number,
  style: propTypes.object,
}

Icon.defaultProps = {
  icon: '',
  size: 16,
  style: {},
}

export default Icon;

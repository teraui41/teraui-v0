import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import styled from 'styled-jss';
import propTypes from 'prop-types';

const StyledIcon = styled('span')(({ theme, color, size, style }) => ({
  color,
  fontSize: size,
  ...style,
}))

const Icon = ({icon, ...props}) => {
  return (
    <StyledIcon {...props}>
      <i className={`fas ${icon}`}></i>
    </StyledIcon>
  )
}

Icon.propTypes = {
  icon: propTypes.string,
  color: propTypes.string,
  size: propTypes.number,
  style: propTypes.object,
}

Icon.propTypes = {
  icon: '',
  color: '#000',
  size: 16,
  style: {},
}

export default Icon;

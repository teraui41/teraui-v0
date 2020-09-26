import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import styled from 'styled-jss';
import propTypes from 'prop-types';

const StyledIcon = styled('span')(({ theme, color, size, style }) => ({
  color,
  size,
  ...style,
}))

const Icon = () => {
  return (
    <StyledIcon>
      <i className='fas fa-sync fa-spin'></i>
    </StyledIcon>
  )
}

Icon.propTypes = {
  name: propTypes.string,
  color: propTypes.string,
  size: propTypes.number,
  style: propTypes.object,
}

Icon.propTypes = {
  name: '',
  color: '#000',
  size: 16,
  style: {},
}

export default Icon;

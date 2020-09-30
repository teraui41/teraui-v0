import React from 'react';
import styled from 'styled-jss';

const StyledMenu = styled('div')(({ theme }) => ({
    top: 0,
    width: 250,
    height: '100%',
    position: 'absolute',
    backgroundColor: theme.colors.black,
}));

const Menu = ({ children, ...props }) => {
    return <StyledMenu {...props} >{children}</StyledMenu>
}

export default Menu;

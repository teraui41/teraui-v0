import React from 'react';
import styled from 'styled-jss';

const StyledContent = styled('div')(({ theme }) => ({
    marginLeft: 250,
    height: 'calc(100% - 60px)',
}));

const Content = ({  children, ...props }) => {
    return <StyledContent style={props}>{children}</StyledContent>
}

export default Content;

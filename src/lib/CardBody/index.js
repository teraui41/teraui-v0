import React from 'react';
import styled from 'styled-jss';

const StyledCardBody = styled('div')(({ theme }) => ({
    padding: `${theme.getSpacing(2)}px ${theme.getSpacing(4)}px`,
}));

const CardBody = ({ children, ...props }) => {
    return (
        <StyledCardBody {...props}>
           {children}
        </StyledCardBody>
    )
}

export default CardBody;

import React from 'react';
import styled from 'styled-jss';

const StyledCardFooter = styled('div')(({ theme }) => ({
    borderTop: `1px solid ${theme.colors.grey1}`,
    padding: `${theme.getSpacing(2)}px ${theme.getSpacing(4)}px`,
}));

const CardFooter = ({ children, ...props }) => {
    return (
        <StyledCardFooter {...props}>
            {children}
        </StyledCardFooter>
    )
}

export default CardFooter;

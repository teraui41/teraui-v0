import React from 'react';
import styled from 'styled-jss';

const StyledTableHead = styled('thead')(({ theme, style }) => ({
    borderBottom: `1px solid ${theme.colors.grey1}`,
    ...style
}));

const TableHead = ({ children, ...props}) => {
    return (<StyledTableHead {...props}>
        {children}
    </StyledTableHead>)
}

export default TableHead;

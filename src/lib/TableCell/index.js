import React from 'react';
import styled from 'styled-jss';

const StyledTableCell = styled('td')(({ theme, style }) => ({
    padding: `${theme.getSpacing(2)}px ${theme.getSpacing(4)}px`,
    ...style,
}));

const TableCell = ({ children, ...props}) => {
    return (<StyledTableCell {...props}>
        {children}
    </StyledTableCell>)
}

export default TableCell;

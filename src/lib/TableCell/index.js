import React from 'react';
import styled from 'styled-jss';

const StyledTableCell = styled('td')({
    ...({ style}) => style
});

const TableCell = ({ children, ...props}) => {
    return (<StyledTableCell {...props}>
        {children}
    </StyledTableCell>)
}

export default TableCell;

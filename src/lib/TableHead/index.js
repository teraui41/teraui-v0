import React from 'react';
import styled from 'styled-jss';

const StyledTableHead = styled('thead')({
    ...({ style}) => style
});

const TableHead = ({ children, ...props}) => {
    return (<StyledTableHead {...props}>
        {children}
    </StyledTableHead>)
}

export default TableHead;

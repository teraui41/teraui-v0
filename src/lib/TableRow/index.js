import React from 'react';
import styled from 'styled-jss';

const StyledTableRow = styled('tr')({
    ...({ style}) => style
});

const TableRow = ({ children, ...props}) => {
    return (<StyledTableRow {...props}>
        {children}
    </StyledTableRow>)
}

export default TableRow;

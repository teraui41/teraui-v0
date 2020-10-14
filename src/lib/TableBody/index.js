import React from 'react';
import styled from 'styled-jss';

const StyledTableBody = styled('tbody')({
    width: '100%',
    ...({ style}) => style
});

const TableBody = ({ children, ...props}) => {
    return (<StyledTableBody {...props}>
        {children}
    </StyledTableBody>)
}

export default TableBody;

import React from 'react';
import styled from 'styled-jss';

const StyledTableFoot = styled('tfoot')({
    ...({ style}) => style
});

const TableFoot = ({ children, ...props}) => {
    return (<StyledTableFoot {...props}>
        {children}
    </StyledTableFoot>)
}

export default TableFoot;

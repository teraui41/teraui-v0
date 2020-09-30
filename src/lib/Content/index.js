import React from 'react'
import styled from 'styled-jss'

const StyledContent = styled('main')({

});

const Content = ({ children, ...props }) => {
return <StyledContent>{children}</StyledContent>
}

export default Content;

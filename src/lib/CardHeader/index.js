import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-jss';

const StyledCardHeader = styled('div')({
    padding: ({theme}) => `${theme.getSpacing(2)}px ${theme.getSpacing(4)}px`,
    borderBottom: ({theme}) => `1px solid ${theme.colors.grey1}`,
    '& > h1, & > p': {
        margin: 0
    }
});

const Card = ({ title, subtitle, ...props }) => {
    return (
        <StyledCardHeader {...props}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </StyledCardHeader>
    )
}

Card.propTypes = {
    title: propTypes.string,
    subtitle: propTypes.string,
}

Card.defaultProps = {
    title: '',
    subtitle: '',
}

export default Card;

import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-jss';

const StyledSwitch = styled('input')({
    opacity: 0,
    width: 0,
    height: 0,
});

const StyledSwitchContainer = styled('label')({
    width: 40,
    height: 20,
    borderRadius: 40,
    display: 'block',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background-color .2s ease',
    backgroundColor: ({ theme: { colors }, active }) => active ? colors.grey1 : colors.primary
})

const StyledIndicator = styled('span')({
    width: 16,
    height: 16,
    marginTop: 2,
    borderRadius: 20,
    display: 'inline-block',
    transition: 'margin-left .2s ease',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.7)',
    marginLeft: ({ active }) => active ? 22 : 2,
    backgroundColor: ({ theme }) => theme.colors.white,
});

const onSwitchClick = ({ active, onClick, setActive }) => e => {
    setActive(!active);
    onClick(e);
}

const Switch = ({ onClick, ...props }) => {
    const [active, setActive] = useState(false)
    const handleOnClick = onSwitchClick({ active, onClick, setActive });

    return (<StyledSwitchContainer active={active}  >
        <StyledIndicator active={active} />
        <StyledSwitch {...props} type='checkbox' value={active} onClick={handleOnClick} />
    </StyledSwitchContainer>)
};

Switch.propTypes = {
    onClick: propTypes.func
}

Switch.defaultProps = {
    onClick: () => false
}

export default Switch;

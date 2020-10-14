import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-jss';
import Card from '../Card';
import Button from '../Button';
import CardBody from '../CardBody';
import CardHeader from '../CardHeader';
import CardFooter from '../CardFooter';

const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

const StyledMask = styled('div')({
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1000,
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
});

const StyledDialog = styled('div')({
    position: 'relative'
});

const Dialog = ({ open, title, subtitle, children, cancelText, confirmText, onConfirm, onCancel, ...props }) => {

    if (!open) return <Fragment />;

    return (
        <StyledMask>
            <StyledDialog>
                <Card>
                    <CardHeader title={title} subtitle={subtitle} />
                    <CardBody>
                        {children}
                    </CardBody>
                    <CardFooter style={footerStyle}>
                        <Button type='text' onClick={onCancel}>{cancelText}</Button>
                        <Button type='filled' onClick={onConfirm}>{confirmText}</Button>
                    </CardFooter>
                </Card>
            </StyledDialog>
        </StyledMask>
    )
}

Dialog.propTypes = {
    open: propTypes.bool,
    title: propTypes.string,
    subtitle: propTypes.string,
    confirmText: propTypes.string,
    cancelText: propTypes.string,
    onConfirm: propTypes.func,
    onCancel: propTypes.func,
    onEnter: propTypes.func,
    onExited: propTypes.func,
}

Dialog.defaultProps = {
    open: true,
    title: '',
    subtitle: '',
    confirmText: '確認',
    cancelText: '取消',
    onConfirm: () => false,
    onCancel: () => false,
    onEnter: () => false,
    onExited: () => false,
}

export default Dialog;

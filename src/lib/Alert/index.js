import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-jss';
import Card from '../Card';
import Icon from '../Icon';
import Button from '../Button';
import CardBody from '../CardBody';
import CardHeader from '../CardHeader';
import CardFooter from '../CardFooter';

const ICON_MAP = {
  info: "fa-info-circle",
  success: "fa-check-circle",
  warning: "fa-exclamation-circle",
  danger: "fa-exclamation-triangle",
};

const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

const getIconColor = (theme) => ({
  info: theme.colors.info,
  success: theme.colors.success,
  danger: theme.colors.danger,
  warning: theme.colors.warning,
});

const StyledIcon = styled(Icon)(({ theme, type }) => ({
  fontSize: 60,
  display: 'block',
  textAlign: 'center',
  marginBottom: theme.getSpacing(1),
  color: getIconColor(theme)[type],
}));

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

const Alert = ({ open, title, subtitle, type, children, cancelText, confirmText, onConfirm, onCancel, ...props }) => {

    if (!open) return <Fragment />;

    return (
        <StyledMask>
            <StyledDialog>
                <Card>
                    <CardBody>
                        <StyledIcon type={type} icon={ICON_MAP[type]} />
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

Alert.propTypes = {
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

Alert.defaultProps = {
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

export default Alert;

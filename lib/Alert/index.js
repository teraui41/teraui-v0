"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _Card = _interopRequireDefault(require("../Card"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Button = _interopRequireDefault(require("../Button"));

var _CardBody = _interopRequireDefault(require("../CardBody"));

var _CardFooter = _interopRequireDefault(require("../CardFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ICON_MAP = {
  info: "fa-info-circle",
  success: "fa-check-circle",
  warning: "fa-exclamation-circle",
  danger: "fa-exclamation-triangle"
};
var footerStyle = {
  display: 'flex',
  justifyContent: 'space-between'
};

var getIconColor = function getIconColor(theme) {
  return {
    info: theme.colors.info,
    success: theme.colors.success,
    danger: theme.colors.danger,
    warning: theme.colors.warning
  };
};

var StyledIcon = (0, _styledJss.default)(_Icon.default)(function (_ref) {
  var theme = _ref.theme,
      type = _ref.type;
  return {
    fontSize: 60,
    display: 'block',
    textAlign: 'center',
    marginBottom: theme.getSpacing(1),
    color: getIconColor(theme)[type]
  };
});
var StyledMask = (0, _styledJss.default)('div')({
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
var StyledDialog = (0, _styledJss.default)('div')({
  position: 'relative'
});

var Alert = function Alert(_ref2) {
  var open = _ref2.open,
      title = _ref2.title,
      subtitle = _ref2.subtitle,
      type = _ref2.type,
      children = _ref2.children,
      cancelText = _ref2.cancelText,
      confirmText = _ref2.confirmText,
      onConfirm = _ref2.onConfirm,
      onCancel = _ref2.onCancel,
      props = _objectWithoutProperties(_ref2, ["open", "title", "subtitle", "type", "children", "cancelText", "confirmText", "onConfirm", "onCancel"]);

  if (!open) return /*#__PURE__*/_react.default.createElement(_react.Fragment, null);
  return /*#__PURE__*/_react.default.createElement(StyledMask, null, /*#__PURE__*/_react.default.createElement(StyledDialog, null, /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement(StyledIcon, {
    type: type,
    icon: ICON_MAP[type]
  }), children), /*#__PURE__*/_react.default.createElement(_CardFooter.default, {
    style: footerStyle
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "text",
    onClick: onCancel
  }, cancelText), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "filled",
    onClick: onConfirm
  }, confirmText)))));
};

Alert.propTypes = {
  open: _propTypes.default.bool,
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  confirmText: _propTypes.default.string,
  cancelText: _propTypes.default.string,
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  onEnter: _propTypes.default.func,
  onExited: _propTypes.default.func
};
Alert.defaultProps = {
  open: true,
  title: '',
  subtitle: '',
  confirmText: '確認',
  cancelText: '取消',
  onConfirm: function onConfirm() {
    return false;
  },
  onCancel: function onCancel() {
    return false;
  },
  onEnter: function onEnter() {
    return false;
  },
  onExited: function onExited() {
    return false;
  }
};
var _default = Alert;
exports.default = _default;
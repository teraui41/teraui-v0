"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Typography = _interopRequireDefault(require("../Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICON_MAP = {
  info: "fa-info-circle",
  success: "fa-check-circle",
  warning: "fa-exclamation-circle",
  danger: "fa-exclamation-triangle"
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
    marginRight: theme.getSpacing(1),
    color: getIconColor(theme)[type]
  };
});
var StyledMessageContainer = (0, _styledJss.default)("div")({
  justifyContent: "center",
  position: "fixed",
  display: "flex",
  width: "100vw",
  left: 0,
  top: 0
});

var activeStyle = function activeStyle(active) {
  return active ? {
    top: 20,
    opacity: 1
  } : {};
};

var StyledMessage = (0, _styledJss.default)("span")(function (_ref2) {
  var theme = _ref2.theme,
      active = _ref2.active;
  return _objectSpread({
    top: 0,
    opacity: 0,
    zIndex: 1000,
    minWidth: 300,
    margin: "auto",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    transition: 'all .3s ease',
    justifyContent: "flex-star",
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.17)",
    borderRadius: theme.radius,
    backgroundColor: theme.colors.white,
    border: "1px solid ".concat(theme.colors.grey1),
    padding: "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px")
  }, activeStyle(active));
});

var Message = function Message(_ref3) {
  var open = _ref3.open,
      type = _ref3.type,
      content = _ref3.content,
      onClose = _ref3.onClose,
      duration = _ref3.duration,
      props = _objectWithoutProperties(_ref3, ["open", "type", "content", "onClose", "duration"]);

  var handleOnClose = (0, _react.useCallback)(function () {
    if (open) {
      setTimeout(function () {
        onClose();
      }, duration);
    }
  }, [open, duration, onClose]);
  (0, _react.useEffect)(function () {
    handleOnClose();
  }, [handleOnClose]);
  return /*#__PURE__*/_react.default.createElement(StyledMessageContainer, null, /*#__PURE__*/_react.default.createElement(StyledMessage, _extends({}, props, {
    active: open
  }), /*#__PURE__*/_react.default.createElement(StyledIcon, {
    type: type,
    icon: ICON_MAP[type]
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, null, content)));
};

Message.propTypes = {
  open: _propTypes.default.bool,
  content: _propTypes.default.string,
  duration: _propTypes.default.number,
  type: _propTypes.default.oneOf(["info", "success", "danger", "warning"])
};
Message.defaultProps = {
  open: false,
  content: "",
  type: "info",
  duration: 2500
};
var _default = Message;
exports.default = _default;
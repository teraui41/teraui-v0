"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 基本樣式
var basicStyle = function basicStyle(theme) {
  return {
    border: 'none',
    outline: 'none',
    borderRadius: theme.radius,
    paddingTop: theme.getSpacing(1),
    paddingLeft: theme.getSpacing(2),
    paddingRight: theme.getSpacing(2),
    paddingBottom: theme.getSpacing(1)
  };
};

var textStyle = function textStyle(theme) {
  return {
    color: theme.colors.primary,
    backgroundColor: theme.colors.transparent
  };
};

var filledStyle = function filledStyle(theme) {
  return {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary
  };
};

var outlineStyle = function outlineStyle(theme) {
  return {
    color: theme.colors.primary,
    border: "1px solid ".concat(theme.colors.primary),
    backgroundColor: theme.colors.transparent
  };
};

var switchTheme = function switchTheme(theme, type) {
  switch (type) {
    case 'outline':
      return outlineStyle(theme);

    case 'text':
      return textStyle(theme);

    case 'filled':
    default:
      return filledStyle(theme);
  }
};

var StyledButton = (0, _styledJss.default)('button')(function (_ref) {
  var theme = _ref.theme,
      type = _ref.type,
      style = _ref.style;
  return _objectSpread(_objectSpread(_objectSpread({}, basicStyle(theme)), switchTheme(theme, type)), style);
});

var Button = function Button(props) {
  return /*#__PURE__*/_react.default.createElement(StyledButton, props);
};

Button.propTypes = {
  /**
   * Click event
   */
  onClick: _propTypes.default.func,

  /**
   * Styling object
   */
  style: _propTypes.default.object,

  /**
   * Style type
   */
  type: _propTypes.default.oneOf(['filled', 'outline', 'text'])
};
Button.defaultProps = {
  type: 'filled',
  style: {},
  onClick: function onClick() {
    return false;
  }
};
var _default = Button;
exports.default = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _FromLabel = _interopRequireDefault(require("../FromLabel"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _ErrorMessage = _interopRequireDefault(require("../ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledInput = (0, _styledJss.default)("input")({
  flex: 1,
  outline: "none",
  borderRadius: function borderRadius(_ref) {
    var theme = _ref.theme;
    return theme.radius;
  },
  fontSize: function fontSize(_ref2) {
    var theme = _ref2.theme;
    return theme.typography.content.fontSize;
  },
  padding: function padding(_ref3) {
    var theme = _ref3.theme;
    return "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px");
  },
  border: function border(_ref4) {
    var theme = _ref4.theme,
        errorMessage = _ref4.errorMessage;
    return "1px solid ".concat((0, _isEmpty.default)(errorMessage) ? theme.colors.grey1 : theme.colors.danger);
  },
  "&:active, &:focus": {
    border: function border(_ref5) {
      var theme = _ref5.theme;
      return "1px solid ".concat(theme.colors.primary);
    }
  },
  color: function color(_ref6) {
    var theme = _ref6.theme,
        disabled = _ref6.disabled;
    return disabled ? theme.colors.grey2 : theme.colors.black;
  },
  backgroundColor: function backgroundColor(_ref7) {
    var theme = _ref7.theme,
        disabled = _ref7.disabled;
    return disabled ? theme.colors.grey0 : theme.colors.white;
  }
});

var Input = function Input(_ref8) {
  var label = _ref8.label,
      value = _ref8.value,
      required = _ref8.required,
      onChange = _ref8.onChange,
      errorMessage = _ref8.errorMessage,
      props = _objectWithoutProperties(_ref8, ["label", "value", "required", "onChange", "errorMessage"]);

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, /*#__PURE__*/_react.default.createElement(_FromLabel.default, {
    required: required
  }, label), /*#__PURE__*/_react.default.createElement(StyledInput, _extends({
    value: value,
    onChange: onChange,
    errorMessage: errorMessage
  }, props))), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, {
    errorMessage: errorMessage
  }, errorMessage));
};

Input.propTypes = {
  label: _propTypes.default.string,
  onChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.instanceOf(Date)])
};
Input.defaultProps = {
  label: "",
  value: "",
  required: false,
  errorMessage: "",
  onChange: function onChange() {
    return false;
  }
};
var _default = Input;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledJss = require("styled-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_styledJss.ThemeProvider, {
    theme: theme
  }, children);
};

var _default = ThemeProvider;
exports.default = _default;
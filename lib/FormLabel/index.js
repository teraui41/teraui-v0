"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _breakpoint = _interopRequireDefault(require("../constant/breakpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormLabel = (0, _styledJss.default)("label")(_defineProperty({
  display: function display(_ref) {
    var children = _ref.children;
    return (0, _isEmpty.default)(children) ? 'none' : 'initial';
  },
  minWidth: 80,
  position: "relative",
  color: function color(_ref2) {
    var theme = _ref2.theme;
    return theme.colors.grey4;
  },
  padding: function padding(_ref3) {
    var theme = _ref3.theme;
    return "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(1), "px");
  },
  "&::after": {
    position: "absolute",
    content: function content(_ref4) {
      var required = _ref4.required;
      return required ? '"*"' : '""';
    },
    color: function color(_ref5) {
      var theme = _ref5.theme;
      return theme.colors.danger;
    },
    marginLeft: 2
  }
}, _breakpoint.default.mediaLG, {
  padding: function padding(_ref6) {
    var theme = _ref6.theme;
    return "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px");
  },
  "&::after": {
    left: 2
  }
}));
var _default = FormLabel;
exports.default = _default;